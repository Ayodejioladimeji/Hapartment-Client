import { useRouter } from "next/router";


const Property = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    router.push({
      pathname: "/listings",
      query: { status: "all", location: "all" },
    });
  };

  return (
    <section className="green">
      <div className="container">
        <div className="row property">
          <div className="col-md-6 property-left">
            <h3
              className="mb-5"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="400"
            >
              Advertise your property
            </h3>

            <p
              className="mb-4"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="800"
            >
              Are you looking for prospective tenants to occupy your vacant
              House? If yes, then Listing it here can be of great help. Connect
              with more than 75 million renters looking for new homes using our
              comprehensive platform.
            </p>

            <div data-aos="fade-up" data-aos-once="true" data-aos-delay="1200">
              <a
                href="https://play.google.com/store/apps/details?id=com.layobright.hapartment"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn">
                  List property
                  <i className="bi bi-arrow-right-circle"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="col-md-6 property-right">
            <h3
              className="mb-5"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="600"
            >
              Rent your next apartment
            </h3>

            <p
              className="mb-4"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="1000"
            >
              Find your dream apartment on Hapartment. A great place to stay
              with loads of features, check out the facilities in your area and
              find the apartment that’s best for you. Compare prices and contact
              the property owner.
            </p>

            <div data-aos="fade-up" data-aos-once="true" data-aos-delay="1400">
              <button className="btn" onClick={handleSubmit}>
                Search now
                <i className="bi bi-arrow-right-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
