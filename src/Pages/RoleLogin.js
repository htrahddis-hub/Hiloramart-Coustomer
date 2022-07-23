import React from "react";
import "../Styles/pages/Login.css";
//
import logo from "../Assets/Images/logo.svg";
import { Link } from "react-router-dom";
function RoleLogin() {
  return (
    <div className="LoginMainContainer">
      <div className="LoginContainer1">
        <div id="loginDiv1">Welcome</div>
        <div>
          <img src={logo} />
        </div>
        <div>Are you</div>
        <div>
          <Link to="/login" state={{ role: "user" }}>
            <button className="SignUpButton user-btn">User</button>
          </Link>
        </div>
        <div className="or-container">
          <span className="or">OR</span>
        </div>
        <div>
          {" "}
          <Link to="/login" state={{ role: "vendor" }}>
            <button className="loginButton vendor-btn">Vendor</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoleLogin;
