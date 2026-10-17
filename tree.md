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

- **M1 数学基础**
  - `00-M1.1` 线性代数（矩阵、特征分解、SVD） ★★
  - `00-M1.2` 概率统计与贝叶斯推断 ★★★
  - `00-M1.3` 微积分与优化（梯度、凸优化） ★★
  - `00-M1.4` 刚体变换与李群初步（旋转矩阵、四元数） ★★
- **M2 编程与工具**
  - `00-M2.1` Python 科学计算（NumPy / pandas / Matplotlib） ★★★ 🍃 [Jupyter](https://jupyter.org/)
  - `00-M2.2` Linux、Git 与环境管理 ★★
  - `00-M2.3` C++ 基础（机器人系统常用） ★
  - `00-M2.4` 实验管理与可复现（配置、随机种子、日志） ★★
- **M3 机器学习与深度学习**
  - `00-M3.1` 深度学习基础（反向传播、优化器、正则化） ★★★ 🍃 [PyTorch](https://pytorch.org/)
  - `00-M3.2` CNN / GNN / Transformer 架构 ★★★
  - `00-M3.3` 生成模型（VAE / 扩散模型 / 自回归） ★★
  - `00-M3.4` 大语言模型与多模态模型基础 ★★★ 🍃 [Hugging Face](https://huggingface.co/)
  - `00-M3.5` 评估方法（数据划分、交叉验证、不确定性） ★★
- **M4 科研方法**
  - `00-M4.1` 文献检索与阅读（PubMed / arXiv / Google Scholar） ★★
  - `00-M4.2` 实验设计与统计检验 ★★
  - `00-M4.3` 跨学科沟通：医学、药学、工程术语对齐 ★

### 〔药学〕

#### 01 · 药物化学与药物发现流程 ★★★

> 从靶点到候选药物：理解一个分子如何成为药
> 优先学习配方：1.1 研发全流程 ｜ 2.2 构效关系 ｜ 2.3 类药性规则 ｜ 3.1 苗头到先导

- **M1 新药研发全景**
  - `01-M1.1` 研发流程：靶点发现 → 苗头 → 先导 → 候选 → 临床 → 上市 ★★★
  - `01-M1.2` 靶点识别与验证 ★★
  - `01-M1.3` 药物类型：小分子、多肽、抗体、核酸、细胞与基因治疗 ★★
  - `01-M1.4` 研发成本、周期与失败原因 ★
- **M2 药物化学基础**
  - `01-M2.1` 官能团、立体化学与手性药物 ★★
  - `01-M2.2` 构效关系（SAR）与生物电子等排 ★★★
  - `01-M2.3` 类药性规则（Lipinski 五规则等）与成药性 ★★★ 🍃 用 RDKit 计算一组上市药的类药性指标（练习） 🃏 [Lipinski 五规则（Rule of 5）](https://doi.org/10.1016/S0169-409X(96)00423-1)
  - `01-M2.4` 前药设计 ★
  - `01-M2.5` 分子表示：SMILES、分子指纹、分子图 ★★★ 🍃 [RDKit](https://www.rdkit.org/)、[PubChem](https://pubchem.ncbi.nlm.nih.gov/)、用 RDKit 计算一组上市药的类药性指标（练习）
- **M3 先导发现与优化**
  - `01-M3.1` 苗头化合物发现：高通量筛选、片段筛选、DNA 编码库 ★★
  - `01-M3.2` 先导优化：活性、选择性、ADMET 多参数平衡 ★★★
  - `01-M3.3` 骨架跃迁与化合物库设计 ★★
  - `01-M3.4` 天然产物与中药现代化 ★
- **M4 结构生物学与分子相互作用**
  - `01-M4.1` 蛋白质结构层级与结合口袋 ★★ 🍃 [RCSB PDB](https://www.rcsb.org/)、[AlphaFold 蛋白结构数据库](https://alphafold.ebi.ac.uk/)
  - `01-M4.2` 结构解析：X 射线、冷冻电镜、NMR ★
  - `01-M4.3` 分子间作用力与结合自由能 ★★
  - `01-M4.4` 分子对接与虚拟筛选原理 ★★★ 🍃 [ZINC](https://zinc.docking.org/)、[AutoDock Vina](https://vina.scripps.edu/)、对一个已知复合物做重对接并计算 RMSD（练习）、[DiffDock 代码](https://github.com/gcorso/DiffDock)
  - `01-M4.5` 分子动力学模拟基础 ★★ 🍃 [OpenMM](https://openmm.org/)

#### 02 · 药理学与药代动力学（ADMET） ★★★

> 药物对机体做什么、机体对药物做什么
> 优先学习配方：1.1 受体理论 ｜ 2.1 ADME 四环节 ｜ 2.3 PK 参数 ｜ 3.1 药物相互作用

- **M1 药效学**
  - `02-M1.1` 受体理论：激动剂、拮抗剂、部分激动剂 ★★★
  - `02-M1.2` 量效关系：EC50、Emax、治疗指数 ★★★
  - `02-M1.3` 主要药物类别与作用机制（心血管、中枢、抗感染、内分泌） ★★
  - `02-M1.4` 耐受、依赖与个体差异 ★
- **M2 药代动力学**
  - `02-M2.1` ADME：吸收、分布、代谢、排泄 ★★★ 🍃 [SwissADME](http://www.swissadme.ch/)
  - `02-M2.2` CYP450 代谢酶与转运体 ★★★
  - `02-M2.3` PK 参数：半衰期、清除率、分布容积、生物利用度、AUC ★★★ 🍃 用 Python 写一个一室模型并拟合血药浓度曲线（练习）
  - `02-M2.4` 房室模型与非房室分析 ★★ 🍃 用 Python 写一个一室模型并拟合血药浓度曲线（练习）
  - `02-M2.5` 群体药代（PopPK）与生理药代（PBPK）模型 ★★ 🍃 [Open Systems Pharmacology（PK-Sim / MoBi）](https://www.open-systems-pharmacology.org/)
- **M3 药物相互作用与毒理**
  - `02-M3.1` 药物相互作用（DDI）：酶抑制 / 诱导、转运体介导 ★★★ 🍃 [DrugBank](https://go.drugbank.com/)、原型：老年用药清单的 DDI / PIM 规则检查 + LLM 解释（练习）
  - `02-M3.2` 毒理学基础：急毒、重复给药毒性、遗传毒性 ★★
  - `02-M3.3` 心脏毒性（hERG / QT 延长）与肝毒性 ★★
  - `02-M3.4` 药物不良反应分类 ★★
- **M4 精准药学**
  - `02-M4.1` 药物基因组学（如 CYP2C19、CYP2D6 多态性） ★★
  - `02-M4.2` 治疗药物监测（TDM） ★★
  - `02-M4.3` 特殊人群用药：老年、肝肾功能不全、儿童、孕期 ★★★

#### 03 · 药剂学与制剂 ★★

> 药物如何被做成患者能用、愿意用的剂型
> 优先学习配方：1.1 剂型分类 ｜ 2.2 缓控释 ｜ 3.1 质量源于设计 ｜ 4.1 适老化剂型

- **M1 剂型与给药途径**
  - `03-M1.1` 常见剂型：片剂、胶囊、注射剂、吸入剂、透皮贴剂 ★★
  - `03-M1.2` 给药途径与首过效应 ★★
  - `03-M1.3` 溶解度、溶出与生物药剂学分类系统（BCS） ★★
- **M2 新型递送系统**
  - `03-M2.1` 缓释 / 控释制剂 ★★
  - `03-M2.2` 纳米递送与脂质纳米粒（LNP） ★★
  - `03-M2.3` 靶向递送与抗体偶联药物（ADC） ★
- **M3 制药工程与质量**
  - `03-M3.1` 质量源于设计（QbD）与 ICH 质量指南 ★★ 🍃 [ICH 指南](https://www.ich.org/)
  - `03-M3.2` GMP 与连续制造 ★
  - `03-M3.3` 稳定性研究与包装 ★
  - `03-M3.4` 仿制药一致性评价与生物等效性 ★★
- **M4 适老化与以患者为中心的制剂**
  - `03-M4.1` 吞咽困难患者的剂型选择（口崩片、液体、可否掰开 / 研碎） ★★★
  - `03-M4.2` 包装与标签的适老化（大字、易开启、单剂量包装） ★★
  - `03-M4.3` 固定剂量复方与减少服药负担 ★★

#### 04 · 临床研究、法规与药物警戒 ★★

> 药从实验室走向患者的规则与证据体系
> 优先学习配方：1.1 临床分期 ｜ 1.3 终点与统计 ｜ 2.1 监管体系 ｜ 3.1 药物警戒

- **M1 临床试验**
  - `04-M1.1` 临床试验分期（I–IV 期） ★★★ 🍃 [ClinicalTrials.gov](https://clinicaltrials.gov/)
  - `04-M1.2` 随机、对照、盲法与伦理审查 ★★
  - `04-M1.3` 终点设计与统计分析（ITT、样本量） ★★
  - `04-M1.4` 老年人在临床试验中的代表性不足问题 ★★ 🍃 [ClinicalTrials.gov](https://clinicaltrials.gov/)
  - `04-M1.5` 真实世界数据与真实世界证据（RWD / RWE） ★★
- **M2 监管与法规**
  - `04-M2.1` 监管机构：NMPA、FDA、EMA 与 ICH ★★ 🍃 [ICH 指南](https://www.ich.org/)、[国家药品监督管理局（NMPA）](https://www.nmpa.gov.cn/)、[FDA Drugs](https://www.fda.gov/drugs) 🃏 [ICH 指南体系（Q / S / E / M）](https://www.ich.org/)
  - `04-M2.2` 新药申报路径（IND / NDA / BLA）概念 ★★
  - `04-M2.3` GCP、GLP 与数据完整性 ★
  - `04-M2.4` AI / 软件作为医疗器械（SaMD）的监管思路 ★★
- **M3 药物警戒与用药安全**
  - `04-M3.1` 药物警戒与不良反应监测体系 ★★ 🍃 [FDA Drugs](https://www.fda.gov/drugs)
  - `04-M3.2` 自发报告数据库与信号检测（比例失衡分析） ★★
  - `04-M3.3` 用药错误的分类与防范 ★★ 🍃 [WHO 用药无害（Medication Without Harm）](https://www.who.int/initiatives/medication-without-harm)
- **M4 药学服务与临床药学**
  - `04-M4.1` 处方审核与合理用药 ★★
  - `04-M4.2` 药物重整（Medication Reconciliation） ★★★
  - `04-M4.3` 药学门诊与慢病管理中的药师角色 ★

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
  - `05-M2.2` ADMET 预测模型 ★★★ 🍃 [SwissADME](http://www.swissadme.ch/)、[Therapeutics Data Commons（TDC）](https://tdcommons.ai/)、同一个 ADMET 任务对比随机划分与骨架划分（练习）
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

- **M1 运动学**
  - `06-M1.1` 位姿表示：旋转矩阵、欧拉角、四元数、齐次变换 ★★★
  - `06-M1.2` 正运动学与逆运动学 ★★★ 🍃 [Modern Robotics（教材与课程）](http://hades.mech.northwestern.edu/index.php/Modern_Robotics)、手推一个 2 自由度平面机械臂的正逆运动学并用 Python 可视化（练习）
  - `06-M1.3` 雅可比矩阵与奇异性 ★★ 🍃 手推一个 2 自由度平面机械臂的正逆运动学并用 Python 可视化（练习）
  - `06-M1.4` 移动机器人运动学（差速、全向） ★★
- **M2 动力学**
  - `06-M2.1` 刚体动力学：牛顿—欧拉与拉格朗日方法 ★★ 🍃 [Modern Robotics（教材与课程）](http://hades.mech.northwestern.edu/index.php/Modern_Robotics)、[Pinocchio](https://github.com/stack-of-tasks/pinocchio)
  - `06-M2.2` 接触、摩擦与抓取力学 ★★ 🍃 [Drake](https://drake.mit.edu/)
  - `06-M2.3` 腿足与平衡（ZMP 等概念） ★
- **M3 机器人软件系统**
  - `06-M3.1` ROS 2：节点、话题、服务、动作 ★★★ 🍃 [ROS 2](https://docs.ros.org/)、[MoveIt](https://moveit.ai/)、[Nav2](https://docs.nav2.org/)
  - `06-M3.2` URDF / MJCF 机器人描述 ★★ 🍃 [MuJoCo](https://mujoco.org/)
  - `06-M3.3` 坐标系管理（TF）与时间同步 ★★
  - `06-M3.4` 实时性与嵌入式控制 ★
- **M4 硬件与形态**
  - `06-M4.1` 机器人形态：机械臂、移动底盘、移动操作、四足、人形 ★★
  - `06-M4.2` 执行器：电机、减速器、力控 / 柔性驱动 ★★
  - `06-M4.3` 传感器：编码器、IMU、力 / 力矩、触觉、相机、激光雷达 ★★
  - `06-M4.4` 灵巧手与末端执行器 ★
  - `06-M4.5` 安全：协作机器人标准与人机交互安全 ★★★

#### 07 · 机器人感知 ★★

> 让机器人看懂、听懂、摸懂环境与人
> 优先学习配方：1.2 目标检测分割 ｜ 2.1 三维视觉 ｜ 3.1 SLAM ｜ 4.1 人体姿态

- **M1 二维视觉**
  - `07-M1.1` 相机模型与标定 ★★ 🍃 [OpenCV](https://opencv.org/)
  - `07-M1.2` 目标检测与分割（含开放词汇方法） ★★★
  - `07-M1.3` 视觉基础模型（CLIP 类、SAM 类、DINO 类） ★★★
- **M2 三维感知**
  - `07-M2.1` 深度相机与点云处理 ★★ 🍃 [Open3D](https://www.open3d.org/)
  - `07-M2.2` 6D 位姿估计 ★★
  - `07-M2.3` 三维场景表示（体素、NeRF、3D 高斯） ★
- **M3 定位与建图**
  - `07-M3.1` SLAM 基础（视觉 / 激光） ★★
  - `07-M3.2` 语义地图与场景图 ★★
- **M4 以人为中心的感知**
  - `07-M4.1` 人体姿态估计与动作识别 ★★★ 🍃 [MediaPipe](https://ai.google.dev/edge/mediapipe)、原型：摄像头 + 语音的服药提醒与服药确认 Demo（练习）
  - `07-M4.2` 跌倒检测：视觉、可穿戴、雷达等方案对比 ★★★ 🍃 原型：基于姿态估计的跌倒检测并评估误报率（练习）
  - `07-M4.3` 语音识别与自然语言交互 ★★
  - `07-M4.4` 情绪与认知状态识别（局限与伦理） ★
- **M5 多模态融合**
  - `07-M5.1` 触觉感知 ★
  - `07-M5.2` 多传感器融合与卡尔曼滤波 ★★

#### 08 · 控制与规划 ★★

> 从“想做什么”到“精确地做出来”
> 优先学习配方：1.1 PID ｜ 2.1 运动规划 ｜ 3.1 任务规划 ｜ 1.3 力控

- **M1 控制**
  - `08-M1.1` PID 与经典控制 ★★★ 🍃 在仿真里给单关节调 PID（练习）
  - `08-M1.2` 模型预测控制（MPC） ★★
  - `08-M1.3` 阻抗 / 导纳控制与力控 ★★
  - `08-M1.4` 全身控制（WBC）概念 ★
- **M2 运动规划**
  - `08-M2.1` 采样式规划（RRT、PRM） ★★ 🍃 [MoveIt](https://moveit.ai/)
  - `08-M2.2` 轨迹优化 ★★ 🍃 [Drake](https://drake.mit.edu/)
  - `08-M2.3` 移动导航（全局 / 局部规划、避障） ★★ 🍃 [Nav2](https://docs.nav2.org/)
  - `08-M2.4` 抓取规划 ★★ 🍃 原型：在仿真中让机械臂从药架取药盒并递到人手（练习）
- **M3 任务规划与决策**
  - `08-M3.1` 任务与运动规划（TAMP） ★
  - `08-M3.2` 行为树与状态机 ★★
  - `08-M3.3` LLM 作为任务规划器（高层规划 + 底层技能） ★★★
- **M4 人机协作**
  - `08-M4.1` 人机共融的安全控制（限速、限力、碰撞检测） ★★
  - `08-M4.2` 人类意图预测与共享控制 ★
  - `08-M4.3` 辅助移动与搀扶类机器人控制要点 ★

#### 09 · 机器人学习：强化学习与模仿学习 ★★★

> 从数据和试错中学技能
> 优先学习配方：1.2 策略梯度 ｜ 2.1 行为克隆 ｜ 2.3 扩散策略 ｜ 3.1 示教数据采集

- **M1 强化学习**
  - `09-M1.1` MDP、价值函数与贝尔曼方程 ★★★ 🍃 [Gymnasium](https://gymnasium.farama.org/)
  - `09-M1.2` 策略梯度与 PPO ★★★ 🍃 [Stable-Baselines3](https://stable-baselines3.readthedocs.io/)、用 SB3 在 MuJoCo 环境里训一个 PPO 智能体（练习）
  - `09-M1.3` off-policy 方法（DQN / SAC） ★★
  - `09-M1.4` 奖励设计与安全约束 ★★
  - `09-M1.5` 离线强化学习 ★
- **M2 模仿学习**
  - `09-M2.1` 行为克隆与分布偏移（DAgger） ★★★ 🍃 [LeRobot](https://github.com/huggingface/lerobot)、用 LeRobot 在仿真数据上训一个行为克隆策略（练习）
  - `09-M2.2` 动作分块（Action Chunking）与 ACT ★★ 🍃 [ALOHA 项目页](https://tonyzhaozh.github.io/aloha/)、用 LeRobot 在仿真数据上训一个行为克隆策略（练习） 🃏 [ACT / ALOHA](https://arxiv.org/abs/2304.13705)
  - `09-M2.3` 扩散策略（Diffusion Policy）与流匹配策略 ★★★ 🍃 [Diffusion Policy 项目页](https://diffusion-policy.cs.columbia.edu/) 🃏 [Diffusion Policy](https://arxiv.org/abs/2303.04137)
  - `09-M2.4` 逆强化学习概念 ★
- **M3 数据**
  - `09-M3.1` 示教数据采集：遥操作、主从臂、VR、手持采集设备 ★★★ 🍃 [SO-ARM100 开源机械臂](https://github.com/TheRobotStudio/SO-ARM100)、[ALOHA 项目页](https://tonyzhaozh.github.io/aloha/)
  - `09-M3.2` 数据格式与大规模数据集（Open X-Embodiment 等） ★★ 🍃 [Open X-Embodiment](https://robotics-transformer-x.github.io/) 🃏 [Open X-Embodiment / RT-X](https://arxiv.org/abs/2310.08864)
  - `09-M3.3` 人类视频学习 ★
- **M4 世界模型**
  - `09-M4.1` 世界模型与基于模型的强化学习 ★★
  - `09-M4.2` 视频生成模型作为模拟器 ★

#### 10 · 具身大模型与 VLA ★★★

> 把大模型的语义能力接到机器人身体上
> 优先学习配方：1.1 VLA 定义 ｜ 2.1 RT-2 ｜ 2.3 π0 ｜ 3.1 分层架构

- **M1 概念**
  - `10-M1.1` 视觉—语言—动作模型（VLA）的定义与动机 ★★★
  - `10-M1.2` 动作表示：离散化 token、连续动作头、扩散 / 流匹配 ★★★
  - `10-M1.3` 跨本体（cross-embodiment）泛化 ★★ 🍃 [Open X-Embodiment](https://robotics-transformer-x.github.io/)
- **M2 代表性工作**
  - `10-M2.1` RT-1 / RT-2 与 RT-X ★★★ 🃏 [RT-1](https://arxiv.org/abs/2212.06817)、[RT-2](https://arxiv.org/abs/2307.15818)
  - `10-M2.2` OpenVLA 与 Octo（开源通用策略） ★★★ 🍃 [OpenVLA](https://openvla.github.io/)、[Octo](https://octo-models.github.io/) 🃏 [OpenVLA](https://arxiv.org/abs/2406.09246)、[Octo](https://arxiv.org/abs/2405.12213)
  - `10-M2.3` π0 系列（流匹配动作专家） ★★★ 🍃 [openpi](https://github.com/Physical-Intelligence/openpi) 🃏 [π0（pi-zero）](https://arxiv.org/abs/2410.24164)
  - `10-M2.4` SayCan、PaLM-E 等“语言规划 + 技能” ★★ 🃏 [SayCan](https://arxiv.org/abs/2204.01691)、[PaLM-E](https://arxiv.org/abs/2303.03378)
  - `10-M2.5` 人形机器人基础模型（行业进展跟踪） ★
- **M3 系统设计**
  - `10-M3.1` 分层架构：高层 VLM 推理 + 底层快速控制 ★★★ 🍃 原型：在仿真中让机械臂从药架取药盒并递到人手（练习）
  - `10-M3.2` 微调与部署：LoRA 微调、量化、推理频率 ★★ 🍃 [LeRobot](https://github.com/huggingface/lerobot)、[OpenVLA](https://openvla.github.io/)、[openpi](https://github.com/Physical-Intelligence/openpi)
  - `10-M3.3` 具身智能体：记忆、工具调用与长程任务 ★★
- **M4 评测**
  - `10-M4.1` 仿真基准与真实评测 ★★
  - `10-M4.2` 泛化维度：物体、场景、指令、本体 ★★
  - `10-M4.3` 安全性与失败模式分析 ★★★

#### 11 · 仿真、数据与 Sim2Real ★★

> 低成本地大量试错，再把能力搬到真机
> 优先学习配方：1.1 物理仿真器 ｜ 2.1 域随机化 ｜ 3.1 合成数据 ｜ 1.3 家居场景仿真

- **M1 仿真平台**
  - `11-M1.1` 物理仿真器：MuJoCo、Isaac Sim / Isaac Lab、PyBullet ★★★ 🍃 在仿真里给单关节调 PID（练习）、[MuJoCo](https://mujoco.org/)、[Isaac Lab](https://isaac-sim.github.io/IsaacLab/)、[PyBullet](https://pybullet.org/)、用 SB3 在 MuJoCo 环境里训一个 PPO 智能体（练习） 🃏 [MuJoCo](https://mujoco.org/)
  - `11-M1.2` 机器人学习环境：Gymnasium、robosuite、ManiSkill ★★ 🍃 [Gymnasium](https://gymnasium.farama.org/)、[robosuite](https://robosuite.ai/)、[ManiSkill](https://github.com/haosulab/ManiSkill)
  - `11-M1.3` 家居与具身导航仿真（Habitat 等） ★★ 🍃 [AI Habitat](https://aihabitat.org/)
- **M2 Sim2Real**
  - `11-M2.1` 域随机化 ★★★ 🍃 [Isaac Lab](https://isaac-sim.github.io/IsaacLab/)
  - `11-M2.2` 系统辨识 ★★
  - `11-M2.3` Real2Sim 与数字孪生 ★
- **M3 数据工程**
  - `11-M3.1` 合成数据与程序化场景生成 ★★
  - `11-M3.2` 数据质量、标注与清洗 ★★
  - `11-M3.3` 低成本开源硬件平台（如 SO-100 机械臂）入门 ★★ 🍃 [LeRobot](https://github.com/huggingface/lerobot)、[SO-ARM100 开源机械臂](https://github.com/TheRobotStudio/SO-ARM100)

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
  - `16-M4.1` 陪伴机器人与对话 Agent（记忆、个性化、情感支持） ★★ 🃏 [PARO 治疗型海豹机器人](http://www.parorobots.com/)
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

- [ ] [SwissADME](http://www.swissadme.ch/) — 在线估算理化性质、药代与类药性的免费工具  `02-M2.1`
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

- [ ] [Modern Robotics（教材与课程）](http://hades.mech.northwestern.edu/index.php/Modern_Robotics) — 西北大学 Lynch & Park 的机器人学教材与配套课程  `06-M1.2`
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

### [PARO 治疗型海豹机器人](http://www.parorobots.com/)

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
