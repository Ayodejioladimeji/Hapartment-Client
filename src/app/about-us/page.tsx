import BreadCumb from "@/common/breadcumb";
import MetaTags from "@/components/meta-tags";

const AboutUs = () => {
  return (
    <>
      <MetaTags
        title="About Hapartment - Nigeria's Trusted Property Rental Marketplace"
        description="Learn about Hapartment, Nigeria’s reliable platform for renting verified apartments, houses, and properties. We connect property managers and renters with ease and transparency."
        image="https://res.cloudinary.com/dewqmrtqo/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_img0qq.jpg"
        canonicalUrl="https://www.hapartment.org/about-us"
      />

      <BreadCumb
        headingOne="How are we different from others"
        headingTwo=""
        subHeading=""
        body="Hapartment offers instant access to apartment listings ranging
        from luxirious homes to apartments in lower price ranges. We
        provide clear and comprehensive categories for easy navigation."
        image="/images/about-img.svg"
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
              free. Our platform offers hassle-free rental solution that make it
              easy to find the perfect rental property. With our profesional and
              experienced team, you can be sure of a smooth and streamlined
              rental process.
            </p>

            <p>
              Our platform is designed to make the apartment rental process as
              easy and stress-free as possible. Renters can easily search for
              apartments based on location, and other preferences. They can also
              view photos, read descriptions, and even schedule appointment
              directly through agent whatsapp.
            </p>

            <p>
              For property agents, our platform offers an easy-to-use listing
              management system that allows them to quickly and efficiently
              upload their properties and manage their listings.
            </p>

            <p>
              At our core, we believe in providing a transparent, efficient, and
              user-friendly platform for both renters and property agents.
              Whether you're a renter looking for your next home or a property
              agent looking to expand your reach, our platform is the perfect
              solution for all your apartment rental needs. Try it today and see
              the difference for yourself!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
