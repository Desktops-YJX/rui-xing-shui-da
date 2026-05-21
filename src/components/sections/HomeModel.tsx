import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import { Scale, Calculator, Receipt } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function HomeModel() {
  return (
    <section className="py-16 md:py-24 bg-brand-dark text-white overflow-hidden">
      <Container>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-white text-center">
          法、财、税一体化：
          <br />
          企业风险管理的核心逻辑
        </h2>
        
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* 左侧：文字说明 */}
          <ScrollReveal direction="right" className="lg:w-1/3 text-center lg:text-left">
            <p className="text-xl leading-relaxed text-gray-300">
              瑞兴税达关注的不只是<strong className="text-white font-semibold">“税怎么交”</strong>，更关注交易是否真实、证据是否完整、合同是否支撑业务、财务处理是否合理、税务结果是否经得起检查。
            </p>
          </ScrollReveal>

          {/* 右侧：三角模型图示 */}
          <ScrollReveal direction="left" stagger={0.2} className="lg:w-2/3 flex flex-col gap-6 w-full max-w-2xl">
            {/* 法律合规 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-brand-gold">法律合规</h3>
                <p className="text-gray-400">合同、股权、主体资格、责任承担、争议路径</p>
              </div>
            </div>

            {/* 财务真实 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-6 hover:bg-white/10 transition-colors ml-0 lg:ml-12">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-400">财务真实</h3>
                <p className="text-gray-400">账务处理、资金流向、成本归集、报表真实性</p>
              </div>
            </div>

            {/* 税务安全 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-6 hover:bg-white/10 transition-colors ml-0 lg:ml-24">
              <div className="w-12 h-12 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0 bg-red-500/20 text-red-400">
                <Receipt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-400">税务安全</h3>
                <p className="text-gray-400">纳税义务、发票合规、税收优惠、税务风险</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
