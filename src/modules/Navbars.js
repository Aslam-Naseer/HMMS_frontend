import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./navbars.css";

const Navbars = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar((s) => !s);
  };
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} />
    </>
  );
};

export default Navbars;
