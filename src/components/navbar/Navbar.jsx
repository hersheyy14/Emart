import "./navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import { useState } from "react";
import Share from "../share/Share";
import { useCartProducts } from "../../context/cartContext";

const Navbar = () => {
  const [showShare, setShowShare] = useState(false);
  const { cart } = useCartProducts;

  const handleShare = () => {
    setShowShare(!showShare);
    // setTimeout(() => {
    //   setShowShare(false);
    // }, 8000);
  };

  return (
    <nav className="n-container">
      <div className="left-container">
        <p className="logo">Emart</p>
      </div>
      <div className="right-container">
        <ul>
          <Link to="/cart" className="link">
            <li>
              <ShoppingCartIcon />
              <p className="item-name">Cart(0)</p>
              {/* <p className="item-name">Cart({cart.length})</p> */}
            </li>
          </Link>

          <li>
            <button
              className="refresh-button"
              onClick={() => {
                window.location.reload();
              }}
            >
              <RefreshIcon />
              <p className="item-name">refresh</p>
            </button>
          </li>
          <li className="item-share">
            <ShareIcon />
            <p onClick={handleShare} className="item-name">
              Share
            </p>
            {showShare && <Share />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
