// 自动生成自 content/theory-outline.md —— 请勿手改，跑 scripts/generate-theory.py 重新生成
export interface TheoryPoint { id: string; name: string; freq: number; done: boolean }
export interface TheoryModule { name: string; points: TheoryPoint[] }
export interface TheoryChapter {
  id: string; name: string; weight: number; summary: string; p0: string
  modules: TheoryModule[]
}

export const THEORY_CHAPTERS: TheoryChapter[] = [
  { id: '00', name: '公共基础：数学、编程与科研方法', weight: 2,
    summary: '三条主线共用的地基：数学、Python、深度学习与文献方法', p0: '1.2 概率统计 ｜ 2.1 Python 科学计算 ｜ 3.1 深度学习基础 ｜ 4.1 文献检索与阅读', modules: [
      { name: 'M1 数学基础', points: [
        { id: 'M1.1', name: '线性代数（矩阵、特征分解、SVD）', freq: 2, done: false },
        { id: 'M1.2', name: '概率统计与贝叶斯推断', freq: 3, done: false },
        { id: 'M1.3', name: '微积分与优化（梯度、凸优化）', freq: 2, done: false },
        { id: 'M1.4', name: '刚体变换与李群初步（旋转矩阵、四元数）', freq: 2, done: false },
      ]},
      { name: 'M2 编程与工具', points: [
        { id: 'M2.1', name: 'Python 科学计算（NumPy / pandas / Matplotlib）', freq: 3, done: false },
        { id: 'M2.2', name: 'Linux、Git 与环境管理', freq: 2, done: false },
        { id: 'M2.3', name: 'C++ 基础（机器人系统常用）', freq: 1, done: false },
        { id: 'M2.4', name: '实验管理与可复现（配置、随机种子、日志）', freq: 2, done: false },
      ]},
      { name: 'M3 机器学习与深度学习', points: [
        { id: 'M3.1', name: '深度学习基础（反向传播、优化器、正则化）', freq: 3, done: false },
        { id: 'M3.2', name: 'CNN / GNN / Transformer 架构', freq: 3, done: false },
        { id: 'M3.3', name: '生成模型（VAE / 扩散模型 / 自回归）', freq: 2, done: false },
        { id: 'M3.4', name: '大语言模型与多模态模型基础', freq: 3, done: false },
        { id: 'M3.5', name: '评估方法（数据划分、交叉验证、不确定性）', freq: 2, done: false },
      ]},
      { name: 'M4 科研方法', points: [
        { id: 'M4.1', name: '文献检索与阅读（PubMed / arXiv / Google Scholar）', freq: 2, done: false },
        { id: 'M4.2', name: '实验设计与统计检验', freq: 2, done: false },
        { id: 'M4.3', name: '跨学科沟通：医学、药学、工程术语对齐', freq: 1, done: false },
      ]},
    ]},
  { id: '01', name: '药物化学与药物发现流程', weight: 3,
    summary: '从靶点到候选药物：理解一个分子如何成为药', p0: '1.1 研发全流程 ｜ 2.2 构效关系 ｜ 2.3 类药性规则 ｜ 3.1 苗头到先导', modules: [
      { name: 'M1 新药研发全景', points: [
        { id: 'M1.1', name: '研发流程：靶点发现 → 苗头 → 先导 → 候选 → 临床 → 上市', freq: 3, done: false },
        { id: 'M1.2', name: '靶点识别与验证', freq: 2, done: false },
        { id: 'M1.3', name: '药物类型：小分子、多肽、抗体、核酸、细胞与基因治疗', freq: 2, done: false },
        { id: 'M1.4', name: '研发成本、周期与失败原因', freq: 1, done: false },
      ]},
      { name: 'M2 药物化学基础', points: [
        { id: 'M2.1', name: '官能团、立体化学与手性药物', freq: 2, done: false },
        { id: 'M2.2', name: '构效关系（SAR）与生物电子等排', freq: 3, done: false },
        { id: 'M2.3', name: '类药性规则（Lipinski 五规则等）与成药性', freq: 3, done: false },
        { id: 'M2.4', name: '前药设计', freq: 1, done: false },
        { id: 'M2.5', name: '分子表示：SMILES、分子指纹、分子图', freq: 3, done: false },
      ]},
      { name: 'M3 先导发现与优化', points: [
        { id: 'M3.1', name: '苗头化合物发现：高通量筛选、片段筛选、DNA 编码库', freq: 2, done: false },
        { id: 'M3.2', name: '先导优化：活性、选择性、ADMET 多参数平衡', freq: 3, done: false },
        { id: 'M3.3', name: '骨架跃迁与化合物库设计', freq: 2, done: false },
        { id: 'M3.4', name: '天然产物与中药现代化', freq: 1, done: false },
      ]},
      { name: 'M4 结构生物学与分子相互作用', points: [
        { id: 'M4.1', name: '蛋白质结构层级与结合口袋', freq: 2, done: false },
        { id: 'M4.2', name: '结构解析：X 射线、冷冻电镜、NMR', freq: 1, done: false },
        { id: 'M4.3', name: '分子间作用力与结合自由能', freq: 2, done: false },
        { id: 'M4.4', name: '分子对接与虚拟筛选原理', freq: 3, done: false },
        { id: 'M4.5', name: '分子动力学模拟基础', freq: 2, done: false },
      ]},
    ]},
  { id: '02', name: '药理学与药代动力学（ADMET）', weight: 3,
    summary: '药物对机体做什么、机体对药物做什么', p0: '1.1 受体理论 ｜ 2.1 ADME 四环节 ｜ 2.3 PK 参数 ｜ 3.1 药物相互作用', modules: [
      { name: 'M1 药效学', points: [
        { id: 'M1.1', name: '受体理论：激动剂、拮抗剂、部分激动剂', freq: 3, done: false },
        { id: 'M1.2', name: '量效关系：EC50、Emax、治疗指数', freq: 3, done: false },
        { id: 'M1.3', name: '主要药物类别与作用机制（心血管、中枢、抗感染、内分泌）', freq: 2, done: false },
        { id: 'M1.4', name: '耐受、依赖与个体差异', freq: 1, done: false },
      ]},
      { name: 'M2 药代动力学', points: [
        { id: 'M2.1', name: 'ADME：吸收、分布、代谢、排泄', freq: 3, done: false },
        { id: 'M2.2', name: 'CYP450 代谢酶与转运体', freq: 3, done: false },
        { id: 'M2.3', name: 'PK 参数：半衰期、清除率、分布容积、生物利用度、AUC', freq: 3, done: false },
        { id: 'M2.4', name: '房室模型与非房室分析', freq: 2, done: false },
        { id: 'M2.5', name: '群体药代（PopPK）与生理药代（PBPK）模型', freq: 2, done: false },
      ]},
      { name: 'M3 药物相互作用与毒理', points: [
        { id: 'M3.1', name: '药物相互作用（DDI）：酶抑制 / 诱导、转运体介导', freq: 3, done: false },
        { id: 'M3.2', name: '毒理学基础：急毒、重复给药毒性、遗传毒性', freq: 2, done: false },
        { id: 'M3.3', name: '心脏毒性（hERG / QT 延长）与肝毒性', freq: 2, done: false },
        { id: 'M3.4', name: '药物不良反应分类', freq: 2, done: false },
      ]},
      { name: 'M4 精准药学', points: [
        { id: 'M4.1', name: '药物基因组学（如 CYP2C19、CYP2D6 多态性）', freq: 2, done: false },
        { id: 'M4.2', name: '治疗药物监测（TDM）', freq: 2, done: false },
        { id: 'M4.3', name: '特殊人群用药：老年、肝肾功能不全、儿童、孕期', freq: 3, done: false },
      ]},
    ]},
  { id: '03', name: '药剂学与制剂', weight: 2,
    summary: '药物如何被做成患者能用、愿意用的剂型', p0: '1.1 剂型分类 ｜ 2.2 缓控释 ｜ 3.1 质量源于设计 ｜ 4.1 适老化剂型', modules: [
      { name: 'M1 剂型与给药途径', points: [
        { id: 'M1.1', name: '常见剂型：片剂、胶囊、注射剂、吸入剂、透皮贴剂', freq: 2, done: false },
        { id: 'M1.2', name: '给药途径与首过效应', freq: 2, done: false },
        { id: 'M1.3', name: '溶解度、溶出与生物药剂学分类系统（BCS）', freq: 2, done: false },
      ]},
      { name: 'M2 新型递送系统', points: [
        { id: 'M2.1', name: '缓释 / 控释制剂', freq: 2, done: false },
        { id: 'M2.2', name: '纳米递送与脂质纳米粒（LNP）', freq: 2, done: false },
        { id: 'M2.3', name: '靶向递送与抗体偶联药物（ADC）', freq: 1, done: false },
      ]},
      { name: 'M3 制药工程与质量', points: [
        { id: 'M3.1', name: '质量源于设计（QbD）与 ICH 质量指南', freq: 2, done: false },
        { id: 'M3.2', name: 'GMP 与连续制造', freq: 1, done: false },
        { id: 'M3.3', name: '稳定性研究与包装', freq: 1, done: false },
        { id: 'M3.4', name: '仿制药一致性评价与生物等效性', freq: 2, done: false },
      ]},
      { name: 'M4 适老化与以患者为中心的制剂', points: [
        { id: 'M4.1', name: '吞咽困难患者的剂型选择（口崩片、液体、可否掰开 / 研碎）', freq: 3, done: false },
        { id: 'M4.2', name: '包装与标签的适老化（大字、易开启、单剂量包装）', freq: 2, done: false },
        { id: 'M4.3', name: '固定剂量复方与减少服药负担', freq: 2, done: false },
      ]},
    ]},
  { id: '04', name: '临床研究、法规与药物警戒', weight: 2,
    summary: '药从实验室走向患者的规则与证据体系', p0: '1.1 临床分期 ｜ 1.3 终点与统计 ｜ 2.1 监管体系 ｜ 3.1 药物警戒', modules: [
      { name: 'M1 临床试验', points: [
        { id: 'M1.1', name: '临床试验分期（I–IV 期）', freq: 3, done: false },
        { id: 'M1.2', name: '随机、对照、盲法与伦理审查', freq: 2, done: false },
        { id: 'M1.3', name: '终点设计与统计分析（ITT、样本量）', freq: 2, done: false },
        { id: 'M1.4', name: '老年人在临床试验中的代表性不足问题', freq: 2, done: false },
        { id: 'M1.5', name: '真实世界数据与真实世界证据（RWD / RWE）', freq: 2, done: false },
      ]},
      { name: 'M2 监管与法规', points: [
        { id: 'M2.1', name: '监管机构：NMPA、FDA、EMA 与 ICH', freq: 2, done: false },
        { id: 'M2.2', name: '新药申报路径（IND / NDA / BLA）概念', freq: 2, done: false },
        { id: 'M2.3', name: 'GCP、GLP 与数据完整性', freq: 1, done: false },
        { id: 'M2.4', name: 'AI / 软件作为医疗器械（SaMD）的监管思路', freq: 2, done: false },
      ]},
      { name: 'M3 药物警戒与用药安全', points: [
        { id: 'M3.1', name: '药物警戒与不良反应监测体系', freq: 2, done: false },
        { id: 'M3.2', name: '自发报告数据库与信号检测（比例失衡分析）', freq: 2, done: false },
        { id: 'M3.3', name: '用药错误的分类与防范', freq: 2, done: false },
      ]},
      { name: 'M4 药学服务与临床药学', points: [
        { id: 'M4.1', name: '处方审核与合理用药', freq: 2, done: false },
        { id: 'M4.2', name: '药物重整（Medication Reconciliation）', freq: 3, done: false },
        { id: 'M4.3', name: '药学门诊与慢病管理中的药师角色', freq: 1, done: false },
      ]},
    ]},
  { id: '05', name: 'AIDD：AI 驱动的药物发现', weight: 3,
    summary: '你的主场：把机器学习用于分子、蛋白与临床数据', p0: '1.1 分子表示学习 ｜ 2.1 性质预测 ｜ 3.1 结构预测 ｜ 4.1 分子生成', modules: [
      { name: 'M1 数据与表示', points: [
        { id: 'M1.1', name: '分子表示学习：指纹、图神经网络、SMILES 语言模型', freq: 3, done: false },
        { id: 'M1.2', name: '蛋白表示：序列语言模型（ESM 类）与结构表示', freq: 3, done: false },
        { id: 'M1.3', name: '公共数据库：ChEMBL、PubChem、PDB、ZINC、DrugBank', freq: 2, done: false },
        { id: 'M1.4', name: '数据划分陷阱：随机 vs 骨架划分、数据泄漏', freq: 3, done: false },
      ]},
      { name: 'M2 性质与活性预测', points: [
        { id: 'M2.1', name: 'QSAR 与分子性质预测', freq: 3, done: false },
        { id: 'M2.2', name: 'ADMET 预测模型', freq: 3, done: false },
        { id: 'M2.3', name: '药物—靶点相互作用（DTI）与结合亲和力预测', freq: 2, done: false },
        { id: 'M2.4', name: '不确定性估计与适用域', freq: 2, done: false },
      ]},
      { name: 'M3 结构驱动方法', points: [
        { id: 'M3.1', name: '蛋白结构预测（AlphaFold 系列、RoseTTAFold、ESMFold）', freq: 3, done: false },
        { id: 'M3.2', name: '生物分子复合物结构预测（蛋白—配体、蛋白—核酸）', freq: 2, done: false },
        { id: 'M3.3', name: '深度学习分子对接（如 DiffDock）', freq: 2, done: false },
        { id: 'M3.4', name: '结合自由能计算与 ML 加速', freq: 1, done: false },
      ]},
      { name: 'M4 生成式设计', points: [
        { id: 'M4.1', name: '分子生成：VAE、强化学习、扩散模型、语言模型', freq: 3, done: false },
        { id: 'M4.2', name: '基于口袋的三维分子生成', freq: 2, done: false },
        { id: 'M4.3', name: '蛋白质设计（如 RFdiffusion、ProteinMPNN）', freq: 2, done: false },
        { id: 'M4.4', name: '多目标优化与可合成性评估', freq: 2, done: false },
        { id: 'M4.5', name: '逆合成与反应预测', freq: 2, done: false },
      ]},
      { name: 'M5 闭环与智能体', points: [
        { id: 'M5.1', name: '主动学习与贝叶斯优化', freq: 2, done: false },
        { id: 'M5.2', name: '自动化实验室（Self-driving Lab）与 DMTA 闭环', freq: 2, done: false },
        { id: 'M5.3', name: 'LLM / Agent 在药物研发中的应用（文献挖掘、工具调用）', freq: 3, done: false },
        { id: 'M5.4', name: 'AI 临床：患者分层、试验设计与药物重定位', freq: 2, done: false },
      ]},
    ]},
  { id: '06', name: '机器人学基础', weight: 2,
    summary: '具身智能的物理地基：机构、运动学、动力学与系统软件', p0: '1.2 正逆运动学 ｜ 2.1 动力学 ｜ 3.1 ROS 2 ｜ 4.1 机器人形态', modules: [
      { name: 'M1 运动学', points: [
        { id: 'M1.1', name: '位姿表示：旋转矩阵、欧拉角、四元数、齐次变换', freq: 3, done: false },
        { id: 'M1.2', name: '正运动学与逆运动学', freq: 3, done: false },
        { id: 'M1.3', name: '雅可比矩阵与奇异性', freq: 2, done: false },
        { id: 'M1.4', name: '移动机器人运动学（差速、全向）', freq: 2, done: false },
      ]},
      { name: 'M2 动力学', points: [
        { id: 'M2.1', name: '刚体动力学：牛顿—欧拉与拉格朗日方法', freq: 2, done: false },
        { id: 'M2.2', name: '接触、摩擦与抓取力学', freq: 2, done: false },
        { id: 'M2.3', name: '腿足与平衡（ZMP 等概念）', freq: 1, done: false },
      ]},
      { name: 'M3 机器人软件系统', points: [
        { id: 'M3.1', name: 'ROS 2：节点、话题、服务、动作', freq: 3, done: false },
        { id: 'M3.2', name: 'URDF / MJCF 机器人描述', freq: 2, done: false },
        { id: 'M3.3', name: '坐标系管理（TF）与时间同步', freq: 2, done: false },
        { id: 'M3.4', name: '实时性与嵌入式控制', freq: 1, done: false },
      ]},
      { name: 'M4 硬件与形态', points: [
        { id: 'M4.1', name: '机器人形态：机械臂、移动底盘、移动操作、四足、人形', freq: 2, done: false },
        { id: 'M4.2', name: '执行器：电机、减速器、力控 / 柔性驱动', freq: 2, done: false },
        { id: 'M4.3', name: '传感器：编码器、IMU、力 / 力矩、触觉、相机、激光雷达', freq: 2, done: false },
        { id: 'M4.4', name: '灵巧手与末端执行器', freq: 1, done: false },
        { id: 'M4.5', name: '安全：协作机器人标准与人机交互安全', freq: 3, done: false },
      ]},
    ]},
  { id: '07', name: '机器人感知', weight: 2,
    summary: '让机器人看懂、听懂、摸懂环境与人', p0: '1.2 目标检测分割 ｜ 2.1 三维视觉 ｜ 3.1 SLAM ｜ 4.1 人体姿态', modules: [
      { name: 'M1 二维视觉', points: [
        { id: 'M1.1', name: '相机模型与标定', freq: 2, done: false },
        { id: 'M1.2', name: '目标检测与分割（含开放词汇方法）', freq: 3, done: false },
        { id: 'M1.3', name: '视觉基础模型（CLIP 类、SAM 类、DINO 类）', freq: 3, done: false },
      ]},
      { name: 'M2 三维感知', points: [
        { id: 'M2.1', name: '深度相机与点云处理', freq: 2, done: false },
        { id: 'M2.2', name: '6D 位姿估计', freq: 2, done: false },
        { id: 'M2.3', name: '三维场景表示（体素、NeRF、3D 高斯）', freq: 1, done: false },
      ]},
      { name: 'M3 定位与建图', points: [
        { id: 'M3.1', name: 'SLAM 基础（视觉 / 激光）', freq: 2, done: false },
        { id: 'M3.2', name: '语义地图与场景图', freq: 2, done: false },
      ]},
      { name: 'M4 以人为中心的感知', points: [
        { id: 'M4.1', name: '人体姿态估计与动作识别', freq: 3, done: false },
        { id: 'M4.2', name: '跌倒检测：视觉、可穿戴、雷达等方案对比', freq: 3, done: false },
        { id: 'M4.3', name: '语音识别与自然语言交互', freq: 2, done: false },
        { id: 'M4.4', name: '情绪与认知状态识别（局限与伦理）', freq: 1, done: false },
      ]},
      { name: 'M5 多模态融合', points: [
        { id: 'M5.1', name: '触觉感知', freq: 1, done: false },
        { id: 'M5.2', name: '多传感器融合与卡尔曼滤波', freq: 2, done: false },
      ]},
    ]},
  { id: '08', name: '控制与规划', weight: 2,
    summary: '从“想做什么”到“精确地做出来”', p0: '1.1 PID ｜ 2.1 运动规划 ｜ 3.1 任务规划 ｜ 1.3 力控', modules: [
      { name: 'M1 控制', points: [
        { id: 'M1.1', name: 'PID 与经典控制', freq: 3, done: false },
        { id: 'M1.2', name: '模型预测控制（MPC）', freq: 2, done: false },
        { id: 'M1.3', name: '阻抗 / 导纳控制与力控', freq: 2, done: false },
        { id: 'M1.4', name: '全身控制（WBC）概念', freq: 1, done: false },
      ]},
      { name: 'M2 运动规划', points: [
        { id: 'M2.1', name: '采样式规划（RRT、PRM）', freq: 2, done: false },
        { id: 'M2.2', name: '轨迹优化', freq: 2, done: false },
        { id: 'M2.3', name: '移动导航（全局 / 局部规划、避障）', freq: 2, done: false },
        { id: 'M2.4', name: '抓取规划', freq: 2, done: false },
      ]},
      { name: 'M3 任务规划与决策', points: [
        { id: 'M3.1', name: '任务与运动规划（TAMP）', freq: 1, done: false },
        { id: 'M3.2', name: '行为树与状态机', freq: 2, done: false },
        { id: 'M3.3', name: 'LLM 作为任务规划器（高层规划 + 底层技能）', freq: 3, done: false },
      ]},
      { name: 'M4 人机协作', points: [
        { id: 'M4.1', name: '人机共融的安全控制（限速、限力、碰撞检测）', freq: 2, done: false },
        { id: 'M4.2', name: '人类意图预测与共享控制', freq: 1, done: false },
        { id: 'M4.3', name: '辅助移动与搀扶类机器人控制要点', freq: 1, done: false },
      ]},
    ]},
  { id: '09', name: '机器人学习：强化学习与模仿学习', weight: 3,
    summary: '从数据和试错中学技能', p0: '1.2 策略梯度 ｜ 2.1 行为克隆 ｜ 2.3 扩散策略 ｜ 3.1 示教数据采集', modules: [
      { name: 'M1 强化学习', points: [
        { id: 'M1.1', name: 'MDP、价值函数与贝尔曼方程', freq: 3, done: false },
        { id: 'M1.2', name: '策略梯度与 PPO', freq: 3, done: false },
        { id: 'M1.3', name: 'off-policy 方法（DQN / SAC）', freq: 2, done: false },
        { id: 'M1.4', name: '奖励设计与安全约束', freq: 2, done: false },
        { id: 'M1.5', name: '离线强化学习', freq: 1, done: false },
      ]},
      { name: 'M2 模仿学习', points: [
        { id: 'M2.1', name: '行为克隆与分布偏移（DAgger）', freq: 3, done: false },
        { id: 'M2.2', name: '动作分块（Action Chunking）与 ACT', freq: 2, done: false },
        { id: 'M2.3', name: '扩散策略（Diffusion Policy）与流匹配策略', freq: 3, done: false },
        { id: 'M2.4', name: '逆强化学习概念', freq: 1, done: false },
      ]},
      { name: 'M3 数据', points: [
        { id: 'M3.1', name: '示教数据采集：遥操作、主从臂、VR、手持采集设备', freq: 3, done: false },
        { id: 'M3.2', name: '数据格式与大规模数据集（Open X-Embodiment 等）', freq: 2, done: false },
        { id: 'M3.3', name: '人类视频学习', freq: 1, done: false },
      ]},
      { name: 'M4 世界模型', points: [
        { id: 'M4.1', name: '世界模型与基于模型的强化学习', freq: 2, done: false },
        { id: 'M4.2', name: '视频生成模型作为模拟器', freq: 1, done: false },
      ]},
    ]},
  { id: '10', name: '具身大模型与 VLA', weight: 3,
    summary: '把大模型的语义能力接到机器人身体上', p0: '1.1 VLA 定义 ｜ 2.1 RT-2 ｜ 2.3 π0 ｜ 3.1 分层架构', modules: [
      { name: 'M1 概念', points: [
        { id: 'M1.1', name: '视觉—语言—动作模型（VLA）的定义与动机', freq: 3, done: false },
        { id: 'M1.2', name: '动作表示：离散化 token、连续动作头、扩散 / 流匹配', freq: 3, done: false },
        { id: 'M1.3', name: '跨本体（cross-embodiment）泛化', freq: 2, done: false },
      ]},
      { name: 'M2 代表性工作', points: [
        { id: 'M2.1', name: 'RT-1 / RT-2 与 RT-X', freq: 3, done: false },
        { id: 'M2.2', name: 'OpenVLA 与 Octo（开源通用策略）', freq: 3, done: false },
        { id: 'M2.3', name: 'π0 系列（流匹配动作专家）', freq: 3, done: false },
        { id: 'M2.4', name: 'SayCan、PaLM-E 等“语言规划 + 技能”', freq: 2, done: false },
        { id: 'M2.5', name: '人形机器人基础模型（行业进展跟踪）', freq: 1, done: false },
      ]},
      { name: 'M3 系统设计', points: [
        { id: 'M3.1', name: '分层架构：高层 VLM 推理 + 底层快速控制', freq: 3, done: false },
        { id: 'M3.2', name: '微调与部署：LoRA 微调、量化、推理频率', freq: 2, done: false },
        { id: 'M3.3', name: '具身智能体：记忆、工具调用与长程任务', freq: 2, done: false },
      ]},
      { name: 'M4 评测', points: [
        { id: 'M4.1', name: '仿真基准与真实评测', freq: 2, done: false },
        { id: 'M4.2', name: '泛化维度：物体、场景、指令、本体', freq: 2, done: false },
        { id: 'M4.3', name: '安全性与失败模式分析', freq: 3, done: false },
      ]},
    ]},
  { id: '11', name: '仿真、数据与 Sim2Real', weight: 2,
    summary: '低成本地大量试错，再把能力搬到真机', p0: '1.1 物理仿真器 ｜ 2.1 域随机化 ｜ 3.1 合成数据 ｜ 1.3 家居场景仿真', modules: [
      { name: 'M1 仿真平台', points: [
        { id: 'M1.1', name: '物理仿真器：MuJoCo、Isaac Sim / Isaac Lab、PyBullet', freq: 3, done: false },
        { id: 'M1.2', name: '机器人学习环境：Gymnasium、robosuite、ManiSkill', freq: 2, done: false },
        { id: 'M1.3', name: '家居与具身导航仿真（Habitat 等）', freq: 2, done: false },
      ]},
      { name: 'M2 Sim2Real', points: [
        { id: 'M2.1', name: '域随机化', freq: 3, done: false },
        { id: 'M2.2', name: '系统辨识', freq: 2, done: false },
        { id: 'M2.3', name: 'Real2Sim 与数字孪生', freq: 1, done: false },
      ]},
      { name: 'M3 数据工程', points: [
        { id: 'M3.1', name: '合成数据与程序化场景生成', freq: 2, done: false },
        { id: 'M3.2', name: '数据质量、标注与清洗', freq: 2, done: false },
        { id: 'M3.3', name: '低成本开源硬件平台（如 SO-100 机械臂）入门', freq: 2, done: false },
      ]},
    ]},
  { id: '12', name: '老年医学与常见慢病', weight: 3,
    summary: '理解服务对象：老年人的身体、认知与功能', p0: '1.1 衰老生理 ｜ 2.1 老年综合征 ｜ 3.1 综合评估 ｜ 4.1 认知障碍', modules: [
      { name: 'M1 衰老生理', points: [
        { id: 'M1.1', name: '衰老的生理变化与器官储备下降', freq: 2, done: false },
        { id: 'M1.2', name: '老年药代 / 药效变化（肾功能下降、体成分改变、敏感性改变）', freq: 3, done: false },
        { id: 'M1.3', name: '人口老龄化趋势与健康老龄化理念', freq: 2, done: false },
      ]},
      { name: 'M2 老年综合征', points: [
        { id: 'M2.1', name: '衰弱（Frailty）', freq: 3, done: false },
        { id: 'M2.2', name: '跌倒及其危险因素', freq: 3, done: false },
        { id: 'M2.3', name: '肌少症与营养不良', freq: 2, done: false },
        { id: 'M2.4', name: '尿失禁、睡眠障碍、谵妄', freq: 2, done: false },
        { id: 'M2.5', name: '吞咽障碍', freq: 2, done: false },
      ]},
      { name: 'M3 老年综合评估（CGA）', points: [
        { id: 'M3.1', name: 'CGA 的维度：躯体、功能、认知、心理、社会', freq: 3, done: false },
        { id: 'M3.2', name: '日常生活能力评估：ADL / IADL', freq: 3, done: false },
        { id: 'M3.3', name: '常用量表思路：认知筛查、跌倒风险、营养筛查', freq: 2, done: false },
      ]},
      { name: 'M4 常见慢病', points: [
        { id: 'M4.1', name: '认知障碍与阿尔茨海默病', freq: 3, done: false },
        { id: 'M4.2', name: '高血压、糖尿病、冠心病与心衰', freq: 2, done: false },
        { id: 'M4.3', name: '帕金森病与卒中后康复', freq: 2, done: false },
        { id: 'M4.4', name: '骨质疏松与骨关节病', freq: 2, done: false },
        { id: 'M4.5', name: '慢阻肺与感染防控', freq: 1, done: false },
        { id: 'M4.6', name: '共病与以人为中心的照护目标', freq: 2, done: false },
      ]},
    ]},
  { id: '13', name: '老年药学：多重用药与依从性', weight: 3,
    summary: '药学 × 养老的核心交叉：让老人用对药、按时用药', p0: '1.1 多重用药 ｜ 2.1 Beers 标准 ｜ 3.1 依从性 ｜ 4.1 药物重整', modules: [
      { name: 'M1 多重用药', points: [
        { id: 'M1.1', name: '多重用药的定义与危害', freq: 3, done: false },
        { id: 'M1.2', name: '处方瀑布（Prescribing Cascade）', freq: 2, done: false },
        { id: 'M1.3', name: '抗胆碱能负荷与跌倒风险药物', freq: 3, done: false },
      ]},
      { name: 'M2 潜在不适当用药（PIM）评估', points: [
        { id: 'M2.1', name: 'Beers 标准（美国老年医学会）', freq: 3, done: false },
        { id: 'M2.2', name: 'STOPP / START 标准', freq: 2, done: false },
        { id: 'M2.3', name: '中国老年人潜在不适当用药判断标准', freq: 2, done: false },
        { id: 'M2.4', name: '减药 / 停药（Deprescribing）流程', freq: 3, done: false },
      ]},
      { name: 'M3 用药依从性', points: [
        { id: 'M3.1', name: '依从性的影响因素：认知、视力、手功能、经济、方案复杂度', freq: 3, done: false },
        { id: 'M3.2', name: '依从性测量：自报、药盒计数、电子监测、药房取药记录', freq: 2, done: false },
        { id: 'M3.3', name: '提升依从性：简化方案、分装药盒、提醒、家属与照护者参与', freq: 3, done: false },
      ]},
      { name: 'M4 用药安全管理', points: [
        { id: 'M4.1', name: '社区与机构场景的药物重整与用药清单', freq: 2, done: false },
        { id: 'M4.2', name: '养老机构用药管理流程（领药、分药、给药、记录）', freq: 3, done: false },
        { id: 'M4.3', name: '用药相关不良事件的识别与上报', freq: 2, done: false },
        { id: 'M4.4', name: '临床决策支持系统（CDSS）中的老年用药规则', freq: 2, done: false },
      ]},
    ]},
  { id: '14', name: '照护服务与智慧养老', weight: 2,
    summary: '理解场景：谁在照护、在哪照护、痛点在哪', p0: '1.1 养老服务体系 ｜ 2.1 照护需求 ｜ 3.1 智慧养老技术 ｜ 3.4 适老化设计', modules: [
      { name: 'M1 养老服务体系', points: [
        { id: 'M1.1', name: '居家、社区、机构养老与医养结合', freq: 3, done: false },
        { id: 'M1.2', name: '长期护理保险与照护等级评估', freq: 2, done: false },
        { id: 'M1.3', name: '照护人力短缺与照护者负担', freq: 2, done: false },
      ]},
      { name: 'M2 照护需求与场景', points: [
        { id: 'M2.1', name: '生活照料：进食、如厕、洗浴、转移', freq: 2, done: false },
        { id: 'M2.2', name: '失能与认知症照护要点', freq: 2, done: false },
        { id: 'M2.3', name: '康复与功能维持', freq: 2, done: false },
        { id: 'M2.4', name: '孤独感、社会参与与心理支持', freq: 2, done: false },
        { id: 'M2.5', name: '安宁疗护', freq: 1, done: false },
      ]},
      { name: 'M3 智慧养老技术', points: [
        { id: 'M3.1', name: '可穿戴设备与生命体征监测', freq: 3, done: false },
        { id: 'M3.2', name: '智能家居与非接触式监测（毫米波雷达、红外、门磁等）', freq: 2, done: false },
        { id: 'M3.3', name: '远程医疗与慢病远程管理', freq: 2, done: false },
        { id: 'M3.4', name: '适老化设计：界面、语音交互、无障碍标准', freq: 3, done: false },
        { id: 'M3.5', name: '养老信息系统与健康档案', freq: 1, done: false },
      ]},
      { name: 'M4 用户研究与评估', points: [
        { id: 'M4.1', name: '老年用户研究方法：访谈、观察、参与式设计', freq: 2, done: false },
        { id: 'M4.2', name: '技术接受度与数字鸿沟', freq: 2, done: false },
        { id: 'M4.3', name: '效果评估：临床结局、生活质量、成本效益', freq: 2, done: false },
      ]},
    ]},
  { id: '15', name: '伦理、隐私、政策与标准', weight: 2,
    summary: '做之前先想清楚：能不能做、该不该做、怎样合规地做', p0: '1.1 自主与知情同意 ｜ 2.1 健康数据隐私 ｜ 3.1 产业政策 ｜ 3.3 机器人安全标准', modules: [
      { name: 'M1 伦理', points: [
        { id: 'M1.1', name: '自主性、知情同意与认知障碍者的代理决策', freq: 3, done: false },
        { id: 'M1.2', name: '陪伴机器人的伦理争议：欺骗、依赖、替代人际关怀', freq: 2, done: false },
        { id: 'M1.3', name: '算法偏见与年龄歧视', freq: 2, done: false },
        { id: 'M1.4', name: '责任归属：机器人或 AI 出错时谁负责', freq: 2, done: false },
      ]},
      { name: 'M2 隐私与数据合规', points: [
        { id: 'M2.1', name: '健康数据隐私与个人信息保护（个人信息保护法等）', freq: 3, done: false },
        { id: 'M2.2', name: '家庭摄像头 / 传感器监测的隐私权衡与本地化处理', freq: 2, done: false },
        { id: 'M2.3', name: '医疗 AI 数据治理与去标识化', freq: 2, done: false },
      ]},
      { name: 'M3 政策与标准', points: [
        { id: 'M3.1', name: '国家银发经济与智慧健康养老相关政策（跟踪最新文件）', freq: 2, done: false },
        { id: 'M3.2', name: '医疗器械分类与 AI 医疗软件注册', freq: 2, done: false },
        { id: 'M3.3', name: '服务机器人安全标准（如 ISO 13482 个人护理机器人）', freq: 2, done: false },
        { id: 'M3.4', name: '无障碍与适老化标准（如 WCAG）', freq: 1, done: false },
      ]},
    ]},
  { id: '16', name: '交叉应用：养老机器人与 AI 用药安全', weight: 3,
    summary: '三条主线的汇合点：做一个真正有用的养老+用药系统', p0: '2.1 用药提醒 ｜ 2.3 自动化药房 ｜ 3.1 跌倒检测 ｜ 5.1 系统集成', modules: [
      { name: 'M1 场景地图', points: [
        { id: 'M1.1', name: '养老机器人分类：陪伴社交、生活辅助、康复、护理移位、巡检', freq: 3, done: false },
        { id: 'M1.2', name: '需求优先级：安全 > 健康 > 便利 > 陪伴', freq: 2, done: false },
        { id: 'M1.3', name: '已有产品与落地经验的复盘方法（成功与失败案例）', freq: 2, done: false },
      ]},
      { name: 'M2 用药管理机器人与系统', points: [
        { id: 'M2.1', name: '用药提醒与服药确认（视觉 / 智能药盒 / 语音）', freq: 3, done: false },
        { id: 'M2.2', name: '智能药盒与分装：分药、计数、漏服检测', freq: 2, done: false },
        { id: 'M2.3', name: '自动化药房、药品配送机器人与机构内物流', freq: 2, done: false },
        { id: 'M2.4', name: '机器人取药递药：识别、抓取、交接人手', freq: 2, done: false },
        { id: 'M2.5', name: '老年用药 DDI / PIM 规则引擎与 LLM 用药问答（安全边界）', freq: 3, done: false },
      ]},
      { name: 'M3 居家健康监测与安全', points: [
        { id: 'M3.1', name: '跌倒检测与报警系统', freq: 3, done: false },
        { id: 'M3.2', name: '夜间与睡眠异常监测', freq: 2, done: false },
        { id: 'M3.3', name: '生命体征趋势分析与预警', freq: 2, done: false },
        { id: 'M3.4', name: '认知衰退的数字生物标志物（研究阶段，审慎使用）', freq: 1, done: false },
      ]},
      { name: 'M4 陪护与交互', points: [
        { id: 'M4.1', name: '陪伴机器人与对话 Agent（记忆、个性化、情感支持）', freq: 2, done: false },
        { id: 'M4.2', name: '认知训练与康复游戏', freq: 1, done: false },
        { id: 'M4.3', name: '照护者辅助：交接班记录、照护计划生成', freq: 2, done: false },
        { id: 'M4.4', name: '移位、喂食、穿衣等物理辅助操作（研究前沿）', freq: 2, done: false },
      ]},
      { name: 'M5 系统落地', points: [
        { id: 'M5.1', name: '系统集成：感知 + 规则 + 大模型 + 机器人 + 人工兜底', freq: 3, done: false },
        { id: 'M5.2', name: '人在回路与升级机制（何时必须叫人）', freq: 3, done: false },
        { id: 'M5.3', name: '合规评估：医疗器械边界、隐私、安全认证', freq: 2, done: false },
        { id: 'M5.4', name: '小规模试点与真实场景评估方法', freq: 2, done: false },
        { id: 'M5.5', name: 'AIDD × 养老：老年适应症药物研发与老年人群 PK 建模', freq: 2, done: false },
      ]},
    ]},
]
