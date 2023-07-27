import "./account.css";
import ShopIcon from "@mui/icons-material/Shop";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";

const Account = () => {
  return (
    <div className="a-container">
      <div className="account-name">My Account</div>
      <div className="account-container">
        <p className="title">Welcome</p>
        <div className="item-container">
          <ShopIcon />
          <p>Orders</p>
        </div>
        <div className="item-container">
          <FavoriteBorderIcon />
          <p>Favorites</p>
        </div>
        <div className="item-container">
          <PersonOutlineIcon />
          <p>Personal data</p>
        </div>
        <div className="item-container">
          <LockIcon />
          <p>Change password</p>
        </div>
        <div className="item-container">
          <HomeIcon />
          <p>Address</p>
        </div>
        <div className="item-container">
          <LogoutIcon />
          <p>Signout</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
