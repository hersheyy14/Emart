import { useCartProducts } from "../../context/cartContext";
import "./card.css";

const Card = (props) => {
  const { product } = props;
  const { id, title, description, image, price } = product;
  const { addToCart } = useCartProducts();
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="product-img" />
        <div className="card-body">
          <h5 className="card-title">{title.substring(0, 20)}...</h5>
          <p className="card-text">{description.substring(0, 30)}...</p>
        </div>
        <div className="card-cart">
          <p className="card-price">₹ {price}</p>
          <p className="btn btn-dark" onClick={() => addToCart(id, product, 1)}>
            Add To Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
