import Layout from "@/components/layout";
import { DataProvider } from "@/store/GlobalState";
import "@/styles/main.scss";
import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // THE SECTION OF THE AOS
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <>
      <Head>
        {/* <meta
          name="google-site-verification"
          content="vN0oQ_7GfBdOye17B6gsByAeSRHS1UE47iqXKj0d9ak"
        /> */}
        <meta
          name="description"
          content="Hapartment is bringing agents with renters together by providing them with the simplest and most cost-effective route to renting properties online"
        />
        <meta
          name="keywords"
          content="Hapartment, hapartments, Hapartments, hapartment, real estate, agents, landlord, tenant, renting website, apartment, rent house, leasing house "
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="Hapartment - Homepage" />
        <meta
          property="og:title"
          content="We help users search for apartment easily and provide them with adequate information to help them make well-informed decisions."
        />
        <meta
          property="og:description"
          content="Hapartment is bringing agents with renters together by providing them with the simplest and most cost-effective route to renting properties online"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dewqmrtqo/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_img0qq.jpg"
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://hapartment-client.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="robots" content="index, nofollow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Hapartment Digital Marketplace" />

        <meta
          property="og:site_name"
          content="Hapartment Digital Marketplace"
        />
        <meta name="twitter:image:alt" content="Hapartment" />
      </Head>

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
