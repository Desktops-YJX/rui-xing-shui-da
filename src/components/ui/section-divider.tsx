import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("w-full flex justify-center py-8", className)}>
      <div className="w-24 h-1 bg-brand-gold opacity-50" />
    </div>
  );
}
