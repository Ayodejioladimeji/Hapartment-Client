import BreadCumb from "@/common/breadcumb";
import Contacts from "@/components/contacts";
import contactImage from "../../public/images/contact2.svg";
import Head from "next/head";

//

const Contact = () => {
  return (
    <>
      <Head>
        <title>Hapartment - Contact Us</title>
        <link rel="canonical" href="https://hapartment.org" key="canonical" />

        <meta
          name="description"
          content="Hapartment delivers the safest apartment search experience on both web and app. View apartment listings directly from top property managers, pricing and availability updated daily. Manage all your properties in one place with our Digital Marketplace."
        />

        <meta
          name="keywords"
          content="Hapartment,Available apartments,Apartment for rent,Available apartment near me,Home for rent near me, hapartment, real estate, agents, landlord, tenant, rentingwebsite, apartment, renthouse, leasinghouse "
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="Hapartment - Contact Us Today" />
        <meta property="og:title" content="Hapartment - Contact Us Today" />
        <meta
          property="og:description"
          content="Our team works tirelessly to make searching for your dream home
          effortless and rewarding , by offering clearly displayed quality
          listings and slso provide simple mechanisms to contact the
          agent"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg"
        />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://hapartment.org/contact" />
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
        headingOne="Hi 👋🏼,"
        headingTwo="Connect with us Today"
        subHeading=""
        body="Our team works tirelessly to make searching for your dream home
                effortless and rewarding , by offering clearly displayed quality
                listings and slso provide simple mechanisms to contact the
                agent."
        image={contactImage}
      />

      <section className="white border-top">
        <div className="container">
          <div className="row contact-container">
            <div className="col-md-6 p-0">
              <div className="map-box">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7279478480477!2d3.3519938999999996!3d7.1574192000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4be84dbeed85%3A0x41580a63caf07bb3!2sHapartment!5e0!3m2!1sen!2sng!4v1675369709485!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-md-6">
              <Contacts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
