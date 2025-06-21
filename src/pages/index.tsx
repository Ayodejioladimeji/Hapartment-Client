import Blog from "@/components/blog/blog";
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
          content="
            Hapartment,
            apartment for rent,
            house for rent,
            property for rent,
            homes for rent,
            rental properties Nigeria,
            Lagos apartments,
            Abuja houses,
            Port Harcourt rentals,
            property for sale Nigeria,
            buy house Lagos,
            land for sale Nigeria,
            commercial properties Nigeria,
            office space for rent,
            shop for rent,
            warehouse for rent,
            mini flats Lagos,
            self-contained apartments Abuja,
            serviced apartments Lagos,
            short-let apartments Nigeria,
            luxury homes Nigeria,
            affordable houses Nigeria,
            student accommodation Nigeria,
            real estate Nigeria,
            Nigerian property market,
            find homes Nigeria,
            property listings Nigeria,
            rental listings Nigeria,
            Nigerian real estate portal,
            property search Nigeria,
            apartments by owner,
            houses by owner,
            rent a flat Nigeria,
            buy land Lagos,
            residential properties Nigeria,
            new homes Nigeria,
            property managers Nigeria,
            real estate agents Nigeria,
            buy property in Lekki,
            rent house in Ikoyi,
            flats for rent Surulere,
            duplex for rent Gwarimpa,
            bungalow for sale Ibadan,
            estate agent Nigeria,
            property finder Nigeria,
            home rentals Nigeria,
            commercial real estate Nigeria,
            property deals Nigeria,
            verified properties Nigeria,
            property news Nigeria
          "
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
      <Different />
      <Property />
      <SafetyTips />
      <Places />
      <Blog />
      <Download />
    </>
  );
}
