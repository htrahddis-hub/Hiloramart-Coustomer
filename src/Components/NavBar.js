import React, { useContext, useState } from "react";
import Profile from "../Assets/Images/Navbar/Profile.png";
import notification_icon from "../Assets/Images/notification.svg";
import "../Styles/Components/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Profileimg from "../VendorsAssets/AffliateReqProfile.png";
import { Button } from "@mui/material";
import Cookies from "js-cookie";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import search_icon from "../Assets/Images/search.svg";
import HistoryIcon from "@mui/icons-material/History";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const [isNotifi, setIsNotifi] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdown, setDropdown] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdown = () => {
    setDropdown((old) => !old);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user_nav_data = [
    {
      id: "001",
      name: "Home",
      navigation: "/",
    },
    {
      id: "002",
      name: "My Wallet",
      navigation: "/my-wallet",
    },
    {
      id: "003",
      name: "My Wishlist",
      navigation: "/my-wishlist",
    },
    {
      id: "004",
      name: "My Cart",
      navigation: "/my-cart",
    },
    {
      id: "005",
      name: "My Orders",
      navigation: "/my-orders",
    },
  ];

  const data = user_nav_data;

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

  const handleLogout = () => {
    Cookies.remove("auth_token");
    Cookies.remove("role");
    setAuth(false);
    navigate("/login");
  };
  return (
    <>
      <div className="NavMain">
        <div className="Nav1">
          <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <div id="logo" className="log-heading">
              HILORAMART
            </div>
          </NavLink>
        </div>
        <div className="d-flex align-items-center">
          <img src={search_icon} className="search_icon" />
          <input
            className="border border-0 search-css"
            type="text"
            placeholder="Search for Products,Brands..."
            aria-label="Search"
            onClick={handleDropdown}
          />
          <div
            className="dropbox-search"
            tabIndex={1}
            style={{ display: dropdown ? "block" : "none" }}
          >
            <div className="d-flex p-3 justify-content-between align-items-center">
              <div className="d-flex">
                <HistoryIcon /> <div className="ms-3">Shoes</div>
              </div>{" "}
              <CloseIcon fontSize="small" />
            </div>
            <div className="d-flex px-3 justify-content-between align-items-center">
              <div className="d-flex">
                <HistoryIcon /> <div className="ms-3">Detector machine</div>
              </div>{" "}
              <CloseIcon fontSize="small" />
            </div>
            <div className="d-flex p-3 justify-content-between align-items-center">
              <div className="d-flex">
                <HistoryIcon /> <div className="ms-3">Laptop</div>
              </div>{" "}
              <CloseIcon fontSize="small" />
            </div>
          </div>
        </div>
        <div className="Nav2">
          {data.map((item) => {
            return (
              <NavLink
                key={item.id}
                to={item.navigation}
                className={({ isActive }) =>
                  (isActive ? "active1" : "inactive") + " linkT"
                }
              >
                <div className="NavLink">{item.name}</div>
              </NavLink>
            );
          })}

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

          {/* <NavLink to="/profile" className="linkT NavICon">
            <img src={Profile} alt="Profile" />
          </NavLink>
          <Button variant="contained"  onClick={handleLogout}>Logout</Button> */}

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="linkT NavICon"
          >
            <img src={Profile} alt="Profile" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {auth ? (
              <>
                <MenuItem
                  onClick={() => {
                    navigate("/userprofile");
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>

                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </>
            ) : (
              <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
            )}
          </Menu>
        </div>
      </div>
    </>
  );
};

export default NavBar;
