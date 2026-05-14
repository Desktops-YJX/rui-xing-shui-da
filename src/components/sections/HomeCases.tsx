import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { cases } from "@/data/cases";

export function HomeCases() {
  // 只展示前3个案例
  const displayCases = cases.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader title="典型案例" className="mb-0" align="left" />
          <Button asChild variant="outline" className="hidden md:inline-flex mt-4 md:mt-0">
            <Link href="/cases">查看全部案例 <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayCases.map((c) => (
            <Card key={c.slug} className="border-brand-border hover:border-brand-red/30 transition-colors shadow-sm">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded bg-brand-beige text-brand-gold flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg leading-snug line-clamp-2">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-brand-gray line-clamp-3 mb-4">
                  {c.background}
                </p>
                <Link 
                  href={`/cases/${c.slug}`}
                  className="text-brand-red text-sm font-medium hover:underline inline-flex items-center"
                >
                  阅读案例详析 <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
          <Button asChild variant="outline" className="w-full">
            <Link href="/cases">查看全部案例</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
