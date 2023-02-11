import Link from "next/link";
import Footer from "./footer";
import Header from "./header";
import { useContext, useEffect } from "react";
import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";
import { getDataApis } from "@/utils/fetchData";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    getAllData();
  }, []);

  // Get all listings on Click
  const getAllData = async (e) => {
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

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
