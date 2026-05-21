import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LogoLoop from "@/components/ui/LogoLoop";
import { siteData } from "@/data/site";

export function HomePartners() {
  const partners = siteData.partners.map(p => ({
    node: (
      <div className="px-3 py-1 bg-white border border-brand-border/50 rounded-lg shadow-sm whitespace-nowrap">
        <span className="font-bold text-brand-dark text-base">{p.name}</span>
      </div>
    )
  }));

  const clients = siteData.clients.map(c => ({
    node: (
      <div className="px-3 py-1 bg-brand-beige/20 border border-brand-border/50 rounded-lg whitespace-nowrap">
        <span className="font-medium text-brand-gray text-base">{c.name}</span>
      </div>
    )
  }));

  return (
    <section className="py-24 bg-background border-t border-brand-border/30 overflow-hidden">
      <Container>
        <ScrollReveal>
          <SectionHeader 
            title="权威合作单位与服务客户" 
            subtitle="累计服务企业超 1000 家，与各级税务系统、大型国企央企、头部房企及上市公司保持长期深度的专业合作关系。"
          />
        </ScrollReveal>
        
        <div className="mt-12 space-y-8">
          {/* 第一行：合作伙伴 */}
          <ScrollReveal direction="left" distance={40}>
            <div className="relative">
              <LogoLoop 
                logos={partners}
                speed={40}
                direction="left"
                logoHeight={28}
                gap={16}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#FFF9F9" 
              />
            </div>
          </ScrollReveal>

          {/* 第二行：服务客户 */}
          <ScrollReveal direction="right" distance={40}>
            <div className="relative">
              <LogoLoop 
                logos={clients}
                speed={30}
                direction="right"
                logoHeight={28}
                gap={16}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#FFF9F9"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
