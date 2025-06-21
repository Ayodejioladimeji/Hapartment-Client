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
    "
        />
      </Head>

      <Listing/>
    </div>
  );
};

export default Listings;