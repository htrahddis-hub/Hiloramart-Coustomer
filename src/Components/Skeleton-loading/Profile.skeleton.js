import React from "react";
import "../../VendorsStyle/VProfile.css";

function ProfileSkeleton() {
  return (
    <div className="profile-container">
      <div className="top-image-container">
        <div className="top-image skeleton"></div>
      </div>
      <div className="mainCont">
        <div className="cont">
          <div className="basic-cont">
            <div></div>
            <div>
              <div className="details">
                <p className=" skeleton line w-50 "></p>
                <p className="  skeleton line w-30"></p>
              </div>
              <div className="details">
                <p className=" skeleton line w-50"></p>
                <p className=" skeleton line w-30"></p>
              </div>
              <div className="details">
                <p className=" skeleton line w-50"></p>
                <p className=" skeleton line w-30"></p>
              </div>
              <div className="details">
                <p className=" skeleton line w-50"> </p>
                <p className=" skeleton line w-30"> </p>
              </div>
            </div>
          </div>

          <div className="logout-cont">
            <button className="loginButton  skeleton"></button>
          </div>
        </div>
        <div className="img">
          <div className="profile-img-skeleton skeleton"></div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "20px" }}></p>
            <button
              style={{
                border: "none",
                background: "white",
                color: "orange",
                fontWeight: "bold",
              }}
              className="skeleton"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSkeleton;
