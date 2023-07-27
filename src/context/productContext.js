import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../components/reducer/productReducer";

const AppContext = createContext();

const API = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
  isError: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { useProductContext, AppContext, AppProvider };
