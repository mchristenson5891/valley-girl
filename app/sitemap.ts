import { MetadataRoute } from 'next'
import { stylists } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://valleygirlsalon.com'
  
  // Static pages
  const staticPages = [
    '',
    '/stylists',
    '/services',
    '/gallery',
    '/blog',
    '/shop',
    '/contact',
    '/book',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic stylist pages
  const stylistPages = stylists.map((stylist) => ({
    url: `${baseUrl}/stylists/${stylist.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...stylistPages]
}