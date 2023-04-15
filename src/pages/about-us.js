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
          href="https://hapartment.org/about-us/"
          key="canonical"
        />

        <meta
          name="description"
          content="At Hapartment, we believe that a smart apartment search experience should just work. Our apps and website makes the process of searching for an apartment smooth, easy, and safe."
        />

        <meta
          name="keywords"
          content="Hapartment digital marketplace,Hapartment,renting a home,rent apartment or house, renting a property,for rent homes by owner,apartment list,housing listings,list house for rent,homes apartments for rent,rental listings,rental property listings,list apartment for rent,find apartments for rent,how to rent a house,finding homes for rent,how to rent out a house,housing homes for rent,list home for rent,pay my rent,how to get out of an apartment lease,how to rent out your house,renting out your house,my rentals,best place to list rental property,property management rental listings,rental listings by owner,find renters,rent my house,should i sell or rent my house,renting out a house,how to rent your house,new homes for rent,renting a house vs apartment,rent your home,places for rent by owner,find places to rent,out house rental,"
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

        <meta property="og:url" content="https://hapartment.org/about-us" />
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
