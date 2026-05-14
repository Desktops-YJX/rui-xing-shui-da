import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ContactButton } from "@/components/ui/contact-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cases } from "@/data/cases";
import { ArrowLeft, Briefcase, FileText, Target, ShieldAlert, CheckCircle2, Lightbulb } from "lucide-react";

export function generateStaticParams() {
  return cases.map((c) => ({
    slug: c.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const caseData = cases.find((c) => c.slug === params.slug);
  
  if (!caseData) {
    return {
      title: "案例未找到｜瑞兴税达",
    };
  }

  return {
    title: `${caseData.title}｜瑞兴税达典型案例`,
    description: `查看瑞兴税达关于“${caseData.title}”的脱敏案例分析，了解法财税一体化服务在${caseData.industry}行业中的应用。`,
  };
}

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const caseData = cases.find((c) => c.slug === params.slug);

  if (!caseData) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "案例中心", url: "https://www.ruixingshuida.com/cases" },
    { name: caseData.title, url: `https://www.ruixingshuida.com/cases/${caseData.slug}` },
  ];

  return (
    <main className="flex flex-col w-full bg-brand-beige/10">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* 1. 案例 Hero */}
      <section className="bg-brand-dark text-white pt-24 pb-32 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="outline" className="border-brand-gold text-brand-gold bg-brand-gold/10">
                <Briefcase className="w-3 h-3 mr-1" />
                {caseData.industry}
              </Badge>
              <Badge variant="secondary" className="bg-brand-red text-white hover:bg-brand-red border-none">
                {caseData.riskType}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              {caseData.title}
            </h1>
            <Button asChild variant="link" className="text-gray-400 hover:text-white">
              <Link href="/cases" className="flex items-center">
                <ArrowLeft className="mr-2 w-4 h-4" /> 返回案例中心
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. 案例详情正文 */}
      <section className="py-12 -mt-20 relative z-20">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden">
            <div className="p-8 md:p-12 space-y-12">
              
              {/* 背景与问题 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-brand-beige/30 rounded-xl p-6 border border-brand-border">
                  <h3 className="flex items-center text-lg font-bold text-brand-dark mb-4">
                    <FileText className="w-5 h-5 text-brand-gold mr-2" />
                    项目背景
                  </h3>
                  <p className="text-brand-gray leading-relaxed">{caseData.background}</p>
                </div>
                <div className="bg-red-50/50 rounded-xl p-6 border border-red-100">
                  <h3 className="flex items-center text-lg font-bold text-brand-red mb-4">
                    <Target className="w-5 h-5 text-brand-red mr-2" />
                    核心问题
                  </h3>
                  <p className="text-brand-dark leading-relaxed font-medium">{caseData.issue}</p>
                </div>
              </div>

              <hr className="border-brand-border" />

              {/* 服务工作 */}
              <div>
                <h3 className="flex items-center text-xl font-bold text-brand-dark mb-6">
                  <ShieldAlert className="w-6 h-6 text-brand-gold mr-3" />
                  服务工作
                </h3>
                <p className="text-brand-gray text-lg leading-relaxed pl-9 border-l-2 border-brand-gold/30">
                  {caseData.work}
                </p>
              </div>

              {/* 处理结果 */}
              <div>
                <h3 className="flex items-center text-xl font-bold text-brand-dark mb-6">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mr-3" />
                  处理结果
                </h3>
                <div className="bg-green-50/50 rounded-xl p-6 border border-green-100 pl-9">
                  <p className="text-green-800 text-lg leading-relaxed">
                    {caseData.result}
                  </p>
                </div>
              </div>

              <hr className="border-brand-border" />

              {/* 专业提示 */}
              <div className="bg-brand-dark text-white rounded-xl p-8">
                <h3 className="flex items-center text-lg font-bold text-brand-gold mb-4">
                  <Lightbulb className="w-5 h-5 text-brand-gold mr-2" />
                  专业提示
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {caseData.note}
                </p>
              </div>

            </div>

            {/* 免责声明 */}
            <div className="bg-brand-beige/50 p-6 text-center text-sm text-brand-gray border-t border-brand-border">
              本案例为脱敏整理，仅用于说明服务思路，不代表对任何个案结果的承诺。具体事项应结合事实、证据、程序阶段和适用法规进行专业判断。
            </div>
          </div>
        </Container>
      </section>

      {/* 3. 底部 CTA */}
      <section className="py-24 bg-white text-center">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            您的企业也面临类似的法财税挑战？
          </h2>
          <p className="text-brand-gray mb-10 max-w-2xl mx-auto text-lg">
            通过法财税一体化视角的综合评估，在合法合规前提下实现风险可控、决策清晰。
          </p>
          <Link href="/contact">
            <ContactButton />
          </Link>
        </Container>
      </section>

    </main>
  );
}
