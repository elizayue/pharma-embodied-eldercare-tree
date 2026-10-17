#!/usr/bin/env python3
# check-tree.py —— 学习树完整性校验
# 改编自 S2AI scripts/check-tree.py（MIT License, Copyright (c) 2026 cxy），见 THIRD_PARTY_NOTICES.md
# 校验内容：叶子 id 唯一、anchor 挂得上树（树根/枝干/枝节/野生）、叶子标签里的理论点编号可解析、
#           卡片 id 唯一、target/next 无断链、收集箱 cat 挂得上模块、毕业条目挂回树上（卡片或叶子）；
#           另加：叶子 id 唯一、卡片 tags 3–5 个、theory.ts 与 content/theory-outline.md 同步、公共数据不含个人进度。
# 用法：在仓库根目录跑  python scripts/check-tree.py
# 退出码：0 = 树完好；1 = 有断链（打印在 stdout，逐条列出）
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'src' / 'data'

errors = []


def slice_export(text: str, name: str) -> str:
    start = text.find(f'export const {name}')
    if start == -1:
        errors.append(f'找不到 export const {name}')
        return ''
    end = text.find('\n];', start)
    return text[start:end if end != -1 else len(text)]


# ---------- 1. 理论地图：篇章 / 模块 / 学习点 ----------
theory_text = (DATA / 'theory.ts').read_text(encoding='utf-8')
point_ids, module_ids, chapter_ids = set(), set(), set()
chap = mod = None
for line in theory_text.splitlines():
    m = re.match(r"\s*\{ id: '(\d+)', name: ", line)
    if m:
        chap, mod = m.group(1), None
        chapter_ids.add(chap)
        continue
    m = re.search(r"name: '(M\d+)[^']*', points:", line)
    if m and chap:
        mod = m.group(1)
        module_ids.add(f'{chap}-{mod}')
        continue
    m = re.search(r"\{ id: '(M\d+\.\d+)'", line)
    if m and chap:
        point_ids.add(f'{chap}-{m.group(1)}')

# ---------- 2. 叶子清单：id 唯一 / anchor 挂得上树 / 标签可解析 ----------
leaves_text = (DATA / 'leaves.ts').read_text(encoding='utf-8')
leaves_slice = slice_export(leaves_text, 'LEAVES')
leaf_ids = []
leaf_rows = []  # (id, url, anchor, tags, practice)
for block in leaves_slice.split('\n  {'):
    lid = re.search(r"id: '([^']+)'", block)
    if not lid:
        continue
    lid = lid.group(1)
    leaf_ids.append(lid)
    url = re.search(r"url: '([^']*)'", block)
    anchor = re.search(r"anchor: '([^']+)'", block)
    tags = re.findall(r"'(\d{2}-M\d+\.\d+)'", block)
    leaf_rows.append((lid, url.group(1) if url else '', anchor.group(1) if anchor else '', tags, 'practice: true' in block))

# 私有树（content.local.ts 存在时）的 EXTRA_LEAVES 也是合法叶子——
# 公开克隆里没有该文件，跳过即可；私有化后卡片会挂到自己的叶子上
local_file = DATA / 'content.local.ts'
if local_file.exists():
    local_text = local_file.read_text(encoding='utf-8')
    local_slice = slice_export(local_text, 'EXTRA_LEAVES')
    leaf_ids.extend(re.findall(r"id: '([^']+)'", local_slice))

for lid, url, anchor, tags, practice in leaf_rows:
    if anchor in ('root', 'wild'):
        pass
    elif anchor in chapter_ids:
        pass
    elif anchor in point_ids:
        pass
    else:
        errors.append(f'叶子 {lid} 的 anchor 挂不上树：{anchor!r}（应为 root/wild/篇章 id/理论点编号）')
    for t in tags:
        if t not in point_ids:
            errors.append(f'叶子 {lid} 的标签断链：{t} 不是理论地图里的学习点')
    if practice and url:
        errors.append(f'叶子 {lid} 是练习项但带了链接：{url}')
    if not practice and not url:
        errors.append(f'叶子 {lid} 不是练习项但缺少项目链接')

# ---------- 3. 收集箱：url / cat / graduated ----------
inbox_text = (DATA / 'inbox.ts').read_text(encoding='utf-8')
inbox_slice = slice_export(inbox_text, 'INBOX')
inbox_urls, graduated_urls = set(), set()
for block in inbox_slice.split('\n  {'):
    url = re.search(r"url: '(https?://[^']+)'", block)
    cat = re.search(r"cat: '([^']+)'", block)
    if url:
        inbox_urls.add(url.group(1))
    if url and 'graduated:' in block:
        graduated_urls.add(url.group(1))
    if cat:
        mod_part = cat.group(1).split('·')[-1].strip()
        # 野生枝节：已进树但树还没长出对应位置，合法暂存
        if '野生' in mod_part:
            continue
        if mod_part not in module_ids and mod_part not in point_ids:
            errors.append(f'收集箱 cat 挂不上模块：{cat.group(1)!r}（{url.group(1) if url else "?"}）')

# ---------- 4. 学习卡片：id 唯一 / target / next ----------
cards_text = (DATA / 'cards.ts').read_text(encoding='utf-8')
cards_slice = slice_export(cards_text, 'CARDS')
card_ids, card_targets, card_nexts = [], {}, {}
for block in cards_slice.split('\n  {'):
    cid = re.search(r"id: '([^']+)'", block)
    if not cid:
        continue
    cid = cid.group(1)
    card_ids.append(cid)
    target = re.search(r"target: '([^']+)'", block)
    card_targets[cid] = target.group(1) if target else None
    nxt = re.search(r'next: \[([^\]]*)\]', block, re.S)
    card_nexts[cid] = re.findall(r"'([^']+)'", nxt.group(1)) if nxt else []

nodes = point_ids | set(leaf_ids) | inbox_urls | set(card_ids)

for cid in card_ids:
    if card_ids.count(cid) > 1:
        errors.append(f'卡片 id 重复：{cid}')
for cid, target in card_targets.items():
    if target and target not in nodes:
        errors.append(f'卡片 {cid} 的 target 断链：{target}')
for cid, nxt in card_nexts.items():
    for n in nxt:
        if n not in nodes:
            errors.append(f'卡片 {cid} 的 next 断链：{n}')

# ---------- 5. 毕业一致性：毕业的收集箱条目应挂回树上 ----------
# 协议允许两种毕业形态（AGENTS.md 任务手册 5）：需要卡片的写进 cards.ts；
# 纯项目不需要卡片，直接长成叶子进 leaves.ts。只认卡片会让「纯项目毕业」误报断链。
leaf_urls = {u for _, u, _, _, _ in leaf_rows if u}
card_target_set = set(card_targets.values())
for url in graduated_urls:
    if url not in card_target_set and url not in leaf_urls:
        errors.append(f'收集箱条目已毕业但没挂回树上：{url}'
                      '（应有卡片 target 指向它，或已在叶子清单里长成同 url 的叶子）')

# ---------- 6. 本项目附加校验 ----------
for lid in set(leaf_ids):
    if leaf_ids.count(lid) > 1:
        errors.append(f'叶子 id 重复：{lid}')
for block in cards_slice.split('\n  {'):
    cid = re.search(r"id: '([^']+)'", block)
    tg = re.search(r'tags: \[([^\]]*)\]', block, re.S)
    if cid:
        for fld, label in (('def', '是什么'), ('use', '怎么用')):
            fm = re.search(r'(?<![A-Za-z])' + fld + r": '((?:[^'\\]|\\.)*)'", block)
            if not fm or not fm.group(1).strip():
                errors.append(f'卡片 {cid.group(1)} 缺少 {fld}（{label}）')
            elif len(fm.group(1)) > 160:
                errors.append(f'卡片 {cid.group(1)} 的 {fld} 超过 160 字——卡片是索引卡，不是笔记')
    if cid and tg:
        n = len(re.findall(r"'[^']*'", tg.group(1)))
        if not 3 <= n <= 5:
            errors.append(f'卡片 {cid.group(1)} 的 tags 应为 3–5 个，现在 {n} 个')
# theory.ts 是生成物：源大纲比它新 → 提醒重跑生成脚本
src_outline = ROOT / 'content' / 'theory-outline.md'
if src_outline.exists() and src_outline.stat().st_mtime > (DATA / 'theory.ts').stat().st_mtime + 1:
    errors.append('content/theory-outline.md 比 src/data/theory.ts 新：请先跑 python scripts/generate-theory.py')
# 公共数据不得携带个人进度
if 'done: true' in theory_text:
    errors.append('theory.ts 含 done: true——个人进度应存放在浏览器 localStorage 或 progress/*.local.json，不进公共数据')

# ---------- 7. 学习点指引与学习路线（src/data/guides.ts） ----------
import json  # noqa: E402
guides_file = DATA / 'guides.ts'
if guides_file.exists():
    gtext = guides_file.read_text(encoding='utf-8')
    gm = re.search(r'^export const GUIDES[^=]*= (.*)$', gtext, re.M)
    rm = re.search(r'^export const ROUTES[^=]*= (.*)$', gtext, re.M)
    guides = json.loads(gm.group(1)) if gm else {}
    routes = json.loads(rm.group(1)) if rm else {}
    for key, g in guides.items():
        if key not in point_ids:
            errors.append(f'指引挂不上树：{key} 不是理论地图里的学习点')
        if not g.get('what'):
            errors.append(f'指引 {key} 缺少 what')
        if not 2 <= len(g.get('ask', [])) <= 3:
            errors.append(f'指引 {key} 的 ask 应为 2–3 个，现在 {len(g.get("ask", []))} 个')
        if not 1 <= len(g.get('read', [])) <= 2:
            errors.append(f'指引 {key} 的 read 应为 1–2 个，现在 {len(g.get("read", []))} 个')
        for r in g.get('read', []):
            if not re.match(r'^https?://', r.get('url', '')) or not r.get('title'):
                errors.append(f'指引 {key} 的 read 条目不完整：{r}')
    for cid, ids in routes.items():
        if cid not in chapter_ids:
            errors.append(f'学习路线挂不上篇章：{cid}')
        for pid in ids:
            if pid not in point_ids:
                errors.append(f'篇章 {cid} 学习路线断链：{pid}')
            elif not pid.startswith(cid + '-'):
                errors.append(f'篇章 {cid} 学习路线混入其他篇章的点：{pid}')
        if len(ids) != len(set(ids)):
            errors.append(f'篇章 {cid} 学习路线有重复学习点')
        missing = sorted(p for p in point_ids if p.startswith(cid + '-') and p not in ids)
        if missing:
            errors.append(f'篇章 {cid} 学习路线未覆盖：{", ".join(missing)}')
    guide_dir = ROOT / 'content' / 'guides'
    newest = max((f.stat().st_mtime for f in guide_dir.glob('*.md')), default=0)
    if newest > guides_file.stat().st_mtime + 1:
        errors.append('content/guides/*.md 比 src/data/guides.ts 新：请先跑 python scripts/generate-theory.py')
    print(f'指引 {len(guides)} 条 ｜ 学习路线 {len(routes)} 条')

# ---------- 结果 ----------
print(f'理论点 {len(point_ids)} ｜ 模块 {len(module_ids)} ｜ 枝干 {len(chapter_ids)} ｜ '
      f'叶子 {len(leaf_ids)} ｜ 收集箱 {len(inbox_urls)}（毕业 {len(graduated_urls)}）｜ 卡片 {len(card_ids)}')
if errors:
    print(f'\n✗ 发现 {len(errors)} 处断链：')
    for e in errors:
        print(f'  - {e}')
    sys.exit(1)
print('✓ 树完好，无断链')
