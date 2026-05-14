export interface Case {
  slug: string;
  title: string;
  industry: string;
  riskType: string;
  background: string;
  issue: string;
  work: string;
  result: string;
  note: string;
}

export const cases: Case[] = [
  {
    slug: "transportation-tax-dispute",
    title: "某运输服务企业涉税行政争议案",
    industry: "运输服务",
    riskType: "行政争议",
    background: "企业因运输业务层层转包，被税务机关关注发票和税务处理问题。",
    issue: "交易真实性、发票合规性、税务处理依据。",
    work: "协助梳理合同、业务资料、资金流水和事实链条，围绕税法适用和证据材料进行多轮论证。",
    result: "事项最终通过沟通和程序推进进入可处理状态，相关争议得到依法回应。",
    note: "运输、建筑、物流等业务链条较长的行业，应特别关注合同、发票、资金和实际履约证据的一致性。"
  },
  {
    slug: "building-materials-invoice-risk",
    title: "某建筑材料企业涉嫌虚开发票风险应对",
    industry: "建筑材料",
    riskType: "发票风险",
    background: "企业因发票流转和业务资料问题，被关注是否存在虚开发票风险。",
    issue: "是否存在真实交易、证据链是否完整、主观状态如何判断。",
    work: "协助企业梳理合同、发票、付款记录、货物流转和内部审批资料。",
    result: "通过事实和证据梳理，为后续沟通和风险判断提供了专业依据。",
    note: "虚开发票风险不能只看发票本身，应综合判断交易真实性、资金流、货物流、合同和企业主观状态。"
  },
  {
    slug: "construction-civil-dispute",
    title: "某建筑工程企业涉税民事纠纷案",
    industry: "建筑工程",
    riskType: "民事纠纷",
    background: "项目合作过程中产生涉税争议，相关方就税款承担和责任划分发生纠纷。",
    issue: "合同约定、税费承担、稽查处理决定与民事责任之间的关系。",
    work: "协助梳理事实、合同、税务资料和证据材料，为代理沟通提供专业支持。",
    result: "通过证据和专业意见支持，帮助企业降低争议风险。",
    note: "工程合作项目应在合同阶段明确税费承担、发票开具、成本归集和违约责任。"
  },
  {
    slug: "real-estate-tax-audit",
    title: "某房地产企业税务稽查应对",
    industry: "房地产",
    riskType: "税务稽查",
    background: "企业因关联往来、利息收入、成本归集等问题被税务机关关注。",
    issue: "收入确认、成本费用、关联交易和税法适用。",
    work: "协助企业梳理项目资料、财务处理、合同关系和税法依据。",
    result: "通过系统论证和专业沟通，依法维护企业合法权益。",
    note: "房地产企业项目周期长、交易链条复杂，应提前建立完整的项目资料和税务风险管理机制。"
  },
  {
    slug: "state-owned-cooperation-tax-risk",
    title: "某国企合作开发项目税收风险应对",
    industry: "国企 / 房地产合作开发",
    riskType: "交易风险",
    background: "某国企与房企合作开发项目过程中，因交易结构和税务处理被关注。",
    issue: "交易实质、收益性质、税种适用和合同安排。",
    work: "协助分析交易结构、合同安排、资金流向和税务处理依据。",
    result: "为企业重大项目税务风险判断和沟通提供专业支持。",
    note: "国企重大项目应在交易设计阶段同步开展法财税论证，避免项目实施后被动处理风险。"
  },
  {
    slug: "tech-company-tax-dispute",
    title: "某科技公司税务处理争议沟通",
    industry: "科技服务",
    riskType: "政策适用",
    background: "企业因税务处理方式和政策适用问题，被要求补缴税款及滞纳金。",
    issue: "业务性质、计税方式、政策适用条件和资料留存。",
    work: "协助企业梳理业务模式、合同资料、财务处理和政策依据，与相关方进行专业沟通。",
    result: "帮助企业围绕事实和政策依据形成系统说明，维护企业合法权益。",
    note: "科技企业享受税收政策或适用特定计税方式时，应持续保留业务、财务和政策适用证据。"
  }
];
