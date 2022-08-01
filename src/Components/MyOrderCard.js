import React from "react";
import "../Styles/pages/MyOrder.css";
import product from "../Assets/Images/tacking/image.png";

function MyOrderCard() {
  return (
    <div className="my-order-card-cont">
      <div className="my-order-card-product-details">
        <div>
          <img src={product} className="my-order-card-image" />
        </div>
        <div className="my-order-card-text">
          <div>LOOP SCANO 1100 HAND HELD METAL DETECTOR</div>
          <div>Delivered 12-Mar-2022</div>
        </div>
      </div>
      <div className="my-order-card-order-details">
        <div className="my-order-card-heading-col">
          <div>Order Date</div>
          <div>Order ID</div>
          <div>Total Pay</div>
          <div>Shipping Address</div>
        </div>
        <div className="my-order-card-value-col">
          <div>22-Mar-2022</div>
          <div>1548-5265854-569652</div>
          <div>RS 4000</div>
          <div>India , New Delhi Pitampura</div>
        </div>
      </div>
      <div className="my-order-card-btn-cont">
        <div>
          <button className="SignUpButton">Buy it again</button>
        </div>
        <div>
          <button id="BUYbutton2" className="return-btn">
            Return
          </button>
        </div>
      </div>
      <div className="my-order-download-btn-cont">
        <button className="download-btn">Download Invoice</button>
      </div>
    </div>
  );
}

export default MyOrderCard;
