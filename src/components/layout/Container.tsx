import { cn } from "@/lib/utils";

export function Container({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-4 md:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
