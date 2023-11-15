import React from "react";
import "./dashboard.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Dashboard() {
  const [list, setList] = useState({});
  const display = () => {
    fetch("http://127.0.0.1:5000/list", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hostelid: sessionStorage.getItem("key"),
      }),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setList(data);
      });
    });
  };
  return (
    <div className="dashboard">
      <div className="dash-div">Personal Details</div>
      <div className="dash-div">College Details</div>
      <div className="dash-div">Hostel Details</div>
    </div>
  );
}
