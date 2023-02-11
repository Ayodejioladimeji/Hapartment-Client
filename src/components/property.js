import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";
import { useRouter } from "next/router";
import { useContext } from "react";

const Property = () => {
  const router = useRouter();
  const { dispatch } = useContext(DataContext);

  return (
    <section className="green">
      <div className="container">
        <div className="row property">
          <div className="col-md-6 property-left">
            <h3 className="mb-5">Advertise your property</h3>

            <p className="mb-4">
              Are you looking for prospective tenants to occupy your vacant
              House? If yes, then Listing it here can be of great help. Connect
              with more than 75 million renters looking for new homes using our
              comprehensive platform.
            </p>

            <button
              className="btn"
              onClick={() =>
                dispatch({ type: ACTIONS.OPENMODAL, payload: true })
              }
            >
              List property
              <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>

          <div className="col-md-6 property-right">
            <h3 className="mb-5">Rent your next apartment</h3>

            <p className="mb-4">
              Find your dream apartment on Hapartment. A great place to stay
              with loads of features, check out the facilities in your area and
              find the apartment that’s best for you. Compare prices and contact
              the property owner.
            </p>

            <button className="btn" onClick={() => router.push("/listings")}>
              Search now
              <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
