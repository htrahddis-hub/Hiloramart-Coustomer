import React from "react";
import "../Styles/pages/MyOrder.css";
import product from "../Assets/Images/tacking/image.png";

function MyOrderCard({ data }) {
  return (
    <div className="my-order-card-cont">
      <div className="my-order-card-product-details">
        <div className="my-order-card-image-cont">
          <img
            src={data.productId.productImage[0]}
            className="my-order-card-image"
          />
        </div>
        <div className="my-order-card-text">
          <div>{data.productId.name}</div>
          <div>Delivered 12-Mar-2022</div>
        </div>
      </div>
      <div className="my-order-card-order-details">
        <div className="my-order-card-heading-col">
          <div>
            <div>Order Date</div>
            <div className="my-order-card-value-col">22-Mar-2022</div>
          </div>
          <div>
            <div>Order ID</div>
            <div className="my-order-card-value-col">1548-5265854-569652</div>
          </div>
          <div>
            <div>Total Pay</div>
            <div className="my-order-card-value-col">RS {data.totalPrice}</div>
          </div>
          <div>
            <div>Shipping Address</div>
            <div className="my-order-card-value-col">
              {" "}
              {data.address.line1 +
                "," +
                " " +
                data.address.city +
                "," +
                " " +
                data.address.state}
            </div>
          </div>
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
