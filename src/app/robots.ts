import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        // update fixes
        sitemap: 'https://www.hapartment.org/sitemap.xml',
    }
}