import BreadCumb from "@/common/breadcumb";
import faqImage from "../../public/images/faq-image.svg";
import Head from "next/head";
import AgentAccordion from "@/common/agentaccordion";
import RenterAccordion from "./../common/renteraccordion";

const Faqs = () => {
  return (
    <>
      <Head>
        <title>Hapartment - FAQS</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.hapartment.org/faqs/"
          key="canonical"
        />
        <meta
          name="description"
          content="Hapartment is the best apartment search experience on both web and mobile. View the newest inventory directly from your property managers, pricing and availability updated daily. Find your next home in minutes!"
        />
        <meta
          name="keywords"
          content="Hapartment digital marketplace,Hapartment,renting a home,rent apartment or house, renting a property,for rent homes by owner,apartment list,housing listings,list house for rent,homes apartments for rent,rental listings,rental property listings,list apartment for rent,find apartments for rent,how to rent a house,finding homes for rent,how to rent out a house,housing homes for rent,list home for rent,pay my rent,how to get out of an apartment lease,how to rent out your house,renting out your house,my rentals,best place to list rental property,property management rental listings,rental listings by owner,find renters,rent my house,should i sell or rent my house,renting out a house,how to rent your house,new homes for rent,renting a house vs apartment,rent your home,places for rent by owner,find places to rent,out house rental,"
        />
        <meta
          property="og:title"
          content="Hapartment - Frequently Asked Questions"
        />
        <meta
          property="og:description"
          content="Welcome to our FAQ center, Here you will find answers to some of the most common questions we receive from customers"
        />
        <meta property="og:url" content="https://hapartment.org/faqs" />
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
          content="https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>

      <BreadCumb
        headingOne="Get answers to all questions you have"
        headingTwo=""
        subHeading="Boost your knowledge about Hapartment."
        body="Welcome to our FAQ center, Here you will find answers to some of the most common questions we receive from customers. "
        image={faqImage}
      />

      <section className="white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="faqs">
                <h4 className="mb-3">Agent</h4>
                <AgentAccordion />
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className="faqs">
                <h4 className="mb-3">Renters</h4>
                <RenterAccordion />
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-5">
            <div className="box-footer text-center">
              Have any questions? Email us at{" "}
              <span>support@hapartment.org</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
