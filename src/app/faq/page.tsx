import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/page-hero";
import { ContactButton } from "@/components/ui/contact-button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "FAQ｜瑞兴税达法财税综合服务常见问题",
  description: "瑞兴税达 FAQ 解答税务合规、税务稽查应对、税务争议解决、并购重组法财税尽调、常年法财税顾问等常见问题。",
};

export default function FaqPage() {
  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "常见问题", url: "https://www.ruixingshuida.com/faq" },
  ];

  const groupedFaqs = faqs;

  return (
    <main className="flex flex-col w-full">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <FaqJsonLd />

      {/* 1. 页面 Hero */}
      <PageHero 
        title="常见问题" 
        description="企业在税务合规、税务稽查、股权交易、并购重组、常年顾问和高净值人士财富安排中，经常遇到法律、财务、税务交织的问题。以下问答帮助客户快速判断是否需要专业介入。" 
      />

      {/* 2. FAQ 列表 */}
      <section className="py-16 md:py-24 bg-brand-beige/20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
            {groupedFaqs.map((category, catIdx) => (
              <div key={catIdx} id={category.category} className="scroll-mt-32">
                <ScrollReveal>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-4 md:mb-6 flex items-center">
                    <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-xs md:text-sm mr-3">
                      {catIdx + 1}
                    </span>
                    {category.category}
                  </h3>
                </ScrollReveal>
                
                <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
                  {category.items.map((faq, idx) => (
                    <ScrollReveal key={idx} stagger={idx * 0.1}>
                      <AccordionItem 
                        value={`${catIdx}-${idx}`}
                        className="bg-white border border-brand-border rounded-xl px-4 md:px-6 data-[state=open]:border-brand-red/30 data-[state=open]:shadow-sm transition-all"
                      >
                        <AccordionTrigger className="text-left text-base md:text-lg font-medium text-brand-dark hover:text-brand-red py-4 md:py-6 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-brand-gray text-sm md:text-base leading-relaxed pb-4 md:pb-6 pt-0">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </ScrollReveal>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. 底部 CTA */}
      <section className="py-24 bg-brand-red text-white relative overflow-hidden">
        <Container className="relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                没有找到你的问题？
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                可以提交企业当前遇到的事项类型和基本情况，我们会根据问题阶段、资料完整度和风险程度，判断是否需要专项服务或常年顾问支持。
              </p>
              <Link href="/contact">
                <ContactButton className="bg-white text-brand-red hover:bg-brand-beige" text="提交咨询" />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </section>
    </main>
  );
}
