import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import heroImg from "../../public/hero-image.svg";

//

const Hero = () => {
  const [cityname, setCityname] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cityname === "") {
      setError("Please enter city name");
      return;
    }

    const newData = {
      cityname,
    };

    sessionStorage.setItem("filter", JSON.stringify(newData));
    router.push("/listings");
  };

  return (
    <section className="white">
      <div className="container">
        <div className="row hero">
          <div className="col-lg-6 hero-left">
            <h1 className="mb-4">
              Easy <span className="coloured">way</span> to find a perfect
              <span className="coloured"> home</span>
            </h1>

            <p className="mb-3">
              We help users search for shops and apartments in the best location
              and provide them with adequate information to help them make
              well-informed decisions.
            </p>

            <div className="quick-search">
              <h6 className="mb-3 bold">Quick Search</h6>

              <form onSubmit={handleSubmit}>
                <div className="d-md-flex flex-lg-row flex-md-column">
                  <div className="form-control mb-2 d-flex align-items-center">
                    <i className="bi bi-geo-alt"></i>
                    <input
                      type="text"
                      placeholder="Enter your search"
                      value={cityname}
                      onChange={(e) => setCityname(e.target.value)}
                    />
                  </div>
                </div>
                <span className="d-block text-danger">{error}</span>

                <button className="btn hero-btn mt-4">Search</button>
              </form>
            </div>
          </div>

          <div className="col-lg-6 hero-right">
            <Image src={heroImg} alt="" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
