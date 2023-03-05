import Link from "next/link";
import Footer from "./footer";
import Header from "./header";
import { useContext, useEffect } from "react";
import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";
import { getDataApis } from "@/utils/fetchData";
import Widget from "@/common/widget";
import Navbars from "./navbar";

const Layout = ({ children }) => {
  const { dispatch } = useContext(DataContext);

  // Get all listings on Click

  useEffect(() => {
    const getAllData = async (e) => {
      try {
        dispatch({ type: ACTIONS.LOADING, payload: true });

        const res = await getDataApis("/all_listing");

        dispatch({ type: ACTIONS.ALL_LISTINGS, payload: res.data });
        dispatch({ type: ACTIONS.LOADING, payload: false });
      } catch (error) {
        console.log(error);
        dispatch({ type: ACTIONS.LOADING, payload: false });
      }
    };
    getAllData();
  }, [dispatch]);

  return (
    <>
      <Navbars />
      {children}
      <Footer />
      <Widget />
    </>
  );
};

export default Layout;
