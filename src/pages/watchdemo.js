import BreadCumb from "@/common/breadcumb";
import Image from "next/image";
import Head from "next/head";
import videoImage from "../../public/images/video-image.svg";
import watchdemoImage from "../../public/images/watchdemo-image.svg";

const WatchDemo = () => {
  return (
    <>
      <Head>
        <title>Hapartment - Watch a demo</title>
        <link
          rel="canonical"
          href="https://www.hapartment.org/watchdemo/"
          key="canonical"
        />
        <meta
          name="description"
          content="Hapartment is a new way to find your new home. We make it simple and convenient, so you can focus on finding a place you love. Use Hapartment to explore hundreds of properties in your area; get detailed information about the apartment that interests you and filter through hundreds of similar apartments for sale with ease."
        />
        <meta
          name="keywords"
          content="Hapartment digital marketplace,Hapartment,renting a home,rent apartment or house, renting a property,for rent homes by owner,apartment list,housing listings,list house for rent,homes apartments for rent,rental listings,rental property listings,list apartment for rent,find apartments for rent,how to rent a house,finding homes for rent,how to rent out a house,housing homes for rent,list home for rent,pay my rent,how to get out of an apartment lease,how to rent out your house,renting out your house,my rentals,best place to list rental property,property management rental listings,rental listings by owner,find renters,rent my house,should i sell or rent my house,renting out a house,how to rent your house,new homes for rent,renting a house vs apartment,rent your home,places for rent by owner,find places to rent,out house rental,"
        />
        <meta property="og:title" content="Hapartment -  Watch a demo" />
        <meta
          property="og:description"
          content="We give you the ability to research, compare and see what offers are available for your next permanent residence. You will be able to see before hand if it is a suitable area and provides what you need and want in a home"
        />

        <meta
          property="og:url"
          content="https://www.hapartment.org/watchdemo"
        />
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
          property="og:image"
          content="https://res.cloudinary.com/hapartments/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.17_PM_1_qix3ml.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>

      <BreadCumb
        headingOne="Hapartment Digital Marketplace"
        headingTwo=""
        subHeading="Watch a demo"
        body="We give you the ability to research, compare and see what offers are available for your next permanent residence. You will be able to see before hand if it is a suitable area and provides what you need and want in a home. "
        image={watchdemoImage}
      />

      <section className="green">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-12 mx-auto">
              <div className="demo-image">
                <Image src={videoImage} alt="video" title="picture" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchDemo;
