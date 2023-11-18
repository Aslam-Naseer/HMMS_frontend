import React from "react";
import "./regstyle.css";
import { Link } from "react-router-dom";
export default function Reg(props) {
  const userreg = () => {
    const hostelid = document.getElementById("hostelid").value;
    const password = document.getElementById("password").value;
    console.log(hostelid);
    console.log(password);

    fetch("http://127.0.0.1:5000/userreg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hostelid: hostelid,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          // User registration successful, you can redirect or perform other actions here
        } else {
          // Handle the response as needed
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="body1">
      <section>
        {" "}
        
        <div className="signin">
          <div className="content">
            <h2>Sign Up</h2>

            <div className="form">
              <div className="inputBox">
                <input type="text" id="hostelid" required /> <i>Hostel ID</i>
              </div>

              <div className="inputBox">
                <input type="password" id="password" required /> <i>Password</i>
              </div>
              <Link to="/">
                <div className="links">SignIn</div>
              </Link>

              <div className="inputBox">
                <input type="submit" value="Register" onClick={userreg} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
