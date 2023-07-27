import "./footer.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="f-container">
      <Link className="link" to="/">
        <div className="left-item">
          <HomeIcon />
          <p className="categories">Home</p>
        </div>
      </Link>
      <Link className="link" to="/myorder">
        <div className="center-item">
          <ShoppingBagIcon />
          <p className="categories">My Orders</p>
        </div>
      </Link>
      <Link className="link" to="/account">
        <div className="right-item">
          <PersonIcon />
          <p className="categories">Account</p>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
