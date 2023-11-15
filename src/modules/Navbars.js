import { IoMdNotifications } from "react-icons/io";
import pfp from "../assets/noavatar.png";

import "./navbars.css";
import { Link, useLocation } from "react-router-dom";

<script
  src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
  crossorigin
></script>;
const Navbars = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="head-nav">
      <div className="head-left">
        <div>Hey there,</div>
        <div>Sumu Divakaran!</div>
      </div>
      <div className="head-right">
        <div className="icons">
          <Link to={"/home"}>
            <div
              className={
                pathname === "/home" ? "head-btn current-head-btn" : "head-btn"
              }
            >
              Home
            </div>
          </Link>
          <Link to={"/menu"}>
            <div
              className={
                pathname === "/menu" ? "head-btn current-head-btn" : "head-btn"
              }
            >
              Menu
            </div>
          </Link>
          <Link to={"/mess"}>
            <div
              className={
                pathname === "/mess" ? "head-btn current-head-btn" : "head-btn"
              }
            >
              Mess
            </div>
          </Link>
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
