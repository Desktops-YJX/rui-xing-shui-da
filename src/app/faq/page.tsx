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

export const metadata: Metadata = {
  title: "FAQ｜瑞兴税达法财税综合服务常见问题",
  description: "瑞兴税达 FAQ 解答税务合规、税务稽查应对、税务争议解决、并购重组法财税尽调、常年法财税顾问等常见问题。",
};

export default function FaqPage() {
  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "常见问题", url: "https://www.ruixingshuida.com/faq" },
  ];

  // 按分类对 FAQ 进行分组
  const categories = [
    "机构定位与服务模式",
    "税务合规与风险化解",
    "税务稽查与争议解决",
    "并购重组与投融资",
    "常年顾问与企业治理",
    "高净值人士与家族税务规划"
  ];

  const groupedFaqs = categories.map(category => ({
    category,
    items: faqs.filter(faq => faq.category === category)
  })).filter(group => group.items.length > 0);

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
      <section className="py-24 bg-brand-beige/20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {groupedFaqs.map((group, groupIdx) => (
              <div key={groupIdx} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center border-b border-brand-border pb-4">
                  <HelpCircle className="w-6 h-6 text-brand-red mr-3" />
                  {group.category}
                </h2>
                
                <div className="bg-white rounded-2xl shadow-sm border border-brand-border p-2 md:p-6">
                  <Accordion type="multiple" className="w-full" defaultValue={group.items.map(item => item.id)}>
                    {group.items.map((faq, idx) => (
                      <AccordionItem 
                        key={faq.id} 
                        value={faq.id} 
                        className={idx === group.items.length - 1 ? "border-0" : ""}
                      >
                        <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-brand-red py-4 px-2">
                          <span className="flex gap-4">
                            <span className="text-brand-gold font-bold shrink-0">Q.</span>
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-brand-gray text-base leading-relaxed px-2 pb-6">
                          <div className="flex gap-4">
                            <span className="text-brand-dark/30 font-bold shrink-0">A.</span>
                            <div>{faq.answer}</div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. 底部 CTA */}
      <section className="py-24 bg-brand-red text-white relative overflow-hidden">
        <Container className="relative z-10">
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
        </Container>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </section>
    </main>
  );
}
