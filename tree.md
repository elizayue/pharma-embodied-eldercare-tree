# 药学 × 具身智能 × 养老 · 学习树（Markdown 大纲）

> 自动生成于 2026-10-17，由 `python scripts/export-markdown.py` 从 `src/data/*.ts` 导出，请勿手改。
> 规模：17 篇章 · 69 模块 · 259 学习点 · 71 叶子 · 25 学习卡片 · 4 收集箱条目。
> 星级 = 推荐学习 / 深入程度（★ 了解 · ★★ 掌握 · ★★★ 重点深入）。🍃 = 叶子（项目 / 工具 / 练习），🃏 = 学习卡片。
> 可交互版（勾选进度、个人笔记、搜索、互相跳转）：直接用浏览器打开 `index.html`。

## 从哪开始

- **AIDD 背景，想切入具身 + 养老**：从熟悉的药学/AIDD 出发，补机器人地基，再汇合到交叉应用
  1. 05 AIDD 复盘 + 13 老年药学
  2. 06 机器人学基础 → 09 机器人学习 → 10 VLA
  3. 16 交叉应用：选一个原型练习项开做
- **想先做出一个养老用药 Demo**：以场景驱动，边做边补理论
  1. 14 照护场景 + 13-M3 依从性
  2. 07-M4 以人为中心的感知
  3. 16-M2 用药管理原型 + 15 隐私伦理自查
- **零基础系统学习**：按枝干顺序推进，不跳跃
  1. 00 公共基础
  2. 01–02 药学核心 / 06–08 机器人核心 / 12 老年医学
  3. 05 / 10 / 13 三个交叉核心，再到 16

## 理论地图

### 〔公共基础〕

#### 00 · 公共基础：数学、编程与科研方法 ★★

> 三条主线共用的地基：数学、Python、深度学习与文献方法
> 优先学习配方：1.2 概率统计 ｜ 2.1 Python 科学计算 ｜ 3.1 深度学习基础 ｜ 4.1 文献检索与阅读

**学习路线**：`00-M2.1` Python 科学计算（NumPy / pandas / Matplotlib） → `00-M2.2` Linux、Git 与环境管理 → `00-M1.1` 线性代数（矩阵、特征分解、SVD） → `00-M1.2` 概率统计与贝叶斯推断 → `00-M1.3` 微积分与优化（梯度、凸优化） → `00-M3.1` 深度学习基础（反向传播、优化器、正则化） → `00-M3.5` 评估方法（数据划分、交叉验证、不确定性） → `00-M3.2` CNN / GNN / Transformer 架构 → `00-M3.3` 生成模型（VAE / 扩散模型 / 自回归） → `00-M3.4` 大语言模型与多模态模型基础 → `00-M2.4` 实验管理与可复现（配置、随机种子、日志） → `00-M1.4` 刚体变换与李群初步（旋转矩阵、四元数） → `00-M2.3` C++ 基础（机器人系统常用） → `00-M4.1` 文献检索与阅读（PubMed / arXiv / Google Scholar） → `00-M4.2` 实验设计与统计检验 → `00-M4.3` 跨学科沟通：医学、药学、工程术语对齐

- **M1 数学基础**
  - `00-M1.1` 线性代数（矩阵、特征分解、SVD） ★★
    - 学什么：向量、矩阵与线性变换是表示分子特征、图像和机器人位姿的共同语言；特征分解与奇异值分解（SVD）揭示矩阵的主要方向与秩。
    - 学完能回答：矩阵乘法为什么可以理解为“线性变换的复合”？ ／ 特征分解与 SVD 的适用条件有何不同？SVD 与 PCA 是什么关系？ ／ 矩阵的秩、零空间在最小二乘问题里意味着什么？
    - 入门阅读：[MIT OCW 18.06 Linear Algebra（Gilbert Strang）](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)；[3Blue1Brown：线性代数的本质（可视化系列）](https://www.3blue1brown.com/topics/linear-algebra)
  - `00-M1.2` 概率统计与贝叶斯推断 ★★★
    - 学什么：用概率描述不确定性：随机变量与分布、条件概率、期望与方差；贝叶斯推断用“先验 × 似然”更新为后验，是不确定性估计与贝叶斯优化的基础。
    - 学完能回答：条件概率与贝叶斯公式如何用于“检测阳性后真正患病的概率”这类问题？ ／ 最大似然估计与贝叶斯后验估计的区别是什么？ ／ 置信区间与贝叶斯可信区间的含义有何不同？
    - 入门阅读：[MIT OCW 18.05 Introduction to Probability and Statistics](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/)；[Seeing Theory（布朗大学的可视化概率统计入门）](https://seeing-theory.brown.edu/)
  - `00-M1.3` 微积分与优化（梯度、凸优化） ★★
    - 学什么：梯度描述函数变化最快的方向，梯度下降是训练神经网络的核心；凸优化问题的局部最优即全局最优，是理解约束优化、MPC 与轨迹优化的基础。
    - 学完能回答：什么是凸函数、凸集？为什么凸问题更容易求解？ ／ 拉格朗日乘子法如何处理等式约束？ ／ 学习率过大或过小分别会导致梯度下降出现什么现象？
    - 入门阅读：[Boyd & Vandenberghe, Convex Optimization（作者公开的教材与课件）](https://web.stanford.edu/~boyd/cvxbook/)
  - `00-M1.4` 刚体变换与李群初步（旋转矩阵、四元数） ★★
    - 学什么：刚体在三维空间的姿态可用旋转矩阵、欧拉角、四元数等表示，位置 + 姿态合成齐次变换；旋转群（SO(3)）与刚体运动群（SE(3)）给出统一的数学框架。
    - 学完能回答：欧拉角为什么会出现万向节锁？四元数如何避免？ ／ 齐次变换矩阵如何把多个坐标系之间的变换串联起来？ ／ 旋转矩阵需要满足哪些约束？
    - 入门阅读：[Lynch & Park, Modern Robotics（教材、视频与配套资源）](https://modernrobotics.northwestern.edu/)
- **M2 编程与工具**
  - `00-M2.1` Python 科学计算（NumPy / pandas / Matplotlib） ★★★ 🍃 [Jupyter](https://jupyter.org/)
    - 学什么：NumPy 提供高效的多维数组与向量化运算，pandas 提供表格数据的读写、清洗与分组统计，Matplotlib 用于可视化——这是几乎所有科研数据处理的起点。
    - 学完能回答：向量化运算为什么比 Python 循环快？广播（broadcasting）规则是什么？ ／ 如何用 pandas 完成“按分组求均值、处理缺失值、合并两张表”？ ／ 什么时候应该用数组，什么时候应该用 DataFrame？
    - 入门阅读：[NumPy: the absolute basics for beginners（官方入门）](https://numpy.org/doc/stable/user/absolute_beginners.html)；[pandas Getting started（官方入门）](https://pandas.pydata.org/docs/getting_started/index.html)
  - `00-M2.2` Linux、Git 与环境管理 ★★
    - 学什么：命令行、Shell 脚本与 Git 版本控制是科研工程的基本功；虚拟环境与依赖管理保证代码在不同机器上可运行。
    - 学完能回答：Git 的工作区、暂存区、提交与分支分别是什么？如何回退一次错误提交？ ／ 为什么每个项目都应该有独立的虚拟环境与依赖清单？ ／ 如何用管道和重定向组合多个命令行工具？
    - 入门阅读：[The Missing Semester of Your CS Education（MIT）](https://missing.csail.mit.edu/)；[Pro Git（官方免费电子书）](https://git-scm.com/book/en/v2)
  - `00-M2.3` C++ 基础（机器人系统常用） ★
    - 学什么：C++ 在机器人底层驱动、实时控制与高性能库中广泛使用；读懂类、模板、智能指针与编译构建流程，足以阅读 ROS 2 与仿真器源码。
    - 学完能回答：栈与堆内存的区别是什么？智能指针解决了什么问题？ ／ 头文件、编译、链接分别做什么？ ／ 为什么实时控制代码通常避免动态内存分配？
    - 入门阅读：[LearnCpp（系统的免费 C++ 教程）](https://www.learncpp.com/)
  - `00-M2.4` 实验管理与可复现（配置、随机种子、日志） ★★
    - 学什么：可复现研究要求固定随机种子、记录配置与依赖版本、保存数据划分与日志，让别人（和未来的自己）能得到同样的结果。
    - 学完能回答：只固定随机种子为什么不一定能完全复现 GPU 上的结果？ ／ 一次实验至少应记录哪些信息？ ／ 数据、代码、环境三者分别用什么方式做版本管理？
    - 入门阅读：[The Turing Way（可复现、开放数据科学手册）](https://book.the-turing-way.org/)
- **M3 机器学习与深度学习**
  - `00-M3.1` 深度学习基础（反向传播、优化器、正则化） ★★★ 🍃 [PyTorch](https://pytorch.org/)
    - 学什么：神经网络由可微的层堆叠而成，通过反向传播计算梯度、用优化器更新参数；正则化、归一化与合适的初始化帮助训练稳定并泛化。
    - 学完能回答：反向传播如何利用链式法则高效计算所有参数的梯度？ ／ Adam 与 SGD 的主要区别是什么？ ／ Dropout、权重衰减、早停分别如何抑制过拟合？
    - 入门阅读：[动手学深度学习（中文版，含代码）](https://zh.d2l.ai/)
  - `00-M3.2` CNN / GNN / Transformer 架构 ★★★
    - 学什么：CNN 利用局部连接与权重共享处理网格数据，GNN 在图上做消息传递处理分子与关系数据，Transformer 用自注意力建模序列与集合，是当前大模型的主干。
    - 学完能回答：卷积的平移等变性与 GNN 的置换不变性分别是什么意思？ ／ 自注意力的 Q、K、V 如何计算？复杂度随序列长度如何增长？ ／ 分子数据为什么常用 GNN，而蛋白序列常用 Transformer？
    - 入门阅读：[A Gentle Introduction to Graph Neural Networks（Distill）](https://distill.pub/2021/gnn-intro/)；[Vaswani et al., Attention Is All You Need](https://arxiv.org/abs/1706.03762)
  - `00-M3.3` 生成模型（VAE / 扩散模型 / 自回归） ★★
    - 学什么：生成模型学习数据分布以采样新样本：VAE 学习可采样的隐空间，扩散模型通过逐步去噪生成，自回归模型逐个预测下一个 token。
    - 学完能回答：VAE 的重参数化技巧解决了什么问题？ ／ 扩散模型的前向加噪与反向去噪分别是什么？ ／ 自回归生成与扩散生成在速度和可控性上各有什么特点？
    - 入门阅读：[Kingma & Welling, Auto-Encoding Variational Bayes](https://arxiv.org/abs/1312.6114)；[Ho et al., Denoising Diffusion Probabilistic Models](https://arxiv.org/abs/2006.11239)
  - `00-M3.4` 大语言模型与多模态模型基础 ★★★ 🍃 [Hugging Face](https://huggingface.co/)
    - 学什么：大语言模型基于 Transformer 在海量文本上预训练，再经指令微调与对齐；多模态模型把图像等输入编码后接入语言模型，是 VLA 与科研 Agent 的基础。
    - 学完能回答：预训练、监督微调与偏好对齐分别解决什么问题？ ／ 什么是 tokenization？上下文长度限制对应用有什么影响？ ／ 多模态模型通常如何把图像特征接入语言模型？
    - 入门阅读：[Hugging Face LLM Course（官方免费课程）](https://huggingface.co/learn/llm-course)
  - `00-M3.5` 评估方法（数据划分、交叉验证、不确定性） ★★
    - 学什么：评估要回答“模型在真实使用场景中有多好”：合理的训练 / 验证 / 测试划分、交叉验证、合适的指标，以及对结果不确定性的报告。
    - 学完能回答：为什么调参必须只用验证集，而不能看测试集？ ／ 类别不平衡时，准确率为什么会误导？应该看什么指标？ ／ 多次随机种子 / 多折结果应该如何报告？
    - 入门阅读：[scikit-learn 文档：Cross-validation](https://scikit-learn.org/stable/modules/cross_validation.html)
- **M4 科研方法**
  - `00-M4.1` 文献检索与阅读（PubMed / arXiv / Google Scholar） ★★
    - 学什么：高效检索与阅读文献：用 PubMed（生物医学）、arXiv（计算机与物理）等检索，用“分轮阅读”先抓问题与结论，再决定是否精读方法。
    - 学完能回答：如何用 MeSH 主题词和布尔运算构造 PubMed 检索式？ ／ 读一篇论文的第一遍应该看哪些部分？ ／ 如何判断一篇预印本的可信程度？
    - 入门阅读：[PubMed Help（官方检索帮助）](https://pubmed.ncbi.nlm.nih.gov/help/)；[Keshav, How to Read a Paper](https://doi.org/10.1145/1273445.1273458)
  - `00-M4.2` 实验设计与统计检验 ★★
    - 学什么：好的实验设计先明确假设、对照与样本量，再选择合适的统计检验；p 值、效应量与置信区间要一起解读。
    - 学完能回答：p 值到底表示什么？它不表示什么？ ／ 多重比较为什么会增加假阳性？常见的校正方法有哪些？ ／ 配对与独立样本检验分别适用于什么场景？
    - 入门阅读：[OpenIntro Statistics（免费开源统计教材）](https://www.openintro.org/book/os/)
  - `00-M4.3` 跨学科沟通：医学、药学、工程术语对齐 ★
    - 学什么：跨学科合作需要对齐术语：医学 / 药学有规范的主题词与疾病命名，工程侧要能把临床需求翻译成可测量的指标。
    - 学完能回答：同一个临床概念在医学文献与工程论文中常有哪些不同说法？ ／ 如何借助 MeSH 找到一个医学概念的规范名称与上下位词？ ／ 和医生、药师沟通需求时，应该准备哪些问题？
    - 入门阅读：[MeSH（美国国家医学图书馆医学主题词表）](https://www.nlm.nih.gov/mesh/meshhome.html)；[MedlinePlus（NLM 面向大众的权威健康信息）](https://medlineplus.gov/)

### 〔药学〕

#### 01 · 药物化学与药物发现流程 ★★★

> 从靶点到候选药物：理解一个分子如何成为药
> 优先学习配方：1.1 研发全流程 ｜ 2.2 构效关系 ｜ 2.3 类药性规则 ｜ 3.1 苗头到先导

**学习路线**：`01-M1.1` 研发流程：靶点发现 → 苗头 → 先导 → 候选 → 临床 → 上市 → `01-M1.2` 靶点识别与验证 → `01-M1.3` 药物类型：小分子、多肽、抗体、核酸、细胞与基因治疗 → `01-M2.5` 分子表示：SMILES、分子指纹、分子图 → `01-M2.1` 官能团、立体化学与手性药物 → `01-M2.2` 构效关系（SAR）与生物电子等排 → `01-M2.3` 类药性规则（Lipinski 五规则等）与成药性 → `01-M4.1` 蛋白质结构层级与结合口袋 → `01-M4.3` 分子间作用力与结合自由能 → `01-M4.4` 分子对接与虚拟筛选原理 → `01-M4.2` 结构解析：X 射线、冷冻电镜、NMR → `01-M4.5` 分子动力学模拟基础 → `01-M3.1` 苗头化合物发现：高通量筛选、片段筛选、DNA 编码库 → `01-M3.2` 先导优化：活性、选择性、ADMET 多参数平衡 → `01-M3.3` 骨架跃迁与化合物库设计 → `01-M2.4` 前药设计 → `01-M3.4` 天然产物与中药现代化 → `01-M1.4` 研发成本、周期与失败原因

- **M1 新药研发全景**
  - `01-M1.1` 研发流程：靶点发现 → 苗头 → 先导 → 候选 → 临床 → 上市 ★★★
    - 学什么：新药研发是一条逐级筛选的流水线：靶点发现与验证 → 苗头化合物 → 先导化合物 → 临床候选 → 临床试验 → 上市审批与上市后监测，每一步都在淘汰风险。
    - 学完能回答：苗头（hit）、先导（lead）、候选药物（candidate）的判定标准有何不同？ ／ 临床前研究主要回答哪些问题？ ／ AI 方法目前最常介入流水线的哪些环节？
    - 入门阅读：[Hughes et al., Principles of early drug discovery（Br J Pharmacol 2011）](https://doi.org/10.1111/j.1476-5381.2010.01127.x)；[FDA: The Drug Development Process](https://www.fda.gov/patients/learn-about-drug-and-device-approvals/drug-development-process)
  - `01-M1.2` 靶点识别与验证 ★★
    - 学什么：靶点识别找出与疾病因果相关、可被药物调节的分子（多为蛋白），靶点验证用遗传学、工具化合物、动物模型等证据确认调节它确实有治疗作用。
    - 学完能回答：“可成药性”（druggability）指什么？ ／ 遗传学证据为什么被认为能提高靶点成功率？ ／ 靶点验证不充分会在后期造成什么后果？
    - 入门阅读：[Hughes et al., Principles of early drug discovery（Br J Pharmacol 2011）](https://doi.org/10.1111/j.1476-5381.2010.01127.x)；[Santos et al., A comprehensive map of molecular drug targets（Nat Rev Drug Discov）](https://doi.org/10.1038/nrd.2016.230)
  - `01-M1.3` 药物类型：小分子、多肽、抗体、核酸、细胞与基因治疗 ★★
    - 学什么：药物模态包括小分子、多肽、抗体等蛋白药、核酸药物（如 siRNA、mRNA）以及细胞与基因治疗，它们在靶点范围、给药方式、生产与监管路径上差别很大。
    - 学完能回答：小分子与抗体药在作用靶点位置（胞内 / 胞外）上有何典型差异？ ／ 生物制品与化学药在监管上为何常分开管理？ ／ 不同模态各适合 AI 中的哪类建模方法？
    - 入门阅读：[FDA: What Are “Biologics” Questions and Answers](https://www.fda.gov/about-fda/center-biologics-evaluation-and-research-cber/what-are-biologics-questions-and-answers)；[Santos et al., A comprehensive map of molecular drug targets（Nat Rev Drug Discov）](https://doi.org/10.1038/nrd.2016.230)
  - `01-M1.4` 研发成本、周期与失败原因 ★
    - 学什么：新药研发周期长、投入高、失败率高；临床阶段失败常见原因包括疗效不足与安全性问题，这也是 ADMET 预测与更好靶点验证受重视的原因。
    - 学完能回答：临床阶段失败的主要原因有哪些？ ／ 为什么说“尽早失败、低成本失败”很重要？ ／ 研发成本估算通常把哪些因素算进去（如失败项目、资金时间成本）？
    - 入门阅读：[Kola & Landis, Can the pharmaceutical industry reduce attrition rates?（Nat Rev Drug Discov 2004）](https://doi.org/10.1038/nrd1470)；[DiMasi et al., Innovation in the pharmaceutical industry: New estimates of R&D costs（J Health Econ 2016）](https://doi.org/10.1016/j.jhealeco.2016.01.012)
- **M2 药物化学基础**
  - `01-M2.1` 官能团、立体化学与手性药物 ★★
    - 学什么：官能团决定分子的反应性与相互作用方式；立体化学描述原子的空间排布，手性药物的不同对映体可能有不同的活性、代谢与毒性。
    - 学完能回答：什么是手性中心？R/S 构型如何判断？ ／ 为什么同一药物的两个对映体可能药效或毒性不同？ ／ SMILES 与 RDKit 如何表示和识别立体化学？
    - 入门阅读：[RDKit Getting Started in Python（含立体化学处理）](https://www.rdkit.org/docs/GettingStartedInPython.html)
  - `01-M2.2` 构效关系（SAR）与生物电子等排 ★★★
    - 学什么：构效关系（SAR）研究结构改变如何影响活性；生物电子等排是用性质相近的基团替换原有基团，以改善活性、选择性或 ADMET 而保留结合模式。
    - 学完能回答：匹配分子对（MMP）分析如何帮助总结 SAR？ ／ 举一个常见的生物电子等排替换并说明它可能改善什么性质。 ／ 活性悬崖对 SAR 分析和机器学习分别意味着什么？
    - 入门阅读：[Meanwell, Synopsis of Some Recent Tactical Application of Bioisosteres in Drug Design（J Med Chem 2011）](https://doi.org/10.1021/jm1013693)
  - `01-M2.3` 类药性规则（Lipinski 五规则等）与成药性 ★★★ 🍃 用 RDKit 计算一组上市药的类药性指标（练习） 🃏 [Lipinski 五规则（Rule of 5）](https://doi.org/10.1016/S0169-409X(96)00423-1)
    - 学什么：类药性规则用分子量、亲脂性、氢键供受体等简单性质，粗略判断口服吸收的可能性；它是经验性的过滤器，而非成药性的保证。
    - 学完能回答：Lipinski 五规则包含哪几项？依据的是什么数据？ ／ 哪些类型的药物经常违反这些规则却依然成功上市？ ／ 类药性与“成药性”（developability）有何区别？
    - 入门阅读：[Lipinski et al., Experimental and computational approaches to estimate solubility and permeability（Adv Drug Deliv Rev）](https://doi.org/10.1016/S0169-409X(96)00423-1)
  - `01-M2.4` 前药设计 ★
    - 学什么：前药本身活性低或无活性，进入体内后经酶或化学转化释放活性药物，用来改善溶解度、渗透性、稳定性、靶向性或减少副作用。
    - 学完能回答：酯类前药通常解决什么问题？ ／ 设计前药时需要考虑哪些激活与安全性问题？ ／ 前药的存在对 ADMET 预测模型提出了什么挑战？
    - 入门阅读：[Rautio et al., The expanding role of prodrugs in contemporary drug design and development（Nat Rev Drug Discov 2018）](https://doi.org/10.1038/nrd.2018.46)
  - `01-M2.5` 分子表示：SMILES、分子指纹、分子图 ★★★ 🍃 [RDKit](https://www.rdkit.org/)、[PubChem](https://pubchem.ncbi.nlm.nih.gov/)、用 RDKit 计算一组上市药的类药性指标（练习）
    - 学什么：计算机表示分子的三种主流方式：SMILES 字符串、分子指纹（如基于子结构的位向量）和分子图（原子为节点、键为边），是一切 AIDD 模型的输入。
    - 学完能回答：什么是规范化（canonical）SMILES？为什么需要它？ ／ Morgan / ECFP 指纹是如何生成的？ ／ 分子图相比指纹保留了哪些额外信息？
    - 入门阅读：[Daylight Theory: SMILES（SMILES 语法权威说明）](https://www.daylight.com/dayhtml/doc/theory/theory.smiles.html)；[RDKit Getting Started in Python](https://www.rdkit.org/docs/GettingStartedInPython.html)
- **M3 先导发现与优化**
  - `01-M3.1` 苗头化合物发现：高通量筛选、片段筛选、DNA 编码库 ★★
    - 学什么：苗头发现的常见手段包括高通量筛选（HTS）、基于片段的筛选（FBDD）、DNA 编码化合物库（DEL）与虚拟筛选，各自在库规模、成本与命中质量上取舍不同。
    - 学完能回答：片段筛选为什么常需要灵敏的生物物理方法与结构信息？ ／ DNA 编码库的“编码”是如何实现的？ ／ 虚拟筛选与实验筛选如何互补？
    - 入门阅读：[Erlanson et al., Twenty years on: the impact of fragments on drug discovery（Nat Rev Drug Discov 2016）](https://doi.org/10.1038/nrd.2016.109)；[Goodnow et al., DNA-encoded chemistry: enabling the deeper sampling of chemical space（Nat Rev Drug Discov）](https://doi.org/10.1038/nrd.2016.213)
  - `01-M3.2` 先导优化：活性、选择性、ADMET 多参数平衡 ★★★
    - 学什么：先导优化在提高活性的同时平衡选择性、ADMET、安全性与可合成性，是典型的多参数优化问题，通常经过多轮“设计—合成—测试—分析”循环。
    - 学完能回答：为什么单纯追求活性常导致分子过于亲脂、成药性变差？ ／ 配体效率等指标在先导优化中有什么用？ ／ 多参数优化（MPO）评分如何把多个性质合成一个决策依据？
    - 入门阅读：[Hughes et al., Principles of early drug discovery（Br J Pharmacol 2011）](https://doi.org/10.1111/j.1476-5381.2010.01127.x)
  - `01-M3.3` 骨架跃迁与化合物库设计 ★★
    - 学什么：骨架跃迁在保留关键药效团与活性的前提下替换分子核心骨架，用于改善性质或绕开专利；化合物库设计则在多样性与针对性之间取舍。
    - 学完能回答：骨架跃迁有哪几类常见方法？ ／ 药效团模型在骨架跃迁中起什么作用？ ／ 生成模型如何被用来做骨架跃迁？
    - 入门阅读：[Hu, Stumpfe & Bajorath, Recent Advances in Scaffold Hopping（J Med Chem）](https://doi.org/10.1021/acs.jmedchem.6b01437)
  - `01-M3.4` 天然产物与中药现代化 ★
    - 学什么：天然产物结构复杂、生物活性丰富，是药物的重要来源；中药现代化强调活性成分鉴定、质量控制与作用机制研究。
    - 学完能回答：天然产物在化学空间上与合成化合物库有何不同？ ／ 天然产物药物发现的主要技术瓶颈是什么？ ／ 研究复方中药作用机制时常用哪些组学与网络方法？
    - 入门阅读：[Atanasov et al., Natural products in drug discovery: advances and opportunities（Nat Rev Drug Discov 2021）](https://doi.org/10.1038/s41573-020-00114-z)；[Newman & Cragg, Natural Products as Sources of New Drugs（J Nat Prod 2020）](https://doi.org/10.1021/acs.jnatprod.9b01285)
- **M4 结构生物学与分子相互作用**
  - `01-M4.1` 蛋白质结构层级与结合口袋 ★★ 🍃 [RCSB PDB](https://www.rcsb.org/)、[AlphaFold 蛋白结构数据库](https://alphafold.ebi.ac.uk/)
    - 学什么：蛋白质结构分为一级（序列）到四级（多亚基组装）；结合口袋是蛋白表面能容纳配体的凹陷区域，其形状与理化性质决定配体如何结合。
    - 学完能回答：二级结构有哪些常见类型？由什么相互作用维持？ ／ 如何从 PDB 文件中识别配体和结合口袋残基？ ／ 蛋白构象柔性对药物设计有什么影响？
    - 入门阅读：[PDB-101: Guide to Understanding PDB Data](https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/introduction)
  - `01-M4.2` 结构解析：X 射线、冷冻电镜、NMR ★
    - 学什么：实验结构主要来自 X 射线晶体学、冷冻电镜和核磁共振，三者在样品要求、分辨率与可研究对象上各有优势。
    - 学完能回答：分辨率数值越小代表什么？ ／ 冷冻电镜为何特别适合大型复合物与膜蛋白？ ／ 读一个 PDB 结构时，如何判断其质量是否可靠？
    - 入门阅读：[PDB-101: Methods for Determining Structure](https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/methods-for-determining-structure)
  - `01-M4.3` 分子间作用力与结合自由能 ★★
    - 学什么：配体与蛋白通过氢键、疏水作用、静电与范德华作用、π 堆积等结合；结合强弱由结合自由能决定，包含焓与熵的贡献。
    - 学完能回答：结合自由能与解离常数（Kd）有什么关系？ ／ 为什么疏水作用常被认为主要由熵驱动？ ／ 去溶剂化为什么会影响结合？
    - 入门阅读：[Gilson & Zhou, Calculation of Protein-Ligand Binding Affinities（Annu Rev Biophys 2007）](https://doi.org/10.1146/annurev.biophys.36.040306.132550)
  - `01-M4.4` 分子对接与虚拟筛选原理 ★★★ 🍃 [ZINC](https://zinc.docking.org/)、[AutoDock Vina](https://vina.scripps.edu/)、对一个已知复合物做重对接并计算 RMSD（练习）、[DiffDock 代码](https://github.com/gcorso/DiffDock)
    - 学什么：分子对接在蛋白口袋中搜索配体的姿态并用打分函数排序；虚拟筛选用对接或其他方法从大型化合物库中优先挑选值得实验测试的分子。
    - 学完能回答：对接的“搜索算法”和“打分函数”分别负责什么？ ／ 对接分数为什么不能直接当作结合亲和力？ ／ 如何用已知活性 / 非活性分子评估虚拟筛选的富集能力？
    - 入门阅读：[Meng et al., Molecular Docking: A Powerful Approach for Structure-Based Drug Discovery（2011）](https://doi.org/10.2174/157340911795677602)；[Trott & Olson, AutoDock Vina（J Comput Chem）](https://doi.org/10.1002/jcc.21334)
  - `01-M4.5` 分子动力学模拟基础 ★★ 🍃 [OpenMM](https://openmm.org/)
    - 学什么：分子动力学（MD）用力场数值积分原子运动，模拟蛋白与配体随时间的构象变化，可用于研究柔性、结合稳定性以及自由能计算。
    - 学完能回答：力场由哪些能量项组成？ ／ 为什么需要能量最小化、升温与平衡等准备步骤？ ／ MD 模拟的时间尺度限制意味着哪些过程难以直接观察？
    - 入门阅读：[Hollingsworth & Dror, Molecular Dynamics Simulation for All（Neuron 2018）](https://doi.org/10.1016/j.neuron.2018.08.011)

#### 02 · 药理学与药代动力学（ADMET） ★★★

> 药物对机体做什么、机体对药物做什么
> 优先学习配方：1.1 受体理论 ｜ 2.1 ADME 四环节 ｜ 2.3 PK 参数 ｜ 3.1 药物相互作用

**学习路线**：`02-M1.1` 受体理论：激动剂、拮抗剂、部分激动剂 → `02-M1.2` 量效关系：EC50、Emax、治疗指数 → `02-M1.3` 主要药物类别与作用机制（心血管、中枢、抗感染、内分泌） → `02-M2.1` ADME：吸收、分布、代谢、排泄 → `02-M2.3` PK 参数：半衰期、清除率、分布容积、生物利用度、AUC → `02-M2.2` CYP450 代谢酶与转运体 → `02-M2.4` 房室模型与非房室分析 → `02-M3.1` 药物相互作用（DDI）：酶抑制 / 诱导、转运体介导 → `02-M3.4` 药物不良反应分类 → `02-M3.2` 毒理学基础：急毒、重复给药毒性、遗传毒性 → `02-M3.3` 心脏毒性（hERG / QT 延长）与肝毒性 → `02-M1.4` 耐受、依赖与个体差异 → `02-M4.1` 药物基因组学（如 CYP2C19、CYP2D6 多态性） → `02-M4.2` 治疗药物监测（TDM） → `02-M2.5` 群体药代（PopPK）与生理药代（PBPK）模型 → `02-M4.3` 特殊人群用药：老年、肝肾功能不全、儿童、孕期

- **M1 药效学**
  - `02-M1.1` 受体理论：激动剂、拮抗剂、部分激动剂 ★★★
    - 学什么：药物多通过与受体等靶点结合发挥作用：激动剂激活受体，拮抗剂阻断激动剂作用，部分激动剂即使占满受体也只产生部分最大效应。
    - 学完能回答：亲和力（affinity）与内在活性（efficacy）有何区别？ ／ 竞争性与非竞争性拮抗剂对量效曲线的影响有何不同？ ／ 反向激动剂与拮抗剂的区别是什么？
    - 入门阅读：[MSD Manual: Drug–Receptor Interactions](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacodynamics/drug-receptor-interactions)
  - `02-M1.2` 量效关系：EC50、Emax、治疗指数 ★★★
    - 学什么：量效关系描述剂量（或浓度）与效应的关系：EC50 反映效能（potency），Emax 反映最大效应（efficacy），治疗指数衡量有效剂量与毒性剂量之间的安全距离。
    - 学完能回答：效能（potency）高是否意味着药物“更好”？ ／ 治疗指数窄的药物在临床上需要注意什么？ ／ 渐进型与全或无型量效曲线分别如何获得？
    - 入门阅读：[MSD Manual: Dose-Response Relationships](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacodynamics/dose-response-relationships)
  - `02-M1.3` 主要药物类别与作用机制（心血管、中枢、抗感染、内分泌） ★★
    - 学什么：主要药物类别按作用系统与机制划分（如心血管、中枢神经、抗感染、内分泌代谢等），常见靶点类别包括 G 蛋白偶联受体、离子通道、酶、核受体与转运体。
    - 学完能回答：哪几类蛋白是现有药物最常见的靶点家族？ ／ 举例说明同一靶点类别在不同疾病中的药物。 ／ 了解药物类别对理解老年多重用药有何帮助？
    - 入门阅读：[Santos et al., A comprehensive map of molecular drug targets（Nat Rev Drug Discov）](https://doi.org/10.1038/nrd.2016.230)；[MSD Manual: Overview of Pharmacodynamics](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacodynamics/overview-of-pharmacodynamics)
  - `02-M1.4` 耐受、依赖与个体差异 ★
    - 学什么：反复用药后机体反应减弱称为耐受；依赖涉及停药后的生理或心理症状；遗传、年龄、疾病与合并用药都会造成药物反应的个体差异。
    - 学完能回答：耐受与耐药（resistance）有何不同？ ／ 哪些药物类别在老年人中容易出现依赖或戒断问题？ ／ 个体差异的主要来源有哪些？
    - 入门阅读：[MSD Manual: Tolerance and Resistance](https://www.msdmanuals.com/professional/clinical-pharmacology/factors-affecting-response-to-medications/tolerance-and-resistance)
- **M2 药代动力学**
  - `02-M2.1` ADME：吸收、分布、代谢、排泄 ★★★ 🍃 [SwissADME](https://www.swissadme.ch/)
    - 学什么：ADME 描述药物在体内的过程：吸收进入血液、分布到组织、经代谢转化、最终排泄出体外；四个环节共同决定药物浓度随时间的变化。
    - 学完能回答：影响口服吸收的主要因素有哪些？ ／ 血浆蛋白结合如何影响药物分布和作用？ ／ 肝代谢与肾排泄分别对哪类药物更重要？
    - 入门阅读：[MSD Manual: Overview of Pharmacokinetics](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/overview-of-pharmacokinetics)；[MSD Manual: Drug Metabolism](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/drug-metabolism)
  - `02-M2.2` CYP450 代谢酶与转运体 ★★★
    - 学什么：细胞色素 P450（CYP）酶家族负责大量药物的氧化代谢，转运体（如 P-gp、OATP）影响药物进出细胞；它们的抑制、诱导与遗传多态性是药物相互作用和个体差异的主要来源。
    - 学完能回答：哪些 CYP 亚型参与了最多的药物代谢？ ／ 酶抑制和酶诱导对合用药物的血药浓度分别有什么影响？ ／ 转运体介导的相互作用与 CYP 介导的有何不同？
    - 入门阅读：[Zanger & Schwab, Cytochrome P450 enzymes in drug metabolism（Pharmacol Ther 2013）](https://doi.org/10.1016/j.pharmthera.2012.12.007)；[FDA: Examples of Drugs that Interact with CYP Enzymes and Transporter Systems](https://www.fda.gov/drugs/drug-interactions-labeling/healthcare-professionals-fdas-examples-drugs-interact-cyp-enzymes-and-transporter-systems)
  - `02-M2.3` PK 参数：半衰期、清除率、分布容积、生物利用度、AUC ★★★ 🍃 用 Python 写一个一室模型并拟合血药浓度曲线（练习）
    - 学什么：核心药代参数：半衰期（浓度减半所需时间）、清除率（单位时间清除药物的血浆体积）、分布容积（药量与血药浓度的比例）、生物利用度（进入体循环的比例）与 AUC（暴露量）。
    - 学完能回答：清除率、分布容积与半衰期三者是什么关系？ ／ 为什么多次给药通常需要若干个半衰期才达到稳态？ ／ 口服生物利用度受哪些过程影响？
    - 入门阅读：[MSD Manual: Overview of Pharmacokinetics](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/overview-of-pharmacokinetics)；[MSD Manual: Drug Bioavailability](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/drug-bioavailability)
  - `02-M2.4` 房室模型与非房室分析 ★★ 🍃 用 Python 写一个一室模型并拟合血药浓度曲线（练习）
    - 学什么：房室模型把身体简化为若干药物均匀分布的“隔室”，用微分方程描述浓度变化；非房室分析不假设模型结构，直接从浓度—时间数据计算 AUC、半衰期等参数。
    - 学完能回答：一室模型与二室模型的浓度—时间曲线有何区别？ ／ 非房室分析中 AUC 通常如何计算？ ／ 什么时候应选用房室模型而不是非房室分析？
    - 入门阅读：[Mould & Upton, Basic Concepts in Population Modeling, Simulation, and Model-Based Drug Development（CPT PSP 2012）](https://doi.org/10.1038/psp.2012.4)
  - `02-M2.5` 群体药代（PopPK）与生理药代（PBPK）模型 ★★ 🍃 [Open Systems Pharmacology（PK-Sim / MoBi）](https://www.open-systems-pharmacology.org/)
    - 学什么：群体药代（PopPK）用混合效应模型描述人群典型参数与个体间变异，并寻找年龄、体重、肾功能等协变量；生理药代（PBPK）用器官血流与组织参数机制性地预测药代，常用于特殊人群外推与相互作用评估。
    - 学完能回答：PopPK 中固定效应与随机效应分别代表什么？ ／ PBPK 模型为什么适合预测老年人或肝肾功能不全者的暴露？ ／ PopPK 与 PBPK 的数据需求有何不同？
    - 入门阅读：[Mould & Upton, Basic Concepts in Population Modeling, Simulation, and Model-Based Drug Development（CPT PSP 2012）](https://doi.org/10.1038/psp.2012.4)；[Jones & Rowland-Yeo, Basic Concepts in Physiologically Based Pharmacokinetic Modeling（CPT PSP 2013）](https://doi.org/10.1038/psp.2013.41)
- **M3 药物相互作用与毒理**
  - `02-M3.1` 药物相互作用（DDI）：酶抑制 / 诱导、转运体介导 ★★★ 🍃 [DrugBank](https://go.drugbank.com/)、原型：老年用药清单的 DDI / PIM 规则检查 + LLM 解释（练习）
    - 学什么：药物相互作用指一种药物改变另一种药物的效应或浓度，可发生在药代层面（如酶抑制 / 诱导、转运体）或药效层面（如作用叠加或拮抗）。
    - 学完能回答：药代学相互作用与药效学相互作用各举一例。 ／ 为什么老年多重用药人群的相互作用风险更高？ ／ 评估一个相互作用的临床意义时要考虑哪些因素？
    - 入门阅读：[MSD Manual: Drug Interactions](https://www.msdmanuals.com/professional/clinical-pharmacology/factors-affecting-response-to-medications/drug-interactions)；[FDA: Examples of Drugs that Interact with CYP Enzymes and Transporter Systems](https://www.fda.gov/drugs/drug-interactions-labeling/healthcare-professionals-fdas-examples-drugs-interact-cyp-enzymes-and-transporter-systems)
  - `02-M3.2` 毒理学基础：急毒、重复给药毒性、遗传毒性 ★★
    - 学什么：非临床毒理学研究包括单次与重复给药毒性、遗传毒性、生殖毒性、致癌性与安全药理等，用于在进入人体前识别风险并确定安全起始剂量，相关要求见 ICH 安全性（S）指南。
    - 学完能回答：遗传毒性试验组合通常包括哪些类型的试验？ ／ 动物毒理结果外推到人时有哪些局限？ ／ 计算毒理预测在哪些环节可以辅助实验？
    - 入门阅读：[ICH Safety Guidelines（以官网最新版本为准）](https://www.ich.org/page/safety-guidelines)
  - `02-M3.3` 心脏毒性（hERG / QT 延长）与肝毒性 ★★
    - 学什么：hERG 钾通道被阻断可延长心电图 QT 间期、增加尖端扭转型室速风险，是药物心脏安全评估的重点；药物性肝损伤是另一类常见的上市后撤市与研发失败原因。
    - 学完能回答：为什么很多结构多样的药物都能阻断 hERG？ ／ QT 延长风险评估在非临床与临床阶段分别怎么做？ ／ 药物性肝损伤为什么难以在临床前充分预测？
    - 入门阅读：[Sanguinetti & Tristani-Firouzi, hERG potassium channels and cardiac arrhythmia（Nature 2006）](https://doi.org/10.1038/nature04710)；[ICH Safety Guidelines（含心脏安全相关指南，以官网最新版本为准）](https://www.ich.org/page/safety-guidelines)
  - `02-M3.4` 药物不良反应分类 ★★
    - 学什么：药物不良反应常按机制分为与剂量相关、可由药理作用预期的反应，和与剂量关系不明显、难以预测的反应（如部分过敏和特异质反应）。
    - 学完能回答：不良反应（ADR）与不良事件（AE）的区别是什么？ ／ 判断一个事件是否由药物引起时常考虑哪些因素？ ／ 老年人中哪些不良反应特别值得警惕？
    - 入门阅读：[Edwards & Aronson, Adverse drug reactions: definitions, diagnosis, and management（Lancet 2000）](https://doi.org/10.1016/S0140-6736(00)02799-9)；[MSD Manual: Adverse Drug Reactions](https://www.msdmanuals.com/professional/clinical-pharmacology/concepts-in-pharmacotherapy/adverse-drug-reactions)
- **M4 精准药学**
  - `02-M4.1` 药物基因组学（如 CYP2C19、CYP2D6 多态性） ★★
    - 学什么：药物基因组学研究基因变异如何影响药物反应，例如代谢酶基因多态性会改变部分药物的暴露或疗效，相关临床指南可用于指导选药与剂量调整。
    - 学完能回答：慢代谢型与超快代谢型分别可能带来什么风险？ ／ 药物基因组学检测在临床落地中面临哪些障碍？ ／ 如何查找某个基因—药物组合是否有临床实施指南？
    - 入门阅读：[MSD Manual: Pharmacogenetics](https://www.msdmanuals.com/professional/clinical-pharmacology/factors-affecting-response-to-medications/pharmacogenetics)；[CPIC 药物基因组学临床实施指南入口](https://cpicpgx.org/)
  - `02-M4.2` 治疗药物监测（TDM） ★★
    - 学什么：治疗药物监测（TDM）测定血药浓度来个体化调整剂量，适用于治疗窗窄、个体差异大、浓度与疗效 / 毒性关系明确的药物。
    - 学完能回答：哪些特征的药物适合做 TDM？ ／ 谷浓度与峰浓度分别提供什么信息？ ／ 模型引导的精准给药与传统 TDM 有何关系？
    - 入门阅读：[Kang & Lee, Overview of Therapeutic Drug Monitoring（Korean J Intern Med 2009）](https://doi.org/10.3904/kjim.2009.24.1.1)；[MSD Manual: Emerging Paradigms in Precision Dosing](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/emerging-paradigms-in-precision-dosing)
  - `02-M4.3` 特殊人群用药：老年、肝肾功能不全、儿童、孕期 ★★★
    - 学什么：老年人、肝肾功能不全者、儿童与孕妇的药代和药效与一般成人不同，往往需要调整剂量或换药；老年人常见肾清除下降、体成分改变和对某些药物更敏感。
    - 学完能回答：肾功能下降时，哪类药物最需要调整剂量？ ／ 老年人体脂比例增加对脂溶性药物的分布有什么影响？ ／ 为什么特殊人群的用药证据往往不足？
    - 入门阅读：[MSD Manual: Pharmacokinetics in Older Adults](https://www.msdmanuals.com/professional/geriatrics/pharmacologic-therapy-in-older-adults/pharmacokinetics-in-older-adults)；[MSD Manual: Pharmacodynamics in Older Adults](https://www.msdmanuals.com/professional/geriatrics/pharmacologic-therapy-in-older-adults/pharmacodynamics-in-older-adults)

#### 03 · 药剂学与制剂 ★★

> 药物如何被做成患者能用、愿意用的剂型
> 优先学习配方：1.1 剂型分类 ｜ 2.2 缓控释 ｜ 3.1 质量源于设计 ｜ 4.1 适老化剂型

**学习路线**：`03-M1.1` 常见剂型：片剂、胶囊、注射剂、吸入剂、透皮贴剂 → `03-M1.2` 给药途径与首过效应 → `03-M1.3` 溶解度、溶出与生物药剂学分类系统（BCS） → `03-M2.1` 缓释 / 控释制剂 → `03-M2.2` 纳米递送与脂质纳米粒（LNP） → `03-M2.3` 靶向递送与抗体偶联药物（ADC） → `03-M3.1` 质量源于设计（QbD）与 ICH 质量指南 → `03-M3.2` GMP 与连续制造 → `03-M3.3` 稳定性研究与包装 → `03-M3.4` 仿制药一致性评价与生物等效性 → `03-M4.1` 吞咽困难患者的剂型选择（口崩片、液体、可否掰开 / 研碎） → `03-M4.2` 包装与标签的适老化（大字、易开启、单剂量包装） → `03-M4.3` 固定剂量复方与减少服药负担

- **M1 剂型与给药途径**
  - `03-M1.1` 常见剂型：片剂、胶囊、注射剂、吸入剂、透皮贴剂 ★★
    - 学什么：剂型是药物交给患者的具体形式，如片剂、胶囊、注射剂、吸入剂、透皮贴剂；剂型影响起效速度、作用时长、依从性与稳定性。
    - 学完能回答：同一药物为什么会开发多种剂型？ ／ 透皮贴剂和吸入剂各适合什么类型的药物？ ／ 剂型选择如何影响老年患者的使用体验？
    - 入门阅读：[MSD Manual: Drug Absorption（含给药途径与剂型对吸收的影响）](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/drug-absorption)
  - `03-M1.2` 给药途径与首过效应 ★★
    - 学什么：给药途径决定药物如何进入体循环；口服药物吸收后先经肝脏，部分在到达体循环前被代谢，称为首过效应，静脉、舌下、透皮等途径可绕过或减少首过效应。
    - 学完能回答：为什么静脉给药的生物利用度被视为 100% 的参照？ ／ 首过效应大的药物适合哪些替代给药途径？ ／ 不同途径的起效速度大致如何排序？
    - 入门阅读：[MSD Manual: Drug Absorption](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/drug-absorption)；[MSD Manual: Drug Bioavailability](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/drug-bioavailability)
  - `03-M1.3` 溶解度、溶出与生物药剂学分类系统（BCS） ★★
    - 学什么：口服固体制剂需要先溶出才能吸收；生物药剂学分类系统（BCS）按溶解度和肠道渗透性把药物分为四类，用于指导制剂开发与部分生物等效性豁免。
    - 学完能回答：BCS 四类各自的溶解度与渗透性组合是什么？ ／ 低溶解度药物有哪些常见的增溶制剂手段？ ／ 体外溶出试验为什么能在一定条件下替代体内研究？
    - 入门阅读：[Amidon et al., A Theoretical Basis for a Biopharmaceutic Drug Classification（Pharm Res 1995）](https://doi.org/10.1023/A:1016212804288)
- **M2 新型递送系统**
  - `03-M2.1` 缓释 / 控释制剂 ★★
    - 学什么：缓释 / 控释制剂通过骨架扩散、膜控、渗透泵等机制延长或控制药物释放，减少给药次数、平稳血药浓度，但不能随意掰开或碾碎。
    - 学完能回答：缓释与控释在释放特性上有什么区别？ ／ 为什么碾碎缓释片可能造成危险？ ／ 扩散控制型释放可以如何用数学模型描述？
    - 入门阅读：[Siepmann & Siepmann, Modeling of diffusion controlled drug delivery（J Control Release 2012）](https://doi.org/10.1016/j.jconrel.2011.10.006)
  - `03-M2.2` 纳米递送与脂质纳米粒（LNP） ★★
    - 学什么：纳米递送系统（如脂质体、聚合物纳米粒、脂质纳米粒 LNP）可保护药物、改善分布或实现胞内递送；LNP 是 mRNA 等核酸药物的关键递送载体。
    - 学完能回答：LNP 通常由哪几类脂质组成，各起什么作用？ ／ 纳米制剂的体内分布为什么常富集在肝脏？ ／ 纳米药物在质量控制上有哪些额外挑战？
    - 入门阅读：[Hou et al., Lipid nanoparticles for mRNA delivery（Nat Rev Mater 2021）](https://doi.org/10.1038/s41578-021-00358-0)；[MSD Manual: Nanomedicine](https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/nanomedicine)
  - `03-M2.3` 靶向递送与抗体偶联药物（ADC） ★
    - 学什么：靶向递送让药物更多地到达病灶；抗体偶联药物（ADC）由抗体、连接子与细胞毒载荷组成，借抗体识别靶细胞后释放载荷。
    - 学完能回答：ADC 的三个组成部分各自影响哪些性质？ ／ 可裂解与不可裂解连接子有何区别？ ／ “旁观者效应”指什么？
    - 入门阅读：[Drago, Modi & Chandarlapaty, Unlocking the potential of antibody–drug conjugates for cancer therapy（Nat Rev Clin Oncol 2021）](https://doi.org/10.1038/s41571-021-00470-8)
- **M3 制药工程与质量**
  - `03-M3.1` 质量源于设计（QbD）与 ICH 质量指南 ★★ 🍃 [ICH 指南](https://www.ich.org/)
    - 学什么：质量源于设计（QbD）强调先定义目标产品质量特征，再通过风险评估和实验设计理解关键物料属性与工艺参数，把质量“设计进”产品而非仅靠终检，相关要求见 ICH Q8–Q12 等指南。
    - 学完能回答：目标产品质量概况（QTPP）与关键质量属性（CQA）是什么关系？ ／ 设计空间（design space）指什么？ ／ 机器学习可以在 QbD 的哪些环节提供帮助？
    - 入门阅读：[Yu et al., Understanding Pharmaceutical Quality by Design（AAPS J 2014）](https://doi.org/10.1208/s12248-014-9598-3)；[ICH Quality Guidelines（以官网最新版本为准）](https://www.ich.org/page/quality-guidelines)
  - `03-M3.2` GMP 与连续制造 ★
    - 学什么：药品生产质量管理规范（GMP）规定了生产与质量控制的最低要求；连续制造把传统分批生产改为连续流程，配合过程分析技术实现实时质量控制。
    - 学完能回答：GMP 关注哪些方面（人员、厂房、设备、文件、偏差处理等）？ ／ 连续制造相比批生产的优势与监管挑战是什么？ ／ 数据完整性在 GMP 中为什么重要？
    - 入门阅读：[FDA: Current Good Manufacturing Practice (CGMP) Regulations](https://www.fda.gov/drugs/pharmaceutical-quality-resources/current-good-manufacturing-practice-cgmp-regulations)；[ICH Quality Guidelines（含连续制造相关指南，以官网最新版本为准）](https://www.ich.org/page/quality-guidelines)
  - `03-M3.3` 稳定性研究与包装 ★
    - 学什么：稳定性研究考察药品在温度、湿度、光照等条件下质量随时间的变化，用于确定有效期与贮存条件；包装材料对防潮、避光与儿童安全也很关键。
    - 学完能回答：长期试验与加速试验分别用来做什么？ ／ 为什么有些药品要求避光或冷藏保存？ ／ 分装到药盒后，药品稳定性可能受到什么影响？
    - 入门阅读：[ICH Quality Guidelines（稳定性相关指南，以官网最新版本为准）](https://www.ich.org/page/quality-guidelines)
  - `03-M3.4` 仿制药一致性评价与生物等效性 ★★
    - 学什么：仿制药需证明与参比制剂药学等效且生物等效（体内暴露相当）；中国开展的仿制药质量和疗效一致性评价也以此为核心思路，具体要求以国家药监局官方文件为准。
    - 学完能回答：生物等效性研究通常比较哪些药代参数？ ／ 什么情况下可以申请生物等效性豁免？ ／ 一致性评价对药品市场和患者有什么影响？
    - 入门阅读：[FDA: Abbreviated New Drug Application (ANDA)](https://www.fda.gov/drugs/types-applications/abbreviated-new-drug-application-anda)
- **M4 适老化与以患者为中心的制剂**
  - `03-M4.1` 吞咽困难患者的剂型选择（口崩片、液体、可否掰开 / 研碎） ★★★
    - 学什么：吞咽困难在老年人中常见；剂型选择要考虑口崩片、液体制剂、颗粒剂等替代方案，并确认药品能否掰开或碾碎，缓释、肠溶等剂型通常不可碾碎。
    - 学完能回答：哪些剂型一般不能碾碎？为什么？ ／ 碾碎药物混入食物或经鼻饲给药时有哪些风险？ ／ 照护场景中如何快速查询某药能否碾碎？
    - 入门阅读：[ISMP: Do Not Crush 清单与相关推荐](https://www.ismp.org/recommendations/do-not-crush)；[MSD Manual: Dysphagia](https://www.msdmanuals.com/professional/gastrointestinal-disorders/esophageal-and-swallowing-disorders/dysphagia)
  - `03-M4.2` 包装与标签的适老化（大字、易开启、单剂量包装） ★★
    - 学什么：适老化包装与标签包括大字号与高对比度标签、易开启（同时兼顾儿童安全）的容器、按时间分格的单剂量包装等，目标是减少看错、拿错和漏服。
    - 学完能回答：老年人在识别和开启药品包装时常遇到哪些困难？ ／ 单剂量 / 泡罩分装如何帮助提高依从性？ ／ 易开启与儿童安全包装之间如何权衡？
    - 入门阅读：[MSD Manual: Adherence to a Medication Regimen](https://www.msdmanuals.com/professional/clinical-pharmacology/factors-affecting-response-to-medications/adherence-to-a-medication-regimen)；[MSD Manual: Pharmacists and Older Adults](https://www.msdmanuals.com/professional/geriatrics/providing-care-to-older-adults/pharmacists-and-older-adults)
  - `03-M4.3` 固定剂量复方与减少服药负担 ★★
    - 学什么：固定剂量复方把两种或以上活性成分做成一个制剂，可减少服药片数、简化方案、改善依从性，但会降低单独调整某一成分剂量的灵活性。
    - 学完能回答：固定剂量复方在哪些慢病中应用较多？ ／ 复方制剂的主要缺点是什么？ ／ 方案简化为什么是提升老年人依从性的重要手段？
    - 入门阅读：[Bangalore et al., Fixed-Dose Combinations Improve Medication Compliance: A Meta-Analysis（Am J Med 2007）](https://doi.org/10.1016/j.amjmed.2006.08.033)

#### 04 · 临床研究、法规与药物警戒 ★★

> 药从实验室走向患者的规则与证据体系
> 优先学习配方：1.1 临床分期 ｜ 1.3 终点与统计 ｜ 2.1 监管体系 ｜ 3.1 药物警戒

**学习路线**：`04-M1.1` 临床试验分期（I–IV 期） → `04-M1.2` 随机、对照、盲法与伦理审查 → `04-M1.3` 终点设计与统计分析（ITT、样本量） → `04-M1.5` 真实世界数据与真实世界证据（RWD / RWE） → `04-M1.4` 老年人在临床试验中的代表性不足问题 → `04-M2.1` 监管机构：NMPA、FDA、EMA 与 ICH → `04-M2.2` 新药申报路径（IND / NDA / BLA）概念 → `04-M2.3` GCP、GLP 与数据完整性 → `04-M2.4` AI / 软件作为医疗器械（SaMD）的监管思路 → `04-M3.1` 药物警戒与不良反应监测体系 → `04-M3.2` 自发报告数据库与信号检测（比例失衡分析） → `04-M3.3` 用药错误的分类与防范 → `04-M4.1` 处方审核与合理用药 → `04-M4.2` 药物重整（Medication Reconciliation） → `04-M4.3` 药学门诊与慢病管理中的药师角色

- **M1 临床试验**
  - `04-M1.1` 临床试验分期（I–IV 期） ★★★ 🍃 [ClinicalTrials.gov](https://clinicaltrials.gov/)
    - 学什么：临床试验通常分为 I 期（安全性与药代，常在少量受试者中进行）、II 期（初步疗效与剂量探索）、III 期（大样本确证疗效与安全性）和 IV 期（上市后研究）。
    - 学完能回答：各期试验的主要目的分别是什么？ ／ 为什么 III 期试验常需要多中心、较大样本？ ／ 上市后研究能发现哪些上市前难以发现的问题？
    - 入门阅读：[FDA: Step 3 Clinical Research](https://www.fda.gov/patients/drug-development-process/step-3-clinical-research)；[ClinicalTrials.gov（临床试验注册库）](https://clinicaltrials.gov/)
  - `04-M1.2` 随机、对照、盲法与伦理审查 ★★
    - 学什么：随机化平衡已知和未知的混杂因素，对照组提供比较基准，盲法减少评估偏倚；所有涉及人的研究都需伦理审查与受试者知情同意。
    - 学完能回答：随机化与盲法分别主要控制哪类偏倚？ ／ 安慰剂对照在什么情况下不符合伦理？ ／ 认知障碍老人参加试验时，知情同意如何处理？
    - 入门阅读：[WMA Declaration of Helsinki（赫尔辛基宣言）](https://www.wma.net/policies-post/wma-declaration-of-helsinki/)；[ICH Efficacy Guidelines（含 E6 GCP，以官网最新版本为准）](https://www.ich.org/page/efficacy-guidelines)
  - `04-M1.3` 终点设计与统计分析（ITT、样本量） ★★
    - 学什么：终点是衡量疗效的指标（临床终点、替代终点、患者报告结局等）；统计分析需预先规定，意向治疗（ITT）分析按随机分组分析以保留随机化带来的可比性，样本量由预期效应与把握度决定。
    - 学完能回答：替代终点有什么优点和风险？ ／ ITT 分析与符合方案集（PP）分析有何区别？ ／ 样本量计算需要哪些输入？
    - 入门阅读：[ICH Efficacy Guidelines（含 E9 统计原则，以官网最新版本为准）](https://www.ich.org/page/efficacy-guidelines)；[CONSORT / SPIRIT（临床试验报告与方案规范）](https://www.consort-spirit.org/)
  - `04-M1.4` 老年人在临床试验中的代表性不足问题 ★★ 🍃 [ClinicalTrials.gov](https://clinicaltrials.gov/)
    - 学什么：老年人（尤其是高龄、多病共存、多重用药者）在临床试验中常被排除或比例偏低，导致上市证据难以直接外推到真实老年患者；ICH E7 专门讨论老年人群研究。
    - 学完能回答：试验中常见的哪些排除标准会把老年人挡在门外？ ／ 证据不足会对老年人的用药决策造成什么影响？ ／ 真实世界数据能在多大程度上弥补这一缺口？
    - 入门阅读：[ICH Efficacy Guidelines（含 E7 老年人群研究，以官网最新版本为准）](https://www.ich.org/page/efficacy-guidelines)；[MSD Manual: Overview of Pharmacologic Therapy in Older Adults](https://www.msdmanuals.com/professional/geriatrics/pharmacologic-therapy-in-older-adults/overview-of-pharmacologic-therapy-in-older-adults)
  - `04-M1.5` 真实世界数据与真实世界证据（RWD / RWE） ★★
    - 学什么：真实世界数据（RWD）来自电子病历、医保理赔、登记库、可穿戴设备等日常医疗数据；经过严谨分析得到的真实世界证据（RWE）可支持监管与临床决策。
    - 学完能回答：RWD 相比随机对照试验数据有哪些偏倚风险？ ／ 目标试验模拟（target trial emulation）想解决什么问题？ ／ 居家监测数据成为 RWD 需要满足哪些质量要求？
    - 入门阅读：[FDA: Real-World Evidence](https://www.fda.gov/science-research/science-and-research-special-topics/real-world-evidence)
- **M2 监管与法规**
  - `04-M2.1` 监管机构：NMPA、FDA、EMA 与 ICH ★★ 🍃 [ICH 指南](https://www.ich.org/)、[国家药品监督管理局（NMPA）](https://www.nmpa.gov.cn/)、[FDA Drugs](https://www.fda.gov/drugs) 🃏 [ICH 指南体系（Q / S / E / M）](https://www.ich.org/)
    - 学什么：主要药品监管机构包括中国国家药品监督管理局（NMPA）、美国 FDA、欧洲药品管理局（EMA）等；ICH 协调各国技术要求，使研发资料可在多地区通用。
    - 学完能回答：NMPA、FDA、EMA 的审评体系各有什么特点？ ／ 加入 ICH 对中国药品研发有什么意义？ ／ 查询某国最新监管要求应以什么来源为准？
    - 入门阅读：[ICH 官方网站](https://www.ich.org/)；[European Medicines Agency（EMA）](https://www.ema.europa.eu/en)
  - `04-M2.2` 新药申报路径（IND / NDA / BLA）概念 ★★
    - 学什么：新药在进入人体试验前需提交临床试验申请（美国称 IND），完成研究后提交上市申请（化学药为 NDA，生物制品为 BLA）；中国有对应的临床试验申请与上市许可申请制度。
    - 学完能回答：IND 申请通常需要包含哪些资料？ ／ NDA 与 BLA 的适用对象有何不同？ ／ 加速审批、优先审评等特殊通道的目的是什么？
    - 入门阅读：[FDA: Investigational New Drug (IND) Application](https://www.fda.gov/drugs/types-applications/investigational-new-drug-ind-application)；[FDA: New Drug Application (NDA)](https://www.fda.gov/drugs/types-applications/new-drug-application-nda)
  - `04-M2.3` GCP、GLP 与数据完整性 ★
    - 学什么：GCP 规范临床试验的设计、实施、记录与报告，GLP 规范非临床安全性研究；数据完整性要求数据可归因、清晰、同步、原始、准确（常称 ALCOA 原则）。
    - 学完能回答：GCP 中申办者、研究者与伦理委员会各承担什么职责？ ／ ALCOA 各字母代表什么？ ／ 在 AI 研究中使用临床数据时，数据完整性要求意味着什么？
    - 入门阅读：[ICH Efficacy Guidelines（含 E6 GCP，以官网最新版本为准）](https://www.ich.org/page/efficacy-guidelines)；[FDA 指导原则检索（以官网最新文件为准）](https://www.fda.gov/regulatory-information/search-fda-guidance-documents)
  - `04-M2.4` AI / 软件作为医疗器械（SaMD）的监管思路 ★★
    - 学什么：独立承担医疗用途的软件可能被作为医疗器械（SaMD）监管；监管通常按风险分级，并关注临床验证、算法变更管理和上市后性能监测，AI 软件的具体要求以各国最新官方文件为准。
    - 学完能回答：什么样的健康类软件会被认定为医疗器械？ ／ 基于机器学习的软件更新为什么给监管带来新问题？ ／ 一个用药提醒 App 和一个给出剂量建议的 App 在监管上可能有何不同？
    - 入门阅读：[FDA: Software as a Medical Device (SaMD)](https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd)
- **M3 药物警戒与用药安全**
  - `04-M3.1` 药物警戒与不良反应监测体系 ★★ 🍃 [FDA Drugs](https://www.fda.gov/drugs)
    - 学什么：药物警戒是发现、评估、理解和预防药物不良反应及其他药物相关问题的科学与活动，贯穿药品全生命周期，上市后的自发报告是重要信息来源。
    - 学完能回答：上市前临床试验为什么无法发现所有不良反应？ ／ 一个国家的药物警戒体系通常包括哪些组成部分？ ／ WHO 国际药物监测合作中心（Uppsala Monitoring Centre）承担什么角色？
    - 入门阅读：[WHO: Pharmacovigilance](https://www.who.int/teams/regulation-prequalification/regulation-and-safety/pharmacovigilance)；[Uppsala Monitoring Centre](https://who-umc.org/)
  - `04-M3.2` 自发报告数据库与信号检测（比例失衡分析） ★★
    - 学什么：自发报告数据库收集医务人员与公众上报的不良事件；比例失衡分析（如报告比值比 ROR、比例报告比 PRR、贝叶斯方法）用于从中发现可能的药物—事件信号。
    - 学完能回答：比例失衡分析的基本思想是什么？ ／ 自发报告存在哪些偏倚（如漏报、刺激报告）？ ／ 信号被检测出来后，还需要哪些步骤才能确认因果？
    - 入门阅读：[Bate & Evans, Quantitative signal detection using spontaneous ADR reporting（Pharmacoepidemiol Drug Saf 2009）](https://doi.org/10.1002/pds.1742)；[FDA 不良事件监测系统说明页](https://www.fda.gov/drugs/surveillance/questions-and-answers-fdas-adverse-event-reporting-system-faers)
  - `04-M3.3` 用药错误的分类与防范 ★★ 🍃 [WHO 用药无害（Medication Without Harm）](https://www.who.int/initiatives/medication-without-harm)
    - 学什么：用药错误可发生在处方、转抄、调配、给药与监测等任一环节，常按错误类型与造成伤害的程度分类；防范依靠系统设计而不是只责备个人。
    - 学完能回答：用药错误、不良反应、不良事件三者是什么关系？ ／ 养老机构中给药环节常见的错误类型有哪些？ ／ 条码扫描、电子处方等技术如何减少用药错误？
    - 入门阅读：[NCC MERP: Taxonomy of Medication Errors](https://www.nccmerp.org/taxonomy-medication-errors)；[MSD Manual: Medication Errors](https://www.msdmanuals.com/professional/clinical-pharmacology/concepts-in-pharmacotherapy/medication-errors)
- **M4 药学服务与临床药学**
  - `04-M4.1` 处方审核与合理用药 ★★
    - 学什么：处方审核由药师检查处方的适应证、剂量、相互作用、禁忌与重复用药等问题；合理用药强调在正确的适应证下以合适的剂量、疗程和成本用药。
    - 学完能回答：处方审核通常检查哪些方面？ ／ 老年人中常见的药物相关问题有哪些？ ／ 规则引擎辅助审方的优点与局限是什么？
    - 入门阅读：[MSD Manual: Medication-Related Problems in Older Adults](https://www.msdmanuals.com/professional/geriatrics/pharmacologic-therapy-in-older-adults/medication-related-problems-in-older-adults)；[MSD Manual: Medication Errors](https://www.msdmanuals.com/professional/clinical-pharmacology/concepts-in-pharmacotherapy/medication-errors)
  - `04-M4.2` 药物重整（Medication Reconciliation） ★★★
    - 学什么：药物重整是在入院、转科、出院等照护交接时，比较患者实际在用药物与新医嘱，发现并解决遗漏、重复、剂量错误等差异的过程。
    - 学完能回答：药物重整通常包括哪几个步骤？ ／ 为什么照护交接是用药错误的高发环节？ ／ 获取“最佳可得用药史”需要哪些信息来源？
    - 入门阅读：[AHRQ PSNet: Medication Reconciliation](https://psnet.ahrq.gov/primer/medication-reconciliation)；[Mueller et al., Hospital-Based Medication Reconciliation Practices: A Systematic Review（Arch Intern Med 2012）](https://doi.org/10.1001/archinternmed.2012.2246)
  - `04-M4.3` 药学门诊与慢病管理中的药师角色 ★
    - 学什么：临床药师参与用药评估、方案优化、患者教育与随访，在慢病管理与老年多重用药管理中发挥作用，常与医生、护士组成多学科团队。
    - 学完能回答：药师主导的用药评估通常包括哪些内容？ ／ 药学门诊与传统药房调剂服务有什么不同？ ／ 数字化工具如何帮助药师开展远程随访？
    - 入门阅读：[MSD Manual: Pharmacists and Older Adults](https://www.msdmanuals.com/professional/geriatrics/providing-care-to-older-adults/pharmacists-and-older-adults)

#### 05 · AIDD：AI 驱动的药物发现 ★★★

> 你的主场：把机器学习用于分子、蛋白与临床数据
> 优先学习配方：1.1 分子表示学习 ｜ 2.1 性质预测 ｜ 3.1 结构预测 ｜ 4.1 分子生成

**学习路线**：`05-M1.3` 公共数据库：ChEMBL、PubChem、PDB、ZINC、DrugBank → `05-M1.1` 分子表示学习：指纹、图神经网络、SMILES 语言模型 → `05-M1.4` 数据划分陷阱：随机 vs 骨架划分、数据泄漏 → `05-M2.1` QSAR 与分子性质预测 → `05-M2.2` ADMET 预测模型 → `05-M2.4` 不确定性估计与适用域 → `05-M1.2` 蛋白表示：序列语言模型（ESM 类）与结构表示 → `05-M3.1` 蛋白结构预测（AlphaFold 系列、RoseTTAFold、ESMFold） → `05-M3.2` 生物分子复合物结构预测（蛋白—配体、蛋白—核酸） → `05-M3.3` 深度学习分子对接（如 DiffDock） → `05-M2.3` 药物—靶点相互作用（DTI）与结合亲和力预测 → `05-M3.4` 结合自由能计算与 ML 加速 → `05-M4.1` 分子生成：VAE、强化学习、扩散模型、语言模型 → `05-M4.4` 多目标优化与可合成性评估 → `05-M4.5` 逆合成与反应预测 → `05-M4.2` 基于口袋的三维分子生成 → `05-M4.3` 蛋白质设计（如 RFdiffusion、ProteinMPNN） → `05-M5.1` 主动学习与贝叶斯优化 → `05-M5.3` LLM / Agent 在药物研发中的应用（文献挖掘、工具调用） → `05-M5.2` 自动化实验室（Self-driving Lab）与 DMTA 闭环 → `05-M5.4` AI 临床：患者分层、试验设计与药物重定位

- **M1 数据与表示**
  - `05-M1.1` 分子表示学习：指纹、图神经网络、SMILES 语言模型 ★★★ 🍃 [DeepChem](https://deepchem.io/)、[Chemprop](https://github.com/chemprop/chemprop)
    - 学什么：把分子变成模型能吃的向量或图：手工指纹（如 ECFP）、图神经网络在原子—键图上做消息传递、或把 SMILES 当作序列交给语言模型。
    - 学完能回答：分子指纹、分子图、SMILES 三种表示各自丢失或保留了哪些信息？ ／ 消息传递神经网络（MPNN）一轮“消息—更新—读出”分别在做什么？ ／ 同一个分子有多个合法 SMILES，这对序列模型意味着什么？
    - 入门阅读：[Gilmer et al., Neural Message Passing for Quantum Chemistry（MPNN 统一框架）](https://arxiv.org/abs/1704.01212)；[RDKit 入门文档（分子读写与指纹）](https://www.rdkit.org/docs/GettingStartedInPython.html)
  - `05-M1.2` 蛋白表示：序列语言模型（ESM 类）与结构表示 ★★★ 🃏 [ESM-2 / ESMFold](https://github.com/facebookresearch/esm)
    - 学什么：把氨基酸序列（或结构）编码成向量；蛋白语言模型（如 ESM）在海量序列上自监督预训练，其表示可迁移到功能、结构等下游任务。
    - 学完能回答：蛋白语言模型的掩码预训练和 NLP 里的 BERT 有何异同？ ／ 为什么只靠单条序列的嵌入也能包含结构信息？ ／ 序列表示与结构表示各适合什么下游任务？
    - 入门阅读：[Rives et al., PNAS 2021（ESM：无监督学习 2.5 亿条蛋白序列）](https://doi.org/10.1073/pnas.2016239118)；[Lin et al., Science 2023（ESM-2 / ESMFold）](https://doi.org/10.1126/science.ade2574)
  - `05-M1.3` 公共数据库：ChEMBL、PubChem、PDB、ZINC、DrugBank ★★ 🍃 [PubChem](https://pubchem.ncbi.nlm.nih.gov/)、[ChEMBL](https://www.ebi.ac.uk/chembl/)、[ZINC](https://zinc.docking.org/)、[DrugBank](https://go.drugbank.com/)、[RCSB PDB](https://www.rcsb.org/)
    - 学什么：AIDD 的数据底座：ChEMBL（类药分子活性）、PubChem（化合物与筛选数据）、PDB（实验结构）、ZINC（可购买化合物）、DrugBank（药物与靶点知识）各有分工与许可条款。
    - 学完能回答：想做某靶点的活性预测，应该去哪个库取数据？要注意哪些活性类型与单位？ ／ 实验结构（PDB）和预测结构（AlphaFold DB）在使用上有什么区别？ ／ 哪些数据库对商业使用有许可限制？
    - 入门阅读：[ChEMBL 官方站点](https://www.ebi.ac.uk/chembl/)；[PDB-101（RCSB 的结构生物学入门教育资源）](https://pdb101.rcsb.org/)
  - `05-M1.4` 数据划分陷阱：随机 vs 骨架划分、数据泄漏 ★★★ 🍃 [Therapeutics Data Commons（TDC）](https://tdcommons.ai/)、同一个 ADMET 任务对比随机划分与骨架划分（练习）
    - 学什么：分子数据里相似结构会扎堆，随机划分会让测试集与训练集过于相似而高估性能；骨架划分、时间划分等更接近真实的外推场景。
    - 学完能回答：什么是 Bemis–Murcko 骨架？骨架划分如何构造？ ／ 为什么同一模型在随机划分和骨架划分上性能会差很多？ ／ 除了划分方式，还有哪些常见的数据泄漏来源（如重复分子、同一实验批次）？
    - 入门阅读：[Wu et al., MoleculeNet: A Benchmark for Molecular Machine Learning](https://arxiv.org/abs/1703.00564)；[DeepChem Splitters 文档（随机 / 骨架 / 聚类等划分实现）](https://deepchem.readthedocs.io/en/latest/api_reference/splitters.html)
- **M2 性质与活性预测**
  - `05-M2.1` QSAR 与分子性质预测 ★★★ 🍃 [ChEMBL](https://www.ebi.ac.uk/chembl/)、[DeepChem](https://deepchem.io/)、[Chemprop](https://github.com/chemprop/chemprop) 🃏 [Chemprop（D-MPNN）](https://github.com/chemprop/chemprop)
    - 学什么：定量构效关系（QSAR）：用分子描述符或学到的表示，回归或分类预测活性与性质；经典流程强调数据整理、验证和适用域。
    - 学完能回答：一个规范的 QSAR 建模流程包括哪些步骤？ ／ 描述符 + 随机森林 与 图神经网络 各自的优劣是什么？ ／ 活性悬崖（activity cliff）为什么会让 QSAR 模型失效？
    - 入门阅读：[Cherkasov et al., QSAR Modeling: Where Have You Been? Where Are You Going To?（J Med Chem 2014 综述）](https://doi.org/10.1021/jm4004285)；[Chemprop 文档（消息传递网络性质预测工具）](https://chemprop.readthedocs.io/)
  - `05-M2.2` ADMET 预测模型 ★★★ 🍃 [SwissADME](https://www.swissadme.ch/)、[Therapeutics Data Commons（TDC）](https://tdcommons.ai/)、同一个 ADMET 任务对比随机划分与骨架划分（练习）
    - 学什么：用模型预测吸收、分布、代谢、排泄与毒性（ADMET）终点，在合成前淘汰成药性差的分子；多为数据量有限、噪声较大的任务。
    - 学完能回答：常见 ADMET 终点（溶解度、渗透性、CYP 抑制、hERG 等）分别对应药代 / 毒理中的什么问题？ ／ 为什么 ADMET 数据往往比活性数据更难建模？ ／ 体外 ADMET 预测与体内药代表现之间有什么差距？
    - 入门阅读：[TDC ADMET Benchmark Group](https://tdcommons.ai/benchmark/admet_group/overview/)；[Daina et al., SwissADME（Sci Rep 2017）](https://doi.org/10.1038/srep42717)
  - `05-M2.3` 药物—靶点相互作用（DTI）与结合亲和力预测 ★★
    - 学什么：预测药物（小分子）与靶点（蛋白）是否结合及结合强弱；输入通常是分子表示 + 蛋白序列 / 结构表示，难点在新靶点、新骨架上的泛化。
    - 学完能回答：DTI 的分类任务与亲和力回归任务（如 Kd / Ki）有何区别？ ／ “冷启动”划分（新药物 / 新靶点）为什么比随机划分难得多？ ／ 只用序列的 DTI 模型与基于结构的方法相比有哪些局限？
    - 入门阅读：[Öztürk et al., DeepDTA: Deep Drug-Target Binding Affinity Prediction](https://arxiv.org/abs/1801.10193)；[TDC DTI 任务说明](https://tdcommons.ai/multi_pred_tasks/dti/)
  - `05-M2.4` 不确定性估计与适用域 ★★
    - 学什么：模型应告诉你“它有多确定”和“这个分子是否在它见过的化学空间内”；常用集成、MC Dropout、证据学习等估计不确定性，用相似度等界定适用域。
    - 学完能回答：偶然不确定性与认知不确定性有什么区别？ ／ 如何评价一个不确定性估计是否“校准”良好？ ／ 在先导优化中，不确定性可以怎样指导下一轮实验选择？
    - 入门阅读：[Hirschfeld et al., Uncertainty Quantification Using Neural Networks for Molecular Property Prediction](https://arxiv.org/abs/2005.10036)；[Chemprop 文档（含不确定性估计用法）](https://chemprop.readthedocs.io/)
- **M3 结构驱动方法**
  - `05-M3.1` 蛋白结构预测（AlphaFold 系列、RoseTTAFold、ESMFold） ★★★ 🍃 [AlphaFold 蛋白结构数据库](https://alphafold.ebi.ac.uk/)、[ColabFold](https://github.com/sokrypton/ColabFold) 🃏 [AlphaFold 2](https://www.nature.com/articles/s41586-021-03819-2)
    - 学什么：从氨基酸序列预测三维结构；AlphaFold 2 结合多序列比对与注意力网络大幅提升精度，并附带每残基置信度（pLDDT）。
    - 学完能回答：多序列比对（MSA）为什么能提供结构信息？ ／ pLDDT 与 PAE 分别表示什么？低置信区域该如何解读？ ／ 预测结构直接用于药物设计时要注意什么（如构象、口袋柔性）？
    - 入门阅读：[Jumper et al., AlphaFold 2（Nature 2021）](https://www.nature.com/articles/s41586-021-03819-2)；[Mirdita et al., ColabFold: making protein folding accessible to all（Nat Methods 2022）](https://doi.org/10.1038/s41592-022-01488-1)
  - `05-M3.2` 生物分子复合物结构预测（蛋白—配体、蛋白—核酸） ★★ 🃏 [AlphaFold 3](https://www.nature.com/articles/s41586-024-07487-w)
    - 学什么：把结构预测从单链扩展到蛋白—蛋白、蛋白—配体、蛋白—核酸等复合物；AlphaFold 3 等模型引入扩散式结构生成来处理多类分子。
    - 学完能回答：复合物结构预测相比单链结构预测多了哪些难点？ ／ 预测出的蛋白—配体复合物能否直接代替对接或实验结构？证据是什么？ ／ 这类模型的使用条款（代码、权重、服务器）对科研有何影响？
    - 入门阅读：[Abramson et al., AlphaFold 3（Nature 2024）](https://www.nature.com/articles/s41586-024-07487-w)；[AlphaFold Server（官方在线服务）](https://alphafoldserver.com/)
  - `05-M3.3` 深度学习分子对接（如 DiffDock） ★★ 🍃 对一个已知复合物做重对接并计算 RMSD（练习）、[DiffDock 代码](https://github.com/gcorso/DiffDock) 🃏 [DiffDock](https://arxiv.org/abs/2210.01776)
    - 学什么：用深度学习直接生成配体在口袋中的结合姿态（如把对接视为生成问题的 DiffDock），并需用物理合理性检查和新靶点测试来评估其真实可用性。
    - 学完能回答：传统对接的“搜索 + 打分”与生成式对接的思路有何不同？ ／ 只看 RMSD < 2 Å 的成功率为什么不够？还应检查什么？ ／ 在训练集中未见过的蛋白上，深度学习对接表现如何变化？
    - 入门阅读：[Corso et al., DiffDock](https://arxiv.org/abs/2210.01776)；[Buttenschoen et al., PoseBusters（物理合理性与泛化检验）](https://arxiv.org/abs/2308.05777)
  - `05-M3.4` 结合自由能计算与 ML 加速 ★
    - 学什么：用基于物理的炼金术自由能方法（如 FEP）计算相对结合自由能，精度高但计算昂贵；机器学习可用于加速、筛选或修正这类计算。
    - 学完能回答：相对结合自由能（RBFE）和绝对结合自由能计算的区别是什么？ ／ 为什么 FEP 常用于先导优化阶段而不是大规模虚拟筛选？ ／ ML 打分函数与 FEP 可以如何互补？
    - 入门阅读：[Chodera et al., Alchemical free energy methods for drug discovery: progress and challenges（2011 综述）](https://doi.org/10.1016/j.sbi.2011.01.011)；[OpenFE（开源自由能计算生态）](https://openfree.energy/)
- **M4 生成式设计**
  - `05-M4.1` 分子生成：VAE、强化学习、扩散模型、语言模型 ★★★ 🍃 [REINVENT 4](https://github.com/MolecularAI/REINVENT4)
    - 学什么：用生成模型（VAE、强化学习、语言模型、扩散模型等）在化学空间中提出新分子，而不只是筛选已有库；关键是可控地朝目标性质优化。
    - 学完能回答：在连续隐空间里优化分子（VAE）与用强化学习微调生成器，思路有何不同？ ／ 生成分子常用哪些评价指标（有效性、新颖性、多样性等）？它们的局限是什么？ ／ 为什么“模型打分高”的生成分子不一定好？
    - 入门阅读：[Sanchez-Lengeling & Aspuru-Guzik, Inverse molecular design using machine learning（Science 2018 综述）](https://doi.org/10.1126/science.aat2663)；[Gómez-Bombarelli et al., Automatic chemical design using a data-driven continuous representation of molecules](https://arxiv.org/abs/1610.02415)
  - `05-M4.2` 基于口袋的三维分子生成 ★★
    - 学什么：以蛋白结合口袋的三维结构为条件，直接生成放在口袋里的分子（原子类型 + 坐标），常用自回归或等变扩散模型。
    - 学完能回答：为什么口袋条件生成通常需要旋转 / 平移等变的网络？ ／ 三维生成的分子要检查哪些化学与几何合理性？ ／ 用对接分数评价生成分子有什么偏差？
    - 入门阅读：[Peng et al., Pocket2Mol](https://arxiv.org/abs/2205.07249)；[Guan et al., TargetDiff：3D Equivariant Diffusion for Target-Aware Molecule Generation](https://arxiv.org/abs/2303.03543)
  - `05-M4.3` 蛋白质设计（如 RFdiffusion、ProteinMPNN） ★★ 🍃 [RFdiffusion 代码](https://github.com/RosettaCommons/RFdiffusion) 🃏 [RFdiffusion](https://www.nature.com/articles/s41586-023-06415-8)
    - 学什么：先生成满足功能约束的蛋白骨架（如 RFdiffusion），再为骨架设计氨基酸序列（如 ProteinMPNN），最后用结构预测与实验筛选验证。
    - 学完能回答：“骨架生成 → 序列设计 → 结构预测自洽检查”这条流程每一步解决什么问题？ ／ 蛋白设计与小分子设计在表示和评价上有何不同？ ／ 计算设计的蛋白为什么仍需要大量实验验证？
    - 入门阅读：[Watson et al., RFdiffusion（Nature 2023）](https://www.nature.com/articles/s41586-023-06415-8)；[Dauparas et al., ProteinMPNN（Science 2022）](https://doi.org/10.1126/science.add2187)
  - `05-M4.4` 多目标优化与可合成性评估 ★★
    - 学什么：真实的分子设计要同时优化活性、选择性、ADMET 与可合成性，属于多目标权衡；需要合理的打分组合与基准来避免模型“钻打分漏洞”。
    - 学完能回答：加权求和、帕累托前沿两种多目标处理方式各有什么问题？ ／ 合成可及性评分（SA score）是怎么估计的？它能代替真实合成路线评估吗？ ／ 什么是生成模型的“奖励投机”（reward hacking）？如何防范？
    - 入门阅读：[Ertl & Schuffenhauer, Synthetic accessibility score（J Cheminform 2009）](https://doi.org/10.1186/1758-2946-1-8)；[Brown et al., GuacaMol: Benchmarking Models for De Novo Molecular Design](https://arxiv.org/abs/1811.09621)
  - `05-M4.5` 逆合成与反应预测 ★★
    - 学什么：逆合成从目标分子反推可行的合成路线，由单步反应预测模型 + 多步搜索（如蒙特卡洛树搜索）组成；正向反应预测则判断给定反应物会生成什么。
    - 学完能回答：基于模板与无模板的单步逆合成方法有何区别？ ／ 多步路线规划中，搜索终止条件（可购买原料）为何重要？ ／ 计算给出的路线为什么仍需化学家判断？
    - 入门阅读：[Coley et al., Machine Learning in Computer-Aided Synthesis Planning（Acc Chem Res 2018）](https://doi.org/10.1021/acs.accounts.8b00087)；[AiZynthFinder（开源逆合成规划工具）](https://github.com/MolecularAI/aizynthfinder)
- **M5 闭环与智能体**
  - `05-M5.1` 主动学习与贝叶斯优化 ★★
    - 学什么：实验昂贵时，用代理模型 + 采集函数决定下一批该测哪些分子（主动学习 / 贝叶斯优化），在探索与利用之间权衡，用更少实验找到更好的化合物。
    - 学完能回答：高斯过程代理模型和采集函数（如 EI、UCB）各自承担什么角色？ ／ 批量（batch）选择相比一次选一个多了什么难点？ ／ 主动学习在数据很少的冷启动阶段可能出现什么问题？
    - 入门阅读：[Shahriari et al., Taking the Human Out of the Loop: A Review of Bayesian Optimization（Proc IEEE 2016）](https://doi.org/10.1109/JPROC.2015.2494218)；[BoTorch（PyTorch 贝叶斯优化库）文档](https://botorch.org/)
  - `05-M5.2` 自动化实验室（Self-driving Lab）与 DMTA 闭环 ★★
    - 学什么：自驱动实验室把设计—合成—测试—分析（DMTA）闭环自动化：算法提出实验，机器人执行，数据回流更新模型；也是 AIDD 与机器人学的直接交汇点。
    - 学完能回答：一个自驱动实验室由哪些模块组成？哪一环通常是瓶颈？ ／ 闭环系统中如何保证实验数据质量与可复现性？ ／ 化学自动化实验和家庭服务机器人在操作需求上有什么共通与差异？
    - 入门阅读：[Tom et al., Self-Driving Laboratories for Chemistry and Materials Science（Chem Rev 2024 综述）](https://doi.org/10.1021/acs.chemrev.4c00055)；[Boiko et al., Autonomous chemical research with large language models（Nature 2023）](https://doi.org/10.1038/s41586-023-06792-0)
  - `05-M5.3` LLM / Agent 在药物研发中的应用（文献挖掘、工具调用） ★★★ 🍃 做一个调用 RDKit / PubChem 的药物问答小 Agent（练习）
    - 学什么：让大语言模型调用化学工具（检索、性质计算、反应预测等）完成多步任务；工具让回答可核查，但幻觉、安全与评测仍是主要问题。
    - 学完能回答：为什么化学问答要让 LLM 调用工具，而不是直接作答？ ／ 一个化学 Agent 的工具清单应如何设计？如何记录与展示信息来源？ ／ LLM Agent 在药物研发中有哪些安全与双重用途风险？
    - 入门阅读：[Bran et al., ChemCrow: Augmenting large-language models with chemistry tools](https://arxiv.org/abs/2304.05376)；[Boiko et al., Autonomous chemical research with large language models（Nature 2023）](https://doi.org/10.1038/s41586-023-06792-0)
  - `05-M5.4` AI 临床：患者分层、试验设计与药物重定位 ★★
    - 学什么：AI 在临床端的用途包括为已有药物寻找新适应症（药物重定位）、患者分层与试验设计辅助；这些应用对证据等级与监管要求更高。
    - 学完能回答：药物重定位的计算方法大致有哪几类（基于网络、基于签名、基于结构等）？ ／ 为什么计算预测的重定位候选仍需临床证据验证？ ／ 老年人群在临床试验中的代表性不足，对 AI 模型训练数据有什么影响？
    - 入门阅读：[Pushpakom et al., Drug repurposing: progress, challenges and recommendations（Nat Rev Drug Discov 综述）](https://doi.org/10.1038/nrd.2018.168)；[ClinicalTrials.gov（临床试验注册库）](https://clinicaltrials.gov/)

### 〔具身智能〕

#### 06 · 机器人学基础 ★★

> 具身智能的物理地基：机构、运动学、动力学与系统软件
> 优先学习配方：1.2 正逆运动学 ｜ 2.1 动力学 ｜ 3.1 ROS 2 ｜ 4.1 机器人形态

**学习路线**：`06-M1.1` 位姿表示：旋转矩阵、欧拉角、四元数、齐次变换 → `06-M1.2` 正运动学与逆运动学 → `06-M1.3` 雅可比矩阵与奇异性 → `06-M1.4` 移动机器人运动学（差速、全向） → `06-M3.1` ROS 2：节点、话题、服务、动作 → `06-M3.2` URDF / MJCF 机器人描述 → `06-M3.3` 坐标系管理（TF）与时间同步 → `06-M2.1` 刚体动力学：牛顿—欧拉与拉格朗日方法 → `06-M2.2` 接触、摩擦与抓取力学 → `06-M4.1` 机器人形态：机械臂、移动底盘、移动操作、四足、人形 → `06-M4.2` 执行器：电机、减速器、力控 / 柔性驱动 → `06-M4.3` 传感器：编码器、IMU、力 / 力矩、触觉、相机、激光雷达 → `06-M4.5` 安全：协作机器人标准与人机交互安全 → `06-M4.4` 灵巧手与末端执行器 → `06-M2.3` 腿足与平衡（ZMP 等概念） → `06-M3.4` 实时性与嵌入式控制

- **M1 运动学**
  - `06-M1.1` 位姿表示：旋转矩阵、欧拉角、四元数、齐次变换 ★★★
    - 学什么：机器人中每个部件和目标都有自己的坐标系；用旋转矩阵、欧拉角、四元数表示姿态，用 4×4 齐次变换同时表示位置与姿态，并通过矩阵相乘串联多个坐标系。
    - 学完能回答：旋转矩阵的列向量有什么几何含义？ ／ 四元数插值（如 slerp）为什么比欧拉角插值更平滑？ ／ “相对于固定系”与“相对于本体系”旋转，矩阵乘法顺序有何不同？
    - 入门阅读：[Lynch & Park, Modern Robotics（第 3 章刚体运动，含视频）](https://modernrobotics.northwestern.edu/)
  - `06-M1.2` 正运动学与逆运动学 ★★★ 🍃 [Modern Robotics（教材与课程）](https://modernrobotics.northwestern.edu/)、手推一个 2 自由度平面机械臂的正逆运动学并用 Python 可视化（练习）
    - 学什么：正运动学由关节角计算末端位姿，逆运动学由期望末端位姿反求关节角；逆解可能多解、无解，常用解析法或数值迭代法求解。
    - 学完能回答：为什么逆运动学通常比正运动学难？ ／ 指数积（PoE）公式与 DH 参数法有何不同？ ／ 数值逆解失败的常见原因有哪些？
    - 入门阅读：[Lynch & Park, Modern Robotics（第 4、6 章正 / 逆运动学）](https://modernrobotics.northwestern.edu/)
  - `06-M1.3` 雅可比矩阵与奇异性 ★★ 🍃 手推一个 2 自由度平面机械臂的正逆运动学并用 Python 可视化（练习）
    - 学什么：雅可比矩阵把关节速度映射为末端速度，也把末端力映射为关节力矩；雅可比降秩时机器人处于奇异位形，某些方向无法运动且逆解会发散。
    - 学完能回答：如何从雅可比判断机器人是否接近奇异？ ／ 为什么奇异位形附近关节速度会变得很大？ ／ 雅可比转置在力控中有什么用途？
    - 入门阅读：[Lynch & Park, Modern Robotics（第 5 章速度运动学与静力学）](https://modernrobotics.northwestern.edu/)
  - `06-M1.4` 移动机器人运动学（差速、全向） ★★
    - 学什么：移动机器人运动学描述轮速与底盘运动的关系：差速驱动受非完整约束不能侧移，全向轮 / 麦克纳姆轮底盘可在平面内任意方向移动。
    - 学完能回答：什么是非完整约束？差速底盘为什么不能直接侧向平移？ ／ 如何由左右轮速计算差速底盘的线速度与角速度？ ／ 居家服务机器人选择底盘类型时要考虑哪些因素？
    - 入门阅读：[Lynch & Park, Modern Robotics（第 13 章轮式移动机器人）](https://modernrobotics.northwestern.edu/)
- **M2 动力学**
  - `06-M2.1` 刚体动力学：牛顿—欧拉与拉格朗日方法 ★★ 🍃 [Modern Robotics（教材与课程）](https://modernrobotics.northwestern.edu/)、[Pinocchio](https://github.com/stack-of-tasks/pinocchio)
    - 学什么：刚体动力学描述力 / 力矩与运动的关系；牛顿—欧拉法逐个连杆递推，拉格朗日法从能量出发，最终都得到“质量矩阵 × 加速度 + 科氏 / 离心项 + 重力项 = 关节力矩”的形式。
    - 学完能回答：动力学方程中各项分别代表什么物理意义？ ／ 正动力学与逆动力学分别用于仿真还是控制？ ／ 为什么递推牛顿—欧拉法计算效率高？
    - 入门阅读：[Lynch & Park, Modern Robotics（第 8 章开链动力学）](https://modernrobotics.northwestern.edu/)；[Pinocchio（高效刚体动力学库）](https://github.com/stack-of-tasks/pinocchio)
  - `06-M2.2` 接触、摩擦与抓取力学 ★★ 🍃 [Drake](https://drake.mit.edu/)
    - 学什么：操作任务离不开接触：摩擦锥描述不打滑的接触力范围，力封闭 / 形封闭描述抓取能否抵抗任意外力，接触建模也是仿真与 sim2real 的难点。
    - 学完能回答：库仑摩擦锥的含义是什么？ ／ 力封闭与形封闭有何区别？ ／ 为什么接触丰富的任务在仿真中容易失真？
    - 入门阅读：[Bicchi & Kumar, Robotic grasping and contact: a review（ICRA 2000）](https://doi.org/10.1109/ROBOT.2000.844081)；[Lynch & Park, Modern Robotics（第 12 章抓取与操作）](https://modernrobotics.northwestern.edu/)
  - `06-M2.3` 腿足与平衡（ZMP 等概念） ★
    - 学什么：腿足与人形机器人需要在支撑多边形内维持平衡；零力矩点（ZMP）是经典的步行稳定性判据，现代方法还结合模型预测控制与强化学习。
    - 学完能回答：ZMP 与支撑多边形是什么关系？ ／ 静态平衡与动态平衡有何区别？ ／ 为什么强化学习近年在腿足运动控制中表现突出？
    - 入门阅读：[Vukobratović & Borovac, Zero-Moment Point — Thirty Five Years of Its Life（2004）](https://doi.org/10.1142/S0219843604000083)
- **M3 机器人软件系统**
  - `06-M3.1` ROS 2：节点、话题、服务、动作 ★★★ 🍃 [ROS 2](https://docs.ros.org/)、[MoveIt](https://moveit.ai/)、[Nav2](https://docs.nav2.org/)
    - 学什么：ROS 2 是机器人软件的通用中间件：节点之间通过话题（发布 / 订阅）、服务（请求 / 响应）和动作（带反馈的长任务）通信，底层基于 DDS。
    - 学完能回答：话题、服务、动作分别适合什么场景？ ／ QoS 设置（可靠性、历史深度）会影响什么？ ／ 如何用命令行工具查看正在运行的节点和话题？
    - 入门阅读：[ROS 2 文档：Concepts](https://docs.ros.org/en/rolling/Concepts.html)
  - `06-M3.2` URDF / MJCF 机器人描述 ★★ 🍃 [MuJoCo](https://mujoco.org/)
    - 学什么：URDF（ROS 常用）与 MJCF（MuJoCo）用 XML 描述机器人的连杆、关节、惯性参数、碰撞与可视几何，是仿真、规划与控制共享的模型基础。
    - 学完能回答：URDF 中 link 与 joint 各包含哪些信息？ ／ 碰撞几何与可视几何为什么常分开定义？ ／ 惯性参数不准会对仿真与控制造成什么影响？
    - 入门阅读：[ROS 2 文档：URDF 教程](https://docs.ros.org/en/rolling/Tutorials/Intermediate/URDF/URDF-Main.html)；[MuJoCo XML Reference（MJCF）](https://mujoco.readthedocs.io/en/stable/XMLreference.html)
  - `06-M3.3` 坐标系管理（TF）与时间同步 ★★
    - 学什么：机器人系统里有大量随时间变化的坐标系（地图、底盘、相机、夹爪等），TF2 负责维护它们之间带时间戳的变换；多传感器数据还需时间同步才能正确融合。
    - 学完能回答：TF 树为什么必须是树结构？ ／ 查询“过去某一时刻”的变换有什么用？ ／ 相机与机械臂之间的手眼标定解决什么问题？
    - 入门阅读：[ROS 2 文档：About tf2](https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Tf2.html)
  - `06-M3.4` 实时性与嵌入式控制 ★
    - 学什么：底层电机控制需要确定周期内完成计算（实时性）；常见做法是实时操作系统或实时内核 + 固定频率控制回路，上层规划与感知则在非实时部分运行。
    - 学完能回答：软实时与硬实时有何区别？ ／ 控制周期抖动会对系统造成什么影响？ ／ ros2_control 在硬件抽象中扮演什么角色？
    - 入门阅读：[ros2_control 文档](https://control.ros.org/)
- **M4 硬件与形态**
  - `06-M4.1` 机器人形态：机械臂、移动底盘、移动操作、四足、人形 ★★
    - 学什么：常见机器人形态包括固定机械臂、移动底盘、移动操作（底盘 + 机械臂）、四足与人形；形态决定可达空间、负载、安全性与成本，养老场景常需移动操作能力。
    - 学完能回答：移动操作机器人相比固定机械臂多了哪些技术难点？ ／ 人形形态在家居环境中的潜在优势与代价是什么？ ／ 为什么许多落地的养老产品选择更简单的形态？
    - 入门阅读：[Billard & Kragic, Trends and challenges in robot manipulation（Science 2019）](https://doi.org/10.1126/science.aat8414)
  - `06-M4.2` 执行器：电机、减速器、力控 / 柔性驱动 ★★
    - 学什么：执行器把电能转为运动：电机 + 减速器是主流方案；串联弹性、准直驱等设计提升力控性能与碰撞安全性，是人机交互机器人的关键。
    - 学完能回答：高减速比带来哪些好处与坏处？ ／ 串联弹性执行器为什么有利于力控和安全？ ／ 反向驱动性（backdrivability）对人机交互有什么意义？
    - 入门阅读：[Pratt & Williamson, Series elastic actuators（IROS 1995）](https://doi.org/10.1109/IROS.1995.525827)
  - `06-M4.3` 传感器：编码器、IMU、力 / 力矩、触觉、相机、激光雷达 ★★
    - 学什么：机器人的感觉来自编码器（关节位置）、IMU（姿态与加速度）、力 / 力矩与触觉传感器、相机与深度相机、激光雷达等，不同传感器在精度、成本与隐私影响上差别很大。
    - 学完能回答：编码器和 IMU 分别能测什么、不能测什么？ ／ 触觉传感对灵巧操作有何价值？ ／ 在居家场景中，哪些传感器更容易引发隐私担忧？
    - 入门阅读：[Dahiya et al., Tactile Sensing—From Humans to Humanoids（IEEE TRO 2010）](https://doi.org/10.1109/TRO.2009.2033627)
  - `06-M4.4` 灵巧手与末端执行器 ★
    - 学什么：末端执行器从简单的二指夹爪、吸盘到多指灵巧手不等；灵巧手自由度高、可做精细操作，但控制、感知与成本挑战也更大。
    - 学完能回答：二指夹爪能完成哪些家务任务？哪些任务需要多指手？ ／ 欠驱动手的设计思路是什么？ ／ 为什么灵巧操作是机器人学习的热点和难点？
    - 入门阅读：[Billard & Kragic, Trends and challenges in robot manipulation（Science 2019）](https://doi.org/10.1126/science.aat8414)
  - `06-M4.5` 安全：协作机器人标准与人机交互安全 ★★★
    - 学什么：与人近距离工作的机器人必须限制速度、力和能量，并能检测碰撞后安全响应；协作机器人相关要求见 ISO 10218 系列与 ISO/TS 15066 等标准（以 ISO 官网最新版本为准）。
    - 学完能回答：碰撞检测、隔离与识别分别指什么？ ／ 速度与距离监控、功率与力限制是两种什么样的协作安全思路？ ／ 面对体弱老人时，安全阈值的设计需要额外考虑什么？
    - 入门阅读：[Haddadin et al., Robot Collisions: A Survey on Detection, Isolation, and Identification（IEEE TRO 2017）](https://doi.org/10.1109/TRO.2017.2723903)

#### 07 · 机器人感知 ★★

> 让机器人看懂、听懂、摸懂环境与人
> 优先学习配方：1.2 目标检测分割 ｜ 2.1 三维视觉 ｜ 3.1 SLAM ｜ 4.1 人体姿态

**学习路线**：`07-M1.1` 相机模型与标定 → `07-M1.2` 目标检测与分割（含开放词汇方法） → `07-M1.3` 视觉基础模型（CLIP 类、SAM 类、DINO 类） → `07-M2.1` 深度相机与点云处理 → `07-M2.2` 6D 位姿估计 → `07-M3.1` SLAM 基础（视觉 / 激光） → `07-M2.3` 三维场景表示（体素、NeRF、3D 高斯） → `07-M3.2` 语义地图与场景图 → `07-M4.1` 人体姿态估计与动作识别 → `07-M4.2` 跌倒检测：视觉、可穿戴、雷达等方案对比 → `07-M4.3` 语音识别与自然语言交互 → `07-M5.2` 多传感器融合与卡尔曼滤波 → `07-M5.1` 触觉感知 → `07-M4.4` 情绪与认知状态识别（局限与伦理）

- **M1 二维视觉**
  - `07-M1.1` 相机模型与标定 ★★ 🍃 [OpenCV](https://opencv.org/)
    - 学什么：针孔相机模型用内参（焦距、主点）和畸变参数描述成像，外参描述相机在世界中的位姿；标定用已知图案估计这些参数，是测距与手眼协调的前提。
    - 学完能回答：内参与外参分别描述什么？ ／ 镜头畸变有哪几类？如何校正？ ／ 标定误差会如何影响抓取精度？
    - 入门阅读：[OpenCV: Camera Calibration（官方教程）](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)
  - `07-M1.2` 目标检测与分割（含开放词汇方法） ★★★
    - 学什么：目标检测输出物体类别与框，实例分割输出逐像素掩码；开放词汇方法用文本描述指定任意类别，让机器人能找“蓝色药盒”这类训练集中未必出现的物体。
    - 学完能回答：检测、语义分割、实例分割的输出有何不同？ ／ 开放词汇检测是如何利用图文预训练的？ ／ 在杂乱家居场景中，检测的主要失败来源有哪些？
    - 入门阅读：[Liu et al., Grounding DINO（开放集目标检测）](https://arxiv.org/abs/2303.05499)；[Minderer et al., Simple Open-Vocabulary Object Detection with Vision Transformers（OWL-ViT）](https://arxiv.org/abs/2205.06230)
  - `07-M1.3` 视觉基础模型（CLIP 类、SAM 类、DINO 类） ★★★
    - 学什么：视觉基础模型在大规模数据上预训练，提供通用视觉能力：CLIP 类模型对齐图像与文本，SAM 类模型可按提示分割任意物体，DINO 类自监督模型提供通用视觉特征。
    - 学完能回答：CLIP 的对比学习目标是什么？ ／ SAM 接受哪些类型的提示？ ／ 机器人策略为什么常用预训练视觉编码器而不是从零训练？
    - 入门阅读：[Radford et al., Learning Transferable Visual Models From Natural Language Supervision（CLIP）](https://arxiv.org/abs/2103.00020)；[Kirillov et al., Segment Anything](https://arxiv.org/abs/2304.02643)
- **M2 三维感知**
  - `07-M2.1` 深度相机与点云处理 ★★ 🍃 [Open3D](https://www.open3d.org/)
    - 学什么：深度相机（结构光、ToF、双目）提供每个像素的距离，可转换为点云；点云处理包括滤波、降采样、配准、分割与法向估计，深度学习方法可直接处理点集。
    - 学完能回答：不同深度传感原理在透明、反光物体上为何容易失效？ ／ ICP 配准的基本思路是什么？ ／ PointNet 如何实现对点顺序不敏感？
    - 入门阅读：[Open3D 文档](https://www.open3d.org/docs/release/)；[Qi et al., PointNet](https://arxiv.org/abs/1612.00593)
  - `07-M2.2` 6D 位姿估计 ★★
    - 学什么：6D 位姿估计求物体相对相机的三维位置和三维姿态，是精确抓取与放置的基础；新方法可处理训练时未见过的物体。
    - 学完能回答：基于模型（有 CAD）与无模型的位姿估计有何区别？ ／ 对称物体为什么让位姿估计变得困难？ ／ 如何评价位姿估计的精度？
    - 入门阅读：[Wen et al., FoundationPose](https://arxiv.org/abs/2312.08344)；[BOP: Benchmark for 6D Object Pose Estimation](https://bop.felk.cvut.cz/)
  - `07-M2.3` 三维场景表示（体素、NeRF、3D 高斯） ★
    - 学什么：三维场景可用体素、网格、点云，或神经辐射场（NeRF）、3D 高斯泼溅等表示；新型表示能从多视角图像重建逼真场景，也被用于构建仿真与数字孪生。
    - 学完能回答：NeRF 和 3D 高斯泼溅在渲染速度与表示方式上有何不同？ ／ 这些表示用于机器人时有哪些局限（如动态物体、几何精度）？ ／ 如何把重建场景用于仿真训练？
    - 入门阅读：[Mildenhall et al., NeRF](https://arxiv.org/abs/2003.08934)；[Kerbl et al., 3D Gaussian Splatting for Real-Time Radiance Field Rendering](https://arxiv.org/abs/2308.04079)
- **M3 定位与建图**
  - `07-M3.1` SLAM 基础（视觉 / 激光） ★★
    - 学什么：SLAM 同时估计机器人位姿并构建环境地图，按传感器分为视觉、视觉惯性和激光 SLAM；回环检测与图优化用于消除累积误差。
    - 学完能回答：为什么定位和建图需要“同时”进行？ ／ 回环检测解决什么问题？ ／ 居家环境（家具移动、光照变化）对 SLAM 有什么挑战？
    - 入门阅读：[Cadena et al., Past, Present, and Future of SLAM](https://arxiv.org/abs/1606.05830)；[Campos et al., ORB-SLAM3](https://arxiv.org/abs/2007.11898)
  - `07-M3.2` 语义地图与场景图 ★★
    - 学什么：语义地图在几何地图上标注物体与区域含义，三维场景图把房间、物体及其关系组织成图结构，便于机器人理解“药在卧室床头柜上”这类指令。
    - 学完能回答：场景图中的节点和边分别可以表示什么？ ／ 开放词汇场景图如何借助视觉语言模型构建？ ／ 语义地图如何服务于 LLM 任务规划？
    - 入门阅读：[Gu et al., ConceptGraphs: Open-Vocabulary 3D Scene Graphs](https://arxiv.org/abs/2309.16650)；[Hughes et al., Hydra: A Real-time Spatial Perception System for 3D Scene Graph Construction](https://arxiv.org/abs/2201.13360)
- **M4 以人为中心的感知**
  - `07-M4.1` 人体姿态估计与动作识别 ★★★ 🍃 [MediaPipe](https://ai.google.dev/edge/mediapipe)、原型：摄像头 + 语音的服药提醒与服药确认 Demo（练习）
    - 学什么：人体姿态估计从图像中检测关节关键点，进一步结合时间序列可识别动作；它是跌倒检测、康复评估与人机交互的基础。
    - 学完能回答：自顶向下与自底向上的多人姿态估计有何区别？ ／ 2D 关键点用于动作识别有哪些局限？ ／ 遮挡和非常规视角会如何影响结果？
    - 入门阅读：[Cao et al., OpenPose](https://arxiv.org/abs/1812.08008)；[MediaPipe（端侧姿态估计等方案）](https://ai.google.dev/edge/mediapipe)
  - `07-M4.2` 跌倒检测：视觉、可穿戴、雷达等方案对比 ★★★ 🍃 原型：基于姿态估计的跌倒检测并评估误报率（练习）
    - 学什么：跌倒检测可基于可穿戴传感器、环境传感器（雷达、红外、压力等）或视觉；各方案在准确率、误报、佩戴依从性、隐私与成本上各有取舍。
    - 学完能回答：可穿戴方案为什么常面临依从性问题？ ／ 视觉方案的隐私风险如何缓解？ ／ 评价跌倒检测系统时为什么要特别关注误报率？
    - 入门阅读：[Mubashir, Shao & Seed, A survey on fall detection: Principles and approaches（Neurocomputing 2013）](https://doi.org/10.1016/j.neucom.2011.09.037)；[MSD Manual: Falls in Older Adults（了解跌倒的临床背景）](https://www.msdmanuals.com/professional/geriatrics/falls-in-older-adults/falls-in-older-adults)
  - `07-M4.3` 语音识别与自然语言交互 ★★
    - 学什么：语音识别把语音转为文字，配合语言模型实现自然对话；老年人的口音、语速、构音障碍以及家中噪声都会影响识别效果。
    - 学完能回答：大规模弱监督训练的语音识别模型有什么优势？ ／ 老年用户语音交互的常见失败场景有哪些？ ／ 语音交互中如何设计确认机制来避免误操作？
    - 入门阅读：[Radford et al., Robust Speech Recognition via Large-Scale Weak Supervision（Whisper）](https://arxiv.org/abs/2212.04356)
  - `07-M4.4` 情绪与认知状态识别（局限与伦理） ★
    - 学什么：情绪与认知状态识别试图从表情、语音、行为推断内在状态，但面部动作与情绪之间并非一一对应，结论需审慎，并涉及明显的伦理与隐私问题。
    - 学完能回答：为什么“从表情读情绪”的科学依据存在争议？ ／ 在照护场景误判情绪可能带来什么后果？ ／ 什么情况下这类技术只应作为辅助提示？
    - 入门阅读：[Barrett et al., Emotional Expressions Reconsidered（Psychol Sci Public Interest 2019）](https://doi.org/10.1177/1529100619832930)
- **M5 多模态融合**
  - `07-M5.1` 触觉感知 ★
    - 学什么：触觉传感提供接触位置、压力分布与滑动信息，弥补视觉在遮挡和精细接触中的不足，对抓取易碎物体和人体接触尤为重要。
    - 学完能回答：触觉传感器有哪些常见原理？ ／ 触觉信息如何帮助检测抓取滑动？ ／ 触觉数据为何难以大规模采集与建模？
    - 入门阅读：[Dahiya et al., Tactile Sensing—From Humans to Humanoids（IEEE TRO 2010）](https://doi.org/10.1109/TRO.2009.2033627)
  - `07-M5.2` 多传感器融合与卡尔曼滤波 ★★
    - 学什么：多传感器融合结合不同传感器的优势；卡尔曼滤波及其扩展在“预测—更新”框架下融合带噪声的观测，是定位与状态估计的基础工具。
    - 学完能回答：卡尔曼滤波的预测步和更新步分别做什么？ ／ 扩展卡尔曼滤波如何处理非线性？ ／ IMU 与轮式里程计融合能解决什么问题？
    - 入门阅读：[Labbe, Kalman and Bayesian Filters in Python（开源交互式教材）](https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python)

#### 08 · 控制与规划 ★★

> 从“想做什么”到“精确地做出来”
> 优先学习配方：1.1 PID ｜ 2.1 运动规划 ｜ 3.1 任务规划 ｜ 1.3 力控

**学习路线**：`08-M1.1` PID 与经典控制 → `08-M2.1` 采样式规划（RRT、PRM） → `08-M2.3` 移动导航（全局 / 局部规划、避障） → `08-M2.2` 轨迹优化 → `08-M1.2` 模型预测控制（MPC） → `08-M1.3` 阻抗 / 导纳控制与力控 → `08-M2.4` 抓取规划 → `08-M3.2` 行为树与状态机 → `08-M3.3` LLM 作为任务规划器（高层规划 + 底层技能） → `08-M3.1` 任务与运动规划（TAMP） → `08-M4.1` 人机共融的安全控制（限速、限力、碰撞检测） → `08-M4.2` 人类意图预测与共享控制 → `08-M4.3` 辅助移动与搀扶类机器人控制要点 → `08-M1.4` 全身控制（WBC）概念

- **M1 控制**
  - `08-M1.1` PID 与经典控制 ★★★ 🍃 在仿真里给单关节调 PID（练习）
    - 学什么：PID 控制根据误差的比例、积分和微分计算控制量，是最常用的反馈控制方法；经典控制还关注稳定性、响应速度、超调与稳态误差。
    - 学完能回答：P、I、D 三项各自对响应有什么影响？ ／ 积分饱和（windup）是什么？如何处理？ ／ 为什么微分项对噪声敏感？
    - 入门阅读：[Ang, Chong & Li, PID control system analysis, design, and technology（IEEE TCST 2005）](https://doi.org/10.1109/TCST.2005.847331)
  - `08-M1.2` 模型预测控制（MPC） ★★
    - 学什么：模型预测控制（MPC）在每个控制周期基于系统模型预测未来一段时间的行为，求解带约束的优化问题，只执行第一步控制并滚动重复。
    - 学完能回答：“滚动时域”是什么意思？ ／ MPC 为什么天然适合处理约束？ ／ MPC 的计算开销对控制频率有什么影响？
    - 入门阅读：[Rawlings, Mayne & Diehl, Model Predictive Control: Theory, Computation, and Design（作者公开电子版）](https://sites.engineering.ucsb.edu/~jbraw/mpc/)
  - `08-M1.3` 阻抗 / 导纳控制与力控 ★★
    - 学什么：阻抗 / 导纳控制不直接控制位置或力，而是让机器人表现出期望的“弹簧—阻尼”动态特性，使其在接触环境或与人交互时柔顺、安全。
    - 学完能回答：阻抗控制与导纳控制的输入输出有何不同？ ／ 刚度设置过高或过低分别会有什么问题？ ／ 为什么人机物理交互常需要柔顺控制？
    - 入门阅读：[Hogan, Impedance Control: An Approach to Manipulation（1985）](https://doi.org/10.1115/1.3140702)
  - `08-M1.4` 全身控制（WBC）概念 ★
    - 学什么：全身控制（WBC）为高自由度机器人（人形、移动操作）同时协调多个任务（平衡、手部轨迹、避碰等），常通过优先级分层或二次规划求解关节指令。
    - 学完能回答：多任务冲突时，优先级分层如何处理？ ／ 为什么 WBC 常表述为二次规划（QP）？ ／ WBC 与上层学习策略可以如何结合？
    - 入门阅读：[Sentis & Khatib, Synthesis of Whole-Body Behaviors through Hierarchical Control of Behavioral Primitives（2005）](https://doi.org/10.1142/S0219843605000594)
- **M2 运动规划**
  - `08-M2.1` 采样式规划（RRT、PRM） ★★ 🍃 [MoveIt](https://moveit.ai/)
    - 学什么：采样式规划在高维构型空间随机采样无碰撞状态并连接成路径，RRT 适合单次查询，PRM 适合同一环境多次查询；算法具有概率完备性。
    - 学完能回答：构型空间（C-space）是什么？ ／ RRT 与 PRM 的构建方式有何不同？ ／ 为什么采样式方法在高维机械臂规划中比网格搜索更实用？
    - 入门阅读：[OMPL: The Open Motion Planning Library](https://ompl.kavrakilab.org/)
  - `08-M2.2` 轨迹优化 ★★ 🍃 [Drake](https://drake.mit.edu/)
    - 学什么：轨迹优化把运动规划写成优化问题，在满足动力学、碰撞与关节限制的前提下最小化时间、能量或平滑度等代价，常与采样式规划互补。
    - 学完能回答：直接法与间接法轨迹优化有何区别？ ／ 为什么轨迹优化容易陷入局部最优？ ／ 采样式规划的结果如何作为轨迹优化的初值？
    - 入门阅读：[Underactuated Robotics（MIT 公开课程讲义，含轨迹优化）](https://underactuated.mit.edu/)
  - `08-M2.3` 移动导航（全局 / 局部规划、避障） ★★ 🍃 [Nav2](https://docs.nav2.org/)
    - 学什么：移动导航由全局规划（在地图上找路径）与局部规划（实时避障、跟踪路径）组成，配合定位与代价地图在动态环境中运行。
    - 学完能回答：全局规划与局部规划各解决什么问题？ ／ 代价地图中的膨胀层有什么作用？ ／ 家中有人走动、宠物和杂物时，导航需要注意什么？
    - 入门阅读：[Nav2 文档（ROS 2 导航框架）](https://docs.nav2.org/)
  - `08-M2.4` 抓取规划 ★★ 🍃 原型：在仿真中让机械臂从药架取药盒并递到人手（练习）
    - 学什么：抓取规划确定在物体哪里、以什么姿态抓取；可基于物体模型分析，也可用深度学习从点云或图像直接生成抓取候选并评估成功率。
    - 学完能回答：抓取质量指标通常考虑哪些因素？ ／ 基于学习的 6 自由度抓取生成与平面抓取有何不同？ ／ 抓取药盒、水杯这类日常物体有哪些特殊难点？
    - 入门阅读：[Mahler et al., Dex-Net 2.0](https://arxiv.org/abs/1703.09312)；[Sundermeyer et al., Contact-GraspNet](https://arxiv.org/abs/2103.14127)
- **M3 任务规划与决策**
  - `08-M3.1` 任务与运动规划（TAMP） ★
    - 学什么：任务与运动规划（TAMP）同时决定“做哪些动作、按什么顺序”（离散的任务层）和“具体怎么动”（连续的运动层），用于长程操作任务。
    - 学完能回答：为什么任务规划与运动规划需要联合考虑？ ／ 符号规划语言（如 PDDL）在 TAMP 中的作用是什么？ ／ LLM 能否替代传统任务规划器？有哪些风险？
    - 入门阅读：[Garrett et al., Integrated Task and Motion Planning](https://arxiv.org/abs/2010.01083)
  - `08-M3.2` 行为树与状态机 ★★
    - 学什么：行为树与状态机是组织机器人行为的两种方式；行为树以树形结构组合顺序、选择与并行节点，模块化好、易于扩展和调试，广泛用于导航与服务机器人。
    - 学完能回答：行为树的 Sequence 与 Fallback 节点分别如何工作？ ／ 行为树相比有限状态机的优势是什么？ ／ 如何在行为树中加入“失败后请求人工帮助”的分支？
    - 入门阅读：[Colledanchise & Ögren, Behavior Trees in Robotics and AI: An Introduction](https://arxiv.org/abs/1709.00084)；[BehaviorTree.CPP 文档](https://www.behaviortree.dev/)
  - `08-M3.3` LLM 作为任务规划器（高层规划 + 底层技能） ★★★
    - 学什么：大语言模型可把自然语言指令分解为技能序列或生成调用机器人 API 的代码，再由底层技能执行；关键是把语言计划与机器人实际能力、环境状态对齐。
    - 学完能回答：SayCan 如何把 LLM 的建议与技能可执行性结合？ ／ “代码即策略”方法有哪些优点和安全隐患？ ／ LLM 规划出错时，系统应如何检测与恢复？
    - 入门阅读：[Ahn et al., Do As I Can, Not As I Say（SayCan）](https://arxiv.org/abs/2204.01691)；[Liang et al., Code as Policies](https://arxiv.org/abs/2209.07753)
- **M4 人机协作**
  - `08-M4.1` 人机共融的安全控制（限速、限力、碰撞检测） ★★
    - 学什么：人机共融的安全控制通过限速、限力、保持距离和碰撞检测后的安全反应，降低机器人对人的伤害风险；相关要求见协作机器人国际标准（以官方最新版为准）。
    - 学完能回答：碰撞后机器人有哪些常见的安全反应策略？ ／ 速度与距离监控需要哪些感知能力？ ／ 为什么老年人和儿童需要更保守的安全参数？
    - 入门阅读：[Haddadin et al., Robot Collisions: A Survey on Detection, Isolation, and Identification（IEEE TRO 2017）](https://doi.org/10.1109/TRO.2017.2723903)
  - `08-M4.2` 人类意图预测与共享控制 ★
    - 学什么：共享控制让人和机器人共同决定动作：机器人推断人的意图，在人的输入与自主行为之间做仲裁，并把自身意图反馈给人。
    - 学完能回答：意图检测可以利用哪些信号？ ／ 仲裁策略如何在“听人的”与“机器人自主”之间平衡？ ／ 共享控制在助行或喂食辅助中如何应用？
    - 入门阅读：[Losey et al., A Review of Intent Detection, Arbitration, and Communication Aspects of Shared Control for Physical Human–Robot Interaction（2018）](https://doi.org/10.1115/1.4039145)
  - `08-M4.3` 辅助移动与搀扶类机器人控制要点 ★
    - 学什么：助行、搀扶与移位辅助机器人直接承受人的部分体重，控制需结合人的步态与意图，提供恰当的支撑与柔顺性，并严格防止失稳与跌倒。
    - 学完能回答：助行机器人需要感知使用者的哪些状态？ ／ 支撑力过大或过小分别会带来什么风险？ ／ 这类设备为什么往往要按医疗器械或康复器械管理？
    - 入门阅读：[Losey et al., A Review of Intent Detection, Arbitration, and Communication Aspects of Shared Control for Physical Human–Robot Interaction（2018）](https://doi.org/10.1115/1.4039145)；[MSD Manual: Gait Disorders in Older Adults](https://www.msdmanuals.com/professional/geriatrics/gait-disorders-in-older-adults/gait-disorders-in-older-adults)

#### 09 · 机器人学习：强化学习与模仿学习 ★★★

> 从数据和试错中学技能
> 优先学习配方：1.2 策略梯度 ｜ 2.1 行为克隆 ｜ 2.3 扩散策略 ｜ 3.1 示教数据采集

**学习路线**：`09-M1.1` MDP、价值函数与贝尔曼方程 → `09-M1.2` 策略梯度与 PPO → `09-M1.3` off-policy 方法（DQN / SAC） → `09-M1.4` 奖励设计与安全约束 → `09-M2.1` 行为克隆与分布偏移（DAgger） → `09-M3.1` 示教数据采集：遥操作、主从臂、VR、手持采集设备 → `09-M2.2` 动作分块（Action Chunking）与 ACT → `09-M2.3` 扩散策略（Diffusion Policy）与流匹配策略 → `09-M3.2` 数据格式与大规模数据集（Open X-Embodiment 等） → `09-M1.5` 离线强化学习 → `09-M2.4` 逆强化学习概念 → `09-M3.3` 人类视频学习 → `09-M4.1` 世界模型与基于模型的强化学习 → `09-M4.2` 视频生成模型作为模拟器

- **M1 强化学习**
  - `09-M1.1` MDP、价值函数与贝尔曼方程 ★★★ 🍃 [Gymnasium](https://gymnasium.farama.org/)
    - 学什么：马尔可夫决策过程（MDP）用状态、动作、转移、奖励和折扣因子形式化序贯决策；价值函数衡量长期回报，贝尔曼方程给出价值的递归关系。
    - 学完能回答：状态价值函数与动作价值函数有何区别？ ／ 折扣因子取值大小对智能体行为有何影响？ ／ 贝尔曼最优方程与策略迭代 / 价值迭代是什么关系？
    - 入门阅读：[OpenAI Spinning Up in Deep RL（入门讲解与代码）](https://spinningup.openai.com/)
  - `09-M1.2` 策略梯度与 PPO ★★★ 🍃 [Stable-Baselines3](https://stable-baselines3.readthedocs.io/)、用 SB3 在 MuJoCo 环境里训一个 PPO 智能体（练习）
    - 学什么：策略梯度方法直接优化参数化策略的期望回报；PPO 通过限制每次更新的幅度提高训练稳定性，是机器人仿真训练中最常用的算法之一。
    - 学完能回答：策略梯度中的优势函数起什么作用？ ／ PPO 的裁剪目标如何限制策略更新幅度？ ／ 为什么 PPO 适合大规模并行仿真？
    - 入门阅读：[Schulman et al., Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347)；[OpenAI Spinning Up: PPO 讲解](https://spinningup.openai.com/)
  - `09-M1.3` off-policy 方法（DQN / SAC） ★★
    - 学什么：离策略（off-policy）方法可复用历史经验：DQN 用深度网络近似动作价值并依靠经验回放与目标网络稳定训练，SAC 在最大化回报的同时最大化策略熵，适合连续控制。
    - 学完能回答：经验回放与目标网络分别解决什么问题？ ／ 为什么 DQN 不直接适用于连续动作空间？ ／ SAC 中熵正则项的作用是什么？
    - 入门阅读：[Mnih et al., Human-level control through deep reinforcement learning（Nature 2015）](https://doi.org/10.1038/nature14236)；[Haarnoja et al., Soft Actor-Critic](https://arxiv.org/abs/1801.01290)
  - `09-M1.4` 奖励设计与安全约束 ★★
    - 学什么：奖励函数决定智能体学到什么；设计不当会导致“奖励投机”。安全强化学习在训练和部署中加入约束或风险考量，避免危险行为。
    - 学完能回答：稀疏奖励与稠密奖励各有什么优缺点？ ／ 举一个奖励投机的例子，并说明如何修正。 ／ 约束 MDP 如何表达安全要求？
    - 入门阅读：[García & Fernández, A Comprehensive Survey on Safe Reinforcement Learning（JMLR 2015）](https://jmlr.org/papers/v16/garcia15a.html)
  - `09-M1.5` 离线强化学习 ★
    - 学什么：离线强化学习只用预先收集的数据集学习策略、不与环境交互，适合真实机器人等交互昂贵的场景，主要难点是数据分布之外动作的价值高估。
    - 学完能回答：离线 RL 与行为克隆有何区别？ ／ 分布外动作为什么会导致价值高估？ ／ 保守 / 约束类方法如何缓解这一问题？
    - 入门阅读：[Levine et al., Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems](https://arxiv.org/abs/2005.01643)
- **M2 模仿学习**
  - `09-M2.1` 行为克隆与分布偏移（DAgger） ★★★ 🍃 [LeRobot](https://github.com/huggingface/lerobot)、用 LeRobot 在仿真数据上训一个行为克隆策略（练习）
    - 学什么：行为克隆把示教数据当作监督学习，直接学习“观测 → 动作”；它的主要问题是分布偏移：小误差会把机器人带到示教中没出现过的状态并持续累积，DAgger 通过在线收集专家纠正来缓解。
    - 学完能回答：为什么行为克隆的误差会随时间累积？ ／ DAgger 的数据收集流程是怎样的？ ／ 增加示教的多样性为什么能提升鲁棒性？
    - 入门阅读：[Ross, Gordon & Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning（DAgger）](https://arxiv.org/abs/1011.0686)
  - `09-M2.2` 动作分块（Action Chunking）与 ACT ★★ 🍃 [ALOHA 项目页](https://tonyzhaozh.github.io/aloha/)、用 LeRobot 在仿真数据上训一个行为克隆策略（练习） 🃏 [ACT / ALOHA](https://arxiv.org/abs/2304.13705)
    - 学什么：动作分块（action chunking）一次预测未来一段动作序列而非单步动作，降低误差累积与抖动；ACT 用 Transformer（CVAE 结构）实现这一思路，在精细双臂操作上效果显著。
    - 学完能回答：动作分块为什么能缓解误差累积？ ／ ACT 中 CVAE 的隐变量起什么作用？ ／ 时间集成（temporal ensembling）解决了什么问题？
    - 入门阅读：[Zhao et al., Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware（ACT / ALOHA）](https://arxiv.org/abs/2304.13705)
  - `09-M2.3` 扩散策略（Diffusion Policy）与流匹配策略 ★★★ 🍃 [Diffusion Policy 项目页](https://diffusion-policy.cs.columbia.edu/) 🃏 [Diffusion Policy](https://arxiv.org/abs/2303.04137)
    - 学什么：扩散策略把动作生成建模为条件去噪过程，能表达多峰的动作分布；流匹配是另一类生成方法，可用更少的采样步生成连续动作，也被用于 VLA 的动作头。
    - 学完能回答：为什么普通回归在多峰示教（如绕左或绕右）下会失败？ ／ 扩散策略推理时的采样步数如何影响控制频率？ ／ 流匹配与扩散模型的训练目标有何不同？
    - 入门阅读：[Chi et al., Diffusion Policy](https://arxiv.org/abs/2303.04137)；[Lipman et al., Flow Matching for Generative Modeling](https://arxiv.org/abs/2210.02747)
  - `09-M2.4` 逆强化学习概念 ★
    - 学什么：逆强化学习从专家示教中反推奖励函数，再据此学习策略；相比直接模仿，它试图理解“专家为什么这样做”，从而更好地泛化。
    - 学完能回答：为什么同一组示教可以对应多个奖励函数？ ／ 学徒学习（apprenticeship learning）的基本思路是什么？ ／ 逆强化学习与生成对抗模仿学习有何联系？
    - 入门阅读：[Abbeel & Ng, Apprenticeship learning via inverse reinforcement learning（ICML 2004）](https://doi.org/10.1145/1015330.1015430)
- **M3 数据**
  - `09-M3.1` 示教数据采集：遥操作、主从臂、VR、手持采集设备 ★★★ 🍃 [SO-ARM100 开源机械臂](https://github.com/TheRobotStudio/SO-ARM100)、[ALOHA 项目页](https://tonyzhaozh.github.io/aloha/)
    - 学什么：示教数据可通过遥操作（手柄、主从臂、VR）或手持采集设备获取；采集方式决定数据质量、成本与可扩展性，是模仿学习效果的关键。
    - 学完能回答：主从臂遥操作与 VR 遥操作各有什么优缺点？ ／ 手持采集设备如何在没有机器人的情况下收集示教？ ／ 示教质量（犹豫、失败片段）会如何影响策略？
    - 入门阅读：[Chi et al., Universal Manipulation Interface（手持示教采集）](https://arxiv.org/abs/2402.10329)；[ALOHA 项目页（低成本主从双臂遥操作）](https://tonyzhaozh.github.io/aloha/)
  - `09-M3.2` 数据格式与大规模数据集（Open X-Embodiment 等） ★★ 🍃 [Open X-Embodiment](https://robotics-transformer-x.github.io/) 🃏 [Open X-Embodiment / RT-X](https://arxiv.org/abs/2310.08864)
    - 学什么：大规模机器人数据集汇集多种机器人与任务的示教，以统一格式发布，用于预训练通用策略；数据格式、标注与质量控制同样重要。
    - 学完能回答：跨本体数据集需要统一哪些信息（观测、动作空间、语言指令）？ ／ 示教数据中的哪些因素对离线学习影响最大？ ／ 如何从大数据集中挑选与自己任务相关的子集？
    - 入门阅读：[Open X-Embodiment Collaboration, Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864)；[Mandlekar et al., What Matters in Learning from Offline Human Demonstrations for Robot Manipulation（robomimic）](https://arxiv.org/abs/2108.03298)
  - `09-M3.3` 人类视频学习 ★
    - 学什么：人类视频（如第一人称日常活动视频）数量巨大，可用来预训练视觉表示或学习任务结构，但缺少机器人动作标签，且人与机器人身体差异大。
    - 学完能回答：人类视频能为机器人学习提供哪些信息？ ／ 人与机器人的“本体差异”如何影响迁移？ ／ 预训练视觉表示通常如何接入下游策略？
    - 入门阅读：[Nair et al., R3M: A Universal Visual Representation for Robot Manipulation](https://arxiv.org/abs/2203.12601)
- **M4 世界模型**
  - `09-M4.1` 世界模型与基于模型的强化学习 ★★
    - 学什么：世界模型学习环境如何随动作变化，智能体可以在“想象”中规划或训练策略；基于模型的强化学习通常比无模型方法更省数据。
    - 学完能回答：世界模型通常预测什么（像素、隐状态、奖励）？ ／ 模型误差会如何影响基于模型的规划？ ／ 在隐空间中想象训练有什么优势？
    - 入门阅读：[Ha & Schmidhuber, World Models](https://arxiv.org/abs/1803.10122)；[Hafner et al., Mastering Diverse Domains through World Models（DreamerV3）](https://arxiv.org/abs/2301.04104)
  - `09-M4.2` 视频生成模型作为模拟器 ★
    - 学什么：动作条件的视频生成模型可作为“可交互的模拟器”，根据动作生成未来画面，用于策略训练或评估；目前物理一致性与可控性仍是主要限制。
    - 学完能回答：视频生成模拟器与物理仿真器各有什么优缺点？ ／ 如何检验生成视频中的物理是否可信？ ／ 这类模拟器在评估机器人策略时可能产生什么偏差？
    - 入门阅读：[Yang et al., Learning Interactive Real-World Simulators（UniSim）](https://arxiv.org/abs/2310.06114)

#### 10 · 具身大模型与 VLA ★★★

> 把大模型的语义能力接到机器人身体上
> 优先学习配方：1.1 VLA 定义 ｜ 2.1 RT-2 ｜ 2.3 π0 ｜ 3.1 分层架构

**学习路线**：`10-M1.1` 视觉—语言—动作模型（VLA）的定义与动机 → `10-M2.1` RT-1 / RT-2 与 RT-X → `10-M1.2` 动作表示：离散化 token、连续动作头、扩散 / 流匹配 → `10-M2.2` OpenVLA 与 Octo（开源通用策略） → `10-M1.3` 跨本体（cross-embodiment）泛化 → `10-M2.3` π0 系列（流匹配动作专家） → `10-M2.4` SayCan、PaLM-E 等“语言规划 + 技能” → `10-M3.1` 分层架构：高层 VLM 推理 + 底层快速控制 → `10-M3.2` 微调与部署：LoRA 微调、量化、推理频率 → `10-M3.3` 具身智能体：记忆、工具调用与长程任务 → `10-M4.1` 仿真基准与真实评测 → `10-M4.2` 泛化维度：物体、场景、指令、本体 → `10-M4.3` 安全性与失败模式分析 → `10-M2.5` 人形机器人基础模型（行业进展跟踪）

- **M1 概念**
  - `10-M1.1` 视觉—语言—动作模型（VLA）的定义与动机 ★★★
    - 学什么：视觉—语言—动作模型（VLA）以图像和语言指令为输入、直接输出机器人动作，希望把视觉语言模型从网络数据中学到的语义知识迁移到机器人控制上。
    - 学完能回答：VLA 与“LLM 规划 + 传统技能库”的系统有何区别？ ／ 网络预训练知识能为机器人带来哪些泛化能力？ ／ VLA 目前主要的局限有哪些？
    - 入门阅读：[Ma et al., A Survey on Vision-Language-Action Models for Embodied AI](https://arxiv.org/abs/2405.14093)；[Brohan et al., RT-2](https://arxiv.org/abs/2307.15818)
  - `10-M1.2` 动作表示：离散化 token、连续动作头、扩散 / 流匹配 ★★★
    - 学什么：VLA 输出动作的方式主要有三类：把连续动作离散化为 token 让语言模型逐个生成；用回归式连续动作头；用扩散或流匹配生成连续动作块。
    - 学完能回答：动作离散化 token 的优缺点是什么？ ／ 为什么高频灵巧操作更偏好连续动作块？ ／ 动作表示如何影响推理速度？
    - 入门阅读：[Black et al., π0: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164)；[Brohan et al., RT-2](https://arxiv.org/abs/2307.15818)
  - `10-M1.3` 跨本体（cross-embodiment）泛化 ★★ 🍃 [Open X-Embodiment](https://robotics-transformer-x.github.io/)
    - 学什么：跨本体泛化指一个模型能控制形态、传感器和动作空间不同的多种机器人；通常靠多机器人混合数据预训练，再在目标机器人上少量微调。
    - 学完能回答：不同机器人在动作空间上的差异如何统一或适配？ ／ 跨本体数据为什么可能帮助单个机器人的性能？ ／ 迁移到新机器人时通常需要多少、什么样的数据？
    - 入门阅读：[Open X-Embodiment Collaboration, Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864)；[Octo Model Team, Octo: An Open-Source Generalist Robot Policy](https://arxiv.org/abs/2405.12213)
- **M2 代表性工作**
  - `10-M2.1` RT-1 / RT-2 与 RT-X ★★★ 🃏 [RT-1](https://arxiv.org/abs/2212.06817)、[RT-2](https://arxiv.org/abs/2307.15818)
    - 学什么：RT-1 用 Transformer 在大规模真实机器人示教数据上学习“图像 + 指令 → 离散动作”；RT-2 在此基础上把视觉语言模型与机器人数据联合微调，展现出更强的语义泛化；RT-X 用跨机构数据训练。
    - 学完能回答：RT-1 与 RT-2 的模型来源和训练数据有何不同？ ／ RT-2 的“涌现”语义能力体现在哪些评测上？ ／ 为什么这两个模型的思路影响了后续开源 VLA？
    - 入门阅读：[Brohan et al., RT-1: Robotics Transformer for Real-World Control at Scale](https://arxiv.org/abs/2212.06817)；[Brohan et al., RT-2](https://arxiv.org/abs/2307.15818)
  - `10-M2.2` OpenVLA 与 Octo（开源通用策略） ★★★ 🍃 [OpenVLA](https://openvla.github.io/)、[Octo](https://octo-models.github.io/) 🃏 [OpenVLA](https://arxiv.org/abs/2406.09246)、[Octo](https://arxiv.org/abs/2405.12213)
    - 学什么：OpenVLA 是开源的 7B 参数 VLA，基于预训练视觉语言模型输出离散动作 token；Octo 是较轻量的开源通用策略，用扩散头输出动作；二者都在 Open X-Embodiment 数据上训练并支持微调。
    - 学完能回答：OpenVLA 与 Octo 在模型规模与动作头设计上有何不同？ ／ 在自己的机器人上微调它们需要准备哪些数据？ ／ 开源权重对研究可复现性有什么意义？
    - 入门阅读：[Kim et al., OpenVLA: An Open-Source Vision-Language-Action Model](https://arxiv.org/abs/2406.09246)；[Octo Model Team, Octo: An Open-Source Generalist Robot Policy](https://arxiv.org/abs/2405.12213)
  - `10-M2.3` π0 系列（流匹配动作专家） ★★★ 🍃 [openpi](https://github.com/Physical-Intelligence/openpi) 🃏 [π0（pi-zero）](https://arxiv.org/abs/2410.24164)
    - 学什么：π0 在预训练视觉语言模型上接一个用流匹配生成连续动作块的“动作专家”，在多种机器人数据上训练，面向高频、灵巧的操作任务；代码与权重通过 openpi 开源。
    - 学完能回答：“动作专家”与 VLM 主干之间如何分工？ ／ 流匹配动作头相比离散 token 有什么优势？ ／ 用 openpi 微调需要准备什么格式的数据？
    - 入门阅读：[Black et al., π0: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164)；[openpi（官方代码与权重）](https://github.com/Physical-Intelligence/openpi)
  - `10-M2.4` SayCan、PaLM-E 等“语言规划 + 技能” ★★ 🃏 [SayCan](https://arxiv.org/abs/2204.01691)、[PaLM-E](https://arxiv.org/abs/2303.03378)
    - 学什么：“语言规划 + 技能”路线中，大模型负责理解指令、分解任务，底层技能负责执行：SayCan 用价值函数约束 LLM 的建议，PaLM-E 把传感器输入直接注入语言模型进行具身推理。
    - 学完能回答：SayCan 中的“可供性（affordance）”是如何估计的？ ／ PaLM-E 如何把图像等连续输入接入语言模型？ ／ 这一路线与端到端 VLA 相比有哪些优劣？
    - 入门阅读：[Ahn et al., Do As I Can, Not As I Say（SayCan）](https://arxiv.org/abs/2204.01691)；[Driess et al., PaLM-E: An Embodied Multimodal Language Model](https://arxiv.org/abs/2303.03378)
  - `10-M2.5` 人形机器人基础模型（行业进展跟踪） ★
    - 学什么：人形机器人基础模型是快速变化的行业方向，多家公司与研究机构发布了面向人形的通用模型；学习时以公开技术报告为准，关注数据来源、架构与评测方式，避免轻信宣传。
    - 学完能回答：人形基础模型常用哪些数据来源（真机、仿真、人类视频）？ ／ 如何区分技术报告中的可复现结果与演示视频？ ／ 人形机器人在养老场景落地还有哪些现实障碍？
    - 入门阅读：[NVIDIA, GR00T N1: An Open Foundation Model for Generalist Humanoid Robots（技术报告示例）](https://arxiv.org/abs/2503.14734)
- **M3 系统设计**
  - `10-M3.1` 分层架构：高层 VLM 推理 + 底层快速控制 ★★★ 🍃 原型：在仿真中让机械臂从药架取药盒并递到人手（练习）
    - 学什么：分层架构让慢速的大模型做高层理解与规划，快速的底层策略或控制器负责高频执行，兼顾语义能力与实时性，是当前具身系统的常见设计。
    - 学完能回答：高层与底层之间用什么接口（语言子任务、目标位姿、技能编号）？ ／ 为什么不能让大模型直接以控制频率输出所有动作？ ／ 分层系统中错误如何在层间传播与恢复？
    - 入门阅读：[Ahn et al., Do As I Can, Not As I Say（SayCan）](https://arxiv.org/abs/2204.01691)；[Black et al., π0](https://arxiv.org/abs/2410.24164)
  - `10-M3.2` 微调与部署：LoRA 微调、量化、推理频率 ★★ 🍃 [LeRobot](https://github.com/huggingface/lerobot)、[OpenVLA](https://openvla.github.io/)、[openpi](https://github.com/Physical-Intelligence/openpi)
    - 学什么：把 VLA 用到自己的机器人上通常需要微调：LoRA 等参数高效方法降低显存需求；部署时还需考虑量化、推理延迟与控制频率之间的平衡。
    - 学完能回答：LoRA 为什么能大幅减少需要训练的参数？ ／ 量化会对动作精度产生什么影响？ ／ 推理延迟过高时有哪些工程手段（动作分块、异步执行）？
    - 入门阅读：[Hu et al., LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685)；[Kim et al., OpenVLA（含微调与部署实验）](https://arxiv.org/abs/2406.09246)
  - `10-M3.3` 具身智能体：记忆、工具调用与长程任务 ★★
    - 学什么：具身智能体在模型之外还需要记忆、工具调用、环境反馈与长程任务管理，例如根据执行结果反思并修正计划、积累可复用的技能。
    - 学完能回答：环境反馈如何帮助语言模型修正计划？ ／ 技能库的积累对长程任务有什么帮助？ ／ 照护场景中，智能体需要记住哪些长期信息？如何保护隐私？
    - 入门阅读：[Huang et al., Inner Monologue: Embodied Reasoning through Planning with Language Models](https://arxiv.org/abs/2207.05608)；[Wang et al., Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291)
- **M4 评测**
  - `10-M4.1` 仿真基准与真实评测 ★★
    - 学什么：评测 VLA 需结合仿真基准与真机实验：仿真基准可复现、成本低，但与真实表现存在差距；一些工作专门研究如何让仿真评测更贴近真机结果。
    - 学完能回答：仿真评测与真机评测各有什么局限？ ／ 一个好的机器人基准应包含哪些要素？ ／ 如何报告真机实验以便他人判断可信度？
    - 入门阅读：[Liu et al., LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning](https://arxiv.org/abs/2306.03310)；[Li et al., Evaluating Real-World Robot Manipulation Policies in Simulation（SimplerEnv）](https://arxiv.org/abs/2405.05941)
  - `10-M4.2` 泛化维度：物体、场景、指令、本体 ★★
    - 学什么：VLA 的泛化可从多个维度考察：新物体、新场景与光照、新的语言指令表述、新任务组合以及新的机器人本体，不同维度的难度差别很大。
    - 学完能回答：为什么“换一种说法”的指令也可能让模型失败？ ／ 设计泛化测试集时如何避免与训练数据重叠？ ／ 对养老场景来说，哪些泛化维度最关键？
    - 入门阅读：[Kim et al., OpenVLA（含多维泛化评测）](https://arxiv.org/abs/2406.09246)；[Brohan et al., RT-2（含语义泛化评测）](https://arxiv.org/abs/2307.15818)
  - `10-M4.3` 安全性与失败模式分析 ★★★
    - 学什么：具身模型可能误解指令、动作失误或在不确定时仍贸然执行；安全设计包括失败模式分析、不确定性估计、必要时向人求助，以及硬件层面的安全限制。
    - 学完能回答：机器人在什么情况下应该主动向人求助？ ／ 如何系统地收集和分类失败案例？ ／ 软件层安全措施为什么不能替代硬件安全设计？
    - 入门阅读：[Ren et al., Robots That Ask For Help: Uncertainty Alignment for Large Language Model Planners](https://arxiv.org/abs/2307.01928)；[Ma et al., A Survey on Vision-Language-Action Models for Embodied AI](https://arxiv.org/abs/2405.14093)

#### 11 · 仿真、数据与 Sim2Real ★★

> 低成本地大量试错，再把能力搬到真机
> 优先学习配方：1.1 物理仿真器 ｜ 2.1 域随机化 ｜ 3.1 合成数据 ｜ 1.3 家居场景仿真

**学习路线**：`11-M1.1` 物理仿真器：MuJoCo、Isaac Sim / Isaac Lab、PyBullet → `11-M1.2` 机器人学习环境：Gymnasium、robosuite、ManiSkill → `11-M3.3` 低成本开源硬件平台（如 SO-100 机械臂）入门 → `11-M2.1` 域随机化 → `11-M2.2` 系统辨识 → `11-M1.3` 家居与具身导航仿真（Habitat 等） → `11-M3.1` 合成数据与程序化场景生成 → `11-M3.2` 数据质量、标注与清洗 → `11-M2.3` Real2Sim 与数字孪生

- **M1 仿真平台**
  - `11-M1.1` 物理仿真器：MuJoCo、Isaac Sim / Isaac Lab、PyBullet ★★★ 🍃 在仿真里给单关节调 PID（练习）、[MuJoCo](https://mujoco.org/)、[Isaac Lab](https://isaac-sim.github.io/IsaacLab/)、[PyBullet](https://pybullet.org/)、用 SB3 在 MuJoCo 环境里训一个 PPO 智能体（练习） 🃏 [MuJoCo](https://mujoco.org/)
    - 学什么：物理仿真器模拟刚体动力学、接触与传感器，让机器人在虚拟环境中低成本、大规模地试错；MuJoCo 以接触仿真精确高效著称，Isaac Sim / Isaac Lab 支持 GPU 大规模并行，PyBullet 轻量易上手。
    - 学完能回答：选择仿真器时要考虑哪些因素（精度、速度、渲染、生态）？ ／ GPU 并行仿真为什么能加快强化学习训练？ ／ 接触参数设置不当会产生哪些仿真伪影？
    - 入门阅读：[MuJoCo 文档](https://mujoco.readthedocs.io/)；[Isaac Lab 文档](https://isaac-sim.github.io/IsaacLab/main/index.html)
  - `11-M1.2` 机器人学习环境：Gymnasium、robosuite、ManiSkill ★★ 🍃 [Gymnasium](https://gymnasium.farama.org/)、[robosuite](https://robosuite.ai/)、[ManiSkill](https://github.com/haosulab/ManiSkill)
    - 学什么：机器人学习环境在仿真器之上封装任务、观测、奖励与重置逻辑，并提供统一接口与基准任务，方便复现和比较算法。
    - 学完能回答：Gymnasium 的 reset / step 接口包含哪些返回值？ ／ 操作基准通常提供哪些任务与评测指标？ ／ 自定义一个新任务环境需要实现哪些部分？
    - 入门阅读：[Gymnasium 文档](https://gymnasium.farama.org/)；[robosuite 官网](https://robosuite.ai/)
  - `11-M1.3` 家居与具身导航仿真（Habitat 等） ★★ 🍃 [AI Habitat](https://aihabitat.org/)
    - 学什么：家居与具身导航仿真提供逼真的室内场景，支持导航、物体重排和人机共处等任务，适合研究居家服务与养老场景中的机器人行为。
    - 学完能回答：家居仿真中的场景数据从哪里来？ ／ 仿真中加入“人类角色”能研究哪些问题？ ／ 家居仿真与真实家庭在哪些方面差距最大？
    - 入门阅读：[AI Habitat 官网](https://aihabitat.org/)；[Puig et al., Habitat 3.0: A Co-Habitat for Humans, Avatars and Robots](https://arxiv.org/abs/2310.13724)
- **M2 Sim2Real**
  - `11-M2.1` 域随机化 ★★★ 🍃 [Isaac Lab](https://isaac-sim.github.io/IsaacLab/)
    - 学什么：域随机化在训练时随机改变仿真中的视觉外观、物理参数和传感器噪声，使策略把真实世界当作又一种“随机变体”，从而提高仿真到真机的迁移能力。
    - 学完能回答：视觉随机化与动力学随机化分别针对什么差距？ ／ 随机化范围过大或过小分别有什么问题？ ／ 域随机化与域自适应有何区别？
    - 入门阅读：[Tobin et al., Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World](https://arxiv.org/abs/1703.06907)；[Peng et al., Sim-to-Real Transfer of Robotic Control with Dynamics Randomization](https://arxiv.org/abs/1710.06537)
  - `11-M2.2` 系统辨识 ★★
    - 学什么：系统辨识用真实数据估计机器人或环境的模型参数（质量、摩擦、执行器特性等），让仿真更接近真实；也可以用神经网络学习难以建模的部分（如执行器动态）。
    - 学完能回答：哪些参数最常需要辨识？ ／ 用神经网络建模执行器动态解决了什么问题？ ／ 系统辨识与域随机化可以如何结合？
    - 入门阅读：[Hwangbo et al., Learning agile and dynamic motor skills for legged robots](https://arxiv.org/abs/1901.08652)
  - `11-M2.3` Real2Sim 与数字孪生 ★
    - 学什么：Real2Sim 从真实场景重建仿真环境（数字孪生），在其中训练或微调策略再部署回真机，用于缩小场景层面的差距。
    - 学完能回答：构建数字孪生需要哪些信息（几何、外观、物理属性）？ ／ Real-to-Sim-to-Real 流程比纯仿真训练有什么优势？ ／ 数字孪生维护成本高在哪里？
    - 入门阅读：[Torne et al., Reconciling Reality through Simulation: A Real-to-Sim-to-Real Approach](https://arxiv.org/abs/2403.03949)
- **M3 数据工程**
  - `11-M3.1` 合成数据与程序化场景生成 ★★
    - 学什么：合成数据与程序化场景生成可大规模、自动地产生多样化训练数据和标注，弥补真实数据的不足，但需要注意与真实分布之间的差距。
    - 学完能回答：程序化生成如何保证场景合理（如物体摆放符合常识）？ ／ 合成数据最适合补充哪类任务的训练？ ／ 如何检验模型从合成数据中学到的能力能迁移到真实世界？
    - 入门阅读：[Deitke et al., ProcTHOR: Large-Scale Embodied AI Using Procedural Generation](https://arxiv.org/abs/2206.06994)；[Tobin et al., Domain Randomization](https://arxiv.org/abs/1703.06907)
  - `11-M3.2` 数据质量、标注与清洗 ★★
    - 学什么：机器人数据的质量直接决定模仿学习效果：示教者水平、动作是否流畅一致、失败片段与标注质量都会影响策略，数据清洗与筛选是重要工程环节。
    - 学完能回答：示教者熟练度差异如何影响离线学习结果？ ／ 哪些自动化指标可以帮助筛选低质量示教？ ／ 为什么要保留并标注失败片段？
    - 入门阅读：[Mandlekar et al., What Matters in Learning from Offline Human Demonstrations for Robot Manipulation（robomimic）](https://arxiv.org/abs/2108.03298)
  - `11-M3.3` 低成本开源硬件平台（如 SO-100 机械臂）入门 ★★ 🍃 [LeRobot](https://github.com/huggingface/lerobot)、[SO-ARM100 开源机械臂](https://github.com/TheRobotStudio/SO-ARM100)
    - 学什么：低成本开源硬件（如 SO-100 机械臂）配合开源软件栈，让个人和小团队也能完成“采集示教 → 训练策略 → 真机部署”的完整闭环，是入门具身智能的实用起点。
    - 学完能回答：用低成本机械臂做研究有哪些局限（精度、负载、重复性）？ ／ 一次完整的示教采集与训练流程包括哪些步骤？ ／ 如何把实验结果整理成可复现的开源数据集？
    - 入门阅读：[LeRobot 文档](https://huggingface.co/docs/lerobot/index)；[SO-ARM100 开源机械臂](https://github.com/TheRobotStudio/SO-ARM100)

### 〔养老〕

#### 12 · 老年医学与常见慢病 ★★★

> 理解服务对象：老年人的身体、认知与功能
> 优先学习配方：1.1 衰老生理 ｜ 2.1 老年综合征 ｜ 3.1 综合评估 ｜ 4.1 认知障碍

- **M1 衰老生理**
  - `12-M1.1` 衰老的生理变化与器官储备下降 ★★
  - `12-M1.2` 老年药代 / 药效变化（肾功能下降、体成分改变、敏感性改变） ★★★
  - `12-M1.3` 人口老龄化趋势与健康老龄化理念 ★★ 🍃 [WHO 老龄与健康主题页](https://www.who.int/health-topics/ageing)
- **M2 老年综合征**
  - `12-M2.1` 衰弱（Frailty） ★★★
  - `12-M2.2` 跌倒及其危险因素 ★★★
  - `12-M2.3` 肌少症与营养不良 ★★
  - `12-M2.4` 尿失禁、睡眠障碍、谵妄 ★★
  - `12-M2.5` 吞咽障碍 ★★
- **M3 老年综合评估（CGA）**
  - `12-M3.1` CGA 的维度：躯体、功能、认知、心理、社会 ★★★ 🃏 [老年综合评估（CGA）](https://www.who.int/health-topics/ageing)
  - `12-M3.2` 日常生活能力评估：ADL / IADL ★★★
  - `12-M3.3` 常用量表思路：认知筛查、跌倒风险、营养筛查 ★★
- **M4 常见慢病**
  - `12-M4.1` 认知障碍与阿尔茨海默病 ★★★
  - `12-M4.2` 高血压、糖尿病、冠心病与心衰 ★★
  - `12-M4.3` 帕金森病与卒中后康复 ★★
  - `12-M4.4` 骨质疏松与骨关节病 ★★
  - `12-M4.5` 慢阻肺与感染防控 ★
  - `12-M4.6` 共病与以人为中心的照护目标 ★★

#### 13 · 老年药学：多重用药与依从性 ★★★

> 药学 × 养老的核心交叉：让老人用对药、按时用药
> 优先学习配方：1.1 多重用药 ｜ 2.1 Beers 标准 ｜ 3.1 依从性 ｜ 4.1 药物重整

- **M1 多重用药**
  - `13-M1.1` 多重用药的定义与危害 ★★★
  - `13-M1.2` 处方瀑布（Prescribing Cascade） ★★
  - `13-M1.3` 抗胆碱能负荷与跌倒风险药物 ★★★ 🍃 整理一份 10 种老年常见潜在不适当用药的速查表（练习）
- **M2 潜在不适当用药（PIM）评估**
  - `13-M2.1` Beers 标准（美国老年医学会） ★★★ 🍃 [美国老年医学会（AGS）](https://www.americangeriatrics.org/)、整理一份 10 种老年常见潜在不适当用药的速查表（练习） 🃏 [Beers 标准（AGS）](https://www.americangeriatrics.org/)
  - `13-M2.2` STOPP / START 标准 ★★ 🍃 整理一份 10 种老年常见潜在不适当用药的速查表（练习）
  - `13-M2.3` 中国老年人潜在不适当用药判断标准 ★★
  - `13-M2.4` 减药 / 停药（Deprescribing）流程 ★★★
- **M3 用药依从性**
  - `13-M3.1` 依从性的影响因素：认知、视力、手功能、经济、方案复杂度 ★★★ 🍃 访谈 2–3 位老人或照护者，画一张用药日常流程图（练习）
  - `13-M3.2` 依从性测量：自报、药盒计数、电子监测、药房取药记录 ★★
  - `13-M3.3` 提升依从性：简化方案、分装药盒、提醒、家属与照护者参与 ★★★
- **M4 用药安全管理**
  - `13-M4.1` 社区与机构场景的药物重整与用药清单 ★★
  - `13-M4.2` 养老机构用药管理流程（领药、分药、给药、记录） ★★★
  - `13-M4.3` 用药相关不良事件的识别与上报 ★★ 🍃 [WHO 用药无害（Medication Without Harm）](https://www.who.int/initiatives/medication-without-harm)
  - `13-M4.4` 临床决策支持系统（CDSS）中的老年用药规则 ★★ 🍃 原型：老年用药清单的 DDI / PIM 规则检查 + LLM 解释（练习）

#### 14 · 照护服务与智慧养老 ★★

> 理解场景：谁在照护、在哪照护、痛点在哪
> 优先学习配方：1.1 养老服务体系 ｜ 2.1 照护需求 ｜ 3.1 智慧养老技术 ｜ 3.4 适老化设计

- **M1 养老服务体系**
  - `14-M1.1` 居家、社区、机构养老与医养结合 ★★★ 🍃 [WHO 老龄与健康主题页](https://www.who.int/health-topics/ageing)
  - `14-M1.2` 长期护理保险与照护等级评估 ★★
  - `14-M1.3` 照护人力短缺与照护者负担 ★★
- **M2 照护需求与场景**
  - `14-M2.1` 生活照料：进食、如厕、洗浴、转移 ★★
  - `14-M2.2` 失能与认知症照护要点 ★★
  - `14-M2.3` 康复与功能维持 ★★
  - `14-M2.4` 孤独感、社会参与与心理支持 ★★
  - `14-M2.5` 安宁疗护 ★
- **M3 智慧养老技术**
  - `14-M3.1` 可穿戴设备与生命体征监测 ★★★ 🍃 [PhysioNet](https://physionet.org/)
  - `14-M3.2` 智能家居与非接触式监测（毫米波雷达、红外、门磁等） ★★ 🍃 [Home Assistant](https://www.home-assistant.io/)
  - `14-M3.3` 远程医疗与慢病远程管理 ★★
  - `14-M3.4` 适老化设计：界面、语音交互、无障碍标准 ★★★ 🍃 [WCAG 无障碍指南](https://www.w3.org/WAI/standards-guidelines/wcag/)、原型：摄像头 + 语音的服药提醒与服药确认 Demo（练习）
  - `14-M3.5` 养老信息系统与健康档案 ★
- **M4 用户研究与评估**
  - `14-M4.1` 老年用户研究方法：访谈、观察、参与式设计 ★★ 🍃 访谈 2–3 位老人或照护者，画一张用药日常流程图（练习）
  - `14-M4.2` 技术接受度与数字鸿沟 ★★
  - `14-M4.3` 效果评估：临床结局、生活质量、成本效益 ★★

#### 15 · 伦理、隐私、政策与标准 ★★

> 做之前先想清楚：能不能做、该不该做、怎样合规地做
> 优先学习配方：1.1 自主与知情同意 ｜ 2.1 健康数据隐私 ｜ 3.1 产业政策 ｜ 3.3 机器人安全标准

- **M1 伦理**
  - `15-M1.1` 自主性、知情同意与认知障碍者的代理决策 ★★★
  - `15-M1.2` 陪伴机器人的伦理争议：欺骗、依赖、替代人际关怀 ★★
  - `15-M1.3` 算法偏见与年龄歧视 ★★
  - `15-M1.4` 责任归属：机器人或 AI 出错时谁负责 ★★
- **M2 隐私与数据合规**
  - `15-M2.1` 健康数据隐私与个人信息保护（个人信息保护法等） ★★★
  - `15-M2.2` 家庭摄像头 / 传感器监测的隐私权衡与本地化处理 ★★ 🍃 原型：基于姿态估计的跌倒检测并评估误报率（练习）
  - `15-M2.3` 医疗 AI 数据治理与去标识化 ★★
- **M3 政策与标准**
  - `15-M3.1` 国家银发经济与智慧健康养老相关政策（跟踪最新文件） ★★
  - `15-M3.2` 医疗器械分类与 AI 医疗软件注册 ★★ 🍃 [国家药品监督管理局（NMPA）](https://www.nmpa.gov.cn/)
  - `15-M3.3` 服务机器人安全标准（如 ISO 13482 个人护理机器人） ★★
  - `15-M3.4` 无障碍与适老化标准（如 WCAG） ★ 🍃 [WCAG 无障碍指南](https://www.w3.org/WAI/standards-guidelines/wcag/)

### 〔交叉应用〕

#### 16 · 交叉应用：养老机器人与 AI 用药安全 ★★★

> 三条主线的汇合点：做一个真正有用的养老+用药系统
> 优先学习配方：2.1 用药提醒 ｜ 2.3 自动化药房 ｜ 3.1 跌倒检测 ｜ 5.1 系统集成

- **M1 场景地图**
  - `16-M1.1` 养老机器人分类：陪伴社交、生活辅助、康复、护理移位、巡检 ★★★
  - `16-M1.2` 需求优先级：安全 > 健康 > 便利 > 陪伴 ★★ 🍃 访谈 2–3 位老人或照护者，画一张用药日常流程图（练习）
  - `16-M1.3` 已有产品与落地经验的复盘方法（成功与失败案例） ★★
- **M2 用药管理机器人与系统**
  - `16-M2.1` 用药提醒与服药确认（视觉 / 智能药盒 / 语音） ★★★ 🍃 原型：摄像头 + 语音的服药提醒与服药确认 Demo（练习）
  - `16-M2.2` 智能药盒与分装：分药、计数、漏服检测 ★★
  - `16-M2.3` 自动化药房、药品配送机器人与机构内物流 ★★
  - `16-M2.4` 机器人取药递药：识别、抓取、交接人手 ★★ 🍃 原型：在仿真中让机械臂从药架取药盒并递到人手（练习）
  - `16-M2.5` 老年用药 DDI / PIM 规则引擎与 LLM 用药问答（安全边界） ★★★ 🍃 做一个调用 RDKit / PubChem 的药物问答小 Agent（练习）、原型：老年用药清单的 DDI / PIM 规则检查 + LLM 解释（练习）
- **M3 居家健康监测与安全**
  - `16-M3.1` 跌倒检测与报警系统 ★★★ 🍃 [MediaPipe](https://ai.google.dev/edge/mediapipe)、原型：基于姿态估计的跌倒检测并评估误报率（练习） 🃏 [姿态估计做跌倒检测](https://ai.google.dev/edge/mediapipe)
  - `16-M3.2` 夜间与睡眠异常监测 ★★
  - `16-M3.3` 生命体征趋势分析与预警 ★★ 🍃 [PhysioNet](https://physionet.org/)
  - `16-M3.4` 认知衰退的数字生物标志物（研究阶段，审慎使用） ★
- **M4 陪护与交互**
  - `16-M4.1` 陪伴机器人与对话 Agent（记忆、个性化、情感支持） ★★ 🃏 [PARO 治疗型海豹机器人](https://unit.aist.go.jp/hiiri/topics/03-en.html)
  - `16-M4.2` 认知训练与康复游戏 ★
  - `16-M4.3` 照护者辅助：交接班记录、照护计划生成 ★★
  - `16-M4.4` 移位、喂食、穿衣等物理辅助操作（研究前沿） ★★
- **M5 系统落地**
  - `16-M5.1` 系统集成：感知 + 规则 + 大模型 + 机器人 + 人工兜底 ★★★
  - `16-M5.2` 人在回路与升级机制（何时必须叫人） ★★★
  - `16-M5.3` 合规评估：医疗器械边界、隐私、安全认证 ★★
  - `16-M5.4` 小规模试点与真实场景评估方法 ★★
  - `16-M5.5` AIDD × 养老：老年适应症药物研发与老年人群 PK 建模 ★★ 🍃 [Open Systems Pharmacology（PK-Sim / MoBi）](https://www.open-systems-pharmacology.org/)

## 叶子清单

### 树根 · 通用工具

- [ ] [PyTorch](https://pytorch.org/) — 深度学习训练与推理的基础框架，AIDD 与机器人学习都用它  `root`
- [ ] [Hugging Face](https://huggingface.co/) — 开源模型与数据集社区，分子模型、VLA 权重常在这里发布  `root`
- [ ] [Jupyter](https://jupyter.org/) — 交互式笔记本，适合做数据探索和教学演示  `root`
- [ ] [RDKit](https://www.rdkit.org/) — 开源化学信息学工具包：分子读写、指纹、描述符、子结构搜索  `root`
- [ ] [ROS 2](https://docs.ros.org/) — 机器人操作系统第 2 代，具身项目的通用软件骨架  `root`

### 01 · 药物化学与药物发现流程

- [ ] [RCSB PDB](https://www.rcsb.org/) — 蛋白质结构数据库，结构生物学与对接的起点  `01-M4.1`
- [ ] 用 RDKit 计算一组上市药的类药性指标（练习） — 算分子量、logP、氢键供受体，对照类药性规则看例外  `01-M2.3`
- [ ] [AutoDock Vina](https://vina.scripps.edu/) — 经典开源分子对接程序  `01-M4.4`
- [ ] [OpenMM](https://openmm.org/) — GPU 加速、Python 友好的分子动力学模拟库  `01-M4.5`
- [ ] 对一个已知复合物做重对接并计算 RMSD（练习） — 从 PDB 取共晶结构，重对接配体，体会对接打分与姿态误差  `01-M4.4`

### 02 · 药理学与药代动力学（ADMET）

- [ ] [SwissADME](https://www.swissadme.ch/) — 在线估算理化性质、药代与类药性的免费工具  `02-M2.1`
- [ ] [Open Systems Pharmacology（PK-Sim / MoBi）](https://www.open-systems-pharmacology.org/) — 开源的生理药代动力学建模平台  `02-M2.5`
- [ ] 用 Python 写一个一室模型并拟合血药浓度曲线（练习） — 手写一室口服吸收模型，求半衰期、清除率、AUC  `02-M2.4`

### 04 · 临床研究、法规与药物警戒

- [ ] [ClinicalTrials.gov](https://clinicaltrials.gov/) — 全球最大的临床试验注册库，可检索老年人群相关试验  `04-M1.1`
- [ ] [ICH 指南](https://www.ich.org/) — 人用药品技术要求国际协调理事会，质量 / 安全 / 有效性指南的来源  `04-M2.1`
- [ ] [国家药品监督管理局（NMPA）](https://www.nmpa.gov.cn/) — 中国药品与医疗器械监管机构官网  `04-M2.1`
- [ ] [FDA Drugs](https://www.fda.gov/drugs) — 美国 FDA 药品板块：审评、安全通讯、指导原则  `04-M2.1`

### 05 · AIDD：AI 驱动的药物发现

- [ ] [PubChem](https://pubchem.ncbi.nlm.nih.gov/) — NCBI 维护的公共化合物与生物活性数据库  `05-M1.3`
- [ ] [ChEMBL](https://www.ebi.ac.uk/chembl/) — EMBL-EBI 维护的类药分子生物活性数据库，QSAR 建模常用数据源  `05-M1.3`
- [ ] [ZINC](https://zinc.docking.org/) — 可购买化合物的虚拟筛选数据库  `05-M1.3`
- [ ] [DrugBank](https://go.drugbank.com/) — 药物、靶点与相互作用知识库（注意其使用许可条款）  `05-M1.3`
- [ ] [Therapeutics Data Commons（TDC）](https://tdcommons.ai/) — 治疗学机器学习数据集与基准，覆盖 ADMET、DTI 等任务  `05-M2.2`
- [ ] [DeepChem](https://deepchem.io/) — 面向化学与生物的开源深度学习库  `05-M2.1`
- [ ] [Chemprop](https://github.com/chemprop/chemprop) — 基于有向消息传递神经网络的分子性质预测工具  `05-M2.1`
- [ ] [REINVENT 4](https://github.com/MolecularAI/REINVENT4) — AstraZeneca 开源的生成式分子设计框架  `05-M4.1`
- [ ] [AlphaFold 蛋白结构数据库](https://alphafold.ebi.ac.uk/) — EMBL-EBI 与 DeepMind 提供的预测蛋白结构数据库  `05-M3.1`
- [ ] [ColabFold](https://github.com/sokrypton/ColabFold) — 可在 Colab 上运行的加速版 AlphaFold2 / RoseTTAFold 推理  `05-M3.1`
- [ ] [DiffDock 代码](https://github.com/gcorso/DiffDock) — 基于扩散生成模型的分子对接开源实现  `05-M3.3`
- [ ] [RFdiffusion 代码](https://github.com/RosettaCommons/RFdiffusion) — 基于扩散模型的蛋白质结构生成与设计  `05-M4.3`
- [ ] 同一个 ADMET 任务对比随机划分与骨架划分（练习） — 在 TDC 数据上分别用两种划分训练，观察性能差距，理解数据泄漏  `05-M1.4`
- [ ] 做一个调用 RDKit / PubChem 的药物问答小 Agent（练习） — 让 LLM 通过工具查分子性质与相互作用，并标注信息来源  `05-M5.3`

### 06 · 机器人学基础

- [ ] [Modern Robotics（教材与课程）](https://modernrobotics.northwestern.edu/) — 西北大学 Lynch & Park 的机器人学教材与配套课程  `06-M1.2`
- [ ] [Pinocchio](https://github.com/stack-of-tasks/pinocchio) — 高效的刚体动力学与运动学 C++/Python 库  `06-M2.1`
- [ ] 手推一个 2 自由度平面机械臂的正逆运动学并用 Python 可视化（练习） — 从几何法到雅可比，体会奇异位形  `06-M1.2`

### 07 · 机器人感知

- [ ] [OpenCV](https://opencv.org/) — 经典计算机视觉库  `07-M1.1`
- [ ] [Open3D](https://www.open3d.org/) — 三维数据处理库：点云、网格、配准  `07-M2.1`
- [ ] [MediaPipe](https://ai.google.dev/edge/mediapipe) — Google 的端侧感知方案，含人体姿态、手部关键点等  `07-M4.1`

### 08 · 控制与规划

- [ ] [Drake](https://drake.mit.edu/) — MIT 发起的机器人建模、仿真与优化工具箱  `08-M2.2`
- [ ] [MoveIt](https://moveit.ai/) — ROS 生态的机械臂运动规划框架  `08-M2.1`
- [ ] [Nav2](https://docs.nav2.org/) — ROS 2 导航框架：定位、规划与避障  `08-M2.3`
- [ ] 在仿真里给单关节调 PID（练习） — 观察比例、积分、微分项对超调和稳态误差的影响  `08-M1.1`

### 09 · 机器人学习：强化学习与模仿学习

- [ ] [Gymnasium](https://gymnasium.farama.org/) — 强化学习标准环境接口（OpenAI Gym 的继任者）  `09-M1.1`
- [ ] [Stable-Baselines3](https://stable-baselines3.readthedocs.io/) — 可靠的 PyTorch 强化学习算法实现  `09-M1.2`
- [ ] [LeRobot](https://github.com/huggingface/lerobot) — Hugging Face 的真实机器人学习库：数据集、策略训练、低成本硬件  `09-M2.1`
- [ ] [ALOHA 项目页](https://tonyzhaozh.github.io/aloha/) — 低成本双臂遥操作系统与 ACT 算法  `09-M2.2`
- [ ] [Diffusion Policy 项目页](https://diffusion-policy.cs.columbia.edu/) — 把动作生成建模为条件扩散过程的视觉运动策略  `09-M2.3`
- [ ] [Open X-Embodiment](https://robotics-transformer-x.github.io/) — 多机构汇集的跨本体机器人数据集与 RT-X 模型  `09-M3.2`
- [ ] 用 SB3 在 MuJoCo 环境里训一个 PPO 智能体（练习） — 跑通训练曲线，再改奖励函数看行为变化  `09-M1.2`
- [ ] 用 LeRobot 在仿真数据上训一个行为克隆策略（练习） — 体会示教数据量与分布偏移对成功率的影响  `09-M2.1`

### 10 · 具身大模型与 VLA

- [ ] [OpenVLA](https://openvla.github.io/) — 开源视觉—语言—动作模型，支持微调  `10-M2.2`
- [ ] [Octo](https://octo-models.github.io/) — 基于 Open X-Embodiment 训练的开源通用机器人策略  `10-M2.2`
- [ ] [openpi](https://github.com/Physical-Intelligence/openpi) — Physical Intelligence 开源的 π0 系列模型代码与权重  `10-M2.3`

### 11 · 仿真、数据与 Sim2Real

- [ ] [SO-ARM100 开源机械臂](https://github.com/TheRobotStudio/SO-ARM100) — 低成本开源机械臂，常与 LeRobot 搭配做示教采集  `11-M3.3`
- [ ] [MuJoCo](https://mujoco.org/) — 高性能物理仿真器，机器人学习的常用底座  `11-M1.1`
- [ ] [Isaac Lab](https://isaac-sim.github.io/IsaacLab/) — 基于 NVIDIA Isaac Sim 的机器人学习框架  `11-M1.1`
- [ ] [PyBullet](https://pybullet.org/) — 轻量易上手的物理仿真 Python 接口  `11-M1.1`
- [ ] [robosuite](https://robosuite.ai/) — 基于 MuJoCo 的机器人操作仿真基准  `11-M1.2`
- [ ] [ManiSkill](https://github.com/haosulab/ManiSkill) — 可 GPU 并行的机器人操作仿真与基准  `11-M1.2`
- [ ] [AI Habitat](https://aihabitat.org/) — 面向家居场景的具身 AI 仿真平台  `11-M1.3`

### 12 · 老年医学与常见慢病

- [ ] [WHO 老龄与健康主题页](https://www.who.int/health-topics/ageing) — 世界卫生组织关于老龄化、健康老龄化的资料入口  `12-M1.3`

### 13 · 老年药学：多重用药与依从性

- [ ] [美国老年医学会（AGS）](https://www.americangeriatrics.org/) — Beers 标准的发布方，提供老年医学资源  `13-M2.1`
- [ ] [WHO 用药无害（Medication Without Harm）](https://www.who.int/initiatives/medication-without-harm) — WHO 全球患者安全挑战：减少可避免的用药伤害  `13-M4.3`
- [ ] 整理一份 10 种老年常见潜在不适当用药的速查表（练习） — 对照 Beers / STOPP 与国内标准，写出风险与替代思路（自己核对原文）  `13-M2.1`

### 14 · 照护服务与智慧养老

- [ ] [PhysioNet](https://physionet.org/) — 生理信号与临床数据库平台（部分数据需资质认证与培训）  `14-M3.1`
- [ ] [Home Assistant](https://www.home-assistant.io/) — 开源、可本地运行的智能家居平台，可接入各类传感器  `14-M3.2`
- [ ] 访谈 2–3 位老人或照护者，画一张用药日常流程图（练习） — 找到漏服、错服、重复服药真正发生在哪一步  `14-M4.1`

### 15 · 伦理、隐私、政策与标准

- [ ] [WCAG 无障碍指南](https://www.w3.org/WAI/standards-guidelines/wcag/) — W3C 网页内容无障碍指南，适老化界面设计参考  `15-M3.4`

### 16 · 交叉应用：养老机器人与 AI 用药安全

- [ ] 原型：摄像头 + 语音的服药提醒与服药确认 Demo（练习） — 定时提醒 → 识别药盒格子打开 → 语音确认 → 漏服通知家属（全部本地处理）  `16-M2.1`
- [ ] 原型：基于姿态估计的跌倒检测并评估误报率（练习） — 用 MediaPipe 关键点做规则或小模型，重点统计误报 / 漏报  `16-M3.1`
- [ ] 原型：老年用药清单的 DDI / PIM 规则检查 + LLM 解释（练习） — 规则引擎给结论、LLM 只负责通俗解释，并强制“请咨询医生或药师”兜底  `16-M2.5`
- [ ] 原型：在仿真中让机械臂从药架取药盒并递到人手（练习） — 组合 VLM 识别 + 抓取规划 + 安全减速，体会人机交接难点  `16-M2.4`

## 学习卡片

### [Lipinski 五规则（Rule of 5）](https://doi.org/10.1016/S0169-409X(96)00423-1)（1997）

- **是什么**：Lipinski 等人基于大量进入临床研究的化合物统计提出的经验规则：分子量 > 500、logP > 5、氢键供体 > 5、氢键受体 > 10，超出其中两项及以上时，口服吸收或渗透差的可能性更大。
- **怎么用**：① 虚拟筛选 / 分子生成后的第一道类药性过滤；② 用 RDKit 计算分子量、logP、氢键供受体即可自查（见练习「用 RDKit 计算类药性指标」）；③ 只作参考：天然产物、转运体底物、新型药物模态常是例外。
- 挂载点：`01-M2.3` ｜ 关键词：口服类药性 · 分子量 · logP · 氢键供体 / 受体 ｜ 接下来：`leaf-p-lipinski`, `02-M2.1`, `05-M2.2`

### [AlphaFold 2](https://www.nature.com/articles/s41586-021-03819-2)（2021-07）

- **是什么**：DeepMind 的蛋白结构预测模型：输入氨基酸序列（及多序列比对），输出三维结构和每残基置信度 pLDDT、残基对误差 PAE。
- **怎么用**：① 靶点没有实验结构时得到结构模型，用于口袋分析与对接；② 先查 AlphaFold 蛋白结构数据库，查不到再用 ColabFold 自己跑；③ 只信任高 pLDDT 区域，低置信区域多为柔性或无序。
- 挂载点：`05-M3.1` ｜ 关键词：蛋白结构预测 · MSA · Evoformer · CASP14 ｜ 接下来：`card-alphafold3`, `leaf-colabfold`, `leaf-afdb`

### [AlphaFold 3](https://www.nature.com/articles/s41586-024-07487-w)（2024-05）

- **是什么**：DeepMind 与 Isomorphic Labs 的复合物结构预测模型，可预测蛋白与配体、核酸、离子等组成的复合物结构。
- **怎么用**：① 在 AlphaFold Server 在线提交复合物，获得结合模式假设（服务器支持的分子类型与用途受条款限制，用前阅读）；② 预测结果需用对接、物理合理性检查或实验进一步验证。
- 挂载点：`05-M3.2` ｜ 关键词：复合物结构 · 扩散模块 · 蛋白—配体 · 蛋白—核酸 ｜ 接下来：`card-alphafold2`, `card-diffdock`, `01-M4.3`, `leaf-afdb`

### [ESM-2 / ESMFold](https://github.com/facebookresearch/esm)

- **是什么**：Meta 的蛋白语言模型系列：ESM-2 在大规模蛋白序列上自监督预训练；ESMFold 基于 ESM-2 表示，无需多序列比对即可从单条序列预测结构。
- **怎么用**：① 用 fair-esm 包或 Hugging Face 提取蛋白嵌入，作为 DTI、功能预测等任务的输入特征；② 用 ESMFold 快速批量预测结构，再与 AlphaFold 结果对照。
- 挂载点：`05-M1.2` ｜ 关键词：蛋白语言模型 · 单序列结构预测 · 表示学习 ｜ 接下来：`card-alphafold2`, `05-M3.1`, `05-M2.3`

### [DiffDock](https://arxiv.org/abs/2210.01776)（2022-10）

- **是什么**：把分子对接视为生成问题的扩散模型：在配体平移、旋转和扭转角上逐步去噪生成结合姿态，并用置信度模型给姿态排序。
- **怎么用**：① 输入蛋白结构 + 配体 SMILES，输出排序后的结合姿态，适合口袋未知的盲对接；② 结果用 PoseBusters 检查物理合理性，并与 AutoDock Vina 对照（见对接练习）。
- 挂载点：`05-M3.3` ｜ 关键词：扩散模型 · 盲对接 · 姿态生成 ｜ 接下来：`leaf-diffdock`, `leaf-vina`, `leaf-p-dock`

### [RFdiffusion](https://www.nature.com/articles/s41586-023-06415-8)（2023-07）

- **是什么**：Baker 实验室基于 RoseTTAFold 结构预测网络改造的扩散模型，用于生成新的蛋白质骨架。
- **怎么用**：① 无条件骨架生成、基序支架（motif scaffolding）、结合蛋白设计；② 标准流程：RFdiffusion 生成骨架 → ProteinMPNN 设计序列 → AlphaFold 检查结构自洽，再进实验。
- 挂载点：`05-M4.3` ｜ 关键词：蛋白质从头设计 · 扩散模型 · 结合蛋白设计 ｜ 接下来：`leaf-rfdiffusion`, `card-alphafold2`, `05-M4.2`

### [Chemprop（D-MPNN）](https://github.com/chemprop/chemprop)

- **是什么**：基于有向消息传递神经网络（D-MPNN）的开源分子性质预测软件包。
- **怎么用**：① 准备「SMILES + 标签」的 CSV，命令行即可训练回归 / 分类模型；② 作为 QSAR / ADMET 任务的强基线，并可开启不确定性估计；③ 用 TDC 数据配合骨架划分评估泛化。
- 挂载点：`05-M2.1` ｜ 关键词：消息传递网络 · 性质预测 · 不确定性 ｜ 接下来：`leaf-tdc`, `05-M2.4`, `leaf-p-scaffold`

### [TDC 基准](https://tdcommons.ai/)

- **是什么**：Therapeutics Data Commons：面向治疗学机器学习的数据集、任务与基准平台，提供 Python 包 PyTDC。
- **怎么用**：① 用几行代码加载 ADMET、DTI 等数据集，并按随机 / 骨架等方式划分；② 在 ADMET Benchmark Group 上按统一协议与已有模型对比结果。
- 挂载点：`leaf-tdc` ｜ 关键词：ADMET 基准 · DTI · 数据划分 ｜ 接下来：`05-M1.4`, `card-chemprop`, `leaf-p-scaffold`

### [ICH 指南体系（Q / S / E / M）](https://www.ich.org/)

- **是什么**：人用药品技术要求国际协调理事会（ICH）制定的技术指南，按质量（Q）、安全性（S）、有效性（E）、多学科（M）分类，被多国监管机构采纳。
- **怎么用**：① 查药品研发某一环节的国际共识要求，如 E6 药物临床试验质量管理规范（GCP）、Q8 药物开发；② 在 ich.org 下载指南原文，结合 NMPA 等本国法规理解 AI / 数据工作的合规背景。
- 挂载点：`04-M2.1` ｜ 关键词：质量 Q · 安全 S · 有效性 E（含 GCP） · 多学科 M ｜ 接下来：`04-M2.3`, `03-M3.1`, `leaf-nmpa`

### [RT-1](https://arxiv.org/abs/2212.06817)（2022-12）

- **是什么**：Google 的 Robotics Transformer：输入图像与语言指令，输出离散化的机器人动作 token，用大规模真实机器人示教数据训练。
- **怎么用**：① 理解「大规模真实数据 + Transformer 策略」范式及其泛化评测方法；② 与 RT-2 对比，看引入视觉语言模型带来的语义泛化差异。
- 挂载点：`10-M2.1` ｜ 关键词：Robotics Transformer · 真实机器人大规模数据 · 离散动作 token ｜ 接下来：`card-rt2`, `card-saycan`, `09-M3.2`

### [RT-2](https://arxiv.org/abs/2307.15818)（2023-07）

- **是什么**：Google 的视觉—语言—动作（VLA）模型：在网络图文数据与机器人轨迹上联合微调视觉语言模型，把动作表示为文本 token 输出。
- **怎么用**：① 理解 VLM → VLA 的核心思路与「动作即 token」的设计；② RT-2 未开源权重，想动手可用 OpenVLA 在开源数据上体验类似路线。
- 挂载点：`10-M2.1` ｜ 关键词：VLA · VLM 联合微调 · 动作即文本 token · 语义泛化 ｜ 接下来：`card-rt1`, `card-openvla`, `10-M1.2`, `leaf-openvla`

### [Open X-Embodiment / RT-X](https://arxiv.org/abs/2310.08864)（2023-10）

- **是什么**：多家机构汇集的跨本体机器人示教数据集合，以统一的 RLDS 格式发布，并在其上训练了 RT-1-X / RT-2-X。
- **怎么用**：① 预训练或微调通用策略的数据来源；② 从中挑选与自己机器人形态、任务相近的子数据集；③ Octo、OpenVLA 都基于其中的数据训练，可直接对照学习。
- 挂载点：`09-M3.2` ｜ 关键词：跨本体数据集 · 多机构协作 · RT-1-X / RT-2-X ｜ 接下来：`leaf-oxe`, `card-octo`, `10-M1.3`

### [OpenVLA](https://arxiv.org/abs/2406.09246)（2024-06）

- **是什么**：开源的 7B 参数视觉—语言—动作模型，基于预训练视觉语言模型构建，在 Open X-Embodiment 数据上训练，输出离散化动作 token。
- **怎么用**：① 下载开源权重，用 LoRA 在自己的机器人数据上微调；② 作为 VLA 研究与对比实验的开源基线；③ 关注推理速度与量化部署问题（见 10-M3.2）。
- 挂载点：`10-M2.2` ｜ 关键词：开源 VLA · 7B · LoRA 微调 · Open X-Embodiment 训练 ｜ 接下来：`leaf-openvla`, `card-rt2`, `10-M3.2`

### [Octo](https://arxiv.org/abs/2405.12213)（2024-05）

- **是什么**：基于 Transformer、用扩散头输出动作的开源通用机器人策略，支持语言指令或目标图像作为任务条件。
- **怎么用**：① 用少量自有数据微调，适配新的机器人、相机或动作空间；② 作为通用策略的轻量开源基线，与 OpenVLA 对比。
- 挂载点：`10-M2.2` ｜ 关键词：通用策略 · Transformer + 扩散动作头 · 开源 ｜ 接下来：`leaf-octo`, `card-openvla`, `card-oxe`

### [π0（pi-zero）](https://arxiv.org/abs/2410.24164)（2024-10）

- **是什么**：Physical Intelligence 的 VLA 模型：在预训练视觉语言模型上接一个用流匹配生成连续动作块的「动作专家」。
- **怎么用**：① 通过 openpi 获取代码与权重，在自己的数据上微调；② 学习「VLM 负责理解、动作专家负责高频连续控制」的分层设计，适合灵巧操作研究。
- 挂载点：`10-M2.3` ｜ 关键词：VLM 主干 · 流匹配动作专家 · 高频连续控制 · 跨本体 ｜ 接下来：`leaf-openpi`, `card-diffusion-policy`, `10-M3.1`

### [Diffusion Policy](https://arxiv.org/abs/2303.04137)（2023-03）

- **是什么**：把视觉运动策略建模为条件去噪扩散过程：根据观测生成未来一段动作序列，擅长表达多峰的动作分布。
- **怎么用**：① 用官方代码或 LeRobot 内置实现在示教数据上训练；② 作为模仿学习的强基线，与 ACT 在同一任务上对比（见练习「用 LeRobot 训行为克隆策略」）。
- 挂载点：`09-M2.3` ｜ 关键词：扩散模型 · 视觉运动策略 · 多峰动作分布 ｜ 接下来：`leaf-dp`, `card-act`, `card-pi0`

### [ACT / ALOHA](https://arxiv.org/abs/2304.13705)（2023-04）

- **是什么**：ALOHA 是低成本双臂遥操作硬件系统；ACT（Action Chunking with Transformers）是配套的模仿学习算法，一次预测一段动作块。
- **怎么用**：① 用少量示教学习精细双臂操作；② LeRobot 内置 ACT 实现，可配合 SO-100 等低成本机械臂直接采集数据并训练。
- 挂载点：`09-M2.2` ｜ 关键词：动作分块 · 低成本双臂遥操作 · 精细操作 ｜ 接下来：`leaf-aloha`, `leaf-lerobot`, `card-diffusion-policy`

### [SayCan](https://arxiv.org/abs/2204.01691)（2022-04）

- **是什么**：Google 的「语言规划 + 技能」方法：用 LLM 判断某个技能对完成指令有多大帮助，再结合价值函数估计的可执行性，选出下一步技能。
- **怎么用**：① 作为「LLM 高层规划 + 底层技能库」系统设计的范式参考；② 养老场景中可把「取药盒」「递水杯」等封装成技能，由 LLM 负责排序与组合。
- 挂载点：`10-M2.4` ｜ 关键词：LLM 高层规划 · 可供性（affordance） · 技能库 ｜ 接下来：`card-palme`, `08-M3.3`, `10-M3.1`

### [PaLM-E](https://arxiv.org/abs/2303.03378)（2023-03）

- **是什么**：Google 的具身多模态语言模型：把图像、机器人状态等连续传感器输入编码后注入大语言模型，可输出任务规划等文本。
- **怎么用**：① 理解多模态输入如何接入 LLM；② 作为分层架构中高层规划器的设计参考（模型未开源，以读论文为主）。
- 挂载点：`10-M2.4` ｜ 关键词：具身多模态语言模型 · 传感器嵌入 · 规划 ｜ 接下来：`card-saycan`, `card-rt2`, `10-M1.1`

### [MuJoCo](https://mujoco.org/)

- **是什么**：开源物理引擎，侧重接触丰富场景的快速、精确仿真，用 MJCF 描述模型，提供官方 Python 绑定。
- **怎么用**：① pip 安装 mujoco 后加载机器人模型，做控制与强化学习实验；② 搭配 Gymnasium、robosuite 使用现成任务环境（见练习「在 MuJoCo 环境里训 PPO」）。
- 挂载点：`11-M1.1` ｜ 关键词：接触动力学 · MJCF · Python 绑定 · 开源 ｜ 接下来：`leaf-robosuite`, `leaf-p-ppo`, `11-M2.1`

### [LeRobot](https://github.com/huggingface/lerobot)

- **是什么**：Hugging Face 的开源机器人学习库，提供统一的数据集格式、预训练策略以及真机采集、训练、部署工具。
- **怎么用**：① 下载 Hub 上的数据集，训练 ACT / Diffusion Policy 等策略；② 配合 SO-100 低成本机械臂采集示教数据并部署到真机。
- 挂载点：`leaf-lerobot` ｜ 关键词：数据集格式 · ACT / Diffusion Policy 实现 · 低成本硬件 ｜ 接下来：`leaf-so100`, `card-act`, `leaf-p-bc`

### [Beers 标准（AGS）](https://www.americangeriatrics.org/)

- **是什么**：美国老年医学会发布并定期更新的老年人潜在不适当用药清单，按应避免、慎用、需避免的相互作用、需按肾功能调整等类别列出。
- **怎么用**：① 老年患者用药审核、用药清单检查时的参考依据；② 在 CDSS 或规则引擎中编码条目（需使用官方最新版原文并注意版权）；③ 只作提示，不能替代医生与药师的临床判断。
- 挂载点：`13-M2.1` ｜ 关键词：潜在不适当用药 · 老年人 · 定期更新 · 需查看最新版原文 ｜ 接下来：`13-M2.2`, `13-M2.4`, `leaf-p-pim`

### [老年综合评估（CGA）](https://www.who.int/health-topics/ageing)

- **是什么**：由多学科团队对老年人的躯体、功能、认知、心理、社会与环境进行多维度诊断评估，并据此制定照护计划的过程。
- **怎么用**：① 理解养老产品真正要服务的评估维度；② 设计监测或干预指标时对齐 ADL / IADL 等功能指标，而不只盯单一疾病指标。
- 挂载点：`12-M3.1` ｜ 关键词：多维评估 · ADL / IADL · 跨学科团队 ｜ 接下来：`12-M3.2`, `12-M2.1`, `13-M1.1`

### [PARO 治疗型海豹机器人](https://unit.aist.go.jp/hiiri/topics/03-en.html)

- **是什么**：日本产业技术综合研究所（AIST）开发的海豹外形治疗型陪伴机器人，能通过触摸、声音等传感器做出反应。
- **怎么用**：① 认知症非药物干预与陪伴机器人研究的经典案例；② 讨论陪伴机器人伦理（依赖、欺骗感、替代人际关怀）时的参照对象。
- 挂载点：`16-M4.1` ｜ 关键词：陪伴机器人 · 认知症照护 · 非药物干预 · 伦理讨论 ｜ 接下来：`15-M1.2`, `16-M1.1`, `14-M2.4`

### [姿态估计做跌倒检测](https://ai.google.dev/edge/mediapipe)

- **是什么**：先用人体姿态估计得到骨架关键点序列，再用规则或分类器识别跌倒事件的检测方法。
- **怎么用**：① 用 MediaPipe 提取关键点，依据身体高度、下降速度、躯干角度等特征判断跌倒；② 尽量在本地设备处理视频以保护隐私；③ 重点统计误报与漏报（见练习「基于姿态估计的跌倒检测」）。
- 挂载点：`16-M3.1` ｜ 关键词：人体关键点 · 误报 / 漏报 · 隐私本地化 ｜ 接下来：`leaf-p-fall`, `07-M4.2`, `15-M2.2`


## 收集箱

- **[Boltz](https://github.com/jwohlwend/boltz)**（AIDD 结构预测 · 05-M3 · 观望）：开源的生物分子复合物结构预测模型。 为什么收：可作为复合物结构预测的开源替代来对照学习，与 AlphaFold 3 卡片同主题。 怎么下潜：先读 README 跑官方示例，对比 AlphaFold 3 的输入输出设计即可。
- **[Genesis](https://genesis-embodied-ai.github.io/)**（仿真平台 · 11-M1 · 观望）：面向机器人与具身 AI 的开源物理仿真平台。 为什么收：与 MuJoCo / Isaac Lab 同类，可在选择仿真器时横向比较。 怎么下潜：看官方文档的快速开始，跑一个机械臂示例，比较上手成本与速度。
- **[ProteinMPNN](https://github.com/dauparas/ProteinMPNN)**（AIDD 生成式设计 · 05-M4.3 · 观望）：给定蛋白骨架设计氨基酸序列的深度学习方法。 为什么收：与 RFdiffusion 组成“先生成骨架、再设计序列”的常见蛋白设计流程。 怎么下潜：读论文摘要与 README，理解输入（骨架）与输出（序列），不必深入训练细节。
- **[WHO ICOPE（老年人整合照护）](https://www.who.int/health-topics/ageing)**（野生枝节 · 观望）：WHO 提出的以内在能力为核心的老年人整合照护框架。 为什么收：可为“居家监测 + 社区照护”系统提供以功能为中心的评估视角，与 CGA 互补。 怎么下潜：在 WHO 网站检索 ICOPE 指南与手册，先读评估路径部分。 新概念：内在能力（Intrinsic Capacity）：认知、运动、活力、感官、心理五维功能储备——建议挂在 12-M3 或 14-M2
