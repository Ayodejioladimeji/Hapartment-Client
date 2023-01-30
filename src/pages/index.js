import Connect from "@/components/connect";
import Different from "@/components/different";
import Discover from "@/components/discover";
import Hero from "@/components/hero";
import Search from "@/components/search";
import Steps from "@/components/steps";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hapartment Homepage</title>
        <meta name="description" content="Easy way to find a perfect home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Connect />
      <Steps />
      <Search />
      <Discover />
      <Different />
    </>
  );
}
