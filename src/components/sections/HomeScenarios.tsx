import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SCENARIOS = [
  "收到税务稽查通知",
  "历史账务与发票风险",
  "并购重组前风险排查",
  "常年经营合规管理"
];

export function HomeScenarios() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* 左侧：标题与引导 */}
          <ScrollReveal direction="right" className="lg:w-1/3">
            <SectionHeader 
              title="企业常见法财税风险场景" 
              align="left"
              className="mb-8"
            />
            <p className="text-brand-gray mb-8 leading-relaxed">
              不论是突发的税务危机，还是日常的经营决策，企业在不同阶段都会面临复杂的法财税挑战。
            </p>
            <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors">
              <Link href="/services#solutions">
                查看完整服务方案 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </ScrollReveal>

          {/* 右侧：场景列表 */}
          <ScrollReveal direction="left" stagger={0.1} className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {SCENARIOS.map((scenario, idx) => (
              <div 
                key={idx} 
                className="bg-brand-beige/50 border border-brand-border rounded-xl p-6 flex items-start gap-4 hover:bg-brand-beige transition-colors"
              >
                <AlertCircle className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-brand-dark">{scenario}</h3>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
