import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import { PageHero } from "@/components/ui/page-hero";
import { ContactButton } from "@/components/ui/contact-button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Scale, TrendingUp, Award } from "lucide-react";
import { siteData } from "@/data/site";
import { ImageLightbox } from "@/components/ui/image-lightbox";

export const metadata: Metadata = {
  title: "关于我们｜川渝法财税一体化服务集团",
  description: "了解川渝法财税一体化服务集团。整合重庆诚名税务师事务所(5A)、四川瑞兴税达、四川新禾嘉、重庆中特，提供税务、审计、评估、法律全链条服务。",
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "关于我们", url: "https://www.ruixingshuida.com/about" },
  ];

  return (
    <main className="flex flex-col w-full">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* 1. 页面 Hero */}
      <PageHero 
        title="关于我们" 
        description="川渝法财税一体化服务集团，整合重庆诚名税务师事务所（AAAAA级）、四川瑞兴税达税务师事务所、四川新禾嘉会计师事务所、重庆中特会计师事务所四家机构，致力于为企业提供从风险识别、方案设计到沟通应对的全链条专业支持。" 
      />

      {/* 2. 公司介绍 */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-brand-dark">
            <p>
              {siteData.about.description.split('\n\n')[0]}
            </p>
            <p>
              {siteData.about.description.split('\n\n')[1]}
            </p>
          </div>
        </Container>
      </section>

      {/* 3. 服务理念 */}
      <section className="py-24 bg-brand-beige/50">
        <Container>
          <SectionHeader title="专业为本，法税融合，价值创造" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">专业为本</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-brand-gray">
                以税法、会计、法律和实务经验为基础，围绕客户真实问题进行专业判断。
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-4">
                  <Scale className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">法税融合</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-brand-gray">
                将法律关系、财务数据和税务结果放在同一框架下分析，避免单一视角带来的判断偏差。
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">价值创造</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-brand-gray">
                帮助企业识别风险、完善证据、优化交易路径，在合规基础上提升经营安全性和决策质量。
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* 4. 专业能力 */}
      <section className="py-24 bg-brand-dark text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeader 
              title="我们关注的核心问题" 
              align="left" 
              className="[&>h2]:text-white mb-12" 
            />
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "企业是否存在历史账务、发票、成本费用风险",
                "合同、资金流、发票流、业务流是否一致",
                "税收优惠是否符合条件并留存资料",
                "股权转让、资产处置、并购重组是否存在税务风险",
                "税务稽查、争议处理是否具备完整证据链",
                "企业主和股东的分红、借款、股权安排是否合规"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 5. 机构信息 */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="机构信息" align="left" />
            
            <div className="bg-brand-beige/30 border border-brand-border rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 text-lg">
                <div>
                  <h4 className="text-brand-gray text-sm mb-1">公司名称</h4>
                  <p className="font-semibold text-brand-dark">{siteData.name}</p>
                </div>
                <div>
                  <h4 className="text-brand-gray text-sm mb-1">英文名称</h4>
                  <p className="font-medium text-brand-dark">{siteData.enName}</p>
                </div>
                <div>
                  <h4 className="text-brand-gray text-sm mb-1">品牌简称</h4>
                  <p className="font-medium text-brand-dark">{siteData.shortName}</p>
                </div>
                <div>
                  <h4 className="text-brand-gray text-sm mb-1">服务方向</h4>
                  <p className="font-medium text-brand-dark">{siteData.positioning}</p>
                </div>
                
                <div className="md:col-span-2 pt-6 border-t border-brand-border mt-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-brand-red font-semibold mb-3 flex items-center gap-2">
                      成都总部
                    </h4>
                    <address className="not-italic text-brand-gray space-y-2">
                      <p>{siteData.contact.chengdu.address}</p>
                      <p>电话：{siteData.contact.chengdu.phone}</p>
                    </address>
                  </div>
                  <div>
                    <h4 className="text-brand-red font-semibold mb-3 flex items-center gap-2">
                      重庆分部
                    </h4>
                    <address className="not-italic text-brand-gray space-y-2">
                      <p>{siteData.contact.chongqing.address}</p>
                      <p>电话：{siteData.contact.chongqing.phone}</p>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. 资质荣誉展示区 */}
      <section className="py-24 bg-brand-beige/50">
        <Container>
          <SectionHeader title="专业资质与行业认可" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { title: "重庆市国际税收研究会副会长", image: "/images/assets/cert_guojishuishou.jpg" },
              { title: "重庆市税务学会副会长", image: "/images/assets/cert_shuishou_fuhuizhang.jpg" },
              { title: "法普AI公益普法专家", image: "/images/assets/cert_fapu.jpg" },
              { title: "社会组织评估专家", image: "/images/assets/cert_pinggu_zhuanjia.jpg" },
              { title: "建设会计学会文件", image: "/images/assets/cert_huijixuehui.jpg" },
              { title: "专家委员会聘书", image: "/images/assets/cert_zhuanjiaweiyuanhui_v2.jpg" },
              { title: "社会组织评估专家邀请函", image: "/images/assets/cert_yaoqinghan.jpg" },
              { title: "专家顾问聘书", image: "/images/assets/cert_pingshu_123.jpg" },
              { title: "专业研究成果", image: "/images/assets/cert_yidaiyilu.jpg" },
              { title: "荣誉证书", image: "/images/assets/cert_rongyu.jpg" },
            ].map((cert, idx) => (
              <Card key={idx} className="border-brand-border bg-white shadow-sm overflow-hidden flex flex-col">
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center relative overflow-hidden p-2">
                  <ImageLightbox 
                    src={cert.image} 
                    alt={cert.title} 
                    className="object-contain p-2 bg-white transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 flex-1 flex items-center justify-center text-center border-t border-brand-border/50">
                  <p className="font-medium text-brand-dark text-sm">{cert.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. 底部 CTA */}
      <section className="py-24 bg-brand-red text-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              希望进一步了解瑞兴税达的服务方式？
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              可以通过电话或表单提交基本情况，我们会根据企业所处阶段和具体事项，判断适合采用专项服务还是常年顾问服务。
            </p>
            <Link href="/contact">
              <ContactButton className="bg-white text-brand-red hover:bg-brand-beige" />
            </Link>
          </div>
        </Container>
        
        {/* Decorative background pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </section>
    </main>
  );
}
