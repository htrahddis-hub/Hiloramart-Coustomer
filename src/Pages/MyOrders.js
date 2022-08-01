import React from "react";
import MyOrderCard from "../Components/MyOrderCard";
import "../Styles/pages/MyOrder.css";
function MyOrders() {
  return (
    <div className="my-order-container">
      <div className="my-order-container-title">ORDER HISTORY</div>
      <div className="my-order-card-conatiner">
        <MyOrderCard />
        <MyOrderCard />
        <MyOrderCard />
      </div>
    </div>
  );
}

export default MyOrders;
