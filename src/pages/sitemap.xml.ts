// pages/sitemap.xml.ts

import { GetServerSideProps } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const fetchListings = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listing?pageSize=10000`);
    const data = await res.json();
    return data.listings || [];
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
    const baseUrl = `https://${req.headers.host}`;

    const links = [
        { url: "/", changefreq: "daily", priority: 0.7 },
        { url: "/about-us", changefreq: "monthly", priority: 0.5 },
        { url: "/contact", changefreq: "monthly", priority: 0.5 },
        { url: "/advertise", changefreq: "monthly", priority: 0.5 },
        { url: "/howto", changefreq: "monthly", priority: 0.5 },
        { url: "/faqs", changefreq: "monthly", priority: 0.5 },
        { url: "/terms", changefreq: "monthly", priority: 0.5 },
        { url: "/privacy", changefreq: "monthly", priority: 0.5 },
        { url: "/listings", changefreq: "daily", priority: 0.6 },
        { url: "/blogs", changefreq: "weekly", priority: 0.5 },
        { url: "/blogs/how-to-decode-rental-ads", changefreq: "monthly", priority: 0.5 },
        { url: "/blogs/navigate-rentals", changefreq: "monthly", priority: 0.5 },
        { url: "/blogs/homes-for-lease", changefreq: "monthly", priority: 0.5 },
        { url: "/blogs/find-houses-for-rent", changefreq: "monthly", priority: 0.5 },
        { url: "/blogs/find-apartment-for-rent", changefreq: "monthly", priority: 0.5 },
    ];

    const listings = await fetchListings();

    listings.forEach((listing: any) => {
        links.push({
            url: `/listings/${listing._id}`,
            changefreq: "weekly",
            priority: 0.9,
        });
    });

    const stream = new SitemapStream({ hostname: baseUrl });

    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
        data.toString()
    );

    res.setHeader("Content-Type", "application/xml");
    res.write(xml);
    res.end();

    return { props: {} };
};

export default function Sitemap() {
    return null;
}
