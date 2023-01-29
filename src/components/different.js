import Image from "next/image";
import differentImg from "../../public/different-image.svg";

const Different = () => {
  return (
    <section className="white">
      <div className="container">
        <h3 className="different-heading">
          What makes <span className="coloured">Hapartment</span> different from
          others
        </h3>

        <div className="row different">
          <div className="col-md-6 different-left">
            <div>
              <h6 className="mb-4">
                Enjoy free property listings with no hidden charges
              </h6>

              <p className="mb-3">
                Unlimited access to agents to list their properties on our
                platform for free and get it occupied in just few days.
              </p>

              <p className="mb-3">
                Renters enjoys smooth search with our predefined filters for
                easy navigation.
              </p>

              <p className="mb-3">
                You can also advertise your products on Hapartment for free for
                the first two months without being charged.
              </p>
            </div>
          </div>

          <div className="col-md-6 different-right">
            <Image src={differentImg} alt="" className="differentimg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;
