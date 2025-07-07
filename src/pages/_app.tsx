import Layout from "@/components/layout";
import { DataProvider } from "@/store/GlobalState";
import "@/styles/main.scss";
import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  // THE SECTION OF THE AOS
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);


  //

  return (
    <>
    
        <Script
          src={"https://www.googletagmanager.com/gtag/js?id=G-F4GYGT02Z2"}
          strategy="afterInteractive"
        />

        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "G-F4GYGT02Z2", {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_KEY}")`,
          }}
        ></Script>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6391913781421412"
          crossOrigin="anonymous"
        ></Script>

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hapartment",
              url: "https://www.hapartment.org",
              logo: "https://res.cloudinary.com/devsource/image/upload/v1671309144/hapartment/logo512_otvwxg.png",
              sameAs: [
                "https://web.facebook.com/hapartmentdigitalmarketplace/",
                "https://x.com/Hapartment11?t=cmOAR5aAypWeGzbLvebt-A&s=09",
                "https://instagram.com/hapartment",
              ],
            }),
          }}
        />
      

      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  );
}
