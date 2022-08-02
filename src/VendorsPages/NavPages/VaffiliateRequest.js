import React, { useContext, useEffect, useState } from "react";
import AffiliateRequestCont from "../../VendorsComponents/affiliateRequestCont";
import VNavBar from "../../VendorsComponents/VNavBar";
import Footer from "../../Components/Footer";
import { AuthContext } from "../../Context/AuthContext";
import { GET_AFFILIATE_REQUEST } from "../../Context/Types";

const VaffiliateRequest = () => {
  const { dispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [allRequest, setAllRequest] = useState([]);
  const getAllAffiliateRequest = () => {
    dispatch({
      type: GET_AFFILIATE_REQUEST,
      upDateState: setAllRequest,
      setIsLoading,
    });
  };
  useEffect(() => {
    getAllAffiliateRequest();
  }, []);
  return (
    <>
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
          {allRequest?.map((item) => {
            return (
              <AffiliateRequestCont {...item} cb={getAllAffiliateRequest} />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VaffiliateRequest;
