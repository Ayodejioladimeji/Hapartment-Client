import BreadCumb from "@/common/breadcumb";
import aboutImg from "../../public/images/about-img.svg";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Hapartment - About Us</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.hapartment.org/about-us/"
          key="canonical"
        />

        <meta
          name="description"
          content="At Hapartment, we believe that a smart apartment search experience should just work. Our apps and website makes the process of searching for an apartment smooth, easy, and safe."
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
          content="https://res.cloudinary.com/hapartments/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_img0qq.jpg"
        />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://www.hapartment.org/about-us" />
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
        headingOne="How are we different from others"
        headingTwo=""
        subHeading=""
        body="Hapartment offers instant access to apartment listings ranging
        from luxirious homes to apartments in lower price ranges. We
        provide clear and comprehensive categories for easy navigation."
        image="/images/about-img.svg"
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
              free. Our platform offers hassle-free rental solution that make it
              easy to find the perfect rental property. With our profesional and
              experienced team, you can be sure of a smooth and streamlined
              rental process.
            </p>

            <p>
              Our platform is designed to make the apartment rental process as
              easy and stress-free as possible. Renters can easily search for
              apartments based on location, and other preferences. They can also
              view photos, read descriptions, and even schedule appointment
              directly through agent whatsapp.
            </p>

            <p>
              For property agents, our platform offers an easy-to-use listing
              management system that allows them to quickly and efficiently
              upload their properties and manage their listings.
            </p>

            <p>
              At our core, we believe in providing a transparent, efficient, and
              user-friendly platform for both renters and property agents.
              Whether you're a renter looking for your next home or a property
              agent looking to expand your reach, our platform is the perfect
              solution for all your apartment rental needs. Try it today and see
              the difference for yourself!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
