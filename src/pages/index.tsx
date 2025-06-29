import Blog from "@/components/blog/blog";
import Connect from "@/components/connect";
import Different from "@/components/different";
import Download from "@/components/download";
import Hero from "@/components/hero";
import MetaTags from "@/components/meta-tags";
import Places from "@/components/places";
import Property from "@/components/property";
import SafetyTips from "@/components/safetytips";
import Search from "@/components/search";
import Steps from "@/components/steps";


export default function index() {
  return (
    <>
      <MetaTags
        title="Find Apartments & Houses for Rent in Nigeria | Verified Listings"
        description="Discover verified apartments, houses, and properties for rent across Nigeria with Hapartment. Search thousands of listings in Lagos, Abuja, Port Harcourt, and more. Find your perfect home today."
        image="https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg"
        canonicalUrl="https://www.hapartment.org"
      />

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
