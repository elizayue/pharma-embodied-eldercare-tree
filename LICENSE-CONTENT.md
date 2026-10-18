# 内容许可（Content License）：CC BY 4.0

Copyright (c) 2026 elizayue

本仓库中的**学习树内容**采用 [知识共享 署名 4.0 国际许可协议（CC BY 4.0）](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) 授权。
法律文本：<https://creativecommons.org/licenses/by/4.0/legalcode>

The **learning-tree content** in this repository is licensed under the
[Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/legalcode).

你可以自由地复制、分发、改编、定制（包括商业用途），只要注明出处。
You may copy, redistribute, adapt and build upon the content, including for
commercial purposes, as long as you give appropriate credit.

## 哪些属于「内容」 / What counts as content

- `content/theory-outline.md`：理论地图源文件（篇章、模块、学习点、星级、优先学习配方）
- `content/guides/*.md`：学习点指引（what / ask / read）与学习路线
- `src/data/theory.ts`、`src/data/guides.ts`：由上述 Markdown 生成的数据（数据值部分）
- `src/data/leaves.ts`、`src/data/cards.ts`、`src/data/inbox.ts`、`src/data/content.ts`：叶子、学习卡片、收集箱条目、入口路径（数据值部分）
- `tree.md`：Markdown 大纲导出
- `index.html`、`dashboard/tree.html` 中嵌入的学习树数据（`<script id="tree-data">` 里的 JSON）

**不属于内容**（保留所有权利，见 [`LICENSE`](./LICENSE)）：`scripts/` 下的脚本与页面模板、
页面的结构 / 样式 / 脚本、`src/data/*.ts` 中的类型与接口声明，以及其余代码与工具。
改编自 S2AI 的部分按 S2AI 的 MIT License 提供，见 [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md)。

## 署名格式 / Attribution

> 来源：elizayue/pharma-embodied-eldercare-tree（https://github.com/elizayue/pharma-embodied-eldercare-tree），CC BY 4.0

如有修改，请注明「已修改」。
If you modified the content, please indicate that changes were made.

## 第三方资料 / Third-party materials

内容中引用的论文、数据库、指南、课程等第三方资料（包括链接指向的页面）归各自权利人所有，
不在本许可范围内，使用时请遵守其各自的许可与使用条款。
Third-party papers, databases, guidelines and courses cited or linked in the
content belong to their respective owners and are not covered by this license.

## 版本说明 / Prior versions

本次调整之前发布的版本以 MIT License 发布，已获得这些版本副本的人仍可按 MIT License 使用。
Versions published before this change were released under the MIT License and remain so for those copies.
