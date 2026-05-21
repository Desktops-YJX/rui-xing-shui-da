import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cases } from "@/data/cases";
import { Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function HomeCases() {
  // 只展示前3个案例
  const displayCases = cases.slice(0, 3);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader 
            title="经典案例" 
            subtitle="以下案例均为脱敏整理，主要用于展示我们在复杂法财税事项中的处理思路与专业能力。"
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Button asChild variant="outline" className="mt-6 md:mt-0 border-brand-border text-brand-dark hover:text-brand-red">
            <Link href="/cases">查看全部案例</Link>
          </Button>
        </div>
        
        <ScrollReveal 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          stagger={0.15}
          distance={30}
        >
          {displayCases.map((c) => (
            <Card key={c.slug} className="flex flex-col h-full border-brand-border hover:border-brand-red/30 hover:shadow-md transition-all group">
              <CardHeader className="pb-4">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-brand-beige text-brand-dark hover:bg-brand-beige/80">
                    <Briefcase className="w-3 h-3 mr-1" />
                    {c.industry}
                  </Badge>
                  <Badge variant="outline" className="border-brand-red/30 text-brand-red">
                    {c.riskType}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-snug group-hover:text-brand-red transition-colors">
                  {c.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-brand-dark mb-1">核心问题</h5>
                  <p className="text-sm text-brand-gray">{c.issue}</p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-brand-dark mb-1">服务工作摘要</h5>
                  <p className="text-sm text-brand-gray">{c.work}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </ScrollReveal>
        
        <div className="mt-8 md:hidden flex justify-center">
          <Button asChild variant="outline" className="w-full">
            <Link href="/cases">查看全部案例</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
