import React, { useState } from "react";
import DownIcon from "../Assets/Images/DownIcon.png";
import "../VendorsStyle/VmyWallet.css";

const options = { day: "numeric", month: "short", year: "numeric" };

function AccordionAffiliate({ data }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          {" "}
          <div className="ADrow">
            <div>{data?.affiliateUser.name}</div>
            <div>Total Profit RS. {new Intl.NumberFormat("en-IN", {
                    maximumFractionDigits: 0,
                  }).format(data?.orderPrice-data?.vendorPrice)} </div>
            <div>
              <img
                src={DownIcon}
                alt=""
                className={isActive ? "rotate-arrow" : "arrow-right"}
              />
            </div>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <div>
            <div className="amount-text">VK PVT Affiliate</div>
          </div>
          <div>
            <div className="amount-text">
              {new Date(data?.deliveryDate).toLocaleDateString(
                "en-IN",
                options
              )}
            </div>
          </div>
          <div>
            <div className="f-500 color-green">Rs. {new Intl.NumberFormat("en-IN", {
                    maximumFractionDigits: 0,
                  }).format(data?.orderPrice)} </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccordionAffiliate;
