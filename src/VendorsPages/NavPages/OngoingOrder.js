import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import OrderTable from "../../Components/OrderTable";
import OrderTable4 from "../../Components/OrderTable4";
import { AuthContext } from "../../Context/AuthContext";
import { GET_CURRENT_ORDERS, ONGOING_ORDER } from "../../Context/Types";

const VHome2 = () => {
  const { dispatch } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getOngoingOrders = () => {
    dispatch({ type: ONGOING_ORDER, upDateState: setData, setIsLoading });
  };
  useEffect(() => {
    getOngoingOrders();
  }, []);
  return (
    <>
      <div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginLeft: "10px",
            marginTop: "50px",
          }}
        >
          <Link
            to="/orders-new"
            style={{
              marginLeft: "50px",
              color: "gray",
              textDecoration: "none",
            }}
          >
            New Orders
          </Link>
          <Link
            to="/orders-return"
            style={{
              marginLeft: "50px",
              color: "gray",
              textDecoration: "none",
            }}
          >
            Return Orders
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
          <span style={{ marginLeft: "50px", borderBottom: "1px solid orange" }}>
                Ongoing Orders
            </span>
        </div>
        <div style={{margin: '10px 10px 100px 10px'}}>
          {/* <BuyersDetailCont /> */}
          <OrderTable4 data={data} isLoading={isLoading}/>
        </div>
        {/* <AssignedAndStausFormVhome2 /> */}
      </div>
      <Footer />
    </>
  );
};

export default VHome2;
