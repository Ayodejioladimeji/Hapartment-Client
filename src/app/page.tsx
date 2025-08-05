import Blog from "@/components/blog/blog";
import Connect from "@/components/connect";
import Different from "@/components/different";
import Download from "@/components/download";
import Hero from "@/components/hero";
import Places from "@/components/places";
import Property from "@/components/property";
import SafetyTips from "@/components/safetytips";
import Search from "@/components/search";
import Steps from "@/components/steps";


export default function index() {
  return (
    <>
      <Hero />
      <Connect />
      <Steps />
      <Search />
      <Different />
      <Property />
      <SafetyTips />
      <Places />
      <Blog />
      <Download />
    </>
  );
}
