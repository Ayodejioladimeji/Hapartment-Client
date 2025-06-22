import Head from "next/head";
import Listing from "./listing";

const Listings = () => {

  return (
    <div>
      <Head>
        <title>Hapartment - Property Listings</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.hapartment.org/listings/"
          key="canonical"
        />
        <meta
          name="description"
          content="Hapartment provides a secure and reliable digital marketplace for renting apartments."
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
    "/>

    <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="Hapartment - Listings" />
        <meta property="og:title" content="Hapartment - Listings" />
        <meta
          property="og:description"
          content="Our team works tirelessly to make searching for your dream home
          effortless and rewarding , by offering clearly displayed quality
          listings and also provide simple mechanisms to contact the
          agent"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg"
        />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://www.hapartment.org/contact" />
        <meta name="twitter:card" content="Hapartment" />

        <meta name="robots" content="index, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Hapartment Digital Marketplace" />

        <meta
          property="og:site_name"
          content="Hapartment Digital Marketplace"
        />
        <meta
          name="twitter:image:alt"
          content="https://res.cloudinary.com/dewqmrtqo/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_img0qq.jpg"
        />
        
      </Head>

      <Listing/>
    </div>
  );
};

export default Listings;