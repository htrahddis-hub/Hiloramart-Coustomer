import React from "react";
import MyOrderCard from "../Components/MyOrderCard";
import "../Styles/pages/MyOrder.css";
function MyOrders() {
  return (
    <div className="my-order-container">
      <MyOrderCard />
      <MyOrderCard />
      <MyOrderCard />
    </div>
  );
}

export default MyOrders;
