import Connect from "@/components/connect";
import Different from "@/components/different";
import Discover from "@/components/discover";
import Download from "@/components/download";
import Hero from "@/components/hero";
import Places from "@/components/places";
import Property from "@/components/property";
import SafetyTips from "@/components/safetytips";
import Search from "@/components/search";
import Steps from "@/components/steps";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hapartment Homepage</title>
        <meta name="description" content="Easy way to find a perfect home" />
      </Head>

      <Hero />
      <Connect />
      <Steps />
      <Search />
      <Discover />
      <Different />
      <Property />
      <SafetyTips />
      <Places />
      <Download />
    </>
  );
}
