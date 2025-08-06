import BreadCumb from "@/common/breadcumb";
import AgentAccordion from "@/common/agentaccordion";
import RenterAccordion from "../../common/renteraccordion";
import MetaTags from "@/components/meta-tags";

const Faqs = () => {
  return (
    <>
      <MetaTags
        title="Hapartment FAQs - Your Rental Listings Questions Answered"
        description="Find answers to common questions about renting, listing, and managing properties on Hapartment. Get the help you need to navigate Nigeria’s rental market with ease."
        image="https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg"
        canonicalUrl="https://www.hapartment.org/faqs"
      />

      <BreadCumb
        headingOne="Get answers to all questions you have"
        headingTwo=""
        subHeading="Boost your knowledge about Hapartment."
        body="Welcome to our FAQ center, Here you will find answers to some of the most common questions we receive from customers. "
        image="/images/faq-image.svg"
      />

      <section className="white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="faqs">
                <h4 className="mb-3">Agent</h4>
                <AgentAccordion />
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className="faqs">
                <h4 className="mb-3">Renters</h4>
                <RenterAccordion />
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-5">
            <div className="box-footer text-center">
              Have any questions? Email us at{" "}
              <span>support@hapartment.org</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
