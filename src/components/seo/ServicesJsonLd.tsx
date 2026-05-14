import { JsonLd } from "./JsonLd";
import { services } from "@/data/services";

export function ServicesJsonLd({ baseUrl }: { baseUrl: string }) {
  const itemListElements = services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Service",
      "name": service.title,
      "description": service.summary,
      "url": `${baseUrl}/services#${service.id}`,
      "provider": {
        "@type": "ProfessionalService",
        "name": "四川瑞兴税达税务师事务所有限公司"
      }
    }
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": itemListElements
  };

  return <JsonLd data={data} />;
}
