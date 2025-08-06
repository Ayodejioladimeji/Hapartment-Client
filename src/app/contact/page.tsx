import BreadCumb from "@/common/breadcumb";
import Contacts from "@/components/contacts";
import MetaTags from "@/components/meta-tags";


//

const Contact = () => {
  return (
    <>
      <MetaTags
        title="Contact Hapartment - Reach Nigeria's Leading Rental Listings Platform"
        description="Get in touch with Hapartment for help with property rentals, listings, and customer support. We're here to help you find your next home in Nigeria quickly and easily."
        image="https://res.cloudinary.com/dewqmrtqo/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_img0qq.jpg"
        canonicalUrl="https://www.hapartment.org/contact"
      />

      <BreadCumb
        headingOne="Hi 👋🏼,"
        headingTwo="Connect with us Today"
        subHeading=""
        body="Our team works tirelessly to make searching for your dream home
                effortless and rewarding , by offering clearly displayed quality
                listings and also provide simple mechanisms to contact the
                agent."
        image="/images/contact2.svg"
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
                  allowFullScreen
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
