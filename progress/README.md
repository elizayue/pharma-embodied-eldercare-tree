# progress/ —— 个人进度存放处（除本说明与示例外，全部被 .gitignore 排除）

- 看板里点「导出进度 JSON」会下载 `personal.local.json`，可以放在这里（`progress/personal.local.json`），也可以放进任意本地文件夹或网盘同步目录。
- 换浏览器 / 换电脑时，点「导入进度」选中这个文件即可（与本机已有进度合并）。
- 想要一个自带进度的离线看板：`python scripts/export-dashboard.py --progress progress/personal.local.json`，生成 `dashboard/tree.private.html`（同样被 git 排除，不要上传）。
- 格式见 `personal.example.json`：`done` 记录已完成的节点 id（学习点编号 / 叶子 id / 卡片 id），`notes` 记录个人笔记。
