import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import OrderTable from "../Components/OrderTable";
import OrderTable3 from "../Components/OrderTable3";
import { AuthContext } from "../Context/AuthContext";
import { GET_COMPLETED_ORDERS, GET_CURRENT_ORDERS, GET_RETURN_ORDERS } from "../Context/Types";

function CompletedOrders() {
  const { dispatch } = useContext(AuthContext);
  const [data, setData] = useState([]);

  const [currentOrdersData, setCurrentOrdersData] = useState([]);
  const [returnOrdersData, setReturnOrdersData] = useState([]);


  const [isLoading, setIsLoading] = useState(false);
  const getCompletedOrders = () => {
    dispatch({
      type: GET_COMPLETED_ORDERS,
      upDateState: setData,
      setIsLoading,
    });
  };
  useEffect(() => {
    getCompletedOrders();
  }, []);
  return (
    <>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginLeft: "60px",
          marginTop: "50px",
        }}
      >
        <Link
          to="/orders-new"
          style={{ color: "gray", textDecoration: "none" }}
        >
          New Orders
        </Link>
        <Link
          to="/orders-return"
          style={{ marginLeft: "50px", color: "gray", textDecoration: "none" }}
        >
          Return Orders
        </Link>
        <span style={{ marginLeft: "50px", borderBottom: "1px solid orange" }}>
          Completed Orders
        </span>
        <Link
            to="/ongoing-order"
            style={{
              marginLeft: "50px",
              color: "gray",
              textDecoration: "none",
            }}
          >
            Ongoing Orders
        </Link>
      </div>
      <div  style={{margin: '10px 10px 100px 10px'}}>
        <OrderTable3 data={data} isLoading={isLoading}/>
      </div>

      <Footer />
    </>
  );
}

export default CompletedOrders;
