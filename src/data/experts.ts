export interface Expert {
  id: string;
  name: string;
  titles: string[];
  description: string;
  specialties: string[];
  image?: string;
  imagePosition?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface TeamMember {
  name: string;
  titles: string[];
  image?: string;
  imagePosition?: string;
}

export interface Advisor {
  name: string;
  titles: string[];
  description: string;
  image?: string;
  imagePosition?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const coreExpert: Expert = {
  id: "yuan-daoping",
  name: "袁道平",
  titles: [
    "律师",
    "注册会计师",
    "重庆市首届会计行业领军人才",
    "资深法财税专家"
  ],
  description: "袁道平深耕法、财、税领域二十余年，具备深厚的理论功底与丰富的实战经验。曾担任多个税务局、跨区稽查局法律顾问，深度参与税收征管实践与政策研讨，对税务机关执法逻辑及税收政策演变有着精准理解。专注于企业税收合规、税务争议、税务危机处理、税务行政复议与诉讼等高端涉税业务，主导处理了上百起重大疑难涉税案件，涵盖房地产制造业、金融商贸等多个行业。\n\n作为行业领军人物，袁道平不仅擅长以法律思维破解复杂税务难题，更致力于推动法财税一体化服务的发展，其领导的团队能够为客户提供从顶层架构设计到具体争议解决的全链条支持。",
  image: "/images/assets/袁道平.jpg",
  imagePosition: "object-top",
  specialties: [
    "北京盈科(成都)律师事务所律师",
    "西南大学会计硕士生实务导师",
    "重庆市税务学会副会长",
    "重庆市国际税收研究会副会长",
    "重庆市社会科学促进会财税与合规专业委员会主任"
  ]
};

export const advisors: Advisor[] = [
  {
    name: "田冠军",
    image: "/images/assets/田冠军.jpg",
    titles: [
      "专家教授",
      "博士",
      "博士后",
      "团队技术研发负责人"
    ],
    description: "重庆工商大学会计学院教授，全国税务领军人才。担任多家政府部门或公司的特聘专家、财务顾问，多家集团（上市）公司独立董事。作为专家顾问为各企事业单位提供财务尽调、合规管理、风险管理等综合咨询工作，具有丰富的理论水平和实践经验。",
    stats: [
      { label: "发表论文", value: "70余篇" },
      { label: "出版专著教材", value: "4部" },
      { label: "国家级省部级课题", value: "10余项" }
    ]
  },
  {
    name: "傅樵",
    image: "/images/assets/傅樵.jpg",
    imagePosition: "object-top scale-[1.2] origin-top",
    titles: [
      "副教授",
      "博士",
      "硕士生导师",
      "MBA研究生导师"
    ],
    description: "毕业于西南财经大学，教育部学位论文评审专家。长期致力于财税理论与实务研究。擅长将会计、税收、法律知识综合运用到税务管理等领域。重庆市会计行业领军人才，重庆巴渝学者青年学者，国家一流专业负责人，2024中国知网高被引学者TOP1%。指导学生参加各类专业竞赛多次获得全国特等奖、一等奖等荣誉。",
    stats: [
      { label: "发表论文", value: "100余篇" },
      { label: "撰写专著", value: "2部" },
      { label: "省部级课题", value: "7项" }
    ]
  }
];

export const teamMembers: TeamMember[] = [
  { name: "肖棚义", titles: ["律师"], image: "/images/assets/肖棚义.jpg" },
  { name: "谭玉梅", titles: ["注册会计师", "中级会计师", "税务师"], image: "/images/assets/谭玉梅.jpg" },
  { name: "秦琬凌", titles: ["注册会计师", "税务师"], image: "/images/assets/秦琬凌.jpg" },
  { name: "洪成", titles: ["中级会计师", "税务师"], image: "/images/assets/洪成.jpg", imagePosition: "object-top" },
  { name: "王焦", titles: ["中级会计师", "税务师"], image: "/images/assets/王焦.jpg" },
  { name: "胡耘通", titles: ["特聘专家顾问"], image: "/images/assets/胡耘通.jpg", imagePosition: "object-top" } // Note: Added Hu Yuntong based on available images
];

// Keep the old export for backward compatibility until page is updated
export const experts: Expert[] = [coreExpert];
