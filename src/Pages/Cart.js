import React from "react";
import CartImage from "../Assets/Images/cart/CartImage.png";
import NavBar from "../Components/NavBar";
import "../Styles/pages/Cart.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

const Cart = () => {
  const location = useLocation();
  if (!location.state?.isSuccess) return <Navigate to={-1} />;
  return (
    <div>
      <div id="C1">THANK YOU FOR YOUR ORDER</div>
      <div id="C2">
        <img src={CartImage} alt="" />
      </div>
      <div id="C3">Estimated Delivery</div>
      <div id="C4">30 Apr 2022</div>
      <div id="C5">
        We have emailed you a confirmation and we'll notify you when your order
        has shipped.
      </div>
      <div id="C6">
        <Link
          to="/Tracking"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button id="TrackOrder">Track Order</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
