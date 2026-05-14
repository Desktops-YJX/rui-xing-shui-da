import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { experts } from "@/data/experts";

export function HomeExperts() {
  const expert = experts[0]; // 袁道平

  return (
    <section className="py-24 bg-brand-beige">
      <Container>
        <SectionHeader title="核心专家支持" />
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* 专家照片占位 / 图标 */}
            <div className="md:w-1/3 bg-brand-dark flex flex-col items-center justify-center p-8 text-white">
              <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mb-6 border-2 border-brand-gold/30">
                <span className="text-4xl font-bold text-brand-gold">{expert.name[0]}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{expert.name}</h3>
              <p className="text-brand-gold/80 text-sm text-center">资深法财税专家</p>
            </div>
            
            {/* 专家介绍 */}
            <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-6">
                {expert.titles.map((title, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-brand-beige text-brand-dark">
                    {title}
                  </Badge>
                ))}
              </div>
              
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-4xl text-brand-gold/20 font-serif">"</span>
                <p className="text-brand-gray leading-relaxed relative z-10 pl-4 border-l-2 border-brand-gold/30">
                  {expert.description}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-brand-border">
                <Button asChild variant="link" className="text-brand-red p-0 hover:no-underline hover:text-brand-red/80 group">
                  <Link href="/experts" className="flex items-center">
                    查看专家团队 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
