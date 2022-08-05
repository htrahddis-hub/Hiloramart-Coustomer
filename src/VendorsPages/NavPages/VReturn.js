import React, { useContext, useEffect, useState } from "react";
import VNavBar from "../../VendorsComponents/VNavBar";
// import BuyersDetailCont from "../../VendorsComponents/BuyersDetailCont";

import Image from "../../Assets/Images/MyWishList/Image.svg";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import OrderTable from "../../Components/OrderTable";
import { GET_RETURN_ORDERS } from "../../Context/Types";
import { AuthContext } from "../../Context/AuthContext";
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
          to="/orders-current"
          style={{ color: "gray", textDecoration: "none" }}
        >
          Current Orders
        </Link>
        <span style={{ marginLeft: "50px", borderBottom: "1px solid orange" }}>
          Return Requests
        </span>
        <Link
          to="/orders-completed"
          style={{ marginLeft: "50px", color: "gray", textDecoration: "none" }}
        >
          Completed Orders
        </Link>
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
      <div>
        <OrderTable data={data} />
      </div>

      <Footer />
    </>
  );
};

export default VReturn;
