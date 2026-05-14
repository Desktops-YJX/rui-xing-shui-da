import { JsonLd } from "./JsonLd";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const itemListElements = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElements
  };

  return <JsonLd data={data} />;
}
