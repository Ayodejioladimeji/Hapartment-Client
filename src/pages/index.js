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
      <Head>
        <title>Hapartment - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.hapartment.org/"
          key="canonical"
        />

        <meta
          name="description"
          content="Find the perfect apartment with Hapartment - the easy way to find your home! We help you search over 2,000 properties from our network of property managers."
        />

        <meta
          name="keywords"
          content="Hapartment digital marketplace,Hapartment,renting a home,rent apartment or house, renting a property,for rent homes by owner,apartment list,housing listings,list house for rent,homes apartments for rent,rental listings,rental property listings,list apartment for rent,find apartments for rent,how to rent a house,finding homes for rent,how to rent out a house,housing homes for rent,list home for rent,pay my rent,how to get out of an apartment lease,how to rent out your house,renting out your house,my rentals,best place to list rental property,property management rental listings,rental listings by owner,find renters,rent my house,should i sell or rent my house,renting out a house,how to rent your house,new homes for rent,renting a house vs apartment,rent your home,places for rent by owner,find places to rent,out house rental,"
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
          content="https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg"
        />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://www.hapartment.org" />
        <meta name="twitter:card" content="Hapartment" />

        <meta name="robots" content="index, nofollow" />
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
