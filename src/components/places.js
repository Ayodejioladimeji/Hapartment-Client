import Image from "next/image";
import placesImg1 from "../../public/places-image1.svg";
import placesImg2 from "../../public/places-image2.svg";
//

const Places = () => {
  return (
    <section className="black">
      <div className="container">
        <p></p>

        <div className="row places">
          <div className="col-md-6 places-left">
            <div>
              <h3 className="mb-4">
                We want to help you search the best places to live.
              </h3>

              <p className="mb-3">
                Hapartment is the best place to search for apartments. Our
                easy-to-use app and website help you find and secure the perfect
                apartment in minutes, for both short and long-term stays.
              </p>

              <button class="btn">Get started</button>
            </div>
          </div>

          <div className="col-md-6 places-right">
            <Image
              src={placesImg1}
              alt=""
              className="placesimg places-img-background"
            />
            <Image
              src={placesImg2}
              alt=""
              className="placesimg places-img-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Places;
