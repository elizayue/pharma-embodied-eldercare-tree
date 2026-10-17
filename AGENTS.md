# AGENTS.md —— 给 Agent 的仓库指南

> 约定沿用 S2AI 的思路（理论是树，项目是叶子），针对本项目做了简化：纯 Python + 单文件 HTML，没有前端构建。

## 黄金法则

1. 理论地图只改 `content/theory-outline.md`，然后跑 `python scripts/generate-theory.py`；**不要手改 `src/data/theory.ts`**。
2. 改完数据必须跑 `python scripts/check-tree.py`（零断链），再跑 `export-dashboard.py` 和 `export-markdown.py` 刷新产物。
3. **个人数据永不进 git**：进度与笔记只在浏览器 localStorage 或 `progress/*.local.json`；不要把 `done: true`、个人笔记写进 `src/data/`。
4. 不编造事实：论文年月、版本、参数拿不准就不写；法规类内容提示「以官方最新版为准」。
5. 提交信息用中文，一句话说清楚改了什么。

## 数据约定

- 学习点编号：`篇章id-M模块.序号`，如 `13-M2.1`。
- 叶子（`leaves.ts`）：`id` 用 `leaf-` 前缀；`anchor` ∈ `root` / 篇章 id（`'05'`）/ 学习点编号 / `wild`；有链接 = 项目，无链接须加 `practice: true`；`tags` 里的学习点编号必须真实存在。
- 卡片（`cards.ts`）：`id` 用 `card-` 前缀；必填 `def`（是什么：一句准确定义）和 `use`（怎么用：1–3 个具体用法，如典型任务、输入输出、用树上已有的哪个工具 / 服务器上手），各不超过 160 字，不写未核实的数字；`target` 和 `next`（2–4 个）只能指向树上节点（学习点编号 / 叶子 id / 卡片 id / 收集箱 url）；`tags` 3–5 个；`date` 只在确定时填写。
- 收集箱（`inbox.ts`）：`cat` = 「分类 · 模块编号」（如 `仿真平台 · 11-M1`），归类不下写 `野生枝节`；`level` ∈ 观望 / 跟练 / 深入。
- 学习点指引（`content/guides/<篇章id>.md` → 生成 `src/data/guides.ts`）：每个 `## 编号` 下写 `what:`（一句话核心概念）、`ask:`（2–3 个自检问题）、`read:`（1–2 个 `标题 | URL`，只用官方文档 / 综述 / 原始论文，写入前用 curl 验证，跑 `scripts/check-links.py` 复核）；文件头 `route:` 为篇章学习路线，须覆盖该篇章全部学习点且不重复。
- 入口路径（`content.ts` 的 `STARTERS`）：每条一行，`{ who, desc, steps: [...] }`。

## 常用命令

```bash
python scripts/generate-theory.py
python scripts/check-tree.py
python scripts/export-dashboard.py                       # 公共版看板
python scripts/export-dashboard.py --progress FILE.json  # 私有版（gitignored）
python scripts/export-markdown.py
```
