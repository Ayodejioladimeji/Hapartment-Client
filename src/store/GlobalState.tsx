import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducers";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    allListings: [],
    listings: [],
    loading: true,
    downloadModal: false,
    newsModal: false,
    contactModal: false,
    checkload: true,
    callback: false,
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
