import React from "react";
import NavBar from "../Components/NavBar";
import "../Styles/pages/AffiliateProgram.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
const AffiliateProgram = () => {
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
          <Link
            to="/affiliate"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button id="JoinNow">Join Now</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AffiliateProgram;
