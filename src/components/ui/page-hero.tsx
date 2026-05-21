import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import ScrollFloat from "./ScrollFloat";

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section className={cn("bg-brand-beige py-16 md:py-24 border-b border-brand-border", className)}>
      <Container>
        <div className="max-w-3xl">
          <ScrollFloat 
            as="h1"
            containerClassName="mb-6"
            textClassName="text-4xl md:text-5xl font-bold text-brand-dark"
            animationDuration={0.8}
            stagger={0.03}
            scrollStart="top bottom"
            scrub={false}
          >
            {title}
          </ScrollFloat>
          <div className="w-20 h-1.5 bg-brand-red mb-6" />
          {description && (
            <p className="text-xl text-brand-gray leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
