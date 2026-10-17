// 叶子层（leaves）—— 长在理论树上的项目、工具、数据库与练习项
// 树的模型沿用 S2AI：理论 = 树（篇章=枝干，模块/学习点=枝节），项目 = 叶子。
// 落脚三级：anchor='root' 树根（全树通用工具）；anchor='05' 枝干；anchor='05-M2.2' 枝节；anchor='wild' 野生叶子。
// url 为空 + practice: true = 练习项（动手任务，不冒充项目链接）。

export type LeafAnchor = string

export interface Leaf {
  id: string
  name: string
  url: string
  anchor: LeafAnchor
  tags: string[]
  intro: string
  opt?: boolean
  practice?: boolean
}

export const LEAVES: Leaf[] = [
  // ---- 树根：全树通用工具 ----
  { id: 'leaf-pytorch', name: 'PyTorch', url: 'https://pytorch.org/', anchor: 'root', tags: ['深度学习框架', '00-M3.1'], intro: '深度学习训练与推理的基础框架，AIDD 与机器人学习都用它' },
  { id: 'leaf-hf', name: 'Hugging Face', url: 'https://huggingface.co/', anchor: 'root', tags: ['模型', '数据集', '00-M3.4'], intro: '开源模型与数据集社区，分子模型、VLA 权重常在这里发布' },
  { id: 'leaf-jupyter', name: 'Jupyter', url: 'https://jupyter.org/', anchor: 'root', tags: ['交互式实验', '00-M2.1'], intro: '交互式笔记本，适合做数据探索和教学演示' },
  { id: 'leaf-rdkit', name: 'RDKit', url: 'https://www.rdkit.org/', anchor: 'root', tags: ['化学信息学', '01-M2.5'], intro: '开源化学信息学工具包：分子读写、指纹、描述符、子结构搜索' },
  { id: 'leaf-ros2', name: 'ROS 2', url: 'https://docs.ros.org/', anchor: 'root', tags: ['机器人中间件', '06-M3.1'], intro: '机器人操作系统第 2 代，具身项目的通用软件骨架' },

  // ---- 01 药物化学 ----
  { id: 'leaf-pubchem', name: 'PubChem', url: 'https://pubchem.ncbi.nlm.nih.gov/', anchor: '05-M1.3', tags: ['化合物数据库', '01-M2.5'], intro: 'NCBI 维护的公共化合物与生物活性数据库' },
  { id: 'leaf-chembl', name: 'ChEMBL', url: 'https://www.ebi.ac.uk/chembl/', anchor: '05-M1.3', tags: ['生物活性数据', '05-M2.1'], intro: 'EMBL-EBI 维护的类药分子生物活性数据库，QSAR 建模常用数据源' },
  { id: 'leaf-zinc', name: 'ZINC', url: 'https://zinc.docking.org/', anchor: '05-M1.3', tags: ['虚拟筛选库', '01-M4.4'], intro: '可购买化合物的虚拟筛选数据库' },
  { id: 'leaf-drugbank', name: 'DrugBank', url: 'https://go.drugbank.com/', anchor: '05-M1.3', tags: ['药物知识库', '02-M3.1'], intro: '药物、靶点与相互作用知识库（注意其使用许可条款）' },
  { id: 'leaf-rcsb', name: 'RCSB PDB', url: 'https://www.rcsb.org/', anchor: '01-M4.1', tags: ['蛋白结构', '05-M1.3'], intro: '蛋白质结构数据库，结构生物学与对接的起点' },
  { id: 'leaf-p-lipinski', name: '用 RDKit 计算一组上市药的类药性指标', url: '', anchor: '01-M2.3', tags: ['01-M2.5', '描述符'], intro: '算分子量、logP、氢键供受体，对照类药性规则看例外', practice: true },

  // ---- 01-M4 / 05 结构与对接 ----
  { id: 'leaf-vina', name: 'AutoDock Vina', url: 'https://vina.scripps.edu/', anchor: '01-M4.4', tags: ['分子对接'], intro: '经典开源分子对接程序' },
  { id: 'leaf-openmm', name: 'OpenMM', url: 'https://openmm.org/', anchor: '01-M4.5', tags: ['分子动力学', 'GPU'], intro: 'GPU 加速、Python 友好的分子动力学模拟库' },
  { id: 'leaf-p-dock', name: '对一个已知复合物做重对接并计算 RMSD', url: '', anchor: '01-M4.4', tags: ['05-M3.3', '对接评估'], intro: '从 PDB 取共晶结构，重对接配体，体会对接打分与姿态误差', practice: true },

  // ---- 02 药理与 PK ----
  { id: 'leaf-swissadme', name: 'SwissADME', url: 'http://www.swissadme.ch/', anchor: '02-M2.1', tags: ['ADME 估算', '05-M2.2'], intro: '在线估算理化性质、药代与类药性的免费工具' },
  { id: 'leaf-osp', name: 'Open Systems Pharmacology（PK-Sim / MoBi）', url: 'https://www.open-systems-pharmacology.org/', anchor: '02-M2.5', tags: ['PBPK', '16-M5.5'], intro: '开源的生理药代动力学建模平台' },
  { id: 'leaf-p-pk', name: '用 Python 写一个一室模型并拟合血药浓度曲线', url: '', anchor: '02-M2.4', tags: ['02-M2.3', 'scipy'], intro: '手写一室口服吸收模型，求半衰期、清除率、AUC', practice: true },

  // ---- 04 临床与法规 ----
  { id: 'leaf-ctgov', name: 'ClinicalTrials.gov', url: 'https://clinicaltrials.gov/', anchor: '04-M1.1', tags: ['临床试验注册', '04-M1.4'], intro: '全球最大的临床试验注册库，可检索老年人群相关试验' },
  { id: 'leaf-ich', name: 'ICH 指南', url: 'https://www.ich.org/', anchor: '04-M2.1', tags: ['GCP', '03-M3.1'], intro: '人用药品技术要求国际协调理事会，质量 / 安全 / 有效性指南的来源' },
  { id: 'leaf-nmpa', name: '国家药品监督管理局（NMPA）', url: 'https://www.nmpa.gov.cn/', anchor: '04-M2.1', tags: ['中国监管', '15-M3.2'], intro: '中国药品与医疗器械监管机构官网' },
  { id: 'leaf-fda-drugs', name: 'FDA Drugs', url: 'https://www.fda.gov/drugs', anchor: '04-M2.1', tags: ['美国监管', '04-M3.1'], intro: '美国 FDA 药品板块：审评、安全通讯、指导原则' },

  // ---- 05 AIDD ----
  { id: 'leaf-tdc', name: 'Therapeutics Data Commons（TDC）', url: 'https://tdcommons.ai/', anchor: '05-M2.2', tags: ['基准数据集', '05-M1.4'], intro: '治疗学机器学习数据集与基准，覆盖 ADMET、DTI 等任务' },
  { id: 'leaf-deepchem', name: 'DeepChem', url: 'https://deepchem.io/', anchor: '05-M2.1', tags: ['分子机器学习', '05-M1.1'], intro: '面向化学与生物的开源深度学习库' },
  { id: 'leaf-chemprop', name: 'Chemprop', url: 'https://github.com/chemprop/chemprop', anchor: '05-M2.1', tags: ['消息传递网络', '05-M1.1'], intro: '基于有向消息传递神经网络的分子性质预测工具' },
  { id: 'leaf-reinvent', name: 'REINVENT 4', url: 'https://github.com/MolecularAI/REINVENT4', anchor: '05-M4.1', tags: ['分子生成', '强化学习'], intro: 'AstraZeneca 开源的生成式分子设计框架' },
  { id: 'leaf-afdb', name: 'AlphaFold 蛋白结构数据库', url: 'https://alphafold.ebi.ac.uk/', anchor: '05-M3.1', tags: ['预测结构', '01-M4.1'], intro: 'EMBL-EBI 与 DeepMind 提供的预测蛋白结构数据库' },
  { id: 'leaf-colabfold', name: 'ColabFold', url: 'https://github.com/sokrypton/ColabFold', anchor: '05-M3.1', tags: ['结构预测', '易上手'], intro: '可在 Colab 上运行的加速版 AlphaFold2 / RoseTTAFold 推理' },
  { id: 'leaf-diffdock', name: 'DiffDock 代码', url: 'https://github.com/gcorso/DiffDock', anchor: '05-M3.3', tags: ['扩散模型', '01-M4.4'], intro: '基于扩散生成模型的分子对接开源实现' },
  { id: 'leaf-rfdiffusion', name: 'RFdiffusion 代码', url: 'https://github.com/RosettaCommons/RFdiffusion', anchor: '05-M4.3', tags: ['蛋白设计'], intro: '基于扩散模型的蛋白质结构生成与设计' },
  { id: 'leaf-p-scaffold', name: '同一个 ADMET 任务对比随机划分与骨架划分', url: '', anchor: '05-M1.4', tags: ['05-M2.2', '泛化'], intro: '在 TDC 数据上分别用两种划分训练，观察性能差距，理解数据泄漏', practice: true },
  { id: 'leaf-p-agent', name: '做一个调用 RDKit / PubChem 的药物问答小 Agent', url: '', anchor: '05-M5.3', tags: ['16-M2.5', '工具调用'], intro: '让 LLM 通过工具查分子性质与相互作用，并标注信息来源', practice: true },

  // ---- 06–08 机器人 ----
  { id: 'leaf-modernrobotics', name: 'Modern Robotics（教材与课程）', url: 'http://hades.mech.northwestern.edu/index.php/Modern_Robotics', anchor: '06-M1.2', tags: ['运动学', '06-M2.1'], intro: '西北大学 Lynch & Park 的机器人学教材与配套课程' },
  { id: 'leaf-pinocchio', name: 'Pinocchio', url: 'https://github.com/stack-of-tasks/pinocchio', anchor: '06-M2.1', tags: ['刚体动力学库'], intro: '高效的刚体动力学与运动学 C++/Python 库' },
  { id: 'leaf-drake', name: 'Drake', url: 'https://drake.mit.edu/', anchor: '08-M2.2', tags: ['轨迹优化', '06-M2.2'], intro: 'MIT 发起的机器人建模、仿真与优化工具箱' },
  { id: 'leaf-moveit', name: 'MoveIt', url: 'https://moveit.ai/', anchor: '08-M2.1', tags: ['机械臂规划', '06-M3.1'], intro: 'ROS 生态的机械臂运动规划框架' },
  { id: 'leaf-nav2', name: 'Nav2', url: 'https://docs.nav2.org/', anchor: '08-M2.3', tags: ['移动导航', '06-M3.1'], intro: 'ROS 2 导航框架：定位、规划与避障' },
  { id: 'leaf-opencv', name: 'OpenCV', url: 'https://opencv.org/', anchor: '07-M1.1', tags: ['计算机视觉', '标定'], intro: '经典计算机视觉库' },
  { id: 'leaf-open3d', name: 'Open3D', url: 'https://www.open3d.org/', anchor: '07-M2.1', tags: ['点云'], intro: '三维数据处理库：点云、网格、配准' },
  { id: 'leaf-mediapipe', name: 'MediaPipe', url: 'https://ai.google.dev/edge/mediapipe', anchor: '07-M4.1', tags: ['姿态估计', '16-M3.1'], intro: 'Google 的端侧感知方案，含人体姿态、手部关键点等' },
  { id: 'leaf-p-fk', name: '手推一个 2 自由度平面机械臂的正逆运动学并用 Python 可视化', url: '', anchor: '06-M1.2', tags: ['06-M1.3'], intro: '从几何法到雅可比，体会奇异位形', practice: true },
  { id: 'leaf-p-pid', name: '在仿真里给单关节调 PID', url: '', anchor: '08-M1.1', tags: ['11-M1.1'], intro: '观察比例、积分、微分项对超调和稳态误差的影响', practice: true },

  // ---- 09–11 机器人学习 / VLA / 仿真 ----
  { id: 'leaf-gymnasium', name: 'Gymnasium', url: 'https://gymnasium.farama.org/', anchor: '09-M1.1', tags: ['强化学习环境', '11-M1.2'], intro: '强化学习标准环境接口（OpenAI Gym 的继任者）' },
  { id: 'leaf-sb3', name: 'Stable-Baselines3', url: 'https://stable-baselines3.readthedocs.io/', anchor: '09-M1.2', tags: ['PPO', 'SAC'], intro: '可靠的 PyTorch 强化学习算法实现' },
  { id: 'leaf-lerobot', name: 'LeRobot', url: 'https://github.com/huggingface/lerobot', anchor: '09-M2.1', tags: ['模仿学习', '11-M3.3', '10-M3.2'], intro: 'Hugging Face 的真实机器人学习库：数据集、策略训练、低成本硬件' },
  { id: 'leaf-so100', name: 'SO-ARM100 开源机械臂', url: 'https://github.com/TheRobotStudio/SO-ARM100', anchor: '11-M3.3', tags: ['开源硬件', '09-M3.1'], intro: '低成本开源机械臂，常与 LeRobot 搭配做示教采集' },
  { id: 'leaf-aloha', name: 'ALOHA 项目页', url: 'https://tonyzhaozh.github.io/aloha/', anchor: '09-M2.2', tags: ['双臂遥操作', '09-M3.1'], intro: '低成本双臂遥操作系统与 ACT 算法' },
  { id: 'leaf-dp', name: 'Diffusion Policy 项目页', url: 'https://diffusion-policy.cs.columbia.edu/', anchor: '09-M2.3', tags: ['扩散策略'], intro: '把动作生成建模为条件扩散过程的视觉运动策略' },
  { id: 'leaf-oxe', name: 'Open X-Embodiment', url: 'https://robotics-transformer-x.github.io/', anchor: '09-M3.2', tags: ['跨本体数据集', '10-M1.3'], intro: '多机构汇集的跨本体机器人数据集与 RT-X 模型' },
  { id: 'leaf-openvla', name: 'OpenVLA', url: 'https://openvla.github.io/', anchor: '10-M2.2', tags: ['开源 VLA', '10-M3.2'], intro: '开源视觉—语言—动作模型，支持微调' },
  { id: 'leaf-octo', name: 'Octo', url: 'https://octo-models.github.io/', anchor: '10-M2.2', tags: ['通用策略'], intro: '基于 Open X-Embodiment 训练的开源通用机器人策略' },
  { id: 'leaf-openpi', name: 'openpi', url: 'https://github.com/Physical-Intelligence/openpi', anchor: '10-M2.3', tags: ['π0', '10-M3.2'], intro: 'Physical Intelligence 开源的 π0 系列模型代码与权重' },
  { id: 'leaf-mujoco', name: 'MuJoCo', url: 'https://mujoco.org/', anchor: '11-M1.1', tags: ['物理仿真', '06-M3.2'], intro: '高性能物理仿真器，机器人学习的常用底座' },
  { id: 'leaf-isaaclab', name: 'Isaac Lab', url: 'https://isaac-sim.github.io/IsaacLab/', anchor: '11-M1.1', tags: ['GPU 并行仿真', '11-M2.1'], intro: '基于 NVIDIA Isaac Sim 的机器人学习框架' },
  { id: 'leaf-pybullet', name: 'PyBullet', url: 'https://pybullet.org/', anchor: '11-M1.1', tags: ['入门仿真'], intro: '轻量易上手的物理仿真 Python 接口' },
  { id: 'leaf-robosuite', name: 'robosuite', url: 'https://robosuite.ai/', anchor: '11-M1.2', tags: ['操作基准'], intro: '基于 MuJoCo 的机器人操作仿真基准' },
  { id: 'leaf-maniskill', name: 'ManiSkill', url: 'https://github.com/haosulab/ManiSkill', anchor: '11-M1.2', tags: ['操作基准', 'GPU 仿真'], intro: '可 GPU 并行的机器人操作仿真与基准' },
  { id: 'leaf-habitat', name: 'AI Habitat', url: 'https://aihabitat.org/', anchor: '11-M1.3', tags: ['家居场景', '具身导航'], intro: '面向家居场景的具身 AI 仿真平台' },
  { id: 'leaf-p-ppo', name: '用 SB3 在 MuJoCo 环境里训一个 PPO 智能体', url: '', anchor: '09-M1.2', tags: ['11-M1.1'], intro: '跑通训练曲线，再改奖励函数看行为变化', practice: true },
  { id: 'leaf-p-bc', name: '用 LeRobot 在仿真数据上训一个行为克隆策略', url: '', anchor: '09-M2.1', tags: ['09-M2.2'], intro: '体会示教数据量与分布偏移对成功率的影响', practice: true },

  // ---- 12–15 养老 ----
  { id: 'leaf-who-ageing', name: 'WHO 老龄与健康主题页', url: 'https://www.who.int/health-topics/ageing', anchor: '12-M1.3', tags: ['健康老龄化', '14-M1.1'], intro: '世界卫生组织关于老龄化、健康老龄化的资料入口' },
  { id: 'leaf-ags', name: '美国老年医学会（AGS）', url: 'https://www.americangeriatrics.org/', anchor: '13-M2.1', tags: ['Beers 标准'], intro: 'Beers 标准的发布方，提供老年医学资源' },
  { id: 'leaf-who-mwh', name: 'WHO 用药无害（Medication Without Harm）', url: 'https://www.who.int/initiatives/medication-without-harm', anchor: '13-M4.3', tags: ['用药安全', '04-M3.3'], intro: 'WHO 全球患者安全挑战：减少可避免的用药伤害' },
  { id: 'leaf-physionet', name: 'PhysioNet', url: 'https://physionet.org/', anchor: '14-M3.1', tags: ['生理信号数据', '16-M3.3'], intro: '生理信号与临床数据库平台（部分数据需资质认证与培训）' },
  { id: 'leaf-wcag', name: 'WCAG 无障碍指南', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', anchor: '15-M3.4', tags: ['适老化界面', '14-M3.4'], intro: 'W3C 网页内容无障碍指南，适老化界面设计参考' },
  { id: 'leaf-homeassistant', name: 'Home Assistant', url: 'https://www.home-assistant.io/', anchor: '14-M3.2', tags: ['智能家居', '本地化'], intro: '开源、可本地运行的智能家居平台，可接入各类传感器' },
  { id: 'leaf-p-pim', name: '整理一份 10 种老年常见潜在不适当用药的速查表', url: '', anchor: '13-M2.1', tags: ['13-M2.2', '13-M1.3'], intro: '对照 Beers / STOPP 与国内标准，写出风险与替代思路（自己核对原文）', practice: true },
  { id: 'leaf-p-interview', name: '访谈 2–3 位老人或照护者，画一张用药日常流程图', url: '', anchor: '14-M4.1', tags: ['13-M3.1', '16-M1.2'], intro: '找到漏服、错服、重复服药真正发生在哪一步', practice: true },

  // ---- 16 交叉应用 ----
  { id: 'leaf-p-pillbot', name: '原型：摄像头 + 语音的服药提醒与服药确认 Demo', url: '', anchor: '16-M2.1', tags: ['07-M4.1', '14-M3.4'], intro: '定时提醒 → 识别药盒格子打开 → 语音确认 → 漏服通知家属（全部本地处理）', practice: true },
  { id: 'leaf-p-fall', name: '原型：基于姿态估计的跌倒检测并评估误报率', url: '', anchor: '16-M3.1', tags: ['07-M4.2', '15-M2.2'], intro: '用 MediaPipe 关键点做规则或小模型，重点统计误报 / 漏报', practice: true },
  { id: 'leaf-p-ddi', name: '原型：老年用药清单的 DDI / PIM 规则检查 + LLM 解释', url: '', anchor: '16-M2.5', tags: ['13-M4.4', '02-M3.1'], intro: '规则引擎给结论、LLM 只负责通俗解释，并强制“请咨询医生或药师”兜底', practice: true },
  { id: 'leaf-p-handover', name: '原型：在仿真中让机械臂从药架取药盒并递到人手', url: '', anchor: '16-M2.4', tags: ['10-M3.1', '08-M2.4'], intro: '组合 VLM 识别 + 抓取规划 + 安全减速，体会人机交接难点', practice: true },
]
