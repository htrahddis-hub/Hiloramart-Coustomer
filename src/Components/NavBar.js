import React, { useContext } from "react";
import Bell from "../Assets/Images/Navbar/Bell.png";
import Profile from "../Assets/Images/Navbar/Profile.png";
import Hiloramart from "../Assets/Images/Navbar/Hiloramart.png";
import "../Styles/Components/Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const NavBar = () => {
  const { AuthRole } = useContext(AuthContext);
  const user_nav_data = [
    {
      name: "Home",
      navigation: "/",
    },
    {
      name: "My Wallet",
      navigation: "/my-wallet",
    },
    {
      name: "My Wishlist",
      navigation: "/my-wishlist",
    },
    {
      name: "My Cart",
      navigation: "/my-cart",
    },
    {
      name: "My Orders",
      navigation: "/my-orders",
    },
  ];

  const vendor_nav_data = [
    {
      name: "Home",
      navigation: "/",
    },
    {
      name: "My Products",
      navigation: "/my-products",
    },
    {
      name: "My Revenue",
      navigation: "/my-revenve",
    },
    {
      name: "My Sale",
      navigation: "/my-sales",
    },
    {
      name: "My Wallet",
      navigation: "/my-wallet",
    },
    {
      name: "Advertisement",
      navigation: "/advertisement",
    },
    {
      name: "Affiliate Requests",
      navigation: "/affiliate-request",
    },
    {
      name: "Orders",
      navigation: "/orders",
    },
  ];
  const data = AuthRole === "user" ? user_nav_data : vendor_nav_data;
  return (
    <>
      <div className="NavMain">
        <div className="Nav1">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <div id="logo">
              <img style={{ height: "3rem" }} src={Hiloramart} alt="" />
            </div>
          </Link>
        </div>

        <div className="Nav2">
          {data.map((item, index) => {
            return (
              <Link to={item.navigation} className="linkT">
                <div className="NavLink">{item.name}</div>
              </Link>
            );
          })}
          <Link to="/profile" className="linkT NavICon">
            <img src={Profile} alt="Profile" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
