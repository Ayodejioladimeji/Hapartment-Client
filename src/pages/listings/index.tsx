import { useState, useContext, useEffect, useCallback } from "react";
import Card from "@/common/card";
import Image from "next/image";
import banner1 from "/public/images/banner1.jpeg";
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
import Listing from "./listing";

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
    search = "",
    property_type = "",
    min_price = "",
    max_price = "",
    sort = "", // This param is not currently used by your select, `sorting` is. Keeping for completeness.
    sorting = "",
  } = router.query;

  const fetchListings = useCallback(async () => {
    dispatch({ type: ACTIONS.LOADING, payload: true }); // Set loading to true at the start of fetch
    try {
      const queryParams = new URLSearchParams();
      if (page) queryParams.append("page", page as string);
      if (PageSize) queryParams.append("pageSize", PageSize.toString()); // Ensure pageSize is always sent
      if (search) queryParams.append("search", search as string);
      if (property_type) queryParams.append("property_type", property_type as string);
      if (min_price) queryParams.append("min_price", min_price as string);
      if (max_price) queryParams.append("max_price", max_price as string);
      if (sort) queryParams.append("sort", sort as string);
      if (sorting) queryParams.append("sorting", sorting as string); // Add sorting parameter

      console.log("Fetching listings with query:", queryParams.toString()); // Log the actual query

      const res = await getDataApis(`/listing?${queryParams.toString()}`);

      dispatch({ type: ACTIONS.GET_LISTINGS, payload: res?.data?.listings || [] });
      setTotalCount(res.data.totalCount || 0);
    } catch (error) {
      console.error("Error fetching listings:", error);
      dispatch({ type: ACTIONS.GET_LISTINGS, payload: [] }); // Clear listings on error
      setTotalCount(0);
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
    PageSize // Include PageSize in dependencies as it's used
  ]);

  useEffect(() => {
    // Only fetch if router.isReady to ensure query params are available
    if (router.isReady) {
      fetchListings();
    }
  }, [fetchListings, router.isReady]); // Depend on router.isReady

  const updateQuery = (params: Record<string, any>) => {
    const currentQuery = { ...router.query };

    // Apply new parameters
    for (const key in params) {
      const value = params[key];
      if (value === undefined || value === null || value === "" || value === "0") {
        delete currentQuery[key]; // Remove if undefined, null, empty string, or "0"
      } else {
        currentQuery[key] = value;
      }
    }

    router.push({
      pathname: router.pathname,
      query: currentQuery,
    }, undefined, { shallow: true }); // Use shallow routing for client-side transitions
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
      page: 1, // Reset to page 1 when filter changes
    });
  };

  const handleSortingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateQuery({
      sorting: e.target.value === "0" ? undefined : e.target.value,
      page: 1, // Reset to page 1 when sort changes
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
      </Head>

      <Listing/>
    </div>
  );
};

export default Listings;