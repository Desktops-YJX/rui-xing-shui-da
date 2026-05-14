import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ContactButton } from "@/components/ui/contact-button";

export function HomeCta() {
  return (
    <section className="py-24 bg-brand-red text-white relative overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            正在面对税务检查、账务清理、股权调整、并购重组或重大交易决策？
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            建议在正式提交材料、签署协议或作出税务处理前，先进行一次法财税综合评估。
          </p>
          <Link href="/contact">
            <ContactButton className="bg-white text-brand-red hover:bg-brand-beige" />
          </Link>
        </div>
      </Container>
      
      {/* Decorative background pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
    </section>
  );
}
