import React from "react";
import DownIcon from "../Assets/Images/DownIcon.png";
import "../Styles/Components/Sales.css";
import MySaleProduct from "./MySaleProduct";
function Sales() {
  return (
    <div className="sales-cont">
      <div className="topbar">
        <div>MY SALE</div>
        <div className="filter">
          <div>
            <img src={DownIcon} alt="" />
          </div>
          <div>April 2022</div>
        </div>
      </div>
      <div className="sale-product-parent">
        <MySaleProduct />
        <MySaleProduct />
        <MySaleProduct />
      </div>
    </div>
  );
}

export default Sales;
