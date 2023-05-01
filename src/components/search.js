import propertyData from "@/constants/propertyData";
import furnishingdata from "@/constants/furnishingdata";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import searchImg from "../../public/images/search-image.svg";
import { statesdata } from "@/constants/statesdata";
import { strictAddComma } from "comma-separator";
import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";

const initialState = {
  property_type: "",
  statename: "",
  cityname: "",
  bathrooms: "",
  toilets: "",
  furnishing: "",
};

const Search = () => {
  const [values, setValues] = useState(initialState);
  const [city, setCity] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();
  const { property_type, statename, cityname, bathrooms, toilets, furnishing } =
    values;

  // handleChange method
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // get the city method
  useEffect(() => {
    statesdata.filter((item) => {
      if (item.state === statename) {
        setCity(item.lgas);
      }
    });
  }, [statename]);

  // handlefilter method
  const handleFilter = (e) => {
    e.preventDefault();
    const newData = {
      property_type,
      statename,
      cityname,
      bathrooms,
      toilets,
      furnishing,
      min_price: minPrice,
      max_price: maxPrice,
    };

    dispatch({ type: ACTIONS.CHECKLOAD, payload: true });
    dispatch({ type: ACTIONS.CALLBACK, payload: !state.callback });
    localStorage.setItem("filter", JSON.stringify(newData));

    router.push("/listings");
  };

  //

  return (
    <section className="white main-search">
      <div className="container">
        <div className="row search">
          <div className="col-md-6 search-left">
            <h3
              className="mb-5"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="400"
            >
              Search for available apartments
            </h3>

            <div className="search-box">
              <form onSubmit={handleFilter}>
                <div className="box">
                  <select
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="200"
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="property_type"
                    value={property_type}
                  >
                    <option defaultValue>Select property type</option>
                    {propertyData.map((item) => {
                      return (
                        <option key={item.id} value={item.value}>
                          {item.value}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="400"
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="bathrooms"
                    value={bathrooms}
                  >
                    <option defaultValue>Choose bathroom</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>

                  <select
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="600"
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="toilets"
                    value={toilets}
                  >
                    <option defaultValue>Choose toilet</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>

                  <select
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="800"
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="statename"
                    value={statename}
                  >
                    <option defaultValue>Select state</option>
                    {statesdata.map((item, index) => {
                      return (
                        <option key={index} value={item.state}>
                          {item.state}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="1000"
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="cityname"
                    value={cityname}
                  >
                    <option defaultValue>Select city</option>
                    {city?.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="1200"
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="furnishing"
                    value={furnishing}
                  >
                    <option defaultValue>Choose furnishing</option>
                    {furnishingdata.map((item) => {
                      return (
                        <option key={item.id} value={item.value}>
                          {item.value}
                        </option>
                      );
                    })}
                  </select>

                  <input
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="1400"
                    type="text"
                    onChange={(e) =>
                      setMinPrice(strictAddComma(e.target.value))
                    }
                    placeholder="min_price"
                    value={minPrice}
                  />

                  <input
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="1600"
                    type="text"
                    onChange={(e) =>
                      setMaxPrice(strictAddComma(e.target.value))
                    }
                    placeholder="max_price"
                    value={maxPrice}
                  />

                  <button
                    className="btn"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="1800"
                  >
                    Search
                    <i className="bi bi-arrow-right-circle"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6 search-right">
            <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
              <div className="loader">
                <span></span>
              </div>
              {/* <Image src={searchImg} alt="picture" className="searchimg" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
