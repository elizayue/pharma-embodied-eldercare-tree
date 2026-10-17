#!/usr/bin/env python3
# check-links.py —— 联网校验链接是否可访问（需要网络；check-tree.py 不联网）
# DOI 链接经 Crossref API 核对存在并打印标题；其余链接检查 HTTP 状态码并打印网页标题，便于人工核对内容是否对得上。
# 用法：python scripts/check-links.py            # 只查学习点指引（guides）里的入门阅读
#       python scripts/check-links.py --all      # 另查叶子 / 卡片 / 收集箱的链接
#       python scripts/check-links.py --chapters 01,02   # 只查指定篇章的指引
import html
import shutil
import subprocess
import json
import re
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from tree_data import parse_cards, parse_guides, parse_inbox, parse_leaves  # noqa: E402

UA = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,*/*;q=0.8'}
args = sys.argv[1:]
chapters = set(args[args.index('--chapters') + 1].split(',')) if '--chapters' in args else None
urls = {r['url'] for k, g in parse_guides()[0].items() if not chapters or k.split('-')[0] in chapters for r in g['read']}
if '--all' in args:
    urls |= {l['url'] for l in parse_leaves() if l['url']} | {c['url'] for c in parse_cards()} | {i['url'] for i in parse_inbox()}


def check(u):
    try:
        if u.startswith('https://doi.org/'):
            req = urllib.request.Request('https://api.crossref.org/works/' + u[len('https://doi.org/'):], headers=UA)
            title = json.load(urllib.request.urlopen(req, timeout=40))['message']['title'][0]
            return True, f'✓ {u}  ← {re.sub(r"\s+", " ", html.unescape(title))[:80]}'
        resp = None
        for _ in range(2):  # 部分站点偶发超时：重试一次
            try:
                resp = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=40)
                break
            except Exception as e:  # noqa: BLE001
                if 'timed out' not in str(e):
                    raise
        if resp is None:
            raise TimeoutError('timed out twice')
        body = resp.read(200000).decode('utf-8', 'ignore')
        m = re.search(r'<title[^>]*>(.*?)</title>', body, re.S | re.I)
        t = html.unescape(re.sub(r'\s+', ' ', m.group(1))).strip()[:80] if m else ''
        return resp.status < 400, f'{"✓" if resp.status < 400 else "✗"} {u}  [{resp.status}] {t}'
    except Exception as e:  # noqa: BLE001
        # 个别站点（如部分 fda.gov 页面）对 urllib 超时但对 curl 正常：用 curl 再确认一次
        if shutil.which('curl') and not u.startswith('https://doi.org/'):
            r = subprocess.run(['curl', '-sL', '-m', '40', '-A', UA['User-Agent'], '-o', '-', '-w', '\n__CODE__%{http_code}', u],
                               capture_output=True, text=True, errors='ignore')
            code = r.stdout.rsplit('__CODE__', 1)[-1].strip()
            m = re.search(r'<title[^>]*>(.*?)</title>', r.stdout, re.S | re.I)
            t = html.unescape(re.sub(r'\s+', ' ', m.group(1))).strip()[:80] if m else ''
            if code.isdigit() and 200 <= int(code) < 400:
                return True, f'✓ {u}  [{code}, curl] {t}'
        return False, f'✗ {u}  ({e})'


with ThreadPoolExecutor(8) as ex:
    results = list(ex.map(check, sorted(urls)))
for _, line in results:
    print(line)
bad = sum(1 for ok, _ in results if not ok)
print(f'\n共 {len(urls)} 个链接，失败 {bad} 个')
if bad:
    print('提示：403 / 412 / 人机验证常是站点拦截脚本访问（如 DrugBank、NMPA、ZINC），请用浏览器人工确认后再决定是否替换。')
sys.exit(1 if bad else 0)
