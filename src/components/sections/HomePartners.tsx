import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";

export function HomePartners() {
  // Mock data for partners, replace with real logos when available
  const partners = [
    { name: "国家税务总局重庆市税务局", category: "政府及税务系统" },
    { name: "万科重庆", category: "头部房企" },
    { name: "绿地重庆", category: "头部房企" },
    { name: "重庆化医集团", category: "大型国企央企" },
    { name: "重庆能源集团", category: "大型国企央企" },
    { name: "重庆中烟工业", category: "大型国企央企" },
    { name: "中石油昆仑燃气", category: "大型国企央企" },
    { name: "北大医药", category: "上市公司" },
    { name: "国药控股重庆", category: "上市公司" },
    { name: "融创重庆", category: "头部房企" },
  ];

  return (
    <section className="py-24 bg-white border-t border-brand-border/30">
      <Container>
        <SectionHeader 
          title="权威合作单位与服务客户" 
          subtitle="累计服务企业超 1000 家，与各级税务系统、大型国企央企、头部房企及上市公司保持长期深度的专业合作关系。"
        />
        
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="px-6 py-4 bg-brand-beige/20 border border-brand-border/50 rounded-xl flex items-center justify-center text-center hover:bg-white hover:border-brand-red/30 hover:shadow-sm transition-all min-w-[140px]"
            >
              <span className="font-medium text-brand-dark text-sm md:text-base">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
