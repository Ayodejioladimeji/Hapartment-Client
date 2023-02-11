import Layout from "@/components/layout";
import { DataProvider } from "@/store/GlobalState";
import "@/styles/main.scss";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <meta name="description" content="Easy way to find a perfect home" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      />

      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  );
}
