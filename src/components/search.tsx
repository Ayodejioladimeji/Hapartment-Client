import propertyData from "@/constants/propertyData";
import furnishingdata from "@/constants/furnishingdata";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import searchImg from "../../public/images/search-image.svg";
import { statesdata } from "@/constants/statesdata";
import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";
import { formatMoney, removeNum } from "@/utils/utils";

const initialState = {
  property_type: "",
  search: "",
};

const Search = () => {
  const [values, setValues] = useState(initialState);
  const [city, setCity] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();
  const { property_type, search } = values;

  // handleChange method
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // get the city method
  useEffect(() => {
    statesdata.filter((item) => {
      if (item.state === search) {
        setCity(item.lgas);
      }
    });
  }, [search]);

  // handlefilter method
  const handleFilter = async (e:any) => {
    e.preventDefault();
    const newData = {
      property_type: property_type.toLowerCase(),
      search: search.toLowerCase(),
      min_price: removeNum(minPrice),
      max_price: removeNum(maxPrice),
      page: 1,
    };

    router.push({
      pathname: "/listings",
      query: newData,
    });
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
                    <option defaultValue="">Select property type</option>
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
                    data-aos-delay="800"
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="search"
                    value={search}
                  >
                    <option defaultValue="">Select state</option>
                    {statesdata.map((item, index) => {
                      return (
                        <option key={index} value={item.state}>
                          {item.state}
                        </option>
                      );
                    })}
                  </select>

                  <input
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="1400"
                    type="text"
                    onChange={(e) => setMinPrice(formatMoney(e.target.value))}
                    placeholder="min_price"
                    value={minPrice}
                  />

                  <input
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="1600"
                    type="text"
                    onChange={(e) => setMaxPrice(formatMoney(e.target.value))}
                    placeholder="max_price"
                    value={maxPrice}
                  />

                  <span
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="1800"
                  >
                    <button className="btn">
                      Search
                      <i className="bi bi-arrow-right-circle"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6 search-right ">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="200"
              style={{ borderRadius: "50%", overflow: "hidden" }}
            >
              <Image src={searchImg} alt="picture" className="searchimg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
