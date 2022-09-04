import React, { useContext, useEffect } from "react";
import AccountDetail from "../../VendorsComponents/AccountDetail";
import LastTransections from "../../VendorsComponents/LastTransections";
import VNavBar from "../../VendorsComponents/VNavBar";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { GET_ADS, GET_VENDOR_PROFILE } from "../../Context/Types";

const VmyRevenue = () => {
  const { dispatch, currentUser } = useContext(AuthContext);
  const [ads, setAds] = useState();
  const [profileData, setProfileData] = useState();


  const getAds = () => {
    dispatch({
      type: GET_ADS,
      setAds
    })
  }
  const getVendorProfile = () => {
    dispatch({
      type: GET_VENDOR_PROFILE,
      payload: currentUser.id,
      upDateState: setProfileData,
    })
  }
  console.log(currentUser)

  console.log(ads);
  console.log(profileData, "vendor");
  useEffect(() => {
    getAds();
    getVendorProfile();
  }, [])

//  console.log("profiledata:",profileData)
  return (
    <>
      <div>
        <div
          style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", margin: '55px 0' }}
        >
          MY REVENUE
        </div>
        <div>
          <AccountDetail data={profileData}
           />
          <LastTransections ads={ads}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VmyRevenue;
