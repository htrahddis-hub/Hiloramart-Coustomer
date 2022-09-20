import React from "react";
import "../Styles/pages/Login.css";
//
// import logo from "../Assets/Images/logo.svg";
import { Link } from "react-router-dom";
import logo from '../Assets/Images/hiloralogo.jpeg'
function RoleLogin() {
  return (
    <div className="LoginMainContainer">
      <div className="LoginContainer1">
        <div id="loginDiv1">Welcome</div>
        <div style={{width: '100px'}}>
          <img src={logo} style={{width: '100%'}} alt="logo"/>
        </div>
        <div className="text-style">Are you</div>
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
