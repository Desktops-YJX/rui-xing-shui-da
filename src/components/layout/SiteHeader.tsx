"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";

export const MAIN_NAV = [
  { title: "首页", href: "/" },
  { title: "关于我们", href: "/about" },
  { title: "服务中心", href: "/services" },
  { title: "案例中心", href: "/cases" },
  { title: "专家团队", href: "/experts" },
  { title: "FAQ", href: "/faq" },
  { title: "联系我们", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col justify-center items-start gap-0.5">
            <span className="text-xl md:text-2xl font-bold text-brand-red leading-none">瑞兴税达</span>
            <span className="text-[10px] md:text-xs text-brand-red/80 font-medium tracking-wider leading-none">
              RUIXING SHUIDA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-red",
                    isActive ? "text-brand-red font-semibold" : "text-brand-dark"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex rounded-full px-6">
              <Link href="/contact">预约咨询</Link>
            </Button>
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
