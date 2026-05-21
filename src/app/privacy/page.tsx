import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "隐私政策｜瑞兴税达",
  description: "四川瑞兴税达税务师事务所有限公司隐私政策，说明我们如何收集、使用和保护您在咨询服务过程中提交的信息。",
};

export default function PrivacyPage() {
  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "隐私政策", url: "https://www.ruixingshuida.com/privacy" },
  ];

  return (
    <main className="flex flex-col w-full bg-brand-beige/20 min-h-[calc(100vh-80px)]">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      <section className="py-24">
        <Container>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-brand-border p-8 md:p-16">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-10 pb-6 border-b border-brand-border">
                隐私政策
              </h1>
              
              <div className="prose prose-lg max-w-none text-brand-gray prose-headings:text-brand-dark prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-li:my-1">
                <p className="lead text-xl text-brand-dark font-medium mb-8">
                  四川瑞兴税达税务师事务所有限公司重视用户信息保护。用户通过本网站提交姓名、公司名称、联系电话、所在城市、咨询事项类型和问题简述等信息时，我们仅将相关信息用于服务沟通、事项初步判断和后续联系。
                </p>

                <h2>信息使用范围</h2>
                <ul>
                  <li>用于联系用户并了解咨询事项</li>
                  <li>用于判断事项类型、紧急程度和服务需求</li>
                  <li>用于内部服务记录和沟通管理</li>
                </ul>

                <h2>信息保护</h2>
                <p>
                  未经用户授权，我们不会将用户提交的信息对外披露，但法律法规另有规定或依法应监管机关、司法机关要求提供的除外。
                </p>

                <h2>用户提醒</h2>
                <div className="bg-red-50 text-brand-red p-6 rounded-xl border border-red-100 not-prose mt-6">
                  <p className="font-medium">
                    请勿在表单中提交与事项无关的敏感个人信息。如事项涉及重大争议、税务稽查、刑事风险或商业秘密，建议通过正式沟通渠道提交资料。
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
