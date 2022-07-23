import React from "react";
import VNavBar from "../../VendorsComponents/VNavBar";
import Img from "../../Assets/Images/NoPath.png";

import Profile from "../../VendorsAssets/AffliateReqProfile.png";
import "../../VendorsStyle/VProfile.css";

const VProfile = () => {
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
            <button className="loginButton btn-profile">Logout</button>
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
