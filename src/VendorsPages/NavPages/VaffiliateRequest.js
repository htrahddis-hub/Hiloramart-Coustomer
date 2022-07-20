import React from "react";
import AffiliateRequestCont from "../../VendorsComponents/affiliateRequestCont";
import VNavBar from "../../VendorsComponents/VNavBar";
import Footer from "../../Components/Footer";

const VaffiliateRequest = () => {
  return (
    <>
      <VNavBar />
      <div style={{ paddingBottom: "10%" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          Affiliate Request
        </h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <AffiliateRequestCont />
          <AffiliateRequestCont />
          <AffiliateRequestCont />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <AffiliateRequestCont />
          <AffiliateRequestCont />
          <AffiliateRequestCont />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VaffiliateRequest;
