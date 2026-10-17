#!/usr/bin/env python3
# generate-theory.py —— 从 content/theory-outline.md 生成 src/data/theory.ts；
#                     并从 content/guides/*.md 生成 src/data/guides.ts（学习点指引 + 篇章学习路线）
# 思路改编自 S2AI 的 scripts/generate-theory.py（MIT，见 THIRD_PARTY_NOTICES.md）：
# 手写源是 Markdown，theory.ts 是生成物（头部带“勿手改”声明）。done 恒为 false——个人进度不进公共数据。
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'content' / 'theory-outline.md'
OUT = ROOT / 'src' / 'data' / 'theory.ts'

chapters, chap, mod = [], None, None
for raw in SRC.read_text(encoding='utf-8').splitlines():
    line = raw.rstrip()
    m = re.match(r'^## (\d{2}) \| (.+?) \| (★+) \| (.+?) \| (.+)$', line)
    if m:
        chap = {'id': m.group(1), 'name': m.group(2).strip(), 'weight': len(m.group(3)),
                'summary': m.group(4).strip(), 'p0': m.group(5).strip(), 'modules': []}
        chapters.append(chap)
        mod = None
        continue
    m = re.match(r'^### (M\d+) (.+)$', line)
    if m and chap:
        mod = {'name': f'{m.group(1)} {m.group(2).strip()}', 'points': []}
        chap['modules'].append(mod)
        continue
    m = re.match(r'^- (\d+\.\d+) (.+?) \| (★+)$', line)
    if m and mod:
        mod['points'].append({'id': 'M' + m.group(1), 'name': m.group(2).strip(), 'freq': len(m.group(3))})

def esc(s):
    return s.replace('\\', '\\\\').replace("'", "\\'")

L = ['// 自动生成自 content/theory-outline.md —— 请勿手改，跑 scripts/generate-theory.py 重新生成',
     'export interface TheoryPoint { id: string; name: string; freq: number; done: boolean }',
     'export interface TheoryModule { name: string; points: TheoryPoint[] }',
     'export interface TheoryChapter {',
     '  id: string; name: string; weight: number; summary: string; p0: string',
     '  modules: TheoryModule[]', '}', '',
     'export const THEORY_CHAPTERS: TheoryChapter[] = [']
for ch in chapters:
    L.append(f"  {{ id: '{ch['id']}', name: '{esc(ch['name'])}', weight: {ch['weight']},")
    L.append(f"    summary: '{esc(ch['summary'])}', p0: '{esc(ch['p0'])}', modules: [")
    for mo in ch['modules']:
        L.append(f"      {{ name: '{esc(mo['name'])}', points: [")
        for p in mo['points']:
            L.append(f"        {{ id: '{p['id']}', name: '{esc(p['name'])}', freq: {p['freq']}, done: false }},")
        L.append('      ]},')
    L.append('    ]},')
L += [']', '']
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text('\n'.join(L), encoding='utf-8')
n_pts = sum(len(m['points']) for c in chapters for m in c['modules'])
print(f'生成 {OUT.relative_to(ROOT)}：篇章 {len(chapters)} ｜ 模块 {sum(len(c["modules"]) for c in chapters)} ｜ 学习点 {n_pts}')
for c in chapters:
    print(f"  {c['id']} {c['name']}: {len(c['modules'])} 模块 / {sum(len(m['points']) for m in c['modules'])} 点")


# ---------- 学习点指引：content/guides/<篇章id>.md → src/data/guides.ts ----------
import json  # noqa: E402

GUIDE_DIR = ROOT / 'content' / 'guides'
GUIDE_OUT = ROOT / 'src' / 'data' / 'guides.ts'
guides, routes = {}, {}
for gf in sorted(GUIDE_DIR.glob('[0-9][0-9].md')):
    cid = gf.stem
    cur, field = None, None
    for raw in gf.read_text(encoding='utf-8').splitlines():
        line = raw.rstrip()
        m = re.match(r'^route:\s*(.+)$', line)
        if m and cur is None:
            routes[cid] = [f'{cid}-M{x.strip()}' for x in m.group(1).split(',') if x.strip()]
            continue
        m = re.match(r'^## (\d+\.\d+)\s*$', line)
        if m:
            cur = guides.setdefault(f'{cid}-M{m.group(1)}', {'what': '', 'ask': [], 'read': []})
            field = None
            continue
        if cur is None:
            continue
        m = re.match(r'^what:\s*(.+)$', line)
        if m:
            cur['what'], field = m.group(1).strip(), None
            continue
        if line in ('ask:', 'read:'):
            field = line[:-1]
            continue
        m = re.match(r'^- (.+)$', line)
        if m and field == 'ask':
            cur['ask'].append(m.group(1).strip())
        elif m and field == 'read':
            title, _, url = m.group(1).rpartition(' | ')
            cur['read'].append({'title': title.strip(), 'url': url.strip()})

G = ['// 自动生成自 content/guides/*.md —— 请勿手改，跑 scripts/generate-theory.py 重新生成',
     '// 学习点指引：what = 一句话核心概念；ask = 学完应能回答的自检问题；read = 一手入门资源',
     'export interface GuideRead { title: string; url: string }',
     'export interface PointGuide { what: string; ask: string[]; read: GuideRead[] }',
     '',
     'export const GUIDES: Record<string, PointGuide> = ' + json.dumps(guides, ensure_ascii=False),
     '',
     '// 篇章学习路线：按推荐顺序排列的学习点编号',
     'export const ROUTES: Record<string, string[]> = ' + json.dumps(routes, ensure_ascii=False),
     '']
GUIDE_OUT.write_text('\n'.join(G), encoding='utf-8')
print(f'生成 {GUIDE_OUT.relative_to(ROOT)}：学习点指引 {len(guides)} 条 ｜ 学习路线 {len(routes)} 条（{", ".join(routes)}）')
