import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import OrderTable from "../../Components/OrderTable";
import { AuthContext } from "../../Context/AuthContext";
import { GET_CURRENT_ORDERS } from "../../Context/Types";

const VHome2 = () => {
  const { dispatch } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCurrentOrders = () => {
    dispatch({ type: GET_CURRENT_ORDERS, upDateState: setData, setIsLoading });
  };
  useEffect(() => {
    getCurrentOrders();
  }, []);
  return (
    <>
      <div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginLeft: "60px",
            marginTop: "50px",
          }}
        >
          <span style={{ borderBottom: "1px solid orange" }}>
            Current Orders
          </span>
          <Link
            to="/orders-return"
            style={{
              marginLeft: "50px",
              color: "gray",
              textDecoration: "none",
            }}
          >
            Return Requests
          </Link>
          <Link
            to="/orders-completed"
            style={{
              marginLeft: "50px",
              color: "gray",
              textDecoration: "none",
            }}
          >
            Completed Orders
          </Link>
        </div>
        <div style={{height: '70vh'}}>
          {/* <BuyersDetailCont /> */}
          <OrderTable data={data} isLoading={isLoading}/>
        </div>
        {/* <AssignedAndStausFormVhome2 /> */}
      </div>
      <Footer />
    </>
  );
};

export default VHome2;
