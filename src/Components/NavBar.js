import React, { useContext } from "react";
import Bell from "../Assets/Images/Navbar/Bell.png";
import Profile from "../Assets/Images/Navbar/Profile.png";
import notification_icon from "../Assets/Images/notification.svg";
import Hiloramart from "../Assets/Images/Navbar/Hiloramart.png";
import "../Styles/Components/Navbar.css";
import { Link, NavLink } from "react-router-dom";
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
      navigation: "/my-revenue",
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
      navigation: "/orders-current",
    },
  ];
  const data = AuthRole === "user" ? user_nav_data : vendor_nav_data;
  return (
    <>
      <div className="NavMain">
        <div className="Nav1">
          <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <div id="logo">
              <img style={{ height: "3rem" }} src={Hiloramart} alt="" />
            </div>
          </NavLink>
        </div>

        <div className="Nav2">
          {data.map((item, index) => {
            return (
              <NavLink
                to={item.navigation}
                className={({ isActive }) =>
                  (isActive ? "active" : "inactive") + " " + "linkT"
                }
              >
                <div className="NavLink">{item.name}</div>
              </NavLink>
            );
          })}
          {AuthRole === "user" && (
            <NavLink to="/profile" className="linkT NavICon">
              <img src={notification_icon} alt="Profile" />
            </NavLink>
          )}
          <NavLink to="/profile" className="linkT NavICon">
            <img src={Profile} alt="Profile" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
