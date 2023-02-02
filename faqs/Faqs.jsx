import React from "react";

//
import "./Faqs.css";
import Accordion from "./Accordion";
import Heading from "./../../common/heading/Heading";
import AccordionAgent from "./AccordionAgent";

const Faqs = () => {
  return (
    <div className="faqs">
      <Heading
        heading="Frequently asked questions"
        text="Get answers to all questions you have and boost your knowledge about
        Hapartment."
      />

      <div className="faqs-div">
        <div className="faqs-left">
          <h1 data-aos="fade-up" data-aos-once="true">
            Property owners/Agents
          </h1>
          <AccordionAgent />
        </div>

        <div className="faqs-right">
          <h1 data-aos="fade-up" data-aos-once="true">
            Renters/Tenants
          </h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
