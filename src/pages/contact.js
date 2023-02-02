import BreadCumb from "@/common/breadcumb";
import Contacts from "@/components/contacts";
import contactImage from "../../public/contact2.svg";

//

const Contact = () => {
  return (
    <>
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
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
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
