import Layout from "@/components/layout";
import { DataProvider } from "@/store/GlobalState";
import "@/styles/main.scss";
import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // THE SECTION OF THE AOS
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  // // Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  //

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="vN0oQ_7GfBdOye17B6gsByAeSRHS1UE47iqXKj0d9ak"
        />
        <link rel="canonical" href="https://hapartment.org" key="canonical" />
        <meta
          name="description"
          content="Hapartment is bringing agents with renters together by providing them with the simplest and most cost-effective route to renting properties online"
        />
        <meta
          name="keywords"
          content="Hapartment digital marketplace,Hapartment,Available apartments,Apartment for rent,Available apartment near me,Home for rent near me, hapartment, real estate, agents, landlord, tenant, rentingwebsite, apartment, renthouse, leasinghouse "
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="Hapartment-Homepage" />
        <meta property="og:title" content="Hapartment - Homepage" />
        <meta
          property="og:description"
          content="Hapartment is bringing agents with renters together by providing them with the simplest and most cost-effective route to renting properties online"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/hapartments/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_img0qq.jpg"
        />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://hapartment.org/" />
        <meta name="twitter:card" content="Hapartment" />

        <meta name="robots" content="index, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Hapartment Digital Marketplace" />

        <meta
          property="og:site_name"
          content="Hapartment Digital Marketplace"
        />
        <meta name="twitter:image:alt" content="Hapartment" />
      </Head>

      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />

      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  );
}
