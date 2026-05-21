"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MAIN_NAV } from "./SiteHeader";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">打开菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l-brand-border">
        <SheetHeader className="text-left mb-8 mt-4">
          <SheetTitle className="flex flex-col gap-0.5">
            <span className="text-xl font-bold text-brand-red">瑞兴税达</span>
            <span className="text-[10px] text-brand-red/80 font-medium tracking-wider">
              RUIXING SHUIDA
            </span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-brand-red",
                    isActive ? "text-brand-red" : "text-brand-dark"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 pt-6 border-t border-brand-border">
            <Button asChild className="w-full rounded-full bg-brand-red hover:bg-brand-red/90 text-white border-none" size="lg">
              <Link href="/contact" onClick={() => setOpen(false)}>
                预约咨询
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
