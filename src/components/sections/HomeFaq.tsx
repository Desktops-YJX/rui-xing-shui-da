import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function HomeFaq() {
  return (
    <section className="py-24 bg-brand-beige/30">
      <Container>
        <SectionHeader title="常见问题解答" />
        
        <ScrollReveal className="max-w-3xl mx-auto mt-8" distance={30}>
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.slice(0, 3).map((category, catIdx) => (
              <div key={catIdx} className="space-y-4">
                <h4 className="font-semibold text-brand-dark px-2">{category.category}</h4>
                {category.items.slice(0, 2).map((faq, idx) => (
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
                ))}
              </div>
            ))}
          </Accordion>
        </ScrollReveal>
      </Container>
    </section>
  );
}
