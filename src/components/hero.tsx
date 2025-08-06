"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import heroImg from "../../public/images/hero-image.svg";

//

const Hero = () => {
  const [cityname, setCityname] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cityname.trim() === "") {
      setError("Please enter city name");

      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    // Build the query string manually
    const params = new URLSearchParams({
      search: cityname.toLowerCase(),
      page: "1",
    });

    router.push(`/listings?${params.toString()}`);
  };

  return (
    <section className="white">
      <div className="container mt-5">
        <div className="row hero pt-5">
          <div className="col-lg-6 hero-left">
            <h1 className="mb-4" data-aos="fade-up" data-aos-once="true">
              Easy <span className="coloured">way</span> to find a perfect
              <span className="coloured"> home</span>
            </h1>

            <p
              className="mb-3"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="400"
            >
              We help users search for apartments in the best location and
              provide them with adequate information to help them make
              well-informed decisions.
            </p>

            <div className="quick-search">
              <h6
                className="mb-3 bold"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay="600"
              >
                Quick Search
              </h6>

              <form onSubmit={handleSubmit} className="form-section">
                <div className="d-md-flex flex-lg-row flex-md-column">
                  <div
                    className="form-control mb-2 d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="800"
                  >
                    <i className="bi bi-geo-alt"></i>
                    <input
                      type="text"
                      placeholder="Enter your state or city"
                      value={cityname}
                      onChange={(e) => setCityname(e.target.value)}
                    />
                  </div>
                </div>
                <span className="d-block hero-error text-danger">{error}</span>

                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  <button className="btn hero-btn mt-4">Search</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 hero-right">
            <div data-aos="fade-up" data-aos-once="true">
              <Image src={heroImg} alt="picture" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
