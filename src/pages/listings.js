import { useState, useContext, useEffect } from "react";

import Card from "@/common/card";
import Image from "next/image";
import banner1 from "../../public/banner1.jpeg";
import banner2 from "../../public/banner2.jpeg";
import banner3 from "../../public/banner3.jpeg";
import banner4 from "../../public/banner4.jpeg";
import banner5 from "../../public/banner5.jpeg";
import LoadMore from "@/common/loadmore";
import Goback from "@/common/goback";
import Head from "next/head";
import Modalsearch from "@/components/modalsearch";
import Placeholder from "@/common/placeholder";
import { filterValue, sortValue } from "@/utils/utils";
import { getDataApis } from "@/utils/fetchData";
import { useRouter } from "next/router";
import { statesdata } from "@/constants/statesdata";
import propertyData from "@/constants/propertyData";
import furnishingdata from "@/constants/furnishingdata";
import { strictAddComma } from "comma-separator";

//

const initialState = {
  property_type: "",
  statename: "",
  cityname: "",
  bathrooms: "",
  toilets: "",
  furnishing: "",
};

//

const Listings = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(9);
  const [sorting, setSorting] = useState("");
  const [sort, setSort] = useState("");
  const [localData, setLocalData] = useState(null);
  const [values, setValues] = useState(initialState);
  const [city, setCity] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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

  // Sorting the data
  const sortdata = filterValue(listings, sort);
  const sorted = sortValue(sortdata, sorting);

  useEffect(() => {
    // get data from the localstorage
    const data = sessionStorage.getItem("filter");
    const parsedData = JSON.parse(data);
    setLocalData(parsedData);
    setValues(parsedData);
  }, []);

  // useEffect
  useEffect(() => {
    if (localData !== null) {
      // destructure data from localData
      const {
        property_type,
        statename,
        cityname,
        bathrooms,
        toilets,
        furnishing,
        min_price,
        max_price,
      } = localData;

      const getListing = async () => {
        try {
          const res = await getDataApis(
            `/filter_listing?property_type=${property_type}&statename=${statename}&cityname=${cityname}&bathrooms=${bathrooms}&toilets=${toilets}&furnishing=${furnishing}&min_price=${min_price}&max_price=${max_price}`
          );

          setListings(res.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      getListing();
    }
  }, [localData]);

  // handlefilter method
  const handleFilter = async (e) => {
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

    try {
      setLoading(true);

      const res = await getDataApis(
        `/filter_listing?property_type=${property_type}&statename=${statename}&cityname=${cityname}&bathrooms=${bathrooms}&toilets=${toilets}&furnishing=${furnishing}&min_price=${newData.min_price}&max_price=${newData.max_price}`
      );

      setListings(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    sessionStorage.setItem("filter", JSON.stringify(newData));
  };

  return (
    <>
      <Head>
        <title>Properties</title>
        <meta name="Hapartment is your one place to find apartments and manage your rentals" />
      </Head>

      <section className="white  search-listing mt-5">
        <div className="container">
          <div className="filter-box">
            <div className="mb-3 d-flex align-items-center">
              <Goback />
              <h4>
                Properties for rent in <span>{localData?.cityname}</span>
              </h4>
            </div>
            <button
              className="btn mb-4 filteroptions"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Filter Options
            </button>

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
                  onChange={(e) => setMinPrice(strictAddComma(e.target.value))}
                  placeholder="min_price"
                  value={minPrice}
                  className="form-control input"
                />

                <input
                  type="text"
                  onChange={(e) => setMaxPrice(strictAddComma(e.target.value))}
                  placeholder="max_price"
                  value={maxPrice}
                  className="form-control input"
                />

                <button className="btn search-button">
                  Search
                  <i className="bi bi-arrow-right-circle"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="filter mb-5 d-flex align-items-center justify-content-between">
            <div>
              {listings.length > visible
                ? `Results ${visible} of ${listings.length}`
                : `Results ${listings.length} of ${listings.length}`}
            </div>

            <div className="filter-container">
              <div className="filtering">
                <select
                  className="form-select "
                  aria-label="Default select example"
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option defaultValue>All Listings</option>
                  <option value="1">Single Room</option>
                  <option value="2">Room & Parlour</option>
                  <option value="3">Room & Parlour Self contain</option>
                  <option value="4">Self Contain</option>
                  <option value="5">2 Bedroom Flat</option>
                  <option value="6">3 Bedroom Flat</option>
                  <option value="7">4 Bedroom Flat</option>
                  <option value="8">5+ Bedroom Flat</option>
                  <option value="9">Duplex</option>
                </select>
              </div>

              <div className="filtering">
                <select
                  className="form-select "
                  aria-label="Default select example"
                  onChange={(e) => setSorting(e.target.value)}
                >
                  <option defaultValue>Default</option>
                  <option value="1">Lowest Price</option>
                  <option value="2">Highest Price</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-9">
              <div className="list-box">
                {loading ? (
                  <Placeholder />
                ) : (
                  sorted
                    .slice(0, visible)
                    .map((item) => <Card {...item} key={item._id} />)
                )}
              </div>

              {!loading && sorted.length === 0 && (
                <div className="unavailable d-flex align-items-center justify-content-center">
                  No available data
                </div>
              )}

              {visible > listings.length || loading || listings.length === 0 ? (
                ""
              ) : (
                <LoadMore
                  load={load}
                  setLoad={setLoad}
                  setVisible={setVisible}
                />
              )}
            </div>

            <div className="col-lg-3 ">
              <div className="advert-image-box mb-5">
                <Image src={banner1} alt="" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner5} alt="" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner2} alt="" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner3} alt="" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner4} alt="" />
              </div>
              <div className="adverts-box mb-3">
                Place your Banner Adverts here
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The modal section */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Advanced filter options</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <Modalsearch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listings;
