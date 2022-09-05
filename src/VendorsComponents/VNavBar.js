import React from "react";
import Bell from "../Assets/Images/Navbar/Bell.png";
import Profile from "../Assets/Images/Navbar/Profile.png";
// import Hiloramart from '../Assets/Images/Navbar/Hiloramart.png'
import Hiloramart from "../VendorsAssets/LOGO.png";
import "../Styles/Components/Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const VNavBar = () => {
  return (
    <>
      <div className="NavMain" style={{ height: "8rem" }}>
        <div className="Nav1">
          <div id="logo">
            <img src={Hiloramart} alt="" />
          </div>
        </div>
        <div className="Nav2">
          <Link to="/VHome" className="linkT">
            <div className="NavLink">Home</div>
          </Link>
          <Link to="/VmyProduct" className="linkT">
            <div className="NavLink">My Products</div>
          </Link>
          <Link to="/VmyRevenue" className="linkT">
            <div className="NavLink">My Revenue</div>
          </Link>
          <Link to="/VmyWallet" className="linkT">
            <div className="NavLink">My Wallet</div>
          </Link>
          {/* <Link to='/cart' className='linkT'>
            <div className='NavLink'>My Account</div>
          </Link> */}
          <Link to="/VaffiliateRequest" className="linkT">
            <div className="NavLink">Affiliate Requests</div>
          </Link>
          <Link to="/VHome2" className="linkT">
            <div className="NavLink">Orders</div>
          </Link>
          {/* <div className="NavICon">
           <img src={Bell} alt="Bell" />
         </div> */}
          <Link to="/VLogin" className="linkT NavICon">
            <img src={Profile} alt="Profile" />
          </Link>
          <Button>Logout</Button>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default VNavBar;
