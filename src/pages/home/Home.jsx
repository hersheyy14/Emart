import Products from "../../components/products/Products";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-container">
        <img
          className="home-img"
          src="https://t4.ftcdn.net/jpg/04/41/93/11/360_F_441931135_BUUjqGfYM0QMCx5OVe53JXK42NODMZ8m.jpg"
          alt="img-1"
        />
        <h3>Explore The Collections</h3>
        <Products />
      </div>
    </div>
  );
};

export default Home;
