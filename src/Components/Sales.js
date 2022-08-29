import React from "react";
import DownIcon from "../Assets/Images/DownIcon.png";
import "../Styles/Components/Sales.css";
import MySaleProduct from "./MySaleProduct";
function Sales() {

const dateChanger = (e) => {
  console.log(e.target.value);
}

  return (
    <div className="sales-cont">
      <div className="topbar">
        <div style={{textAlign: 'center'}}>MY SALE</div>
        <div className="filter">
          {/* <div>
            <img src={DownIcon} alt="" />
          </div>
          <div>April 2022</div> */}
          <input onChange={dateChanger} style={{width: '100%'}} type="date" name="sale-date" id="sale-date" />
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
