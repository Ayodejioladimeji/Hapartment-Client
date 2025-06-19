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
      </Head>

      <Listing/>
    </div>
  );
};

export default Listings;