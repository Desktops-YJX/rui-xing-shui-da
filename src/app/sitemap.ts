import { MetadataRoute } from 'next';
import { cases } from '@/data/cases';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.example.com';
  const lastModified = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/cases',
    '/experts',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));

  const caseRoutes = cases.map((c) => ({
    url: `${baseUrl}/cases/${c.slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...caseRoutes];
}