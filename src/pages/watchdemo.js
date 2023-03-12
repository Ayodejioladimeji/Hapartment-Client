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
        <meta
          name="description"
          content="Hapartment is a new way to find your new home. We make it simple and convenient, so you can focus on finding a place you love. Use Hapartment to explore hundreds of properties in your area; get detailed information about the apartment that interests you and filter through hundreds of similar apartments for sale with ease."
        />
        <meta
          name="keywords"
          content="Hapartment,Available apartments,Apartment for rent,Available apartment near me,Home for rent near me, hapartment, real estate, agents, landlord, tenant, rentingwebsite, apartment, renthouse, leasinghouse "
        />
        <meta property="og:title" content="Hapartment -  Terms Of Use" />
        <meta
          property="og:description"
          content="We give you the ability to research, compare and see what offers are available for your next permanent residence. You will be able to see before hand if it is a suitable area and provides what you need and want in a home"
        />

        <meta
          property="og:url"
          content="https://hapartment.org/watchdemo"
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
