import React from "react";
import Profile from "../VendorsAssets/AffliateReqProfile.png";
import "../VendorsStyle/AffiliateRequestCont.css";
import { Link } from "react-router-dom";
const AffiliateRequestCont = () => {
  return (
    <div id="AFcontainer">
      <div id="image">
        <img src={Profile} style={{ height: "4rem" }} alt="" />
      </div>
      <div id="name">Rohit</div>
      <div id="Text">Want to join your affiliate link</div>
      <div id="ReqButtonCont">
        <button id="Deny">Denny</button>
        {/* <Link to='' style={{textDecoration: 'none', color: 'inherit'}}> */}
        <button id="accept">Accept</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default AffiliateRequestCont;
