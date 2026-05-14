import { JsonLd } from "./JsonLd";
import { siteData } from "@/data/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteData.name,
    "alternateName": siteData.shortName,
    "legalName": siteData.name,
    "description": "瑞兴税达是一家聚焦法财税一体化服务的专业涉税服务机构，提供税务合规、税务稽查应对、税务争议解决、企业重组、并购法财税尽调、常年法财税顾问等服务。",
    "telephone": siteData.contact.chengdu.phone,
    "areaServed": "四川、重庆、成渝地区",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteData.contact.chengdu.address,
      "addressLocality": "成都市",
      "addressRegion": "四川省",
      "addressCountry": "CN"
    }
  };

  return <JsonLd data={data} />;
}
