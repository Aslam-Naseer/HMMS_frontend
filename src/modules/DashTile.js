import React from "react";

const DashTile = ({ title, value, empty }) => {
  return (
    <div className={`${empty ? "dash-tile dash-tile-empty" : "dash-tile"}`}>
      <div className="title">{title ? title : "."}</div>
      <div className="value">{value ? value : "."}</div>
    </div>
  );
};

export default DashTile;
