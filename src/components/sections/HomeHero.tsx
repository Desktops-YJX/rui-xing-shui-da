import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ContactButton } from "@/components/ui/contact-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/site";
import { ShieldCheck } from "lucide-react";
import Beams from "@/components/ui/Beams";

const TAGS = [
  "法财税一体化",
  "税务合规",
  "税务稽查应对",
  "税务争议解决",
  "企业重组",
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-beige py-20 md:py-32">
      {/* Beams Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Beams 
          beamWidth={4}
          beamHeight={30}
          beamNumber={10}
          beamColor="#8B1E2D"
          lightColor="#ffffff"
          speed={0.5}
          noiseIntensity={1.5}
          scale={0.2}
          rotation={20}
          backgroundColor="transparent"
        />
      </div>
      <div className="absolute inset-0 z-0 opacity-30">
        <Beams 
          beamWidth={3}
          beamHeight={35}
          beamNumber={8}
          beamColor="#ffffff"
          lightColor="#8B1E2D"
          speed={0.3}
          noiseIntensity={1.2}
          scale={0.15}
          rotation={-20}
          backgroundColor="transparent"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {TAGS.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-white/50 border-brand-gold/30 text-brand-dark px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 leading-tight tracking-tight">
            以专业守护企业税务安全
            <br className="hidden md:block" />
            <span className="text-brand-red">以法税融合创造长期价值</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-black mb-10 leading-relaxed max-w-3xl font-medium px-4 md:px-0">
            {siteData.hero.subtitle}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <Button size="lg" className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-8 shadow-lg shadow-brand-red/20 transition-all hover:-translate-y-1">
                了解我们的服务
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-brand-red/30 text-brand-red hover:bg-brand-red/5 rounded-full px-8 transition-all">
                预约专家咨询
              </Button>
            </Link>
          </div>
          
          {/* Trust indicator */}
          <div className="mt-12 flex items-center gap-2 text-sm text-black font-semibold">
            <ShieldCheck className="w-5 h-5 text-brand-gold" />
            <span>专业涉税服务机构认证</span>
          </div>
        </div>
      </Container>
      
      {/* Decorative background element - geometric and formal instead of blurred blobs */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/[0.03] border-l border-brand-red/10 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-gold/[0.03] border-t border-brand-gold/10 -z-10" />
      
      {/* Top red accent line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red z-20" />
    </section>
  );
}
