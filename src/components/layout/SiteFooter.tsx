import Link from "next/link";
import { Container } from "./Container";
import { siteData } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 品牌信息 */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{siteData.name}</h3>
            <p className="text-gray-300 text-sm mb-2">{siteData.positioning}</p>
            <p className="text-brand-gold text-sm font-medium mb-6">{siteData.corePhilosophy}</p>
          </div>

          {/* 服务范围 */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-100">服务范围</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              税务合规、税务稽查应对、税务争议解决、企业重组、并购法财税尽调、常年法财税顾问、高净值人士税务规划。
            </p>
          </div>

          {/* 联系方式 - 成都 */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-100">成都区域</h4>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p>{siteData.contact.chengdu.address}</p>
              <p>电话：{siteData.contact.chengdu.phone}</p>
            </address>
          </div>

          {/* 联系方式 - 重庆 */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-100">重庆区域</h4>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p>{siteData.contact.chongqing.address}</p>
              <p>电话：{siteData.contact.chongqing.phone}</p>
            </address>
          </div>
        </div>

        {/* 底部声明与链接 */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left max-w-3xl leading-relaxed">
            本网站内容仅供一般信息参考，不构成正式法律、财务、税务意见。具体事项应结合事实、证据、交易背景和适用法规进行专业判断。
          </p>
          <div className="flex gap-4 shrink-0">
            <Link href="/privacy" className="hover:text-white transition-colors">隐私政策</Link>
            <Link href="/terms" className="hover:text-white transition-colors">服务条款</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
