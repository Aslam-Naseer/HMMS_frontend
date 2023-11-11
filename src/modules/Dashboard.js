import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    
    <Navbar/>
      
    
  );
}
