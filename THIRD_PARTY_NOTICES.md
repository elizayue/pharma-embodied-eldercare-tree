# 第三方声明（Third-Party Notices）

本项目的**结构与工具链**参考并改编自 [S2AI](https://github.com/chenxiaoyu0505/S2AI)（一棵预制的 AI 学习树：理论是树，项目是叶子）。

改编自 S2AI 的文件（已按本项目需求修改，源自 S2AI 的部分保留以下 MIT 许可声明）：

- `scripts/tree_data.py`（数据解析层）
- `scripts/check-tree.py`（树完整性校验）
- `scripts/export-dashboard.py`（单文件看板导出）
- `scripts/generate-theory.py`（思路改编：Markdown 源 → theory.ts）
- `scripts/dashboard-template.html`（看板页面模板，新增个人进度、导入导出、入口路径等功能）
- `src/data/*.ts` 的数据接口形状（理论地图 / 叶子 / 收集箱 / 学习卡片）

学习树的**内容**（药学、具身智能、养老三条主线及交叉应用的篇章、学习点、叶子、卡片、收集箱条目）为本项目新写，未复制 S2AI 的内容数据。

---

许可关系说明：

- 上述文件中**源自 S2AI 的部分**，仍按 S2AI 的 MIT License（Copyright (c) 2026 cxy）提供，许可原文完整保留在下方；文件头中的 S2AI MIT 声明同样保留。
- elizayue 在这些文件中所做的**修改与新增**，以及本项目其余代码，版权归 elizayue 所有，保留所有权利，见 [`LICENSE`](./LICENSE)。
- 学习树内容采用 CC BY 4.0，见 [`LICENSE-CONTENT.md`](./LICENSE-CONTENT.md)。

Portions of the files listed above that are derived from S2AI remain under S2AI's MIT License (full text below). elizayue's own modifications and additions, and all other code in this project, are Copyright (c) 2026 elizayue, All Rights Reserved (see `LICENSE`).

S2AI 许可证原文：

```
MIT License

Copyright (c) 2026 cxy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
