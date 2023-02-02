// import Contacts from "../components/Contacts.js"
import Contacts from "@/components/contacts";
import Image from "next/image";
import contactImage from "../../public/contact2.svg";

//

const Contact = () => {
  return (
    <>
      <section className="white">
        <div className="container">
          <div className="row how-to-box d-flex">
            <div className="col-md-6 how-to-left">
              <h3 className="mb-3">Hi 👋🏼,</h3>
              <h3 className="mb-3">Connect with us Today</h3>

              <p className="mb-3">
                Our team works tirelessly to make searching for your dream home
                effotless and rewarding , by offering clearly displayed quality
                listings and slso provide simple mechanisms to contact the
                agent.
              </p>
            </div>

            <div className="col-md-6 how-to-right">
              <Image src={contactImage} alt="" className="contact-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="white border-top">
        <Contacts />
      </section>
    </>
  );
};

export default Contact;
