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

- **M1 数据与表示**
  - `05-M1.1` 分子表示学习：指纹、图神经网络、SMILES 语言模型 ★★★ 🍃 [DeepChem](https://deepchem.io/)、[Chemprop](https://github.com/chemprop/chemprop)
  - `05-M1.2` 蛋白表示：序列语言模型（ESM 类）与结构表示 ★★★ 🃏 [ESM-2 / ESMFold](https://github.com/facebookresearch/esm)
  - `05-M1.3` 公共数据库：ChEMBL、PubChem、PDB、ZINC、DrugBank ★★ 🍃 [PubChem](https://pubchem.ncbi.nlm.nih.gov/)、[ChEMBL](https://www.ebi.ac.uk/chembl/)、[ZINC](https://zinc.docking.org/)、[DrugBank](https://go.drugbank.com/)、[RCSB PDB](https://www.rcsb.org/)
  - `05-M1.4` 数据划分陷阱：随机 vs 骨架划分、数据泄漏 ★★★ 🍃 [Therapeutics Data Commons（TDC）](https://tdcommons.ai/)、同一个 ADMET 任务对比随机划分与骨架划分（练习）
- **M2 性质与活性预测**
  - `05-M2.1` QSAR 与分子性质预测 ★★★ 🍃 [ChEMBL](https://www.ebi.ac.uk/chembl/)、[DeepChem](https://deepchem.io/)、[Chemprop](https://github.com/chemprop/chemprop) 🃏 [Chemprop（D-MPNN）](https://github.com/chemprop/chemprop)
  - `05-M2.2` ADMET 预测模型 ★★★ 🍃 [SwissADME](http://www.swissadme.ch/)、[Therapeutics Data Commons（TDC）](https://tdcommons.ai/)、同一个 ADMET 任务对比随机划分与骨架划分（练习）
  - `05-M2.3` 药物—靶点相互作用（DTI）与结合亲和力预测 ★★
  - `05-M2.4` 不确定性估计与适用域 ★★
- **M3 结构驱动方法**
  - `05-M3.1` 蛋白结构预测（AlphaFold 系列、RoseTTAFold、ESMFold） ★★★ 🍃 [AlphaFold 蛋白结构数据库](https://alphafold.ebi.ac.uk/)、[ColabFold](https://github.com/sokrypton/ColabFold) 🃏 [AlphaFold 2](https://www.nature.com/articles/s41586-021-03819-2)
  - `05-M3.2` 生物分子复合物结构预测（蛋白—配体、蛋白—核酸） ★★ 🃏 [AlphaFold 3](https://www.nature.com/articles/s41586-024-07487-w)
  - `05-M3.3` 深度学习分子对接（如 DiffDock） ★★ 🍃 对一个已知复合物做重对接并计算 RMSD（练习）、[DiffDock 代码](https://github.com/gcorso/DiffDock) 🃏 [DiffDock](https://arxiv.org/abs/2210.01776)
  - `05-M3.4` 结合自由能计算与 ML 加速 ★
- **M4 生成式设计**
  - `05-M4.1` 分子生成：VAE、强化学习、扩散模型、语言模型 ★★★ 🍃 [REINVENT 4](https://github.com/MolecularAI/REINVENT4)
  - `05-M4.2` 基于口袋的三维分子生成 ★★
  - `05-M4.3` 蛋白质设计（如 RFdiffusion、ProteinMPNN） ★★ 🍃 [RFdiffusion 代码](https://github.com/RosettaCommons/RFdiffusion) 🃏 [RFdiffusion](https://www.nature.com/articles/s41586-023-06415-8)
  - `05-M4.4` 多目标优化与可合成性评估 ★★
  - `05-M4.5` 逆合成与反应预测 ★★
- **M5 闭环与智能体**
  - `05-M5.1` 主动学习与贝叶斯优化 ★★
  - `05-M5.2` 自动化实验室（Self-driving Lab）与 DMTA 闭环 ★★
  - `05-M5.3` LLM / Agent 在药物研发中的应用（文献挖掘、工具调用） ★★★ 🍃 做一个调用 RDKit / PubChem 的药物问答小 Agent（练习）
  - `05-M5.4` AI 临床：患者分层、试验设计与药物重定位 ★★

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

| 卡片 | 挂载点 | 关键词 | 接下来 | 年月 |
| --- | --- | --- | --- | --- |
| [Lipinski 五规则（Rule of 5）](https://doi.org/10.1016/S0169-409X(96)00423-1) | `01-M2.3` | 口服类药性 · 分子量 · logP · 氢键供体 / 受体 | `leaf-p-lipinski`, `02-M2.1`, `05-M2.2` | 1997 |
| [AlphaFold 2](https://www.nature.com/articles/s41586-021-03819-2) | `05-M3.1` | 蛋白结构预测 · MSA · Evoformer · CASP14 | `card-alphafold3`, `leaf-colabfold`, `leaf-afdb` | 2021-07 |
| [AlphaFold 3](https://www.nature.com/articles/s41586-024-07487-w) | `05-M3.2` | 复合物结构 · 扩散模块 · 蛋白—配体 · 蛋白—核酸 | `card-alphafold2`, `card-diffdock`, `01-M4.3` | 2024-05 |
| [ESM-2 / ESMFold](https://github.com/facebookresearch/esm) | `05-M1.2` | 蛋白语言模型 · 单序列结构预测 · 表示学习 | `card-alphafold2`, `05-M3.1`, `05-M2.3` | — |
| [DiffDock](https://arxiv.org/abs/2210.01776) | `05-M3.3` | 扩散模型 · 盲对接 · 姿态生成 | `leaf-diffdock`, `leaf-vina`, `leaf-p-dock` | 2022-10 |
| [RFdiffusion](https://www.nature.com/articles/s41586-023-06415-8) | `05-M4.3` | 蛋白质从头设计 · 扩散模型 · 结合蛋白设计 | `leaf-rfdiffusion`, `card-alphafold2`, `05-M4.2` | 2023-07 |
| [Chemprop（D-MPNN）](https://github.com/chemprop/chemprop) | `05-M2.1` | 消息传递网络 · 性质预测 · 不确定性 | `leaf-tdc`, `05-M2.4`, `leaf-p-scaffold` | — |
| [TDC 基准](https://tdcommons.ai/) | `leaf-tdc` | ADMET 基准 · DTI · 数据划分 | `05-M1.4`, `card-chemprop`, `leaf-p-scaffold` | — |
| [ICH 指南体系（Q / S / E / M）](https://www.ich.org/) | `04-M2.1` | 质量 Q · 安全 S · 有效性 E（含 GCP） · 多学科 M | `04-M2.3`, `03-M3.1`, `leaf-nmpa` | — |
| [RT-1](https://arxiv.org/abs/2212.06817) | `10-M2.1` | Robotics Transformer · 真实机器人大规模数据 · 离散动作 token | `card-rt2`, `card-saycan`, `09-M3.2` | 2022-12 |
| [RT-2](https://arxiv.org/abs/2307.15818) | `10-M2.1` | VLA · VLM 联合微调 · 动作即文本 token · 语义泛化 | `card-rt1`, `card-openvla`, `10-M1.2` | 2023-07 |
| [Open X-Embodiment / RT-X](https://arxiv.org/abs/2310.08864) | `09-M3.2` | 跨本体数据集 · 多机构协作 · RT-1-X / RT-2-X | `leaf-oxe`, `card-octo`, `10-M1.3` | 2023-10 |
| [OpenVLA](https://arxiv.org/abs/2406.09246) | `10-M2.2` | 开源 VLA · 7B · LoRA 微调 · Open X-Embodiment 训练 | `leaf-openvla`, `card-rt2`, `10-M3.2` | 2024-06 |
| [Octo](https://arxiv.org/abs/2405.12213) | `10-M2.2` | 通用策略 · Transformer + 扩散动作头 · 开源 | `leaf-octo`, `card-openvla`, `card-oxe` | 2024-05 |
| [π0（pi-zero）](https://arxiv.org/abs/2410.24164) | `10-M2.3` | VLM 主干 · 流匹配动作专家 · 高频连续控制 · 跨本体 | `leaf-openpi`, `card-diffusion-policy`, `10-M3.1` | 2024-10 |
| [Diffusion Policy](https://arxiv.org/abs/2303.04137) | `09-M2.3` | 扩散模型 · 视觉运动策略 · 多峰动作分布 | `leaf-dp`, `card-act`, `card-pi0` | 2023-03 |
| [ACT / ALOHA](https://arxiv.org/abs/2304.13705) | `09-M2.2` | 动作分块 · 低成本双臂遥操作 · 精细操作 | `leaf-aloha`, `leaf-lerobot`, `card-diffusion-policy` | 2023-04 |
| [SayCan](https://arxiv.org/abs/2204.01691) | `10-M2.4` | LLM 高层规划 · 可供性（affordance） · 技能库 | `card-palme`, `08-M3.3`, `10-M3.1` | 2022-04 |
| [PaLM-E](https://arxiv.org/abs/2303.03378) | `10-M2.4` | 具身多模态语言模型 · 传感器嵌入 · 规划 | `card-saycan`, `card-rt2`, `10-M1.1` | 2023-03 |
| [MuJoCo](https://mujoco.org/) | `11-M1.1` | 接触动力学 · MJCF · Python 绑定 · 开源 | `leaf-robosuite`, `leaf-p-ppo`, `11-M2.1` | — |
| [LeRobot](https://github.com/huggingface/lerobot) | `leaf-lerobot` | 数据集格式 · ACT / Diffusion Policy 实现 · 低成本硬件 | `leaf-so100`, `card-act`, `leaf-p-bc` | — |
| [Beers 标准（AGS）](https://www.americangeriatrics.org/) | `13-M2.1` | 潜在不适当用药 · 老年人 · 定期更新 · 需查看最新版原文 | `13-M2.2`, `13-M2.4`, `leaf-p-pim` | — |
| [老年综合评估（CGA）](https://www.who.int/health-topics/ageing) | `12-M3.1` | 多维评估 · ADL / IADL · 跨学科团队 | `12-M3.2`, `12-M2.1`, `13-M1.1` | — |
| [PARO 治疗型海豹机器人](http://www.parorobots.com/) | `16-M4.1` | 陪伴机器人 · 认知症照护 · 非药物干预 · 伦理讨论 | `15-M1.2`, `16-M1.1`, `14-M2.4` | — |
| [姿态估计做跌倒检测](https://ai.google.dev/edge/mediapipe) | `16-M3.1` | 人体关键点 · 误报 / 漏报 · 隐私本地化 | `leaf-p-fall`, `07-M4.2`, `15-M2.2` | — |

## 收集箱

- **[Boltz](https://github.com/jwohlwend/boltz)**（AIDD 结构预测 · 05-M3 · 观望）：开源的生物分子复合物结构预测模型。 为什么收：可作为复合物结构预测的开源替代来对照学习，与 AlphaFold 3 卡片同主题。 怎么下潜：先读 README 跑官方示例，对比 AlphaFold 3 的输入输出设计即可。
- **[Genesis](https://genesis-embodied-ai.github.io/)**（仿真平台 · 11-M1 · 观望）：面向机器人与具身 AI 的开源物理仿真平台。 为什么收：与 MuJoCo / Isaac Lab 同类，可在选择仿真器时横向比较。 怎么下潜：看官方文档的快速开始，跑一个机械臂示例，比较上手成本与速度。
- **[ProteinMPNN](https://github.com/dauparas/ProteinMPNN)**（AIDD 生成式设计 · 05-M4.3 · 观望）：给定蛋白骨架设计氨基酸序列的深度学习方法。 为什么收：与 RFdiffusion 组成“先生成骨架、再设计序列”的常见蛋白设计流程。 怎么下潜：读论文摘要与 README，理解输入（骨架）与输出（序列），不必深入训练细节。
- **[WHO ICOPE（老年人整合照护）](https://www.who.int/health-topics/ageing)**（野生枝节 · 观望）：WHO 提出的以内在能力为核心的老年人整合照护框架。 为什么收：可为“居家监测 + 社区照护”系统提供以功能为中心的评估视角，与 CGA 互补。 怎么下潜：在 WHO 网站检索 ICOPE 指南与手册，先读评估路径部分。 新概念：内在能力（Intrinsic Capacity）：认知、运动、活力、感官、心理五维功能储备——建议挂在 12-M3 或 14-M2
