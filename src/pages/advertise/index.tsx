import AdvertiseModal from "@/common/advertiseModal";
import BreadCumb from "@/common/breadcumb";
import Head from "next/head";
import { useState } from "react";
import { Modal } from "react-bootstrap";


const Advert = () => {
  const [openModal, setOpenModal] = useState(false);

  //
  return (
    <>
      <Head>
        <title>Hapartment - Advertise with us</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.hapartment.org/advertise/"
          key="canonical"
        />

        <meta
          name="description"
          content="Hapartment is a one-stop apartment search and booking app that brings your top properties in one place. View updated listings from our network of more than 1400 managing agents daily, then book your next apartment with us."
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

        <meta name="title" content="Hapartment - Advertise with us" />
        <meta property="og:title" content="Hapartment - Advertise with us" />
        <meta
          property="og:description"
          content="Start advertising your products on Hapartment Digital Marketplace. Post your product for free and start attracting visitors to it. You will be able to track the number of people who end up purchasing through the website, and make changes to your product as needed"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/hapartments/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_2_ifvu7a.jpg"
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.hapartment.org/advertise/"
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
          name="twitter:image:alt"
          content="https://res.cloudinary.com/dewqmrtqo/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_img0qq.jpg"
        />
      </Head>

      <BreadCumb
        headingOne="Hapartment Digital Marketplace"
        headingTwo=""
        subHeading="Advertise with us for free"
        body="Start advertising your products on Hapartment Digital Marketplace. Post your product for free and start attracting visitors to it. You will be able to track the number of people who end up purchasing through the website, and make changes to your product as needed"
        image="/images/adversise-image.svg"
      />

      <section className="white">
        <div className="container">
          <h3 className="mb-5 fw-3">Banner Adverts on Hapartment</h3>

          <div className="row">
            <div className="col-lg-8 col-md-12 mb-5">
              <div className="advert-div">
                <h3>The Audience</h3>
                <p>
                  Hapartment Digital Marketplace attracts a wide range of
                  properties seekers, from young people to retirees, with a
                  specific focus on those between the ages of 20 and 65. Most
                  visitors to our website are graduates with high incomes and
                  significant purchasing power.
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 mb-5">
              <div className="advert-div">
                <h3>Visitor Types</h3>
                <p>
                  Our platform allows advertisers to target particular visitor
                  types with their adverts. For example, an advertiser may want
                  to target visitors who are looking for property for rent
                  because they typically have higher purchasing potentials. This
                  makes it easier for advertisers to reach the right users and
                  get better results, while also reducing their cost per lead.
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 mb-5">
              <div className="advert-div">
                <h3>Ads Banner Size</h3>
                <p>
                  The adverts on Hapartment Digital Marketplace can be displayed
                  in different sizes. The sizes of the banner images accepted
                  for the adverts are as follows:
                </p>
                <p style={{ fontWeight: "600" }}>
                  750px by 120px - Desktop (Computer)
                </p>
                <p style={{ fontWeight: "600" }}>300px by 250px - Mobile</p>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 mb-5">
              <div className="advert-div">
                <h3>Location of Ads on Hapartment Digital Marketplace</h3>
                <p>
                  Banner adverts are shown in the middle of property listings
                  (e.g. Apartments for rent) or any marketable position on
                  Hapartment. The adverts are shown alongside other banner
                  adverts, which means they can be easily seen by people
                  browsing through listings on our website.
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 mb-5">
              <div className="advert-div">
                <h3>The Cost</h3>
                <p>
                  Advertise on Hapartment Digital Marketplace for free and get
                  your products seen by thousands of people looking for the same
                  kind of product. Sign up today and take advantage of this two
                  month free offer.
                </p>
                <p>
                  Your adverts will be displayed on our platform for two months,
                  with no extra cost. Check out our pricing plan below, and find
                  the required information for renewal after the first two
                  months.
                </p>
                <p style={{ fontWeight: "600" }}>1 Month - ₦2,000</p>
                <p style={{ fontWeight: "600" }}>
                  6 Months - ₦10,800 (10% discount)
                </p>
                <p style={{ fontWeight: "600" }}>
                  12 Months - ₦21,600 (10% discount)
                </p>

                {/* <button
                  onClick={() => setOpenModal(true)}
                  className="get-started-button"
                >
                  Get started
                </button> */}
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="box-footer">
                Have any questions? Email us at{" "}
                <span>support@hapartment.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={openModal} dialogClassName="advertise-modal">
        <AdvertiseModal setOpenModal={setOpenModal} />
      </Modal>
    </>
  );
};

export default Advert;
