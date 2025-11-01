import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.hapartment.org"

    const staticRoutes = [
        { path: "", priority: 1.0 },
        { path: "about-us", priority: 0.8 },
        { path: "advertise", priority: 0.8 },
        { path: "contact", priority: 0.8 },
        { path: "faqs", priority: 0.8 },
        { path: "blogs", priority: 0.9 },
        { path: "howto", priority: 0.9 },
        { path: "listings", priority: 0.9 },
        { path: "watchdemo", priority: 0.9 },
        { path: "privacy", priority: 0.9 },
        { path: "terms", priority: 0.9 }
    ]


    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${baseUrl}/${route.path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route.priority,
    }))

    return [...staticEntries]
}