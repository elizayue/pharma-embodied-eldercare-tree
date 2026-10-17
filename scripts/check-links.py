#!/usr/bin/env python3
# check-links.py —— 联网校验学习点指引（guides）里的 read 链接是否可访问（需要网络；check-tree.py 不联网）
# DOI 链接经 Crossref API 核对存在并打印标题，其余链接检查 HTTP 状态码。用法：python scripts/check-links.py
import json
import sys
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from tree_data import parse_guides  # noqa: E402

UA = {'User-Agent': 'Mozilla/5.0 (link-check)'}
urls = sorted({r['url'] for g in parse_guides()[0].values() for r in g['read']})
bad = 0
for u in urls:
    try:
        if u.startswith('https://doi.org/'):
            req = urllib.request.Request('https://api.crossref.org/works/' + u[len('https://doi.org/'):], headers=UA)
            title = json.load(urllib.request.urlopen(req, timeout=30))['message']['title'][0]
            print(f'✓ {u}  ← {title[:70]}')
        else:
            code = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30).status
            print(f'{"✓" if code < 400 else "✗"} {u}  [{code}]')
            bad += code >= 400
    except Exception as e:  # noqa: BLE001
        bad += 1
        print(f'✗ {u}  ({e})')
print(f'\n共 {len(urls)} 个链接，失败 {bad} 个')
sys.exit(1 if bad else 0)
