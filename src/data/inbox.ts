// 收集箱（inbox）—— 暂存区：看到好项目 / 新理论但暂时没空学，先收录，后续毕业为卡片或叶子
// 字段沿用 S2AI 约定；cat = 「分类 · 理论模块」，归类不下写 '野生枝节'。

export type InboxLevel = '观望' | '跟练' | '深入'
export type InboxKind = 'leaf' | 'twig'

export interface InboxItem {
  name: string
  url: string
  kind?: InboxKind
  added: string
  cat: string
  intro: string
  why: string
  dive: string
  level: InboxLevel
  concept?: string
  graduated?: string
}

export const INBOX: InboxItem[] = [
  {
    name: 'Boltz', url: 'https://github.com/jwohlwend/boltz', added: '2026-10',
    cat: 'AIDD 结构预测 · 05-M3',
    intro: '开源的生物分子复合物结构预测模型。',
    why: '可作为复合物结构预测的开源替代来对照学习，与 AlphaFold 3 卡片同主题。',
    dive: '先读 README 跑官方示例，对比 AlphaFold 3 的输入输出设计即可。',
    level: '观望',
  },
  {
    name: 'Genesis', url: 'https://genesis-embodied-ai.github.io/', added: '2026-10',
    cat: '仿真平台 · 11-M1',
    intro: '面向机器人与具身 AI 的开源物理仿真平台。',
    why: '与 MuJoCo / Isaac Lab 同类，可在选择仿真器时横向比较。',
    dive: '看官方文档的快速开始，跑一个机械臂示例，比较上手成本与速度。',
    level: '观望',
  },
  {
    name: 'ProteinMPNN', url: 'https://github.com/dauparas/ProteinMPNN', added: '2026-10', kind: 'twig',
    cat: 'AIDD 生成式设计 · 05-M4.3',
    intro: '给定蛋白骨架设计氨基酸序列的深度学习方法。',
    why: '与 RFdiffusion 组成“先生成骨架、再设计序列”的常见蛋白设计流程。',
    dive: '读论文摘要与 README，理解输入（骨架）与输出（序列），不必深入训练细节。',
    level: '观望',
  },
  {
    name: 'WHO ICOPE（老年人整合照护）', url: 'https://www.who.int/health-topics/ageing', added: '2026-10', kind: 'twig',
    cat: '野生枝节',
    intro: 'WHO 提出的以内在能力为核心的老年人整合照护框架。',
    why: '可为“居家监测 + 社区照护”系统提供以功能为中心的评估视角，与 CGA 互补。',
    dive: '在 WHO 网站检索 ICOPE 指南与手册，先读评估路径部分。',
    level: '观望',
    concept: '内在能力（Intrinsic Capacity）：认知、运动、活力、感官、心理五维功能储备——建议挂在 12-M3 或 14-M2',
  },
]
