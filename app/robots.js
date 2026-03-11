const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.blotopay.com'

/** @type {import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/reset/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
