import React from "react";
import AccountDetail from "../../VendorsComponents/AccountDetail";
import LastTransections from "../../VendorsComponents/LastTransections";
import VNavBar from "../../VendorsComponents/VNavBar";
import Footer from "../../Components/Footer";

const VmyRevenue = () => {
  return (
    <>
      <div>
        <div
          style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}
        >
          MY REVENUE
        </div>
        <AccountDetail />
        <LastTransections />
      </div>
      <Footer />
    </>
  );
};

export default VmyRevenue;
