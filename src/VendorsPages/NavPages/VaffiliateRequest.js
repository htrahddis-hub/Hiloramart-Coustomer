import React, { useContext, useEffect, useState } from "react";
import AffiliateRequestCont from "../../VendorsComponents/affiliateRequestCont";
import Footer from "../../Components/Footer";
import { AuthContext } from "../../Context/AuthContext";
import { GET_AFFILIATE_REQUEST } from "../../Context/Types";
import { CircularProgress } from "@mui/material";

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

  console.log(allRequest);
  useEffect(() => {
    getAllAffiliateRequest();
  }, []);
  return (
    <>
      <div style={{ paddingBottom: "10%" }}>
        {/* <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          Affiliate Request
        </h1> */}
        <div style={{ display: "flex", justifyContent: "space-around", minHeight: '80vh' }}>
          { 
            isLoading ? (<div style={{width: '100%', display: 'grid', placeItems: 'center', margin: '40px 0'}}><CircularProgress  style={{color: '#FF8D22'}}/></div>) : 
            allRequest.length === 0 ? (
                  <div style={{width: '100%', height: '80vh', display: 'grid', placeItems: 'center'}}>
                  <p>No Affiliate Request Found!</p>
                  </div>
            ) :
            allRequest?.map((item) => {
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
