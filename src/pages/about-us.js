import BreadCumb from "@/common/breadcumb";
import Image from "next/image";
import aboutImg from "../../public/about-img.svg";

const AboutUs = () => {
  return (
    <>
      <BreadCumb
        headingOne="How are we different from others"
        headingTwo=""
        subHeading=""
        body="Hapartment offers instant access to apartment listings ranging
        from luxirious homes to apartments in lower price ranges. We
        provide clear and comprehensive categories for easy navigation."
        image={aboutImg}
      />

      <section className="green">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h3 className="mb-4">Our Vision</h3>

              <p>
                Our vision is to make the process of renting an apartment as
                easy and efficient as possible for both renters and landlords
                which involves creating an online marketplace where renters can
                search for available apartments based on criteria such as
                location, price and amenities.
              </p>
            </div>

            <div className="col-md-6">
              <h3 className="mb-4">Our Mision</h3>

              <p>
                Our mission is to simplify the rental process, and make it easy,
                fast and efficient for renters to find their dream home and for
                landlords to find quality tenants.
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <h3 className="mb-4">Why Choose Us</h3>

            <p>
              Hapartment, the ultimate home for agents and renters to meet for
              free. Our platform offers hassle=free rental solution that make it
              easy to find the perfect rental property. With our profesional and
              experienced team, you can be sure of a smooth and streamlined
              rental process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
