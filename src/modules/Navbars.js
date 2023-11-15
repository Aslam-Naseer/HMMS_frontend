import { TiThMenu } from "react-icons/ti";
import { BiSolidBowlRice, BiBookContent, BiSolidHome } from "react-icons/bi";

import { IoMdNotifications } from "react-icons/io";
import pfp from "../assets/noavatar.png";

import "./navbars.css";

<script
  src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
  crossorigin
></script>;
const Navbars = () => {
  return (
    <div className="head-nav">
      <div className="head-left">
        <div>Hey there,</div>
        <div>Sumu Divakaran!</div>
      </div>
      <div className="head-right">
        <div className="icons">
          <div className="head-btn">Home</div>
          <div className="head-btn">Menu</div>
          <div className="head-btn">Mess</div>
        </div>
        <div>
          <span>
            <IoMdNotifications />
          </span>
          <img className="head-pfp" src={pfp} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbars;
