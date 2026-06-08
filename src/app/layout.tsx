import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";

const baseUrl = 'https://www.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "四川瑞兴税达税务师事务所｜法财税一体化综合服务机构",
    template: "%s｜瑞兴税达",
  },
  description: "四川瑞兴税达税务师事务所有限公司聚焦税务合规、税务稽查应对、税务争议解决、企业重组、并购法财税尽调、常年法财税顾问与高净值人士税务规划，为企业和企业家提供法财税一体化综合服务。",
  keywords: "瑞兴税达, 四川税务师事务所, 成都税务师事务所, 税务合规, 税务稽查应对, 税务争议解决, 法财税一体化, 企业重组税务, 并购法财税尽调, 常年法财税顾问",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldLoadAnalytics = process.env.NODE_ENV === "production";

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col text-brand-dark">
        <OrganizationJsonLd />
        <SiteHeader />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <SiteFooter />
      </body>
      {shouldLoadAnalytics ? <GoogleAnalytics gaId="G-0N9S80E6FF" /> : null}
    </html>
  );
}
