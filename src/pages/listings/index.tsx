import { useState, useContext, useEffect, useCallback } from "react";
import Card from "@/common/card";
import Image from "next/image";
import banner1 from "/public/images/banner1.jpeg";
import LoadMore from "@/common/loadmore";
import Goback from "@/common/goback";
import Head from "next/head";
import Modalsearch from "@/components/modalsearch";
import Placeholder from "@/common/placeholder";
import { getDataApis } from "@/utils/fetchData";
import { DataContext } from "@/store/GlobalState";
import { ACTIONS } from "@/store/Actions";
import { Modal } from "react-bootstrap";
import AdvertiseModal from "@/common/advertiseModal";
import { useRouter } from "next/router";
import Paginate from "@/components/pagination/Paginate";

const Listings = () => {
  const { state, dispatch } = useContext(DataContext);
  const { listings, loading } = state;
  const [city, setCity] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const PageSize = 48;
  const router = useRouter();

  const {
    page = "1",
    search,
    property_type,
    min_price,
    max_price,
    sort,
    sorting,
  } = router.query;

  const fetchListings = useCallback(async () => {
    try {
      const queryParams = new URLSearchParams();
      const query = {
        page: page.toString(),
        pageSize: PageSize.toString(),
        search,
        property_type,
        min_price,
        max_price,
        sort,
        sorting,
      };

      for (const key in query) {
        if (query[key]) {
          queryParams.append(key, query[key] as string);
        }
      }

      const res = await getDataApis(`/listing?${queryParams.toString()}`);

      dispatch({ type: ACTIONS.GET_LISTINGS, payload: res?.data?.listings });
      setTotalCount(res.data.totalCount || 0);
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      dispatch({ type: ACTIONS.LOADING, payload: false });
    }
  }, [
    page,
    search,
    property_type,
    min_price,
    max_price,
    sort,
    sorting,
    dispatch,
  ]);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  const updateQuery = (params: Record<string, any>) => {
    const currentQuery = { ...router.query, ...params };

    // Clean undefined or "0" values (used to reset filters)
    Object.keys(currentQuery).forEach((key) => {
      if (currentQuery[key] === undefined || currentQuery[key] === "0") {
        delete currentQuery[key];
      }
    });

    router.push({
      pathname: router.pathname,
      query: currentQuery,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("Please enter a city or state name");
      setTimeout(() => setError(""), 2000);
      return;
    }

    updateQuery({ search: city.toLowerCase(), page: 1 });
  };

  const handlePropertyTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    updateQuery({
      property_type: e.target.value === "0" ? undefined : e.target.value,
      page: 1,
    });
  };

  const handleSortingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateQuery({
      sorting: e.target.value === "0" ? undefined : e.target.value,
      page: 1,
    });
  };

  const handlePageChange = (newPage: number) => {
    updateQuery({ page: newPage });
  };

  return (
    <div>
      <Head>
        <title>Hapartment - Property Listings</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.hapartment.org/listings/"
          key="canonical"
        />
        <meta
          name="description"
          content="Hapartment provides a secure and reliable digital marketplace for renting apartments."
        />
        {/* Other meta tags omitted for brevity */}
      </Head>

      <section className="white search-listing mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="filter-box">
                <div className="mb-3 d-flex align-items-center">
                  <Goback />
                  <h1>Properties for rent</h1>
                </div>

                <form onSubmit={handleSubmit} className="row">
                  <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="quick-search">
                      <div className="form-control d-flex align-items-center">
                        <i className="bi bi-geo-alt"></i>
                        <input
                          type="text"
                          placeholder="Enter your state or city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <span className="d-block text-danger">{error}</span>

                      <div className="d-flex align-items-center">
                        <button type="submit" className="btn hero-btn">
                          Search
                        </button>
                        {/* <button
                          type="button"
                          className="btnfilteroptions"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Filter Options
                        </button> */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-3 d-none d-lg-block">
              <div className="advert-image-box mb-5">
                <Image src={banner1} alt="picture" title="picture" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="filter mb-5 d-flex align-items-center justify-content-between">
            <div>
              {loading
                ? "Loading results"
                : `Showing ${listings?.length} of ${totalCount} result${
                    listings?.length !== 1 ? "s" : ""
                  }`}
            </div>

            <div className="filter-container">
              <div className="filtering">
                <select
                  className="form-select"
                  onChange={handlePropertyTypeChange}
                  value={property_type || "0"}
                >
                  <option value="0">All Listings</option>
                  <option value="Single Room">Single Room</option>
                  <option value="Room Parlour">Room Parlour</option>
                  <option value="Room Parlour Self Contain">
                    Room Parlour Self Contain
                  </option>
                  <option value="Self Contain">Self Contain</option>
                  <option value="2 Bedroom Flat">2 Bedroom Flat</option>
                  <option value="3 Bedroom Flat">3 Bedroom Flat</option>
                  <option value="4 Bedroom Flat">4 Bedroom Flat</option>
                  <option value="5+ Bedroom Flat">5+ Bedroom Flat</option>
                  <option value="Duplex">Duplex</option>
                </select>
              </div>

              <div className="filtering">
                <select
                  className="form-select"
                  onChange={handleSortingChange}
                  value={sorting || "0"}
                >
                  <option value="0">Default</option>
                  <option value="lowest_price">Lowest Price</option>
                  <option value="highest_price">Highest Price</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-sm-12">
              {loading ? (
                <div className="list-box">
                  <Placeholder />
                </div>
              ) : (
                <>
                  {listings?.length === 0 ? (
                    <div className="unavailable d-flex align-items-center justify-content-center">
                      No available data
                    </div>
                  ) : (
                    <div className="list-box">
                      {listings?.map((item) => (
                        <Card {...item} key={item._id} />
                      ))}
                    </div>
                  )}
                </>
              )}

              {!loading && listings.length > 0 && totalCount > PageSize && (
                <div className="page-navigation mt-5">
                  <Paginate
                    className="pagination-bar"
                    currentPage={Number(page)}
                    totalCount={totalCount}
                    pageSize={PageSize}
                    onPageChange={handlePageChange}
                    loading={loading}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for filter */}
      <div className="modal fade" id="exampleModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Advanced filter options</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              <Modalsearch />
            </div>
          </div>
        </div>
      </div>

      <Modal show={openModal} dialogClassName="advertise-modal">
        <AdvertiseModal setOpenModal={setOpenModal} />
      </Modal>
    </div>
  );
};

export default Listings;
