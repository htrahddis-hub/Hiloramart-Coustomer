import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import "../Styles/pages/AffiliateProgram.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";
import { JOIN_AFFILIATE } from "../Context/Types";
import { CircularProgress } from "@mui/material";
const AffiliateProgram = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAccepted, setIsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const owner = location.state.owner;

  const joinAffliate = () => {
    dispatch({
      type: JOIN_AFFILIATE,
      payload: owner._id,
      upDateState: setIsAccepted,
      setIsLoading,
    });
  };
  console.log(owner._id);
  if (!owner) return navigate(-2);
  return (
    <>
      <div id="APmainCont">
        <div id="APcont1">
          <div id="APcontPart1">
            Hiloramart Associates
            <br />
            Hiloramart's affiliate program
          </div>
          <div className="APpara">
            Welcome to one of the largest affiliate marketing programs. The
            Hiloramart Affiliate Program helps content creators, publishers and
            user to monetize their traffic with millions of products available
            on Hiloramart. Associates use easy link-buildingtools to direct
            their audience to their recommendations, and earn from qualifying
            Purchases and Programs
          </div>
        </div>
        <div id="APstep1">
          <div className="APorangeHead">Step - 01</div>
          <div className="APBlackHead">Join Affiliate</div>
          <div className="APpara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </div>
        </div>
        <div id="APstep2">
          <div className="APorangeHead">Step - 02</div>
          <div className="APBlackHead">Recommend</div>
          <div className="APpara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </div>
        </div>
        <div id="APstep2">
          <div className="APorangeHead">Step - 03</div>
          <div className="APBlackHead">Earn</div>
          <div className="APpara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </div>
        </div>
        <div id="APbuttonCont">
          <button id="JoinNow" onClick={joinAffliate} disabled={isAccepted}>
            {isLoading ? (
              <CircularProgress sx={{ color: "white" }} size={25} />
            ) : isAccepted ? (
              "Requested"
            ) : (
              " Join Now"
            )}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AffiliateProgram;
