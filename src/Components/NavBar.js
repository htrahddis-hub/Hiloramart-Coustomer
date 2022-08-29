import React, { useContext, useState } from "react";
import Bell from "../Assets/Images/Navbar/Bell.png";
import Profile from "../Assets/Images/Navbar/Profile.png";
import notification_icon from "../Assets/Images/notification.svg";
import Hiloramart from "../Assets/Images/Navbar/Hiloramart.png";
import "../Styles/Components/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Profileimg from "../VendorsAssets/AffliateReqProfile.png";

const NavBar = () => {
  const { AuthRole } = useContext(AuthContext);
  const [isNotifi, setIsNotifi] = useState(false);
  const user_nav_data = [
    {
      id: '001',
      name: "Home",
      navigation: "/",
    },
    {
      id: '002',
      name: "My Wallet",
      navigation: "/my-wallet",
    },
    {
      id: '003',
      name: "My Wishlist",
      navigation: "/my-wishlist",
    },
    {
      id: '004',
      name: "My Cart",
      navigation: "/my-cart",
    },
    {
      id: '005',
      name: "My Orders",
      navigation: "/my-orders",
    },
  ];

  const vendor_nav_data = [
    {
      id: '011',
      name: "Home",
      navigation: "/",
    },
    {
      id: '021',
      name: "My Products",
      navigation: "/my-products",
    },
    {
      id: '031',
      name: "My Revenue",
      navigation: "/my-revenue",
    },
    {
      id: '041',
      name: "My Sale",
      navigation: "/my-sales",
    },
    {
      id: '051',
      name: "My Wallet",
      navigation: "/my-wallet",
    },
    {
      id: '061',
      name: "Advertisement",
      navigation: "/advertisement",
    },
    {
      id: '071',
      name: "Affiliate Requests",
      navigation: "/affiliate-request",
    },
    {
      id: '081',
      name: "Orders",
      navigation: "/orders-current",
    },
  ];
  const data = AuthRole === "user" ? user_nav_data : vendor_nav_data;

  const NotificationRow = () => {
    return (
      <div className="noti-row">
        <div>
          <img src={Profileimg} className="noti-row-img" />
        </div>
        <div className="noti-row-details">
          Arihant ERP has accepted your affiliate request
        </div>
        <div className="noti-row-time">Just Now</div>
      </div>
    );
  };

  const handleNotification = () => {
    setIsNotifi(!isNotifi);
  };
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
                key={item.id}
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
            <div className="linkT  pointer notification-container" tabIndex={1}>
              <img
                src={notification_icon}
                alt="Profile"
                onClick={handleNotification}
              />
              <div
                className="notificaiton-box"
                tabIndex={1}
                style={{ display: isNotifi ? "block" : "none" }}
              >
                <div className="notificaiton-box-title">Notifications</div>
                <div className="notificaiton-box-details">
                  <div className="notificaiton-box-details-title">
                    <div>Today</div>
                    <div>Clear</div>
                  </div>
                  <div>
                    <NotificationRow />
                    <NotificationRow />
                    <NotificationRow />
                  </div>
                </div>
                <div className="notificaiton-box-btn">View all</div>
              </div>
            </div>
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
