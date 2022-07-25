import React from "react";
import Image from "../Assets/Images/MyWishList/Image.svg";
import "../VendorsStyle/BuyersDetailCont.css";

const BuyersDetailCont = () => {
  return (
    <div id="buyMainCont">
      <div id="BuyCont1">
        <div>
          <img src={Image} alt="" />
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
            <div className="lighterText">Product Name</div>
            <div className="darkerText">
              {" "}
              SCANO 1100 <br />
              HAND HELD
              <br />
              METAL DETECTOR
            </div>
          </div>
          <div className="BuyerItem">
            <div className="lighterText">Product ID</div>
            <div className="darkerText">#444422226576</div>
          </div>
        </div>
      </div>
      <div id="buttonCont">
        <button id="Assigned">Assigned to Courier</button>
      </div>
    </div>
  );
};

export default BuyersDetailCont;
