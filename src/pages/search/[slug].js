import { useState, useContext, useEffect } from "react";

import Card from "@/common/card";
import Image from "next/image";
import banner1 from "../../../public/images/banner1.jpeg";
import banner2 from "../../../public/images/banner2.jpeg";
import banner3 from "../../../public/images/banner3.jpeg";
import banner4 from "../../../public/images/banner4.jpeg";
import banner5 from "../../../public/images/banner5.jpeg";
import LoadMore from "@/common/loadmore";
import Goback from "@/common/goback";
import Head from "next/head";
import Modalsearch from "@/components/modalsearch";
import Placeholder from "@/common/placeholder";
import { useRouter } from "next/router";
import { getDataApis } from "@/utils/fetchData";
import { filterValue, sortValue } from "@/utils/utils";
import { statesdata } from "@/constants/statesdata";
import propertyData from "@/constants/propertyData";
import furnishingdata from "@/constants/furnishingdata";
import { strictAddComma } from "comma-separator";

//
const initialState = {
  property_type: "",
  statename: "",
  city: "",
  bathrooms: "",
  toilets: "",
  furnishing: "",
};

//

const SearchListings = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(9);
  const router = useRouter();
  const cityname = router.query.slug;
  const [sorting, setSorting] = useState("");
  const [sort, setSort] = useState("");

  // Sorting the data
  const sortdata = filterValue(listings, sort);
  const sorted = sortValue(sortdata, sorting);

  // useEffect
  useEffect(() => {
    if (cityname !== undefined) {
      const getListing = async () => {
        const city = cityname?.charAt(0).toUpperCase() + cityname?.slice(1);
        const res = await getDataApis(`/search_listing?cityname=${city}`);
        setListings(res.data);
        setLoading(false);
      };
      getListing();
    }
  }, [cityname]);

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
                Properties for rent in <span>{cityname}</span>
              </h4>
            </div>
            <button
              className="btn mb-4 filteroptions"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Filter Options
            </button>
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
                <div className="unavailable text-center">
                  Listings not available
                </div>
              )}

              {visible > sorted?.length || loading || sorted?.length === 0 ? (
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

export default SearchListings;
