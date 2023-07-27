import { createContext, useContext, useReducer } from "react";
import reducer from "../components/reducer/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  qty: "",
  // total_amount: "",
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, product, qty) => {
    console.log(id, product, qty);
    dispatch({ type: "ADD_TO_CART", payload: { id, product, qty } });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: { id } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, increase, decrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartProducts = () => {
  return useContext(CartContext);
};

export { useCartProducts };
