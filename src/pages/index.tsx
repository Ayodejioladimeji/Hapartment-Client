import MetaTags from "@/components/MetaTags";
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

export default function index() {
  return (
    <>
      <MetaTags
        title="Homepage"
        description="Find the perfect apartment with Hapartment - the easy way to find your home! We help you search over 2,000 properties from our network of property managers."
      />

      <Hero />
      <Connect />
      <Steps />
      <Search />
      {/* <Discover /> */}
      <Different />
      <Property />
      <SafetyTips />
      <Places />
      <Download />
    </>
  );
}
