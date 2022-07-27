import React, { useContext, useEffect, useState } from "react";
import VNavBar from "../../VendorsComponents/VNavBar";
import Img from "../../Assets/Images/NoPath.png";

import Profile from "../../VendorsAssets/AffliateReqProfile.png";
import "../../VendorsStyle/VProfile.css";
import Cookies from "js-cookie";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { GET_USER_PROFILE, GET_VENDOR_PROFILE } from "../../Context/Types";
import ProfileSkeleton from "../../Components/Skeleton-loading/Profile.skeleton";

const VProfile = () => {
  const { setAuth, AuthRole, dispatch, currentUser } = useContext(AuthContext);
  console.log(AuthRole);
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState();
  useEffect(() => {
    if (AuthRole === "user") {
      console.log("ssss");
      dispatch({ type: GET_USER_PROFILE, upDateState: setProfileData });
    } else {
      console.log("ssssaaaa");
      dispatch({
        type: GET_VENDOR_PROFILE,
        payload: currentUser.id,
        upDateState: setProfileData,
      });
    }
  }, []);
  const handleLogout = () => {
    Cookies.remove("auth_token");
    Cookies.remove("role");
    setAuth(false);
    navigate("/choose-role-login", { replace: true });
  };

  return !profileData ? (
    <ProfileSkeleton />
  ) : (
    <div className="profile-container">
      <div className="top-image-container">
        <img src={Img} alt="image" className="top-image" />
      </div>
      <div className="mainCont">
        <div className="cont">
          <div className="basic-cont">
            <div>Basic settings</div>
            <div>
              <div className="details">
                <p>Name</p>
                <p className="details-value">{profileData.name}</p>
              </div>
              <div className="details">
                <p>Number</p>
                <p>{profileData.number || profileData.mobile}</p>
              </div>
              <div className="details">
                <p>Email</p>
                <p>{profileData.email}</p>
              </div>
              <div className="details">
                <p> location</p>
                <p>{profileData?.address[0]?.line1} </p>
              </div>
            </div>
          </div>
          {/* vendor's side */}
          {AuthRole === "vendor" && (
            <div className="account-cont">
              <div>Accounts</div>
              <div>
                {" "}
                <div className="details">
                  <p>Account Number</p>
                  <p className="details-value">872222612741</p>
                </div>
                <div className="details">
                  <p>Account Holder Name</p>
                  <p>Rohit</p>
                </div>
                <div className="details">
                  <p>IFSC Code</p>
                  <p>RBI002343</p>
                </div>
              </div>
            </div>
          )}

          <div className="logout-cont">
            <button className="loginButton btn-profile" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="img">
          <img width={100} height={100} src={Profile} alt="/" />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "20px" }}>Hello {profileData.name}</p>
            <button
              style={{
                border: "none",
                background: "white",
                color: "orange",
                fontWeight: "bold",
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VProfile;
