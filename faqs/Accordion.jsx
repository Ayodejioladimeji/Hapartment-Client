import React, { useState } from "react";

import { FiPlus, FiMinus } from "react-icons/fi";

import "./Accordion.css";
import { tenantFaqs } from "./../../constants/tenantFaqs";

//

const Accordion = () => {
  let indexPlus;

  const [active, setActive] = useState(0);

  const eventHandler = (e, index) => {
    e.preventDefault();
    setActive(index);
  };

  const indexCount = (index) => {
    indexPlus = index + 1;
    return indexPlus;
  };

  return (
    <div className="accordion" data-aos="fade-up" data-aos-once="true">
      {tenantFaqs.map((tab, index) => (
        <div className="accordion-box" key={index}>
          <div
            onClick={(e) => eventHandler(e, index)}
            className="inactive"
            tabIndex={indexCount(index)}
          >
            <h2 className="title-wrapper">{tab.heading}</h2>

            <div>
              {active === index ? (
                <FiMinus className="accordion-icons" />
              ) : (
                <FiPlus className="accordion-icons" />
              )}
            </div>
          </div>

          <div
            id={"sect-" + indexCount(index)}
            className={active === index ? "panel-open" : "panel-close"}
          >
            <p>{tab.subheading}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
