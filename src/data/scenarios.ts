export interface Scenario {
  id: string;
  title: string;
  pain: string;
  solution: string;
  relatedServices: string[];
  deliverables: string[];
}

export const scenarios: Scenario[] = [
  {
    id: "tax-audit-notice",
    title: "企业收到税务稽查通知",
    pain: "企业突然收到税务检查或稽查通知，不清楚检查重点，内部资料混乱，缺乏与税务机关专业沟通的能力，担忧面临巨额补税及罚款。",
    solution: "第一时间介入，进行内部风险摸底，梳理合同、发票、账务证据链，统一内部口径。代表企业与税务机关进行专业陈述申辩，争取最有利的处理结果。",
    relatedServices: ["tax-audit-defense", "tax-dispute-resolution"],
    deliverables: ["《稽查风险评估报告》", "《情况说明与陈述申辩书》", "整理完毕的备查资料集"]
  },
  {
    id: "historical-risk",
    title: "历史账务与发票风险",
    pain: "企业在发展早期管理粗放，存在取得不合规发票、成本费用无法税前扣除、公私账户混用等问题，面临极大的潜在税务风险。",
    solution: "开展全面的税务健康体检，排查历史涉税问题，区分风险等级。针对发票问题，评估交易真实性并补充证据链；协助企业规范账务，建立内控防火墙。",
    relatedServices: ["tax-compliance"],
    deliverables: ["《税务健康体检报告》", "《历史遗留问题整改方案》", "《企业税务合规内控制度》"]
  },
  {
    id: "m-and-a-risk",
    title: "并购重组前风险排查",
    pain: "拟收购目标公司，但担忧其存在隐蔽的税务欠缴、未决税务争议或账外负债，且不知如何设计税务成本最优的收购架构。",
    solution: "开展法财税一体化尽职调查，全面摸底目标公司风险。结合交易目的，设计最优的股权/资产收购架构，争取适用特殊性税务处理，审查交易合同。",
    relatedServices: ["m-and-a-tax"],
    deliverables: ["《法财税尽职调查报告》", "《交易架构设计与税务测算方案》", "涉税条款审查意见"]
  },
  {
    id: "real-estate-construction",
    title: "房地产与建筑企业涉税风险",
    pain: "房地产及建筑行业业务周期长、资金量大、涉及税种多（土增税、增值税等），存在甲供材、挂靠、违规发票等行业顽疾。",
    solution: "深入行业特性，对项目全生命周期进行税务测算与规划。梳理劳务分包、材料采购环节的发票合规性，协助进行土地增值税清算应对。",
    relatedServices: ["tax-compliance", "annual-advisory"],
    deliverables: ["《项目全周期税务测算表》", "《建安企业发票合规管理手册》", "《土地增值税清算模拟报告》"]
  },
  {
    id: "soe-major-project",
    title: "国企央企重大项目税务管理",
    pain: "国企央企在进行重大对外投资、混改、合作开发时，面临严格的合规审计要求，一旦出现税务风险将导致严重的国有资产流失责任。",
    solution: "在项目决策前提供法财税可行性分析与税务测算，确保交易路径合法合规。在项目执行中提供全程税务顾问服务，确保每一步操作有据可依。",
    relatedServices: ["m-and-a-tax", "annual-advisory"],
    deliverables: ["《重大项目涉税可行性分析报告》", "《国资监管合规性论证意见》", "全程税务顾问备忘录"]
  },
  {
    id: "private-equity-wealth",
    title: "民营企业股权与财富安排",
    pain: "民营企业家面临企业控制权设计、股权转让高额个税、二代接班财富传承以及家企资产未隔离带来的无限连带责任风险。",
    solution: "重塑顶层股权架构（如设立控股公司、有限合伙等），合理规划股转及分红税负。设计家族信托或协议架构，实现家企风险隔离与平稳传承。",
    relatedServices: ["wealth-planning"],
    deliverables: ["《顶层股权架构重组方案》", "《股转/分红税务测算与优化方案》", "《家企隔离与财富传承规划书》"]
  },
  {
    id: "daily-compliance",
    title: "常年经营合规管理",
    pain: "企业日常经营中，缺乏专业的财税人员把关重大合同，遇到新政策不知如何享受，容易“踩坑”。",
    solution: "提供常年法财税顾问服务，前置审查业务合同涉税条款，及时推送并解读适用新政，提供日常咨询，将风险防范于未然。",
    relatedServices: ["annual-advisory"],
    deliverables: ["重大合同涉税审查意见", "新政适用解读简报", "日常咨询解答记录"]
  }
];
