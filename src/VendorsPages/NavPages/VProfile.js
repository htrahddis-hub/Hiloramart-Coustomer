import React from "react";
import VNavBar from "../../VendorsComponents/VNavBar";
import Img from "../../Assets/Images/NoPath.png";

import Profile from "../../VendorsAssets/AffliateReqProfile.png";
import "../../VendorsStyle/VProfile.css";

const VProfile = () => {
  return (
    <>
      <VNavBar />
      <div>
        <img
          style={{
            width: "1180px",
            height: "311px",
            marginLeft: "50px",
          }}
          src={Img}
          alt="image"
        />
      </div>
      <div className="mainCont">
        <div className="cont">
          <h5 style={{ textAlign: "center", marginBottom: "30px" }}>
            Basic Settings
          </h5>
          <div className="details">
            <p>Name</p>
            <p>Rohit</p>
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
          <h5 style={{ textAlign: "center", marginBottom: "30px" }}>Account</h5>
          <div className="details">
            <p>Account Number</p>
            <p>1234567890</p>
          </div>
          <div className="details">
            <p>Account Holder Name</p>
            <p>Rohit</p>
          </div>
          <div className="details">
            <p>IFSC code</p>
            <p>bobdabdj</p>
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
    </>
  );
};

export default VProfile;
