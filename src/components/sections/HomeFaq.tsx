import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function HomeFaq() {
  // 选取指定的 4 个 FAQ
  const displayFaqs = faqs.filter(faq => 
    ["faq-1", "faq-2", "faq-5", "faq-9"].includes(faq.id)
  );

  return (
    <section className="py-24 bg-brand-beige/30">
      <Container>
        <SectionHeader title="常见问题解答" />
        
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-brand-border px-6">
            {displayFaqs.map((faq, idx) => (
              <AccordionItem key={faq.id} value={faq.id} className={idx === displayFaqs.length - 1 ? "border-0" : ""}>
                <AccordionTrigger className="text-base font-semibold hover:text-brand-red text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
