import { cn } from "@/lib/utils";
import ScrollFloat from "./ScrollFloat";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, align = "center", className, ...props }: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "flex flex-col mb-12", 
        align === "center" ? "items-center text-center" : "items-start text-left", 
        className
      )} 
      {...props}
    >
      <ScrollFloat 
        containerClassName="mb-4"
        textClassName="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight"
        animationDuration={0.8}
        stagger={0.02}
        scrollStart="top bottom-=5%"
        scrub={false}
      >
        {title}
      </ScrollFloat>
      <div className="w-16 h-1 bg-brand-red mb-6" /> {/* 瑞兴税达深红强调线 */}
      {subtitle && (
        <p className="text-lg text-brand-gray max-w-[800px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
