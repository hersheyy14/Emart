import { useCartProducts } from "../../context/cartContext";
import "./cart.css";

const Cart = () => {
  const { cart, decrease, increase } = useCartProducts();

  const amount = cart.reduce((price, item) => {
    return price + item.qty * item.price;
  }, 0);
  const totalAmount = amount.toFixed(2);
  console.log(totalAmount);

  return (
    <div className="cart-bg">
      <div className="cart-container">
        <span className="cart-title">Shopping Cart</span>
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <img
                className="item-image"
                src={product.image}
                alt="productimage"
              />
              <div className="name-price">
                <span className="cart-name">
                  {product.title.substring(0, 20)}
                </span>
                <span className="item-price">₹ {product.price}</span>
              </div>
              <div className="item-button-div">
                <button
                  className="item-button"
                  onClick={() => {
                    decrease(product.id);
                  }}
                >
                  -
                </button>
                <span className="quantity">{product.qty}</span>
                <button
                  className="item-button"
                  onClick={() => increase(product.id)}
                >
                  +
                </button>
              </div>
              <div className="item-amount">
                Amount={product.qty * product.price}
              </div>
            </div>
          );
        })}
        <hr></hr>
        <div className="total">Sub Total = ₹ {amount}</div>
      </div>
    </div>
  );
};

export default Cart;
