import React, { useContext, useEffect, useState } from "react";
import VNavBar from "../../VendorsComponents/VNavBar";
// import BuyersDetailCont from "../../VendorsComponents/BuyersDetailCont";

import Image from "../../Assets/Images/MyWishList/Image.svg";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import OrderTable from "../../Components/OrderTable";
import { GET_RETURN_ORDERS } from "../../Context/Types";
import { AuthContext } from "../../Context/AuthContext";
import OrderTable2 from "../../Components/OrderTable2";
const VReturn = () => {
  const { dispatch } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getReturnOrders = () => {
    dispatch({ type: GET_RETURN_ORDERS, upDateState: setData, setIsLoading });
  };
  useEffect(() => {
    getReturnOrders();
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
        <span style={{ marginLeft: "50px", borderBottom: "1px solid orange" }}>
          Return Orders
        </span>
        <Link
          to="/orders-completed"
          style={{ marginLeft: "50px", color: "gray", textDecoration: "none" }}
        >
          Completed Orders
        </Link>
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
      <div style={{margin: '10px 10px 100px 10px'}}>
        <OrderTable2 data={data} isLoading={isLoading}/>
      </div>

      <Footer />
    </>
  );
};

export default VReturn;
