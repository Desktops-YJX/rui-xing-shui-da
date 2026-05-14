export interface Expert {
  id: string;
  name: string;
  titles: string[];
  description: string;
  specialties: string[];
  image?: string;
}

export const experts: Expert[] = [
  {
    id: "yuan-daoping",
    name: "袁道平",
    titles: [
      "律师",
      "注册会计师",
      "重庆市首届会计行业领军人才",
      "资深法财税专家"
    ],
    description: "袁道平深耕法、财、税领域二十余年，长期关注税务合规、税务争议、税务危机处理、税务行政复议与诉讼等高复杂度涉税业务。其专业经验覆盖企业税收合规、重大税务争议、税务稽查应对、交易结构设计和法财税一体化服务等方向，能够从法律、财务、税务多维角度分析复杂事项。",
    specialties: [
      "税务合规",
      "税务争议",
      "税务稽查应对",
      "税务危机处理",
      "企业重组",
      "股权架构设计",
      "涉税行政复议与诉讼"
    ]
  }
];
