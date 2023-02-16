import BreadCumb from "@/common/breadcumb";
import aboutImg from "../../public/images/about-img.svg";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Hapartment - About Us</title>
        {/* <meta
          name="google-site-verification"
          content="vN0oQ_7GfBdOye17B6gsByAeSRHS1UE47iqXKj0d9ak"
        /> */}
        <meta
          name="description"
          content="At Hapartment, we believe that a smart apartment search experience should just work. Our apps and website makes the process of searching for an apartment smooth, easy, and safe."
        />

        <meta
          name="keywords"
          content="Hapartment, hapartment, real estate, agents, landlord, tenant, rentingwebsite, apartment, renthouse, leasinghouse "
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="Hapartment - About Us" />
        <meta property="og:title" content="Hapartment - About Us" />
        <meta
          property="og:description"
          content="Hapartment offers instant access to apartment listings ranging
        from luxirious homes to apartments in lower price ranges. We
        provide clear and comprehensive categories for easy navigation."
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dewqmrtqo/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_img0qq.jpg"
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://hapartment-client.vercel.app/about-us"
        />
        <meta name="twitter:card" content="Hapartment" />

        <meta name="robots" content="index, nofollow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
        headingOne="How are we different from others"
        headingTwo=""
        subHeading=""
        body="Hapartment offers instant access to apartment listings ranging
        from luxirious homes to apartments in lower price ranges. We
        provide clear and comprehensive categories for easy navigation."
        image={aboutImg}
      />

      <section className="green">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h3 className="mb-4">Our Vision</h3>

              <p>
                Our vision is to make the process of renting an apartment as
                easy and efficient as possible for both renters and landlords
                which involves creating an online marketplace where renters can
                search for available apartments based on criteria such as
                location, price and amenities.
              </p>
            </div>

            <div className="col-md-6">
              <h3 className="mb-4">Our Mision</h3>

              <p>
                Our mission is to simplify the rental process, and make it easy,
                fast and efficient for renters to find their dream home and for
                landlords to find quality tenants.
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <h3 className="mb-4">Why Choose Us</h3>

            <p>
              Hapartment, the ultimate home for agents and renters to meet for
              free. Our platform offers hassle=free rental solution that make it
              easy to find the perfect rental property. With our profesional and
              experienced team, you can be sure of a smooth and streamlined
              rental process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
