import Image from "next/image";
import Link from "next/link";
import connectImg from "../../public/images/connect-image.svg";

const Connect = () => {
  return (
    <section className="light">
      <div className="container">
        <div className="row connect">
          <div className="col-md-6 connect-left">
            <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
              <Image src={connectImg} alt="" className="connectimg" />
            </div>
          </div>

          <div className="col-md-6 connect-right">
            <div className="connect-box">
              <h3
                className="mb-4"
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="400"
              >
                We connect <span className="coloured">agents</span> and
                <span className="coloured"> renters</span> together
              </h3>

              <div className="mt-2">
                <div className="tab-box">
                  <ul
                    className="nav nav-tabs"
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-delay="600"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#agents"
                      >
                        Agents
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#renters"
                      >
                        Renters
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tab-content mt-4">
                  <div
                    className="tab-pane active"
                    id="agents"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="800"
                  >
                    <ol>
                      <li>
                        Download our mobile app from Playstore or Applestore
                      </li>
                      <li>Create account as an Agent/Landlord.</li>
                      <li>
                        Activate your account with our one-time code sent to
                        your e-mail.
                      </li>
                      <li>Login to your account and start listing for free.</li>
                    </ol>
                  </div>

                  <div className="tab-pane" id="renters">
                    <ol>
                      <li>
                        Download our mobile app from Playstore or Applestore
                      </li>
                      <li>
                        Quickly find available apartments in your city using our
                        easy search feature.
                      </li>
                      <li>
                        Add desired properties to my-favorites for future use.
                      </li>
                      <li>
                        Chat the Agent/Landlord of the property that picks your
                        interest
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
