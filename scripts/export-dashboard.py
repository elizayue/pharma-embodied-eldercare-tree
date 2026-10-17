#!/usr/bin/env python3
# export-dashboard.py —— 把学习树导出为自包含的单文件 HTML 看板（离线可用，无需 node / 服务器）
# 改编自 S2AI scripts/export-dashboard.py（MIT License, Copyright (c) 2026 cxy），见 THIRD_PARTY_NOTICES.md
# 用法:
#   python scripts/export-dashboard.py                 # 公共版：dashboard/tree.html + 根目录 index.html（不含任何个人数据）
#   python scripts/export-dashboard.py --out PATH      # 指定输出路径（只写这一个文件）
#   python scripts/export-dashboard.py --progress progress/personal.local.json
#       # 私有版：把个人进度内嵌为种子 → 默认输出 dashboard/tree.private.html（已被 .gitignore 排除）
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from tree_data import tree as build_tree  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
args = sys.argv[1:]


def arg(name):
    return args[args.index(name) + 1] if name in args else None


def js_json(obj) -> str:
    # 内嵌进 <script type="application/json">：转义 </ 防止提前闭合
    return json.dumps(obj, ensure_ascii=False).replace('</', '<\\/')


tree = build_tree()
progress_path = arg('--progress')
progress = None
if progress_path:
    progress = json.loads(Path(progress_path).read_text(encoding='utf-8'))

tpl = (ROOT / 'scripts' / 'dashboard-template.html').read_text(encoding='utf-8')
html = tpl.replace('__DATA__', js_json(tree)).replace('__PROGRESS__', js_json(progress))

if arg('--out'):
    outs = [Path(arg('--out'))]
elif progress is not None:
    outs = [ROOT / 'dashboard' / 'tree.private.html']
else:
    outs = [ROOT / 'dashboard' / 'tree.html', ROOT / 'index.html']
for out in outs:
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding='utf-8')
    print(f'看板已导出：{out.relative_to(ROOT) if out.is_relative_to(ROOT) else out}')
pts = sum(len(m['points']) for c in tree['chapters'] for m in c['modules'])
print(f'数据：{len(tree["chapters"])} 篇章 / {sum(len(c["modules"]) for c in tree["chapters"])} 模块 / {pts} 学习点 / '
      f'{len(tree["leaves"])} 叶子 / {len(tree["inbox"])} 收集箱 / {len(tree["cards"])} 卡片'
      + ('（含内嵌个人进度）' if progress is not None else '（公共版，不含个人数据）'))
