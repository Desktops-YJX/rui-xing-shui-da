import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/page-hero";
import PixelCard from "@/components/ui/PixelCard";

const jobLink =
  "https://www.zhipin.com/web/geek/jobs?city=101040100&query=%E5%9B%9B%E5%B7%9D%E7%91%9E%E5%85%B4%E7%A8%8E%E8%BE%BE%E7%A8%8E%E5%8A%A1%E5%B8%88%E4%BA%8B%E5%8A%A1%E6%89%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8";

const recruitmentLinks = [
  {
    title: "成都区域",
    description: "点击查看瑞兴税达当前热招岗位信息。",
    href: jobLink,
  },
];

export const metadata: Metadata = {
  title: "招聘岗位｜瑞兴税达招聘信息",
  description:
    "查看瑞兴税达最新招聘信息。围绕金税四期行业机遇，搭建全周期财税成长平台，诚邀有志财税从业者加入。",
};

export default function CareersPage() {
  const breadcrumbItems = [
    { name: "首页", url: "https://www.ruixingshuida.com/" },
    { name: "招聘岗位", url: "https://www.ruixingshuida.com/careers" },
  ];

  return (
    <main className="flex flex-col w-full">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      <PageHero
        title="招聘岗位"
        description="精进，深耕，赋能，致远。紧抓金税四期行业发展红利，搭建全周期财税成长平台，诚邀有志财税从业者并肩掘金合规新机遇。"
      />

      <section className="bg-background py-8 md:py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red md:text-sm md:tracking-[0.22em]">
                Join Us
              </p>
              <h2 className="text-2xl font-bold leading-tight text-brand-dark md:text-4xl">
                查看瑞兴税达热招全岗位
              </h2>
              <p className="text-sm leading-7 text-brand-gray md:text-base md:leading-8">
                当前岗位信息统一以招聘平台页面为准。你可以通过下方入口查看岗位职责、任职要求、工作地点与投递方式。
              </p>
            </div>

            <div className="mt-8 space-y-5 md:mt-10">
              <div className="rounded-2xl border border-brand-border bg-brand-beige/40 px-4 py-3 md:px-6 md:py-4">
                <p className="text-sm leading-7 text-brand-gray md:text-base">
                  点击以下链接，查看瑞兴税达正在招聘的职位
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {recruitmentLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-[96px] w-full max-w-full sm:max-w-sm md:h-[108px]"
                  >
                    <PixelCard
                      variant="pink"
                      noFocus
                      className="h-full w-full"
                      style={{ width: "100%", aspectRatio: "auto" }}
                    >
                      <div className="flex h-full items-center justify-between gap-3 px-3 md:px-4">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold uppercase tracking-[0.08em] text-brand-red md:tracking-[0.12em]">
                            {item.title}
                          </p>
                          <p className="truncate text-xs leading-4 text-brand-gray">{item.description}</p>
                        </div>
                        <p className="shrink-0 text-xs font-medium text-brand-red">点击查看</p>
                      </div>
                    </PixelCard>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
