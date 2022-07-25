import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import OrderTable from "../../Components/OrderTable";
import AssignedAndStausFormVhome2 from "../../VendorsComponents/AssignedAndStausFormVhome2";
import BuyersDetailCont from "../../VendorsComponents/BuyersDetailCont";
import VNavBar from "../../VendorsComponents/VNavBar";

const VHome2 = () => {
  return (
    <>
      <div style={{ marginBottom: "100px" }}>
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
        <div>
          {/* <BuyersDetailCont /> */}
          <OrderTable />
        </div>
        {/* <AssignedAndStausFormVhome2 /> */}
      </div>
      <Footer />
    </>
  );
};

export default VHome2;
