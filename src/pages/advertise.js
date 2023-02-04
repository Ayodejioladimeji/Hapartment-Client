import BreadCumb from "@/common/breadcumb";
import Head from "next/head";
import advertiseImage from "../../public/advertise-image.svg";

const Advert = () => {
  return (
    <>
      <Head>
        <title>Advertise with us</title>
        <meta name="Start advertising your products on Hapartment Digital Marketplace. Post your product for free and start attracting visitors to it. You will be able to track the number of people who end up purchasing through the website, and make changes to your product as needed" />
      </Head>

      <BreadCumb
        headingOne="Hapartment Digital Marketplace"
        headingTwo=""
        subHeading="Advertise with us for free"
        body="Start advertising your products on Hapartment Digital Marketplace. Post your product for free and start attracting visitors to it. You will be able to track the number of people who end up purchasing through the website, and make changes to your product as needed"
        image={advertiseImage}
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
                  Hapartment.org. The adverts are shown alongside other banner
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
    </>
  );
};

export default Advert;
