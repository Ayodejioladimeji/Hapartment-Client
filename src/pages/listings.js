import { useState, useContext, useEffect } from "react";

import Card from "@/common/card";
import Image from "next/image";
import banner1 from "../../public/images/banner1.jpeg";
import banner2 from "../../public/images/banner2.jpeg";
import banner3 from "../../public/images/banner3.jpeg";
import banner4 from "../../public/images/banner4.jpeg";
import banner5 from "../../public/images/banner5.jpeg";
import LoadMore from "@/common/loadmore";
import Goback from "@/common/goback";
import Head from "next/head";
import Modalsearch from "@/components/modalsearch";
import Placeholder from "@/common/placeholder";
import { filterValue, sortValue } from "@/utils/utils";
import { getDataApis } from "@/utils/fetchData";
import { DataContext } from "@/store/GlobalState";
import { ACTIONS } from "@/store/Actions";
// import Map from "@/utils/map";

//

const Listings = () => {
  const { state, dispatch } = useContext(DataContext);
  const { listings, loading } = state;
  const { checkload } = state;
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(0);
  const [sorting, setSorting] = useState("");
  const [sort, setSort] = useState("");
  const [localData, setLocalData] = useState(null);
  const [cityname, setCityname] = useState("");
  const [error, setError] = useState("");

  // display data randomly on the client side
  // const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  // const sortingData = shuffle(listings);

  // Sorting the data
  const sortdata = filterValue(listings, sort);
  const sorted = sortValue(sortdata, sorting);

  // To get data from the localstorage

  useEffect(() => {
    if (checkload) {
      const data = sessionStorage.getItem("filter");
      const parsedData = JSON.parse(data);
      setLocalData(parsedData);
    }

    // setVisible(
    //   sessionStorage.getItem("visible") !== null
    //     ? sessionStorage.getItem("visible")
    //     : 9
    // );
  }, []);

  // a function to get the data
  const getSingleData = async () => {
    try {
      dispatch({ type: ACTIONS.LOADING, payload: true });
      const { cityname } = localData;

      const city = cityname?.charAt(0).toUpperCase() + cityname?.slice(1);
      const res = await getDataApis(`/search_listing/${city}`);
      dispatch({ type: ACTIONS.GET_LISTINGS, payload: res.data });
      dispatch({ type: ACTIONS.LOADING, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTIONS.LOADING, payload: false });
    }
  };

  const getMultipleData = async () => {
    try {
      dispatch({ type: ACTIONS.LOADING, payload: true });

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

      const res = await getDataApis(
        `/filter_listing?property_type=${property_type}&statename=${statename}&cityname=${cityname}&bathrooms=${bathrooms}&toilets=${toilets}&furnishing=${furnishing}&min_price=${min_price}&max_price=${max_price}`
      );

      dispatch({ type: ACTIONS.GET_LISTINGS, payload: res.data });
      dispatch({ type: ACTIONS.LOADING, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTIONS.LOADING, payload: false });
    }
  };

  const getAllData = async () => {
    try {
      dispatch({ type: ACTIONS.LOADING, payload: true });

      const res = await getDataApis("/all_listing");
      dispatch({ type: ACTIONS.GET_LISTINGS, payload: res.data });
      dispatch({ type: ACTIONS.LOADING, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTIONS.LOADING, payload: false });
    }
  };



  // useEffect
  useEffect(() => {
    if (localData !== null && checkload) {
      
      if (Object?.keys(localData).length === 1) {
        console.log("single")
        getSingleData();
      } else {
        console.log("multiple")
        getMultipleData();
      }
    } else if (localData !== null && checkload) {
      console.log("all data");
      getAllData();
    }

  }, [checkload, localData]);

  //

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cityname === "") {
      setError("Please enter city name");

      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    try {
      dispatch({ type: ACTIONS.LOADING, payload: true });
      dispatch({ type: ACTIONS.CHECKLOAD, payload: true });

      const newData = {
        cityname,
      };

      const city = cityname?.charAt(0).toUpperCase() + cityname?.slice(1);

      const res = await getDataApis(`/search_listing/${city}`);

      dispatch({ type: ACTIONS.GET_LISTINGS, payload: res.data });
      dispatch({ type: ACTIONS.LOADING, payload: false });
      sessionStorage.setItem("filter", JSON.stringify(newData));
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTIONS.LOADING, payload: false });
    }
  };

  //

  return (
    <>
      <Head>
        <title>Hapartment - Property Listings</title>
        <meta
          name="description"
          content="Hapartment provides a secure and reliable digital marketplace for renting apartments."
        />
        <meta
          name="keywords"
          content="Hapartment,Available apartments,Apartment for rent,Available apartment near me,Home for rent near me, hapartment, real estate, agents, landlord, tenant, rentingwebsite, apartment, renthouse, leasinghouse "
        />
        <meta property="og:title" content="Hapartment - Property Listings" />
        <meta
          property="og:description"
          content="Hapartment is your one place to find apartments and manage your rentals"
        />

        <meta
          property="og:url"
          content="https://demo.hapartment.org/listings"
        />
        <meta name="twitter:card" content="Hapartment" />

        <meta name="robots" content="index, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Hapartment Digital Marketplace" />

        <meta
          property="og:site_name"
          content="Hapartment Digital Marketplace"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.18_PM_1_za9hx3.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>

      <section className="white  search-listing mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="filter-box">
                <div className="mb-3 d-flex align-items-center">
                  <Goback />
                  {localData !== null ? (
                    <h4>
                      Properties for rent in <span>{localData?.cityname}</span>
                    </h4>
                  ) : (
                    <h4>All properties for rent</h4>
                  )}
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="quick-search">
                      <div className="form-control d-flex align-items-center">
                        <i className="bi bi-geo-alt"></i>
                        <input
                          type="text"
                          placeholder="Enter your search"
                          value={cityname}
                          onChange={(e) => setCityname(e.target.value)}
                        />
                      </div>

                      <span className="d-block text-danger">{error}</span>

                      <div className="d-flex align-items-center">
                        <button className="btn hero-btn" onClick={handleSubmit}>
                          Search
                        </button>
                        <button
                          className="btnfilteroptions"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Filter Options
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 d-none d-lg-block">
              <div className="advert-image-box mb-5">
                <Image src={banner4} alt="picture" title="picture" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="filter mb-5 d-flex align-items-center justify-content-between">
            {/* <div>
              {sorted.length > visible
                ? `Results ${visible} of ${sorted.length}`
                : `Results ${sorted.length} of ${sorted.length}`}
            </div> */}

            <div>
              Showing {sorted.length} {sorted.length > 1 ? "results" : "result"}
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
                    // .slice(0, visible)
                    .map((item) => <Card {...item} key={item._id} />)
                )}
              </div>

              {!loading && sorted.length === 0 && (
                <div className="unavailable d-flex align-items-center justify-content-center">
                  No available data
                </div>
              )}

              {/* {visible > sorted.length || loading || sorted.length === 0 ? (
                ""
              ) : (
                <LoadMore
                  load={load}
                  setLoad={setLoad}
                  visible={visible}
                  setVisible={setVisible}
                />
              )} */}
            </div>

            <div className="col-lg-3 ">
              <div className="advert-image-box mb-5">
                <Image src={banner1} alt="picture" title="picture" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner5} alt="picture" title="picture" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner2} alt="picture" title="picture" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner3} alt="picture" title="picture" />
              </div>
              {/* <div className="advert-image-box mb-5">
                <Image src={banner4} alt="picture" />
              </div> */}
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
