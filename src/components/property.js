import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";
import { useRouter } from "next/router";
import { useContext } from "react";

const Property = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);

  // Get all listings on Click
  const handleSubmit = async (e) => {
    const newData = {};

    localStorage.setItem("filter", JSON.stringify(newData));
    dispatch({ type: ACTIONS.CHECKLOAD, payload: true });
    dispatch({ type: ACTIONS.CALLBACK, payload: !state.callback });
    router.push("/listings");
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
              <button
                className="btn"
                onClick={() =>
                  dispatch({ type: ACTIONS.DOWNLOAD_MODAL, payload: true })
                }
              >
                List property
                <i className="bi bi-arrow-right-circle"></i>
              </button>
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
