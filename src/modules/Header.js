import { TiThMenu } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";
import pfp from "../assets/noavatar.png";

<script
  src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
  crossorigin
></script>;
const Header = ({ toggleSidebar }) => {
  return (
    <div className="head-nav">
      <div className="head-left">
        <div onClick={toggleSidebar} className="side-menu">
          <TiThMenu />
        </div>
        <div className="side-menu">
          <IoMdNotifications />
        </div>
      </div>
      <div>
        <img className="head-pfp" src={pfp} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
