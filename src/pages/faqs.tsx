import BreadCumb from "@/common/breadcumb";
import faqImage from "../../public/images/faq-image.svg";
import Head from "next/head";
import AgentAccordion from "@/common/agentaccordion";
import RenterAccordion from "../common/renteraccordion";
import MetaTags from "@/components/MetaTags";

const Faqs = () => {
  return (
    <>
      <MetaTags
        title="FAQS"
        description="Hapartment is the best apartment search experience on both web and mobile. View the newest inventory directly from your property managers, pricing and availability updated daily. Find your next home in minutes!"
        route="faqs"
      />

      <BreadCumb
        headingOne="Get answers to all questions you have"
        headingTwo=""
        subHeading="Boost your knowledge about Hapartment."
        body="Welcome to our FAQ center, Here you will find answers to some of the most common questions we receive from customers. "
        image={faqImage}
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
