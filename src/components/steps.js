import { useState } from "react";
import Image from "next/image";
import stepone from "../../public/images/how1.svg";
import steptwo from "../../public/images/how2.svg";
import stepthree from "../../public/images/how3.svg";
import stepfour from "../../public/images/how4.svg";
import stepfive from "../../public/images/how5.svg";
import stepsix from "../../public/images/how6.svg";

const Steps = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="black">
      <div className="container">
        <div className="row steps">
          <div className="col-md-6 steps-left">
            <h3 data-aos="fade-down" data-aos-once="true">
              Create listings in <span className="coloured">seven </span>steps
            </h3>

            <div
              className="mb-3 mt-5"
              id={toggleState === 1 ? "active" : ""}
              onClick={() => toggleTab(1)}
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <h6>1. Login into your account</h6>
              {toggleState === 1 && (
                <p>
                  Download our mobile app from App store or Play store and
                  create an account as an agent
                </p>
              )}
            </div>

            <div
              className="mb-3"
              id={toggleState === 2 ? "active" : ""}
              onClick={() => toggleTab(2)}
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-once="true"
              data-aos-delay="400"
            >
              <h6>2. List Property</h6>
              {toggleState == 2 && (
                <p>
                  Select “List Property“ on the account section on the mobile
                  app to start listing properties.
                </p>
              )}
            </div>

            <div
              className="mb-3"
              id={toggleState === 3 ? "active" : ""}
              onClick={() => toggleTab(3)}
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-once="true"
              data-aos-delay="600"
            >
              <h6>3. Basic Information</h6>
              {toggleState === 3 && (
                <p>
                  Click on basic information, provide the property location and
                  property type.
                </p>
              )}
            </div>

            <div
              className="mb-3"
              id={toggleState === 4 ? "active" : ""}
              onClick={() => toggleTab(4)}
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-once="true"
              data-aos-delay="800"
            >
              <h6>4. Property Details</h6>
              {toggleState === 4 && (
                <p>
                  Click on property details to provide relevant information
                  about the property.
                </p>
              )}
            </div>

            <div
              className="mb-3"
              id={toggleState === 5 ? "active" : ""}
              onClick={() => toggleTab(5)}
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-once="true"
              data-aos-delay="1000"
            >
              <h6>5. Add Descriptions</h6>
              {toggleState === 5 && (
                <p>
                  Click on add description to provide full description and price
                  of the property
                </p>
              )}
            </div>

            <div
              className="mb-3"
              id={toggleState === 6 ? "active" : ""}
              onClick={() => toggleTab(6)}
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-once="true"
              data-aos-delay="1200"
            >
              <h6>6. Add Property Images</h6>
              {toggleState === 6 && (
                <p>
                  Click on add property images to add the images/pictures of the
                  property.
                </p>
              )}
            </div>

            <div
              className="mb-3"
              id={toggleState === 7 ? "active" : ""}
              onClick={() => toggleTab(7)}
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-once="true"
              data-aos-delay="1400"
            >
              <h6>7. Create Listings</h6>
              {toggleState === 7 && (
                <p>
                  Once all required information about the property has been
                  provided, click on create listing to add your property to
                  Hapartment
                </p>
              )}
            </div>
          </div>

          <div className="col-md-6 steps-right d-none d-md-flex">
            <div
              className="steps-image-box"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="1200"
            >
              {toggleState === 1 && (
                <Image src={stepone} alt="picture" className="connect-image" />
              )}
              {toggleState === 2 && (
                <Image src={steptwo} alt="picture" className="connect-image" />
              )}
              {toggleState === 3 && (
                <Image
                  src={stepthree}
                  alt="picture"
                  className="connect-image"
                />
              )}
              {toggleState === 4 && (
                <Image src={stepfour} alt="picture" className="connect-image" />
              )}
              {toggleState === 5 && (
                <Image src={stepfive} alt="picture" className="connect-image" />
              )}
              {toggleState === 6 && (
                <Image src={stepsix} alt="picture" className="connect-image" />
              )}
              {toggleState === 7 && (
                <Image src={stepsix} alt="picture" className="connect-image" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
