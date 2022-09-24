import React, { useContext, useEffect, useState } from "react";
import Img from "../Assets/Images/NoPath.png";
import "../Styles/pages/UserProfile.css";
import Cookies from "js-cookie";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { GET_USER_PROFILE, LOGOUT } from "../Context/Types";
import ProfileSkeleton from "../Components/Skeleton-loading/Profile.skeleton";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const VProfile = () => {
  const { setAuth, AuthRole, dispatch } = useContext(AuthContext);
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
    dispatch({ type: LOGOUT, navigate });
  };

  return !profileData ? (
    <ProfileSkeleton />
  ) : (
    <div className="profile-container">
      <div className="top-image-container">
        <img src={Img} alt="imag" className="top-image" />
      </div>
      <div className="mainCont1 d-flex justify-content-between">
        <div className="ps-5 pt-5 mt-2 w-75">
          <div className="">
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
            <button className="btn-profile1" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="img1">
          <img
            style={{ borderRadius: "50%" }}
            width="160px"
            height="160px"
            src={profileData?.profile_pic}
            alt="/"
          />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "20px", width: "160px", paddingTop: "20px" }}>
              Hello {profileData.name}
            </p>
            <div className="camera-icon">
              <CameraAltOutlinedIcon />
            </div>
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
