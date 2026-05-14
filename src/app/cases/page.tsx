import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cases } from "@/data/cases";
import { ArrowRight, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "案例中心｜瑞兴税达法财税服务案例",
  description: "查看瑞兴税达在税务合规、税务稽查应对、税务争议解决、房地产与建筑企业税务风险、国企重大项目税务管理等方面的脱敏案例。",
};

export default function CasesPage() {
  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "案例中心", url: "https://www.ruixingshuida.com/cases" },
  ];

  return (
    <main className="flex flex-col w-full">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* 1. 页面 Hero */}
      <PageHero 
        title="案例中心" 
        description="以下案例均为脱敏整理，主要用于展示瑞兴税达在税务合规、税务稽查应对、税务争议解决、企业重组和法财税综合服务中的处理思路。具体项目结果会因事实、证据、程序阶段和适用法规不同而存在差异。" 
      />

      {/* 2. 案例列表 */}
      <section className="py-24 bg-brand-beige/20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c) => (
              <Card key={c.slug} className="flex flex-col h-full border-brand-border hover:border-brand-red/30 hover:shadow-md transition-all group bg-white">
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
                    <p className="text-sm text-brand-gray line-clamp-3">{c.work}</p>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 border-t border-brand-border/50">
                  <Button asChild variant="ghost" className="w-full text-brand-red hover:text-white hover:bg-brand-red">
                    <Link href={`/cases/${c.slug}`} className="flex items-center justify-center">
                      查看案例详情 <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
