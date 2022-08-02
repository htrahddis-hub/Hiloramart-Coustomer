import { CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ACCEPT_REQUEST, DENY_REQUEST } from "../Context/Types";

import "../VendorsStyle/AffiliateRequestCont.css";
const AffiliateRequestCont = ({ _id, user, cb }) => {
  const { dispatch } = useContext(AuthContext);
  const [isAcceptLoading, setIsAcceptLoading] = useState(false);
  const [isDenyLoading, setIsDenyLoading] = useState(false);
  const acceptRequest = () => {
    dispatch({
      type: ACCEPT_REQUEST,
      payload: _id,
      setIsLoading: setIsAcceptLoading,
      cb,
    });
  };
  const denyRequest = () => {
    dispatch({
      type: DENY_REQUEST,
      payload: _id,
      setIsLoading: setIsDenyLoading,
      cb,
    });
  };
  return (
    <div id="AFcontainer">
      <div id="image">
        <img src={user.profile_pic} style={{ height: "4rem" }} alt="" />
      </div>
      <div id="name">{user.name}</div>
      <div id="Text">Want to join your affiliate link</div>
      <div id="ReqButtonCont">
        <button id="Deny" onClick={denyRequest}>
          {isDenyLoading ? (
            <CircularProgress sx={{ color: "black" }} size={30} />
          ) : (
            "Deny"
          )}
        </button>
        <button id="accept" onClick={acceptRequest}>
          {isAcceptLoading ? (
            <CircularProgress sx={{ color: "white" }} size={30} />
          ) : (
            "Accept"
          )}
        </button>
      </div>
    </div>
  );
};

export default AffiliateRequestCont;
