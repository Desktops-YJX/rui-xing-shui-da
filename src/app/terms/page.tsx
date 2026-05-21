import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "服务条款｜瑞兴税达",
  description: "四川瑞兴税达税务师事务所有限公司官方网站服务条款与免责声明。",
};

export default function TermsPage() {
  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "服务条款", url: "https://www.ruixingshuida.com/terms" },
  ];

  return (
    <main className="flex flex-col w-full bg-brand-beige/20 min-h-[calc(100vh-80px)]">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      <section className="py-24">
        <Container>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-brand-border p-8 md:p-16">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-10 pb-6 border-b border-brand-border">
                服务条款
              </h1>
              
              <div className="prose prose-lg max-w-none text-brand-gray prose-headings:text-brand-dark prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-li:my-1">
                <p className="lead text-xl text-brand-dark font-medium mb-8">
                  用户访问和使用本网站，即表示已了解本网站内容仅供一般信息参考。本网站展示的文章、问答、案例和服务介绍，不构成正式法律、财务、税务意见，也不构成对任何事项处理结果的承诺。
                </p>

                <h2>服务边界</h2>
                <ul>
                  <li>本网站内容不能替代正式专业意见</li>
                  <li>具体事项需要结合事实、证据、合同、账务、税务资料和适用法规进行判断</li>
                  <li>案例内容均为脱敏整理，仅用于展示服务思路</li>
                  <li>瑞兴税达不承诺任何固定处理结果，也不承诺一定减税、免罚或撤销处理决定</li>
                </ul>

                <h2>咨询说明</h2>
                <div className="bg-brand-beige/50 p-6 rounded-xl border border-brand-border not-prose mt-6">
                  <p className="text-brand-dark">
                    用户通过表单提交信息后，双方是否建立正式服务关系，应以双方后续签署的书面协议 or 正式委托文件为准。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
