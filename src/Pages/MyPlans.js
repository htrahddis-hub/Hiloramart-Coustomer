import React from "react";
import "../Styles/pages/MyPlans.css";
import invoice from "../Assets/Images/invoice.svg";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useEffect } from "react";
import { GET_VENDOR_ADS } from "../Context/Types";
import { useState } from "react";


const InvoiceRow = ({ad}) => {    
  return (
    <div className="invoice-row">
      <div className="invoice-first">
        <div>
          <img src={invoice} />
        </div>
        <div className="f-500">{ad?.orderId}</div>
      </div>
      <div>Invoice Date : {ad?.lastDate.slice(4,15)}</div>
      <a href={ad?.invoice} download className="download-invoice">Download</a>
    </div>
  );
};


function MyPlans() {
  const { dispatch } = useContext(AuthContext);

  const [allAds, setAllAds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const getAllAds = () => {
    dispatch({
      type: GET_VENDOR_ADS,
      setAllAds,
      setIsLoading
    })
  }

  useEffect(() => {
    getAllAds();
  }, [])
  

  return (
    <div className="myplans-container">
      <div className="plans-container">
        <div className="plans-card">
          <div className="plans-card-header">
            <div>
              <div className="plans-card-title">Hiloramart Plan</div>
              <div className="plans-card-title">Rs 1000/month</div>
            </div>
            <div className="plans-days">5 days left</div>
          </div>
          <div className="plans-info">
            <div>Start at 01/07/22</div>
            <div>
              <button className="upgrade-btn">Upgrade</button>
            </div>
          </div>
        </div>
      </div>
      {/* invoices */}
      <div className="invoice-container">
        <div className="title-invoice">Invoices</div>
        {
          allAds?.map((ad) => (
            <InvoiceRow ad={ad}/>
          ))
        }
        {/* <InvoiceRow />
        <InvoiceRow /> */}
      </div>
    </div>
  );
}

export default MyPlans;
