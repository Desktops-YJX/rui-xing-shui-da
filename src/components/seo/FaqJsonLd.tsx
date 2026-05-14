import { JsonLd } from "./JsonLd";
import { faqs } from "@/data/faqs";

export function FaqJsonLd() {
  const mainEntity = faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };

  return <JsonLd data={data} />;
}
