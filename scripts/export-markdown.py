#!/usr/bin/env python3
# export-markdown.py —— 把学习树导出为 Markdown 大纲 tree.md（GitHub 上可直接阅读）
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from tree_data import tree as build_tree  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
T = build_tree()
DOMAIN = {'00': '公共基础', '01': '药学', '06': '具身智能', '12': '养老', '16': '交叉应用'}
stars = lambda n: '★' * n

leaves_by_point, leaves_by_chap = {}, {}
for l in T['leaves']:
    keys = {l['anchor']} | {t for t in l['tags'] if '-M' in t}
    for k in keys:
        leaves_by_point.setdefault(k, []).append(l)
cards_by_point = {}
for c in T['cards']:
    cards_by_point.setdefault(c['target'], []).append(c)

pts = sum(len(m['points']) for c in T['chapters'] for m in c['modules'])
L = ['# 药学 × 具身智能 × 养老 · 学习树（Markdown 大纲）', '',
     f'> 自动生成于 {T["generated"]}，由 `python scripts/export-markdown.py` 从 `src/data/*.ts` 导出，请勿手改。',
     f'> 规模：{len(T["chapters"])} 篇章 · {sum(len(c["modules"]) for c in T["chapters"])} 模块 · {pts} 学习点 · '
     f'{len(T["leaves"])} 叶子 · {len(T["cards"])} 学习卡片 · {len(T["inbox"])} 收集箱条目。',
     '> 星级 = 推荐学习 / 深入程度（★ 了解 · ★★ 掌握 · ★★★ 重点深入）。🍃 = 叶子（项目 / 工具 / 练习），🃏 = 学习卡片。',
     '> 可交互版（勾选进度、个人笔记、搜索、互相跳转）：直接用浏览器打开 `index.html`。', '',
     '## 从哪开始', '']
for s in T['starters']:
    L.append(f'- **{s["who"]}**：{s["desc"]}')
    for i, x in enumerate(s['steps'], 1):
        L.append(f'  {i}. {x}')
L += ['', '## 理论地图', '']
for ch in T['chapters']:
    if ch['id'] in DOMAIN:
        L += [f'### 〔{DOMAIN[ch["id"]]}〕', '']
    L.append(f'#### {ch["id"]} · {ch["name"]} {stars(ch["weight"])}')
    L += ['', f'> {ch["summary"]}', f'> 优先学习配方：{ch["p0"]}', '']
    for mo in ch['modules']:
        L.append(f'- **{mo["name"]}**')
        for pt in mo['points']:
            key = f'{ch["id"]}-{pt["id"]}'
            extra = ''
            ls = leaves_by_point.get(key, [])
            cs = cards_by_point.get(key, [])
            if ls:
                extra += ' 🍃 ' + '、'.join(f'[{l["name"]}]({l["url"]})' if l['url'] else f'{l["name"]}（练习）' for l in ls)
            if cs:
                extra += ' 🃏 ' + '、'.join(f'[{c["name"]}]({c["url"]})' for c in cs)
            L.append(f'  - `{key}` {pt["name"]} {stars(pt["freq"])}{extra}')
    L.append('')
L += ['## 叶子清单', '']
groups = {}
for l in T['leaves']:
    k = l['anchor'] if l['anchor'] in ('root', 'wild') else l['anchor'].split('-')[0]
    groups.setdefault(k, []).append(l)
names = {c['id']: c['name'] for c in T['chapters']}
for k in ['root'] + [c['id'] for c in T['chapters']] + ['wild']:
    if k not in groups:
        continue
    L += [f'### {"树根 · 通用工具" if k == "root" else ("野生叶子" if k == "wild" else k + " · " + names[k])}', '']
    for l in groups[k]:
        nm = f'[{l["name"]}]({l["url"]})' if l['url'] else f'{l["name"]}（练习）'
        L.append(f'- [ ] {nm} — {l["intro"]}  `{l["anchor"]}`')
    L.append('')
L += ['## 学习卡片', '', '| 卡片 | 挂载点 | 关键词 | 接下来 | 年月 |', '| --- | --- | --- | --- | --- |']
for c in T['cards']:
    L.append(f'| [{c["name"]}]({c["url"]}) | `{c["target"]}` | {" · ".join(c["tags"])} | {", ".join("`" + n + "`" for n in c["next"])} | {c["date"] or "—"} |')
L += ['', '## 收集箱', '']
for it in T['inbox']:
    L.append(f'- **[{it["name"]}]({it["url"]})**（{it["cat"]} · {it["level"]}）：{it["intro"]} 为什么收：{it["why"]} 怎么下潜：{it["dive"]}'
             + (f' 新概念：{it["concept"]}' if it['concept'] else ''))
L.append('')
(ROOT / 'tree.md').write_text('\n'.join(L), encoding='utf-8')
print(f'Markdown 大纲已导出：tree.md（{len(L)} 行）')
