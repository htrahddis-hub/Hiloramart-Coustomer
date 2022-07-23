import React, { useContext } from "react";
import VNavBar from "../../VendorsComponents/VNavBar";
import Img from "../../Assets/Images/NoPath.png";

import Profile from "../../VendorsAssets/AffliateReqProfile.png";
import "../../VendorsStyle/VProfile.css";
import Cookies from "js-cookie";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const VProfile = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("auth_token");
    Cookies.remove("role");
    setAuth(false);
    navigate("/choose-role-login", { replace: true });
  };
  return (
    <div className="profile-container">
      <div className="top-image-container">
        <img src={Img} alt="image" className="top-image" />
      </div>
      <div className="mainCont">
        <div className="cont">
          <div className="details">
            <p>Name</p>
            <p className="details-value">Rohit</p>
          </div>
          <div className="details">
            <p>Number</p>
            <p>+91-9876543210</p>
          </div>
          <div className="details">
            <p>Email</p>
            <p>adsnajk</p>
          </div>
          <div className="details">
            <p> location</p>
            <p> addsa </p>
          </div>
          <div className="logout-cont">
            <button className="loginButton btn-profile" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="img">
          <img width={100} height={100} src={Profile} alt="/" />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "20px" }}>Hello Rohit</p>
            <button
              style={{
                border: "none",
                background: "white",
                color: "orange",
                fontWeight: "bold",
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VProfile;
