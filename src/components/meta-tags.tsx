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
      <title>{`Stitchpafet - ${props.title}`}</title>
      <meta name="title" content={`Stitchpafet - ${props.title}`} />
      <meta
        name="description"
        content={props?.description || "Welcome to Stitchpafet"}
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-adsense-account"
        content="ca-pub-7788679556900505"
      ></meta>
      <meta property="og:title" content={`Stitchpafet - ${props.title}`} />
      <meta
        property="og:description"
        content={props?.description || "Welcome to Stitchpafet"}
      />

      <meta property="og:image" content={props?.image} />
      <meta property="og:type" content="website" />

      <meta property="og:url" content={process.env.NEXT_PUBLIC_CLIENT_URL} />
      <meta name="twitter:card" content="Stitchpafet" />

      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Stitchpafet" />

      <meta property="og:site_name" content="Stitchpafet" />
      <meta name="twitter:image:alt" content="Stitchpafet" />
    </Head>
  );
};

export default MetaTags;
