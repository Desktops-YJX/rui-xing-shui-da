import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6" />
          {description && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
