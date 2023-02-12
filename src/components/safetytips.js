import Image from "next/image";
import Link from "next/link";
import tipsImg from "../../public/tips-image.svg";

const SafetyTips = () => {
  return (
    <section className="white">
      <div className="container">
        <div className="row tips">
          <div className="col-md-6 tips-left">
            <div data-aos="fade-up" data-aos-once="true" data-aos-delay="1000">
              <Image src={tipsImg} alt="" className="tipsimg" />
            </div>
          </div>

          <div className="col-md-6 tips-right">
            <div className="tips-box">
              <h3
                className="mb-4"
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="400"
              >
                Safety Tips
              </h3>

              <p
                className="mb-4"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="600"
              >
                Do not make any inspection fee without seeing the agent and
                property. Only pay Rental fee, Sales fee or any upfront payment
                after you verify the Landlord.
              </p>

              <p
                className="mb-4"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="800"
              >
                Ensure you meet the Agent in an open location. The Agent does
                not represent us and we are not liable for any monetary
                transaction between you and the Agent..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
