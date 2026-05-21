import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, ShieldAlert, Users, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ADVANTAGES = [
  {
    title: "法财税一体化",
    description: "从法律合规、财务真实性、税务安全性三个维度共同判断，避免企业只处理单一问题却留下综合风险。",
    icon: Scale
  },
  {
    title: "复杂涉税事项经验",
    description: "聚焦税务稽查、税务危机、行政复议、行政诉讼、重大交易税务风险等高复杂度事项。",
    icon: ShieldAlert
  },
  {
    title: "复合型专业团队",
    description: "整合税务、财务、法律等专业能力，为企业提供从诊断到落地的系统支持。",
    icon: Users
  },
  {
    title: "企业全周期服务",
    description: "覆盖合规体检、交易结构设计、并购重组、争议解决、常年顾问和财富安排。",
    icon: Clock
  }
];

export function HomeAdvantages() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <Container>
        <ScrollReveal>
          <SectionHeader 
            title="为什么选择瑞兴税达？" 
            subtitle="立足川渝，以“税务师+会计师+律师”的专业组合，为您提供高合规、高安全性的法财税解决方案。"
          />
        </ScrollReveal>
        
        <ScrollReveal 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-12"
          stagger={0.15}
          distance={30}
        >
          {ADVANTAGES.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-brand-border/60 shadow-sm hover:shadow-lg transition-all duration-300 group bg-white">
                {/* 左上角深红标识 */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="flex flex-row items-center gap-4 pb-2 pl-8">
                  <div className="w-12 h-12 rounded-xl bg-brand-beige flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 text-brand-gold shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-dark">{adv.title}</CardTitle>
                </CardHeader>
                <CardContent className="pl-8">
                  <p className="text-brand-gray leading-relaxed pt-2">
                    {adv.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </ScrollReveal>
      </Container>
    </section>
  );
}
