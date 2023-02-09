import { useState, useContext, useEffect } from "react";

import Card from "@/common/card";
import { listingdata } from "@/lib/listingdata";
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

//

const Listings = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(9);
  const [sorting, setSorting] = useState("");
  const [sort, setSort] = useState("");
  const [localData, setLocalData] = useState(null);

  // Sorting the data
  const sortdata = filterValue(listings, sort);
  const sorted = sortValue(sortdata, sorting);

  console.log(loading, sorted);

  useEffect(() => {
    // get data from the localstorage
    const data = sessionStorage.getItem("filter");
    const parsedData = JSON.parse(data);
    setLocalData(parsedData);
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

  return (
    <>
      <Head>
        <title>Properties</title>
        <meta name="Hapartment is your one place to find apartments and manage your rentals" />
      </Head>

      <section className="white  search-listing mt-5">
        <div className="container">
          <div className="search-box">
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

            <div className="box">
              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option defaultValue>Select property type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option defaultValue>Choose bathroom</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option defaultValue>Choose toilet</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option defaultValue>Select state</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option defaultValue>Select city</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option defaultValue>Choose furnishing</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option defaultValue>Min price / annum</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option defaultValue>Max price / annum</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <button className="btn search-button">
                Search
                <i className="bi bi-arrow-right-circle"></i>
              </button>
            </div>
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

              {!loading && listings.length === 0 && (
                <div className=" no-data d-flex align-items-center justify-content-center">
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
