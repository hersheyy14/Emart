import { CartProvider } from "../context/cartContext";

const { cart } = CartProvider();

export const TotalAmount = () => {
  const amount = cart.reduce((price, item) => {
    return price + item.qty * item.price;
  }, 0);
  const totalAmount = amount.toFixed(2);
  console.log(totalAmount);
};
