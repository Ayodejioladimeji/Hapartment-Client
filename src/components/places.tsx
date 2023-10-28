import Image from "next/image";
import { useRouter } from "next/router";
import placesImg1 from "../../public/images/places-1.svg";
import placesImg2 from "../../public/images/places-2.svg";
import * as gtag from "../lib/gtag";
import { useContext } from "react";
import { DataContext } from "@/store/GlobalState";
import { ACTIONS } from "@/store/Actions";
//

const Places = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);

  const handleSubmit = async (e) => {
    const newData = {};
    gtag.event({
      action: "get_all_listings",
      category: "all_listings",
    });

    dispatch({ type: ACTIONS.CALLBACK, payload: !state.callback });
    localStorage.setItem("filter", JSON.stringify(newData));
    dispatch({ type: ACTIONS.CHECKLOAD, payload: true });
    window.location.href = "/listings";
  };

  return (
    <section className="black">
      <div className="container">
        <div className="row places">
          <div className="col-md-6 places-left">
            <div>
              <h3
                className="mb-4"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="400"
              >
                We want to help you search the best places to live.
              </h3>

              <p
                className="mb-3"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="600"
              >
                Hapartment is the best place to search for apartments. Our
                easy-to-use app and website help you find and secure the perfect
                apartment in minutes, for both short and long-term stays.
              </p>

              <div data-aos="fade-up" data-aos-once="true" data-aos-delay="800">
                <button className="btn" onClick={handleSubmit}>
                  Get started
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className=" places-right">
              <Image
                src={placesImg1}
                alt="picture"
                className="placesimg places-img-background"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="800"
              />

              <Image
                src={placesImg2}
                alt="picture"
                className="placesimg places-img-top"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="1200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Places;
