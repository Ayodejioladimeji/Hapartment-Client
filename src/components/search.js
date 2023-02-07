import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import searchImg from "../../public/search-image.svg";

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

  // handlefilter method
  const handleFilter = (e) => {
    e.preventDefault();

    console.log(values);
  };

  //

  return (
    <section className="white main-search">
      <div className="container">
        <div className="row search">
          <div className="col-md-6 search-left">
            <h3 className="mb-5">Search for available apartments</h3>

            <div className="search-box">
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
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="statename"
                    value={statename}
                  >
                    <option defaultValue>Choose bathroom</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="cityname"
                    value={cityname}
                  >
                    <option defaultValue>Choose toilet</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="bathrooms"
                    value={bathrooms}
                  >
                    <option defaultValue>Select state</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="toilets"
                    value={toilets}
                  >
                    <option defaultValue>Select city</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="furnishing"
                    value={furnishing}
                  >
                    <option defaultValue>Choose furnishing</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="min_price"
                    value={min_price}
                  >
                    <option defaultValue>Min price / annum</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    onChange={handleChange}
                    className="form-select "
                    aria-label="Default select example"
                    name="max_price"
                    value={max_price}
                  >
                    <option defaultValue>Max price / annum</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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
