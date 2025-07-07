const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const Sitemap = async (req, res) => {
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: "/about-us", changefreq: "daily", priority: 0.3 },
    { url: "/contact", changefreq: "daily", priority: 0.3 },
    { url: "/advertise", changefreq: "daily", priority: 0.3 },
    { url: "/howto", changefreq: "daily", priority: 0.3 },
    { url: "/faqs", changefreq: "daily", priority: 0.3 },
    { url: "/terms", changefreq: "daily", priority: 0.3 },
    { url: "/privacy", changefreq: "daily", priority: 0.3 },
    { url: "/listings", changefreq: "daily", priority: 0.3 },
    { url: "/blogs", changefreq: "daily", priority: 0.3 },
    { url: "/blogs/how-to-decode-rental-ads", changefreq: "daily", priority: 0.3 },
    { url: "/blogs/navigate-rentals", changefreq: "daily", priority: 0.3 },
    { url: "/blogs/homes-for-lease", changefreq: "daily", priority: 0.3 },
    { url: "/blogs/find-houses-for-rent", changefreq: "daily", priority: 0.3 },
    { url: "/blogs/find-apartment-for-rent", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};

export default Sitemap;
