import React from "react";
import Image from "../Assets/Images/MyWishList/Image.svg";
import Delete from "../Assets/Images/remove.svg";
import "../Styles/pages/Cart2.css";

const MyProductCont = () => {
  return (
    <div className="CPCmain" style={{ background: "rgba(112,112,112,0.05)" }}>
      <div className="CPC1">
        <img src={Image} alt="" />
      </div>
      <div className="product-detail">
        <div className="CPCin1">
          LOOP SCANO 1100 HAND HELD <br />
          METAL DETECTOR
        </div>
        <div className="CPCin2">RS. 4000</div>
      </div>
      <div className="product-options">
        <div className="remove-icon">
          <img src={Delete} alt="" className="CPC2" />
        </div>
        <div
          style={{ color: "#FF8D22", fontWeight: "bold", marginBottom: "10px" }}
        >
          Edit
        </div>
      </div>
    </div>
  );
};

export default MyProductCont;
