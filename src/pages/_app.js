import Layout from "@/components/layout";
import { DataProvider } from "@/store/GlobalState";
import "@/styles/main.scss";
import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // THE SECTION OF THE AOS
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <>
      <meta name="description" content="Easy way to find a perfect home" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />
      <meta name="title" content="Hapartment - Homepage" />
      {/* <meta
        name="keywords"
        content="Hapartment apartment agent tenant rent renters renthouse landlord lease property listings"
      />
      <meta name="robots" content="index, nofollow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Hapartment Digital Marketplace" /> */}

      {/* Essential META Tags */}
      {/* <meta property="og:title" content="Hapartment Homepage" />
      <meta
        property="og:description"
        content="Easy way to find a perfect home"
      />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary_large_image" /> */}

      {/* Non-Essential, But Recommended  */}
      {/* <meta property="og:site_name" content="Hapartment" />
      <meta name="twitter:image:alt" content="Hapartment" /> */}

      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  );
}
