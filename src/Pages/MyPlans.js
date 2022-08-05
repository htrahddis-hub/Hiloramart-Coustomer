import React from "react";
import "../Styles/pages/MyPlans.css";
import invoice from "../Assets/Images/invoice.svg";

function MyPlans() {
  const InvoiceRow = () => {
    return (
      <div className="invoice-row">
        <div className="invoice-first">
          <div>
            <img src={invoice} />
          </div>
          <div className="f-500">Invoices..088644637</div>
        </div>
        <div>Invoice Date : 05/07/2022</div>
        <div className="download-invoice">Download</div>
      </div>
    );
  };
  return (
    <div className="myplans-container">
      <div className="plans-container">
        <div className="plans-card">
          <div className="plans-card-header">
            <div>
              <div className="plans-card-title">Google Plan</div>
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
        <InvoiceRow />
        <InvoiceRow />
        <InvoiceRow />
      </div>
    </div>
  );
}

export default MyPlans;
