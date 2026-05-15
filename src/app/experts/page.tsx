import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactButton } from "@/components/ui/contact-button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { coreExpert, advisors, teamMembers } from "@/data/experts";
import { CheckCircle2, Award, Lightbulb, Scale, Target, Users, BookOpen } from "lucide-react";
import { ImageLightbox } from "@/components/ui/image-lightbox";

export const metadata: Metadata = {
  title: "专家团队｜瑞兴税达法财税专家",
  description: "瑞兴税达专家团队聚焦税务合规、税务稽查应对、税务争议解决、税务危机处理、企业重组与法财税一体化服务。",
};

export default function ExpertsPage() {
  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "专家团队", url: "https://www.ruixingshuida.com/experts" },
  ];

  const expert = coreExpert; // 袁道平
  const specializations = expert.specialties;

  const certificates = [
    { title: "重庆市国际税收研究会副会长", image: "/images/assets/cert_guojishuishou.jpg" },
    { title: "重庆市税务学会副会长", image: "/images/assets/cert_shuishou_fuhuizhang.jpg" },
    { title: "西南政法大学实务导师", image: "/images/assets/cert_xizheng.jpg" },
    { title: "法普AI公益普法专家", image: "/images/assets/cert_fapu.jpg" },
    { title: "社会组织评估专家", image: "/images/assets/cert_pinggu_zhuanjia.jpg" },
    { title: "社会组织评估专家邀请函", image: "/images/assets/cert_yaoqinghan.jpg" },
    { title: "专家顾问聘书", image: "/images/assets/cert_pingshu_123.jpg" },
    { title: "行业荣誉证书", image: "/images/assets/cert_rongyu.jpg" }
  ];

  return (
    <main className="flex flex-col w-full">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* 1. 页面 Hero */}
      <PageHero 
        title="专家团队" 
        description="瑞兴税达以税务、财务、法律等复合专业能力为基础，围绕企业税务合规、税务稽查应对、税务争议解决、交易结构设计和法财税一体化服务，为客户提供专业支持。" 
      />

      {/* 2. 核心专家模块 */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border border-brand-border overflow-hidden flex flex-col md:flex-row shadow-lg relative">
              
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold z-10" />

              {/* 左侧：专家头像与头衔 */}
              <div className="md:w-1/3 bg-brand-dark p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="relative z-10 w-40 h-40 rounded-full bg-brand-dark flex items-center justify-center mb-8 border-4 border-brand-gold shadow-[0_0_20px_rgba(176,138,69,0.2)]">
                  <span className="text-5xl font-bold text-brand-gold">{expert.name[0]}</span>
                </div>
                <h2 className="relative z-10 text-3xl font-bold text-white mb-6">{expert.name}</h2>
                <div className="relative z-10 flex flex-col gap-3 w-full">
                  {expert.titles.map((title, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-white/5 hover:bg-white/10 text-brand-gold py-1.5 justify-center border border-white/10">
                      {title}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* 右侧：专家简介与方向 */}
              <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center bg-brand-beige/10">
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 text-brand-gold mr-2" /> 专业简介
                  </h3>
                  <p className="text-brand-gray text-lg leading-relaxed">
                    {expert.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center">
                    <Award className="w-5 h-5 text-brand-red mr-2" /> 任职与兼职
                  </h3>
                  <div className="grid grid-cols-1 gap-y-3">
                    {specializations.map((spec, idx) => (
                      <div key={idx} className="flex items-center text-brand-gray">
                        <div className="w-2 h-2 rounded-full bg-brand-gold mr-3 shrink-0" />
                        <span className="font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 3. 团队矩阵与优势 */}
      <section className="py-24 bg-brand-beige/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="复合型人才矩阵与权威资源协同" 
              subtitle="团队成员由律师、注册会计师、税务师、评估师等组成，深耕涉税服务领域多年，并联合北京盈科（成都）律师事务所、川渝高校专家组建服务联盟，保障服务品质行业领先。" 
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* 优势1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border/50 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-red/10 flex items-center justify-center mb-6">
                  <Scale className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">破解单一专业视角局限</h3>
                <p className="text-brand-gray leading-relaxed">
                  核心团队兼具财税政策深度解读、法律风险精准把控、资产价值科学评估等多维能力，为企业提供从合规诊断到风险化解、价值提升的全链条专业支持。
                </p>
              </div>

              {/* 优势2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border/50 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">高合规性一体化解决方案</h3>
                <p className="text-brand-gray leading-relaxed">
                  依托项目统一管理与标准化作业，精准把控全流程风险，高效对接税务机关，助力企业财税安全与价值提升。
                </p>
              </div>

              {/* 优势3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border/50 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">丰富的实战经验</h3>
                <p className="text-brand-gray leading-relaxed">
                  核心成员累计处理复杂涉税案件、合规项目百余项，经验覆盖房地产制造业、金融商贸等多个行业。
                </p>
              </div>
            </div>

            {/* 团队成员列表 */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-brand-dark text-center mb-10">核心团队成员</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="bg-white px-6 py-4 rounded-xl shadow-sm border border-brand-border/50 flex flex-col items-center min-w-[160px]">
                    <span className="text-lg font-bold text-brand-dark mb-2">{member.name}</span>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {member.titles.map((title, tIdx) => (
                        <span key={tIdx} className="text-xs px-2 py-1 bg-brand-beige text-brand-gray rounded-md">
                          {title}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. 专家顾问 */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader 
            title="特聘专家顾问" 
            subtitle="联合川渝高校知名学者、专家教授，提供深厚的理论支持与权威的实务指导。" 
          />
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
            {advisors.map((advisor, idx) => (
              <div key={idx} className="bg-brand-beige/20 rounded-2xl border border-brand-border/50 overflow-hidden flex flex-col h-full">
                <div className="p-8 border-b border-brand-border/50 bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-brand-gold">{advisor.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-1">{advisor.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {advisor.titles.map((title, tIdx) => (
                          <span key={tIdx} className="text-xs font-medium text-brand-red bg-brand-red/10 px-2 py-0.5 rounded">
                            {title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-brand-gray leading-relaxed text-sm">
                    {advisor.description}
                  </p>
                </div>
                
                {advisor.stats && (
                  <div className="bg-brand-dark p-6 mt-auto">
                    <div className="grid grid-cols-3 gap-4 divide-x divide-white/10">
                      {advisor.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="text-center px-2">
                          <div className="text-brand-gold font-bold text-lg mb-1">{stat.value}</div>
                          <div className="text-white/60 text-xs">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. 资质荣誉模块 */}
      <section className="py-24 bg-brand-beige/50">
        <Container>
          <SectionHeader 
            title="专业资质与行业参与" 
            subtitle="本区域用于展示专家聘书、荣誉证书、研究成果、社会组织评估专家证明等材料。" 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {certificates.map((cert, idx) => (
              <Card key={idx} className="border-brand-border bg-gray-50/50 shadow-sm overflow-hidden flex flex-col">
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center relative overflow-hidden p-2">
                  <ImageLightbox 
                    src={cert.image} 
                    alt={cert.title} 
                    className="object-contain p-2 bg-white transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 flex-1 flex flex-col items-center justify-center text-center bg-white border-t border-brand-border/50">
                  <h4 className="font-semibold text-brand-dark text-sm">{cert.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. 底部 CTA */}
      <section className="py-24 bg-brand-red text-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              需要专家参与复杂税务事项判断？
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              对于税务稽查、重大交易、股权调整、并购重组和历史遗留问题，建议尽早进行专业评估，避免在资料提交或处理路径上陷入被动。
            </p>
            <Link href="/contact">
              <ContactButton className="bg-white text-brand-red hover:bg-brand-beige" />
            </Link>
          </div>
        </Container>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </section>
    </main>
  );
}
