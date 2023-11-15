import React from "react";
import "./dashboard.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import DashTile from "./DashTile";
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
      <div className="dash-div">
        College Details
        <DashTile title={"KTU ID"} value={"TVE21CS000"} />
        <DashTile title={"Branch"} value={"CSE"} />
        <DashTile title={"Semester"} value={"S5"} />
        <DashTile empty />
      </div>

      <div className="dash-div">
        Personal Details
        <DashTile title={"email"} value={"examplemail@gmail.com"} />
        <DashTile title={"phone number"} value={9090909090} />
        <DashTile title={"gender"} value={"Male"} />
        <DashTile title={"DOB"} value={"01/01/2002"} />
      </div>

      <div className="dash-div">
        Hostel Details
        <DashTile title={"Hostel ID"} value={"MH-9999"} />
        <DashTile title={"Block Number"} value={1} />
        <DashTile title={"Room Number"} value={101} />
        <DashTile empty />
      </div>
    </div>
  );
}
