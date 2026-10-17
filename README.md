# 药学 × 具身智能 × 养老 · 学习树

> 一棵为「AI 药物发现（AIDD）+ 具身智能 + 智慧养老」交叉方向准备的学习树：**理论是树，项目是叶子**。
> 只做索引、顺序和取舍，告诉你「先学什么、做什么练手」，不提供详细教程。

![预览](./preview.png)

## 怎么用

**直接双击 `index.html`**（或 `dashboard/tree.html`，两者内容相同）用浏览器打开即可——单文件、离线可用、不需要 node 或服务器。

- **理论地图**：17 个篇章（枝干）→ 69 个模块 → 259 个学习点（枝节），星级 = 推荐学习 / 深入程度，每篇章附「优先学习配方」。
- **叶子清单**：71 片叶子（真实项目 / 工具 / 数据库 + 无链接的动手练习），每片都挂在树上的某个节点。
- **学习卡片**：25 张粗粒度索引卡（AlphaFold、RT-2、π0、Beers 标准等），一屏看完「是什么、挂在哪、接下来学什么」。
- **收集箱**：暂时没空学的项目 / 论文先放这里，学完再「毕业」成卡片或叶子。
- 支持搜索；学习点、叶子、卡片之间可以点击互相跳转；断链节点标红。
- 不想打开网页？看 Markdown 版大纲：[`tree.md`](./tree.md)。

### 四条主线

| 主线 | 篇章 |
| --- | --- |
| 公共基础 | 00 数学、编程与科研方法 |
| 药学 | 01 药物化学与药物发现 · 02 药理与药代（ADMET）· 03 药剂与制剂 · 04 临床、法规与药物警戒 · 05 AIDD |
| 具身智能 | 06 机器人学基础 · 07 感知 · 08 控制与规划 · 09 强化 / 模仿学习 · 10 具身大模型与 VLA · 11 仿真与 Sim2Real |
| 养老 | 12 老年医学与慢病 · 13 老年药学（多重用药与依从性）· 14 照护服务与智慧养老 · 15 伦理、隐私、政策与标准 |
| 交叉应用 | 16 养老机器人与 AI 用药安全（用药提醒、智能药盒、自动化药房、跌倒检测、陪护、人在回路） |

## 个人数据：与公共内容分离

公共内容（树本身）在仓库里；**你的勾选进度和笔记从不写进仓库文件**：

1. **默认存浏览器 localStorage**：勾选框 = 已完成，✎ = 个人笔记，自动保存在本机这个浏览器里。
2. **导出 / 导入 JSON**：点「导出进度 JSON」下载 `personal.local.json`，放到你想放的地方（推荐 `progress/personal.local.json`，或任意本地文件夹 / 网盘同步目录）；换浏览器或换电脑时点「导入进度」合并回来。
3. **私有离线看板（可选）**：`python scripts/export-dashboard.py --progress progress/personal.local.json` → 生成内嵌你进度的 `dashboard/tree.private.html`。
4. `.gitignore` 已排除 `*.local.json`、`progress/` 下除示例外的所有文件、`*.private.html`、`*.local.ts`——公开仓库里不会出现个人数据。提交前仍建议 `git status` 看一眼。

> 注意：localStorage 跟随「浏览器 + 文件路径」，清理浏览器数据或移动文件夹后可能看不到旧进度，请定期导出备份。

## 改内容 / 扩展这棵树

```bash
# 1. 理论地图：编辑 content/theory-outline.md（唯一手写源），然后
python scripts/generate-theory.py     # → src/data/theory.ts（生成物，勿手改）
# 2. 叶子 / 卡片 / 收集箱 / 入口路径：直接编辑 src/data/leaves.ts、cards.ts、inbox.ts、content.ts
# 3. 校验 + 导出
python scripts/check-tree.py          # 断链、id 唯一、卡片 tags 数量、源与生成物同步、公共数据不含个人进度
python scripts/export-dashboard.py    # → dashboard/tree.html + index.html
python scripts/export-markdown.py     # → tree.md
```

只需要 Python 3（标准库），不依赖任何第三方包。数据约定（叶子 `anchor` 三级落脚、卡片 `target` / `next` 只能指向树上节点等）详见 [`AGENTS.md`](./AGENTS.md)。

## 内容原则与免责声明

- 只收录通用、可核实的知识点与一手链接；拿不准的细节宁缺毋编（卡片 `date` 不确定就不填）。
- 法规、指南与标准（如 Beers 标准、ICH 指南、各国政策）会更新，请以官方最新版本为准。
- **本项目仅用于学习，不构成任何医疗或用药建议。** 涉及用药的原型项目必须设计「人在回路」与专业人员兜底。

## 致谢

结构、数据模型与单文件看板导出思路参考自 [S2AI](https://github.com/chenxiaoyu0505/S2AI)（MIT License, Copyright (c) 2026 cxy）。改编文件清单与许可原文见 [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md)。学习树内容为本项目新写。

## 许可

本项目以 [MIT License](./LICENSE) 开源。改编自 S2AI 的代码部分保留其 MIT 声明，见 [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md)。
