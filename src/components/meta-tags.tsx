import Head from "next/head";
import React from "react";

const MetaTags = (props: any) => {
  // stitch pafet
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="canonical"
        href={props?.canonicalUrl || process.env.NEXT_PUBLIC_CLIENT_URL}
      />
      <title>{`Hapartment - ${props.title}`}</title>
      <meta name="title" content={`Hapartment - ${props.title}`} />
      <meta
        name="description"
        content={props?.description || "Welcome to Hapartment"}
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <meta property="og:title" content={`Hapartment - ${props.title}`} />
      <meta
        property="og:description"
        content={props?.description || "Welcome to Hapartment"}
      />

      <meta property="og:image" content={props?.image} />
      <meta property="og:type" content="website" />

      <meta property="og:url" content={process.env.NEXT_PUBLIC_CLIENT_URL} />
      <meta name="twitter:card" content="Hapartment" />

      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Hapartment" />

      <meta property="og:site_name" content="Hapartment" />
      <meta name="twitter:image:alt" content="Hapartment" />
    </Head>
  );
};

export default MetaTags;
