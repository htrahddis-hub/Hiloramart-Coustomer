import React from "react";
import Footer from "../../Components/Footer";
import AssignedAndStausFormVhome2 from "../../VendorsComponents/AssignedAndStausFormVhome2";
import BuyersDetailCont from "../../VendorsComponents/BuyersDetailCont";
import VNavBar from "../../VendorsComponents/VNavBar";

const VHome2 = () => {
  return (
    <>
      {console.log("VHome2")}
      <VNavBar />
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
          <a
            href="/Vreturn"
            style={{
              marginLeft: "50px",
              color: "gray",
              textDecoration: "none",
            }}
          >
            Return Requests
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <BuyersDetailCont />
          <BuyersDetailCont />
        </div>
        {/* <AssignedAndStausFormVhome2 /> */}
      </div>
      <Footer />
    </>
  );
};

export default VHome2;
