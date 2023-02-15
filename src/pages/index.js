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
        {/* <meta
          name="google-site-verification"
          content="vN0oQ_7GfBdOye17B6gsByAeSRHS1UE47iqXKj0d9ak"
        /> */}

        <title>Hapartment - Homepage</title>

        <meta
          name="keywords"
          content="Hapartment, hapartments, Hapartments, hapartment, real estate, agents, landlord, tenant, renting website, apartment, rent house, leasing house "
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="Hapartment - Homepage" />
        <meta property="og:title" content="Hapartment - Homepage" />
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
