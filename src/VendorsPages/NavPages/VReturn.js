import React from "react";
import VNavBar from "../../VendorsComponents/VNavBar";
// import BuyersDetailCont from "../../VendorsComponents/BuyersDetailCont";

import Image from "../../Assets/Images/MyWishList/Image.png";
import Footer from "../../Components/Footer";
const VReturn = () => {
  return (
    <>
      <VNavBar />
      <div
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginLeft: "60px",
          marginTop: "50px",
        }}
      >
        <a href="/VHome2" style={{ color: "gray", textDecoration: "none" }}>
          Current Orders
        </a>
        <span style={{ marginLeft: "50px", borderBottom: "1px solid orange" }}>
          Return Requests
        </span>
      </div>
      {/* <div style={{ marginBottom: "40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <img src={Image} alt="Image" />
          <div style={{ marginLeft: "20px" }}>Returner Name</div>
          <div style={{ marginLeft: "20px" }}>Rohit</div>
        </div>
        <div style={{ marginLeft: "11rem", marginTop: "4rem" }}>
          <div>
            <p>LOOP SCANO 1100 HAND HELD METAL DETECTOR</p>
            <p>RS. 4000</p>
          </div>
          <div>
            <h2>Reason for Return</h2>
            <p style={{ width: "60rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip commodo consequat.
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <button
              style={{
                border: "none",
                background: "white",
                fontSize: "12",
                fontWeight: "600",
                color: "red",
                height: "40px",
                width: "150px",
              }}
            >
              Deny
            </button>
            <button
              style={{
                border: "none",
                background: "rgba(5,173,17,0.1)",
                fontSize: "12",
                fontWeight: "600",
                color: "green",
                borderRadius: "10px",
                marginLeft: "20px",
                height: "40px",
                width: "150px",
              }}
            >
              Approved
            </button>
          </div>
        </div>
      </div> */}
      <div style={{ display: "flex" }}>
        <div id="buyMainCont">
          <div id="BuyCont1">
            <div>
              <img src={Image} alt="" />
              <div className="BuyerItem">
                <div className="darkerText">
                  {" "}
                  SCANO 1100 <br />
                  HAND HELD
                  <br />
                  METAL DETECTOR
                </div>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div>Buyer Details</div>
              <div className="BuyerItem">
                <div className="lighterText">Name</div>
                <div className="darkerText">Rohit</div>
              </div>
              <div className="BuyerItem">
                <div className="lighterText">Phone No</div>
                <div className="darkerText">+91 65477722112</div>
              </div>
              <div className="BuyerItem">
                <div className="lighterText">Delivery Address</div>
                <div className="darkerText">
                  India , New Delhi
                  <br />
                  Pitampura
                </div>
              </div>
              <div className="BuyerItem">
                <div className="lighterText">Reason of return</div>
                <div style={{ marginLeft: "35px" }} className="darkerText">
                  {" "}
                  Quality issue
                </div>
              </div>
              <div className="BuyerItem">
                <div className="lighterText">Product ID</div>
                <div className="darkerText">#444422226576</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VReturn;
