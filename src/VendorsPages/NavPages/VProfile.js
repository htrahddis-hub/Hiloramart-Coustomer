import React, { useContext, useEffect, useState } from "react";
import Img from "../../Assets/Images/NoPath.png";
import arrow from "../../Assets/Images/arrow.svg";
import "../../VendorsStyle/VProfile.css";
import Cookies from "js-cookie";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { GET_USER_PROFILE, GET_VENDOR_PROFILE, GET_VENDOR_PROFILE2 } from "../../Context/Types";
import ProfileSkeleton from "../../Components/Skeleton-loading/Profile.skeleton";

const VProfile = () => {
  const { setAuth, AuthRole, dispatch, currentUser } = useContext(AuthContext);
  console.log(AuthRole);
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState();
  const userId = localStorage.getItem("vendorUserId");
  useEffect(() => {
    if (AuthRole === "user") {
      dispatch({ type: GET_USER_PROFILE, upDateState: setProfileData });
    } else {
      dispatch({
        type: GET_VENDOR_PROFILE2,
        id: currentUser.id,
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
                <p className="details-value">{profileData?.name}</p>
              </div>
              <div className="details">
                <p>Number</p>
                <p>{profileData?.number || profileData?.mobile}</p>
              </div>
              <div className="details">
                <p>Email</p>
                <p>{profileData?.email}</p>
              </div>
              <div className="details">
                <p> location</p>
                <p>{profileData?.address[0]?.line1} </p>
              </div>
              {AuthRole === "vendor" && (
                <div className="details">
                  <p> My Plans</p>
                  <Link to={"/my-plans"}>
                    <img src={arrow} alt="plan"/>
                  </Link>
                </div>
              )}
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
                  <p className="details-value">{profileData?.bankDetails?.account_no}</p>
                </div>
                <div className="details">
                  <p>Account Holder Name</p>
                  <p>{profileData?.bankDetails?.account_holder_name}</p>
                </div>
                <div className="details">
                  <p>IFSC Code</p>
                  <p>{profileData?.bankDetails?.ifsc_code}</p>
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
          <img style={{borderRadius: '50%'}} width={100} height={100} src={profileData?.profilePic} alt="/" />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "20px" }}>Hello {profileData.name}</p>
            <button
              onClick={()=>navigate("/edit-profile", { replace: true })}
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
