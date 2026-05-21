import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Shield, Gavel, Building2, Headphones, Landmark } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SERVICES_OVERVIEW = [
  {
    id: "tax-compliance",
    title: "税务合规与风险体检",
    desc: "系统识别收入、成本、发票、税收优惠、关联交易等涉税风险。",
    icon: FileCheck
  },
  {
    id: "tax-audit-defense",
    title: "税务稽查应对",
    desc: "协助企业处理税务检查、稽查、约谈、处罚告知等事项。",
    icon: Shield
  },
  {
    id: "tax-dispute-resolution",
    title: "税务争议解决",
    desc: "围绕事实认定、证据组织、法律适用和程序路径提供争议解决支持。",
    icon: Gavel
  },
  {
    id: "m-and-a-tax",
    title: "企业重组与并购法财税",
    desc: "为股权转让、资产处置、并购重组、融资尽调提供法财税综合判断。",
    icon: Building2
  },
  {
    id: "annual-advisory",
    title: "常年法财税顾问",
    desc: "为企业日常合同、账务、发票、税务事项提供持续风险管理。",
    icon: Headphones
  },
  {
    id: "wealth-planning",
    title: "高净值人士与家族税务规划",
    desc: "围绕股权、分红、婚姻家事、财富传承进行税务合规安排。",
    icon: Landmark
  }
];

export function HomeServices() {
  return (
    <section className="py-16 md:py-24 bg-brand-beige/50 overflow-hidden">
      <Container>
        <ScrollReveal>
          <SectionHeader 
            title="核心服务中心" 
            subtitle="立足税务合规，融合法律与财务视角，提供从预防、应对到化解的一体化专业服务。"
          />
        </ScrollReveal>
        
        <ScrollReveal 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-12"
          stagger={0.1}
          distance={20}
        >
          {SERVICES_OVERVIEW.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="flex flex-col h-full border-none shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-brand-gray">
                    {service.desc}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-brand-red hover:text-brand-red hover:bg-brand-red/5 -ml-4">
                    <Link href={`/services#${service.id}`}>
                      查看详情 <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </ScrollReveal>
      </Container>
    </section>
  );
}
