import React from "react";
import "../Styles/Components/Advertisement.css";
import Hiloramart from "../VendorsAssets/LOGO.png";
import arrow from "../Assets/Images/arrow.svg";
import google from "../Assets/Images/google.svg";
const AdContainer = ({ image }) => {
  return (
    <div className="adver-box">
      <div>
        <img src={image} />
      </div>
      <div>Rs.1000</div>
      <div>Grow your business within Our web</div>
      <div>
        Get More customers in your products with business ads that help people
        find your company on the Top.
      </div>
      <div>
        <div>Let's Boost My Ad</div>{" "}
        <div>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};
function Advertisement() {
  return (
    <div className="adver-container">
      <div className="adver-title">Advertisement</div>
      <div>
        <AdContainer image={Hiloramart} />
      </div>
      <div className="divider">or</div>
      <div>
        <AdContainer image={google} />
      </div>
    </div>
  );
}

export default Advertisement;
