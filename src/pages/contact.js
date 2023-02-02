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
                effotless and rewarding , by offering clearly displayed quality
                listings and slso provide simple mechanisms to contact the
                agent."
        image={contactImage}
      />

      <section className="white border-top">
        <Contacts />
      </section>
    </>
  );
};

export default Contact;
