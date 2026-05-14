import { cn } from "@/lib/utils";

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
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
        {title}
      </h2>
      <div className="w-16 h-1 bg-primary mb-6" /> {/* 瑞兴税达深红强调线 */}
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-[800px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
