import React, { useState } from "react";
import DownIcon from "../Assets/Images/DownIcon.png";
import "../VendorsStyle/VmyWallet.css";
function AccordionAffiliate(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          {" "}
          <div className="ADrow">
            <div>Arihant ERP</div>
            <div>Total Profit RS. 1,000</div>
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
            <div className="amount-text">VK PVT Affiliate</div>
          </div>
          <div>
            <div className="amount-text">10-apr-2022</div>
            <div className="amount-text">10-apr-2022</div>
          </div>
          <div>
            <div className="f-500 color-green"> Rs.1000 </div>
            <div className="f-500 color-green"> Rs.1000 </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccordionAffiliate;
