import React, { useContext, useEffect, useState } from "react";
import MyOrderCard from "../Components/MyOrderCard";
import { AuthContext } from "../Context/AuthContext";
import { GET_MY_ORDERS } from "../Context/Types";
import "../Styles/pages/MyOrder.css";
function MyOrders() {
  const { dispatch } = useContext(AuthContext);
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch({ type: GET_MY_ORDERS, setIsLoading, upDateState: setAllOrders });
  }, []);
  return (
    <div className="my-order-container">
      <div className="my-order-container-title">ORDER HISTORY</div>
      <div className="my-order-card-conatiner">
        {allOrders.map((item) => {
          return <MyOrderCard data={item}/>;
        })}
      </div>
    </div>
  );
}

export default MyOrders;
