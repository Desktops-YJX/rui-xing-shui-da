import { HomeHero } from "@/components/sections/HomeHero";
import { HomeAdvantages } from "@/components/sections/HomeAdvantages";
import { HomeServices } from "@/components/sections/HomeServices";
import { HomeModel } from "@/components/sections/HomeModel";
import { HomeScenarios } from "@/components/sections/HomeScenarios";
import { HomeExperts } from "@/components/sections/HomeExperts";
import { HomeCases } from "@/components/sections/HomeCases";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { HomeCta } from "@/components/sections/HomeCta";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HomeHero />
      <HomeAdvantages />
      <HomeServices />
      <HomeModel />
      <HomeScenarios />
      <HomeExperts />
      <HomeCases />
      <HomeFaq />
      <HomeCta />
    </main>
  );
}
