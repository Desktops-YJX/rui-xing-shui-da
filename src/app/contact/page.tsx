import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { siteData } from "@/data/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "联系我们｜瑞兴税达预约咨询",
  description: "提交您的法财税问题，瑞兴税达专家团队将为您进行初步评估。提供成都和重庆两地联系方式。",
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "联系我们", url: "https://www.ruixingshuida.com/contact" },
  ];

  return (
    <main className="flex flex-col w-full">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* 1. 页面 Hero */}
      <PageHero 
        title="联系我们" 
        description="对于税务稽查、重大交易、股权调整、并购重组和历史遗留问题，建议尽早进行专业评估。请留下您的基本信息和事项简述，我们将尽快与您取得联系。" 
      />

      <section className="py-24 bg-brand-beige/20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* 左侧：联系方式 */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6 border-b border-brand-border pb-4">成都总部</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-brand-gray">
                    <MapPin className="w-6 h-6 text-brand-red shrink-0" />
                    <span>{siteData.contact.chengdu.address}</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-gray">
                    <Phone className="w-6 h-6 text-brand-red shrink-0" />
                    <span className="font-medium text-brand-dark">{siteData.contact.chengdu.phone}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6 border-b border-brand-border pb-4">重庆分部</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-brand-gray">
                    <MapPin className="w-6 h-6 text-brand-red shrink-0" />
                    <span>{siteData.contact.chongqing.address}</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-gray">
                    <Phone className="w-6 h-6 text-brand-red shrink-0" />
                    <span className="font-medium text-brand-dark">{siteData.contact.chongqing.phone}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-beige/50 rounded-xl p-6 border border-brand-border">
                <h3 className="flex items-center text-lg font-bold text-brand-dark mb-4">
                  <Clock className="w-5 h-5 text-brand-gold mr-2" />
                  工作时间
                </h3>
                <p className="text-brand-gray">周一至周五：09:00 - 18:00</p>
                <p className="text-sm text-brand-gray/80 mt-2">（法定节假日除外。紧急事项请直接致电。）</p>
              </div>
            </div>

            {/* 右侧：咨询表单 */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-sm border border-brand-border p-8 md:p-12">
                <h2 className="text-2xl font-bold text-brand-dark mb-8">在线预约咨询</h2>
                
                {/* 注意：表单字段在移动端单列，大屏双列 */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-brand-dark">姓名 <span className="text-brand-red">*</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold bg-brand-beige/10"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-brand-dark">联系电话 <span className="text-brand-red">*</span></label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold bg-brand-beige/10"
                        placeholder="您的手机号码"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-brand-dark">公司名称</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold bg-brand-beige/10"
                        placeholder="您所在的企业名称（选填）"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-brand-dark">咨询事项类型 <span className="text-brand-red">*</span></label>
                      <select 
                        id="service" 
                        name="service" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold bg-brand-beige/10"
                      >
                        <option value="">请选择咨询类型...</option>
                        <option value="税务合规与风险体检">税务合规与风险体检</option>
                        <option value="税务稽查应对">税务稽查应对</option>
                        <option value="税务争议解决">税务争议解决</option>
                        <option value="企业重组与并购法财税">企业重组与并购法财税</option>
                        <option value="常年法财税顾问">常年法财税顾问</option>
                        <option value="高净值人士税务规划">高净值人士与家族税务规划</option>
                        <option value="其他">其他事项</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-brand-dark">问题简述 <span className="text-brand-red">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold bg-brand-beige/10 resize-none"
                      placeholder="请简要描述您遇到的法财税问题或所处的业务阶段..."
                    ></textarea>
                  </div>

                  <div className="text-xs text-brand-gray leading-relaxed bg-brand-beige/30 p-4 rounded-lg">
                    请勿在表单中提交与事项无关的敏感个人信息或商业秘密。点击提交即表示您同意我们的 <a href="/privacy" className="text-brand-red hover:underline">隐私政策</a>。
                  </div>

                  <Button type="submit" className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 rounded-[16px] text-base">
                    提交咨询信息
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
