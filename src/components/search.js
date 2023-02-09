import propertyData from "@/constants/propertyData";
import furnishingdata from "@/constants/furnishingdata";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import searchImg from "../../public/search-image.svg";
import { prices } from "@/constants/prices";
import { statesdata } from "@/constants/statesdata";

const initialState = {
  property_type: "",
  statename: "",
  cityname: "",
  bathrooms: "",
  toilets: "",
  furnishing: "",
  min_price: "",
  max_price: "",
};

const Search = () => {
  const [values, setValues] = useState(initialState);
  const [city, setCity] = useState([]);

  const router = useRouter();
  const {
    property_type,
    statename,
    cityname,
    bathrooms,
    toilets,
    furnishing,
    min_price,
    max_price,
  } = values;

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
    sessionStorage.setItem("filter", JSON.stringify(values));
    router.push("/listings");
  };

  //

  return (
    <section className="white main-search">
      <div className="container">
        <div className="row search">
          <div className="col-md-6 search-left">
            <h3 className="mb-5">Search for available apartments</h3>

            <div className="filter-box">
              <form onSubmit={handleFilter}>
                <div className="box">
                  <select
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
                      type="text"
                      onChange={handleChange}
                      placeholder="min_price"
                      name="min_price"
                      value={min_price}
                      className="input"
                    />
               

                  <select
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="max_price"
                    value={max_price}
                  >
                    <option defaultValue>Max price / annum</option>
                    {prices.map((item) => {
                      return (
                        <option key={item.id} value={item.value}>
                          {item.value}
                        </option>
                      );
                    })}
                  </select>

                  <button className="btn">
                    Search
                    <i className="bi bi-arrow-right-circle"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6 search-right">
            <Image src={searchImg} alt="" className="searchimg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
