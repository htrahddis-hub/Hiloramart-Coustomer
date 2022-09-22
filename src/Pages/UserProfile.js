import React, { useContext, useEffect, useState } from "react";
import Img from "../Assets/Images/NoPath.png";
import "../Styles/pages/UserProfile.css";
import Cookies from "js-cookie";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { GET_USER_PROFILE } from "../Context/Types";
import ProfileSkeleton from "../Components/Skeleton-loading/Profile.skeleton";

const VProfile = () => {
  const { setAuth, AuthRole, dispatch} = useContext(AuthContext);
  console.log(AuthRole);
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    dispatch({ type: GET_USER_PROFILE, upDateState: setProfileData });
  }, []);

  const handleLogout = () => {
    Cookies.remove("auth_token");
    Cookies.remove("role");
    setAuth(false);
    navigate("/login");
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
            </div>
          </div>
          <div className="logout-cont">
            <button className="loginButton btn-profile" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="img">
          <img
            style={{ borderRadius: "50%" }}
            width={100}
            height={100}
            src={profileData?.profile_pic}
            alt="/"
          />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "20px" }}>Hello {profileData.name}</p>
            <button
              onClick={() => navigate("/edit-user-profile", { replace: true })}
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
