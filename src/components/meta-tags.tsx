import Head from "next/head";
import React from "react";

type MetaTagsProps = {
  title: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
};

const MetaTags = ({ title, description, image, canonicalUrl }: MetaTagsProps) => {
  const siteName = "Hapartment Digital Marketplace";
  const defaultImage = "https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg"; 
  const siteUrl = canonicalUrl || process.env.NEXT_PUBLIC_CLIENT_URL || "";

  return (
    <Head>
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="canonical" href={siteUrl} />

      {/* Basic Meta */}
      <title key="title">{title}</title>
      <meta name="description" content={description || siteName} key="desc" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description || siteName} key="og:desc" />
      <meta property="og:image" content={image || defaultImage} key="og:image" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:image:alt" content={siteName} />

      {/* Additional */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content={siteName} />
      <meta property="og:site_name" content={siteName} />
    </Head>
  );
};

export default MetaTags;
