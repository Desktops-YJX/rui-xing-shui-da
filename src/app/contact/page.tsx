import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { siteData } from "@/data/site";
import { MapPin, Phone, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
        description="对于税务稽查、重大交易、股权调整、并购重组和历史遗留问题，建议尽早进行专业评估。您可以通过以下方式与我们取得联系。" 
      />

      <section className="py-16 md:py-24 bg-brand-beige/20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* 成都区域 */}
            <ScrollReveal direction="up">
              <div className="h-full bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden flex flex-col">
                <div className="relative w-full aspect-square bg-gray-50/50 p-6 flex items-center justify-center border-b border-brand-border/50">
                  <div className="relative w-full h-full">
                    <Image 
                      src={siteData.contact.chengdu.image!} 
                      alt="成都区域微信二维码" 
                      fill 
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4 md:mb-6 border-b border-brand-border pb-4">成都区域</h2>
                  <ul className="space-y-4 md:space-y-6">
                    <li className="flex items-start gap-4 text-brand-gray text-sm md:text-base">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-red shrink-0" />
                      <span>{siteData.contact.chengdu.address}</span>
                    </li>
                    <li className="flex items-center gap-4 text-brand-gray text-sm md:text-base">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-red shrink-0" />
                      <span className="font-medium text-brand-dark">{siteData.contact.chengdu.phone}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* 重庆区域 */}
            <ScrollReveal direction="up" stagger={0.1}>
              <div className="h-full bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden flex flex-col">
                <div className="relative w-full aspect-square bg-gray-50/50 p-6 flex items-center justify-center border-b border-brand-border/50">
                  <div className="relative w-full h-full">
                    <Image 
                      src={siteData.contact.chongqing.image!} 
                      alt="重庆区域微信二维码" 
                      fill 
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4 md:mb-6 border-b border-brand-border pb-4">重庆区域</h2>
                  <ul className="space-y-4 md:space-y-6">
                    <li className="flex items-start gap-4 text-brand-gray text-sm md:text-base">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-red shrink-0" />
                      <span>{siteData.contact.chongqing.address}</span>
                    </li>
                    <li className="flex items-center gap-4 text-brand-gray text-sm md:text-base">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-red shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-medium text-brand-dark">{siteData.contact.chongqing.phone}</span>
                        <span className="text-xs text-brand-gray/80 mt-1">（微信同号：{siteData.contact.chongqing.wechat}）</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* 服务时间 */}
            <ScrollReveal direction="up" stagger={0.2}>
              <div className="h-full bg-brand-beige/50 rounded-2xl p-6 md:p-8 border border-brand-border flex flex-col justify-center text-center">
                <div className="w-16 h-16 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-brand-gold" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">
                  服务时间
                </h2>
                <p className="text-brand-dark font-bold text-3xl mb-4">{siteData.contact.businessHours}</p>
                <p className="text-sm text-brand-gray/80 leading-relaxed max-w-xs mx-auto">
                  全天候为您提供专业支持。<br/>紧急事项请直接致电或扫码添加微信咨询，我们将第一时间响应您的需求。
                </p>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>
    </main>
  );
}
