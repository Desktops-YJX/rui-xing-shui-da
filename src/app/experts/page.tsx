import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactButton } from "@/components/ui/contact-button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experts } from "@/data/experts";
import { CheckCircle2, Award, Lightbulb, Scale, Target } from "lucide-react";
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

  const expert = experts[0]; // 袁道平
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
                    <Target className="w-5 h-5 text-brand-red mr-2" /> 专业方向
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {specializations.map((spec, idx) => (
                      <div key={idx} className="flex items-center text-brand-gray">
                        <CheckCircle2 className="w-4 h-4 text-brand-red mr-2 shrink-0" />
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

      {/* 3. 专业能力说明 */}
      <section className="py-24 bg-brand-beige/50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/20 flex items-center justify-center mb-6">
              <Scale className="w-8 h-8 text-brand-gold" />
            </div>
            <h2 className="text-3xl font-bold text-brand-dark mb-8">复合视角处理复杂问题</h2>
            <p className="text-xl text-brand-gray leading-relaxed">
              复杂涉税事项往往同时涉及合同效力、财务真实性、交易实质、发票合规、税法适用和程序规则。瑞兴税达专家团队坚持以事实和证据为基础，通过法财税一体化方式，为客户提供更完整的风险判断和处理路径。
            </p>
          </div>
        </Container>
      </section>

      {/* 4. 资质荣誉模块 */}
      <section className="py-24 bg-white">
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
