import React from "react";
import "../Styles/Components/Advertisement.css";
import Hiloramart from "../VendorsAssets/LOGO.png";
import arrow from "../Assets/Images/arrow.svg";
import google from "../Assets/Images/google.svg";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const AdContainer = ({ image }) => {

  const navigate = useNavigate();

  return (
    <div className="adver-box">
      <div>
        <img src={image} />
      </div>
      <div>Rs. 1</div>
      <div>Grow your business within Our web</div>
      <div>
        Get More customers in your products with business ads that help people
        find your company on the Top.
      </div>
      <div onClick={() => navigate("/select-product-for-ads")}>
        <div>Let's Boost My Ad</div>{" "}
        <div>
          <img src={arrow} alt="arrow"/>
        </div>
      </div>
    </div>
  );
};
function Advertisement() {
  return (
    <>
    <div style={{marginBottom: '100px'}} className="adver-container">
      <div className="adver-title">Advertisement</div>
      <div>
        <AdContainer image={Hiloramart} />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Advertisement;
