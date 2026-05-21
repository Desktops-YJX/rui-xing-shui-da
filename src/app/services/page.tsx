import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactButton } from "@/components/ui/contact-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServicesJsonLd } from "@/components/seo/ServicesJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { services } from "@/data/services";
import { scenarios } from "@/data/scenarios";
import { faqs } from "@/data/faqs";
import { ArrowRight, Scale, Calculator, Receipt, CheckCircle2, AlertCircle, PlayCircle, Target, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "服务中心｜瑞兴税达法财税一体化综合服务",
  description: "瑞兴税达服务中心提供税务合规与风险体检、税务稽查应对、税务争议解决、企业重组与并购法财税、常年法财税顾问、高净值人士税务规划等服务。",
};

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "服务中心", url: "https://www.ruixingshuida.com/services" },
  ];

  return (
    <main className="flex flex-col w-full">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ServicesJsonLd baseUrl="https://www.ruixingshuida.com" />
      <FaqJsonLd />

      {/* 1. 页面 Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white py-16 md:py-32">
        <Container className="relative z-10">
          <div className="max-w-4xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              法财税一体化综合服务
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              围绕企业经营、交易、投融资、税务稽查、争议解决与财富安排等场景，瑞兴税达以税务、财务、法律等复合视角，为企业和企业家提供从风险识别、方案设计到沟通应对的一体化服务。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact" className="w-full sm:w-auto">
                <ContactButton className="w-full" />
              </Link>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 rounded-[16px] text-base border-white/20 bg-white/10 hover:bg-white/20 text-white">
                <Link href="#service-list">查看服务项目</Link>
              </Button>
            </div>
          </div>
        </Container>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </section>

      {/* 2. 服务总览 */}
      <section id="service-list" className="py-16 md:py-24 bg-brand-beige/30 scroll-mt-20">
        <Container>
          <SectionHeader title="核心服务项目" />
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8" stagger={0.1}>
            {services.map((service, index) => (
              <Card key={service.id} className="flex flex-col h-full border-brand-border hover:border-brand-red/30 hover:shadow-md transition-all">
                <CardHeader className="pb-4">
                  <div className="text-3xl md:text-4xl font-black text-brand-beige mb-2">0{index + 1}</div>
                  <CardTitle className="text-lg md:text-xl text-brand-dark">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pb-4">
                  <p className="text-sm md:text-base text-brand-gray">{service.summary}</p>
                </CardContent>
                <CardFooter className="pt-0">
                <Button asChild variant="ghost" className="text-brand-red hover:text-brand-red hover:bg-brand-red/5 -ml-4">
                  <Link href={`#${service.id}`}>
                    查看详情 <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
              </Card>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      {/* 3. 法财税一体化服务模型 */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <ScrollReveal direction="right" className="lg:w-1/3">
              <SectionHeader title="复杂问题需要综合判断" align="left" className="mb-6" />
              <p className="text-lg text-brand-gray leading-relaxed">
                企业的重大风险往往不是单一税务问题，而是合同、账务、发票、资金、股权、交易结构交织后的综合风险。瑞兴税达以法律合规、财务真实性、税务安全性三个维度共同判断，帮助客户避免“单点合规、整体失控”。
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" stagger={0.15} className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <Card className="bg-brand-beige/30 border-brand-border">
                <CardHeader className="pb-4">
                  <Scale className="w-8 h-8 text-brand-gold mb-4" />
                  <CardTitle className="text-lg">法律合规</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-brand-gray leading-relaxed">
                  合同、股权、主体资格、责任承担、争议路径
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-100">
                <CardHeader className="pb-4">
                  <Calculator className="w-8 h-8 text-blue-500 mb-4" />
                  <CardTitle className="text-lg text-blue-900">财务真实性</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-blue-800/70 leading-relaxed">
                  账务处理、资金流向、成本归集、报表真实性
                </CardContent>
              </Card>
              <Card className="bg-red-50 border-red-100">
                <CardHeader className="pb-4">
                  <Receipt className="w-8 h-8 text-red-500 mb-4" />
                  <CardTitle className="text-lg text-red-900">税务安全性</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-red-800/70 leading-relaxed">
                  纳税义务、发票合规、税收优惠、税务风险
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 4. 六大服务详情 */}
      <section className="py-16 md:py-24 bg-brand-beige/20">
        <Container>
          <SectionHeader title="服务详情说明" />
          <ScrollReveal className="space-y-8 md:space-y-16 mt-12" stagger={0.2} distance={30}>
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24 bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-brand-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-beige/30 rounded-bl-[100px] -z-10" />
                
                <div className="flex items-center gap-4 mb-6 md:mb-8 pb-6 border-b border-brand-border">
                  <span className="text-3xl md:text-5xl font-black text-brand-red opacity-80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-brand-dark">
                    {service.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                  {/* 左栏：适用对象与常见问题 */}
                  <div className="space-y-6 md:space-y-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-base md:text-lg font-semibold text-brand-red mb-4">
                        <Target className="w-5 h-5" /> 适用对象
                      </h4>
                      <ul className="space-y-2 md:space-y-3">
                        {service.suitableFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-brand-gray">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center gap-2 text-base md:text-lg font-semibold text-brand-red mb-4">
                        <AlertCircle className="w-5 h-5" /> 客户常见问题
                      </h4>
                      <ul className="space-y-2 md:space-y-3">
                        {service.painPoints.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-brand-gray bg-brand-beige/50 p-3 rounded-lg">
                            <span className="text-brand-gold font-bold">Q:</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 右栏：服务内容与交付成果 */}
                  <div className="space-y-6 md:space-y-8 lg:border-l lg:border-brand-border lg:pl-12">
                    <div>
                      <h4 className="flex items-center gap-2 text-base md:text-lg font-semibold text-brand-dark mb-4">
                        <PlayCircle className="w-5 h-5 text-brand-gold" /> 服务内容
                      </h4>
                      <ul className="space-y-2 md:space-y-3">
                        {service.serviceItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-brand-gray">
                            <CheckCircle2 className="w-5 h-5 text-green-600/70 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
                      <h4 className="flex items-center gap-2 text-base md:text-lg font-semibold text-brand-dark mb-4">
                        <Receipt className="w-5 h-5 text-brand-gold" /> 交付成果
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm md:text-base text-brand-dark font-medium">
                            <span className="w-1.5 h-1.5 bg-brand-red shrink-0 rotate-45" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      {/* 5. 典型问题场景解决方案 */}
      <section id="solutions" className="py-24 bg-white scroll-mt-20">
        <Container>
          <SectionHeader 
            title="典型问题场景解决方案" 
            subtitle="很多企业遇到的不是单一税务问题，而是合同、账务、发票、资金、股权、交易结构交织后的综合风险。以下场景适合采用法财税一体化方式处理。"
          />
          
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12" stagger={0.1}>
            {scenarios.map((scenario) => (
              <Card key={scenario.id} className="border-brand-border shadow-sm flex flex-col">
                <CardHeader className="bg-brand-beige/30 border-b border-brand-border/50">
                  <CardTitle className="text-xl text-brand-dark">{scenario.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6 flex-1">
                  <div>
                    <h5 className="text-sm font-bold text-brand-red mb-2 uppercase tracking-wider">痛点</h5>
                    <p className="text-brand-gray leading-relaxed">{scenario.pain}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-green-700 mb-2 uppercase tracking-wider">解决思路</h5>
                    <p className="text-brand-dark leading-relaxed">{scenario.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      {/* 6. 服务流程 */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <Container>
          <SectionHeader title="标准化服务流程" className="[&>h2]:text-white mb-16" />
          
          <ScrollReveal className="relative" distance={20}>
            {/* 横向/纵向连接线 */}
            <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-brand-gold/20 md:left-0 md:right-0 md:top-[28px] md:bottom-auto md:w-full md:h-0.5" />
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
              {[
                { title: "初步沟通", desc: "了解背景与紧急程度" },
                { title: "资料清单", desc: "明确所需业务证据材料" },
                { title: "风险诊断", desc: "法财税三维识别核心问题" },
                { title: "方案设计", desc: "形成应对策略与行动路径" },
                { title: "沟通协同", desc: "协助专业沟通与抗辩" },
                { title: "复盘管理", desc: "归档并提供后续建议" }
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4">
                  <div className="w-14 h-14 md:w-14 md:h-14 rounded-full bg-brand-dark border-4 border-brand-gold flex items-center justify-center text-xl font-bold text-brand-gold shrink-0 z-10 shadow-[0_0_0_4px_rgba(31,41,51,1)]">
                    {idx + 1}
                  </div>
                  <div className="md:text-center pt-2 md:pt-0">
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 7. 适合客户类型 */}
      <section className="py-24 bg-brand-beige/50">
        <Container>
          <ScrollReveal className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-brand-border">
            <div className="flex items-center justify-center mb-8">
              <Users className="w-12 h-12 text-brand-red" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-dark mb-10">
              哪些客户更适合选择法财税一体化服务
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "正在接受税务检查、稽查、风险提示或约谈的企业",
                "存在账实不符、发票不规范、成本费用不合规等历史问题的企业",
                "准备并购、重组、股权转让、资产剥离或融资的企业",
                "房地产、建筑、商贸、平台经济等税务风险较高行业企业",
                "集团企业、国企央企、成长型民营企业和家族企业",
                "有股权安排、财富传承、婚姻家事与税务规划需求的企业主和高净值人士"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                  <p className="text-brand-gray text-lg">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 8. 服务 FAQ */}
      <section className="py-24 bg-white border-t border-brand-border/30">
        <Container>
          <SectionHeader title="服务常见问题" />
          
          <ScrollReveal className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.slice(0, 5).map((category, catIdx) => (
                category.items.slice(0, 1).map((faq, idx) => (
                  <AccordionItem 
                    key={`${catIdx}-${idx}`} 
                    value={`${catIdx}-${idx}`}
                    className="bg-white border border-brand-border rounded-xl px-6 data-[state=open]:border-brand-red/30 data-[state=open]:shadow-sm transition-all"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium text-brand-dark hover:text-brand-red py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-brand-gray text-base leading-relaxed pb-6 pt-0">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))
              ))}
            </Accordion>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                <Link href="/faq">查看更多常见问题</Link>
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 9. 底部 CTA */}
      <section className="py-24 bg-brand-red text-white relative overflow-hidden">
        <Container className="relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto text-center" distance={30}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              立即预约法财税专家进行初步评估
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              我们的专家团队将为您提供专业的风险判断与应对建议，助您从容应对复杂涉税事项。
            </p>
            <Link href="/contact">
              <ContactButton className="bg-white text-brand-red hover:bg-brand-beige" />
            </Link>
          </ScrollReveal>
        </Container>
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </section>
    </main>
  );
}
