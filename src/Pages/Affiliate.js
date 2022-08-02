import React from "react";
import Base from "../Assets/Images/affiliate/Base.png";
import Detectors from "../Components/HomeComponents/Detectors";
import GroundSurveyEquipments from "../Components/Affiliate/GroundSurveyEquipments";
import Footer from "../Components/Footer";
import "../Styles/pages/AffiliateProgram.css";
import arrow from "../Assets/Images/white-arrow.svg";
import { Link, useNavigate } from "react-router-dom";
const Affiliate = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="affliate-cont">
        <div className="vendor-title">Arihant ERP</div>
        <div className="vendor-affiliate-detail">
          <div>
            <p>Total Products</p>
            <p>50+</p>
          </div>
          <div
            onClick={() => {
              navigate("/AffiliateProgram");
            }}
          >
            <div>My Affiliate Program</div>
            <div>
              <img src={arrow} className="affiliate-arrow" />
            </div>
          </div>
          <div>
            <p>Active affilates</p>
            <p>100+</p>
          </div>
        </div>
      </div>
      <Detectors />
      <GroundSurveyEquipments />
      <Footer />
    </div>
  );
};

export default Affiliate;
