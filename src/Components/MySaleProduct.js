import React from "react";
import "../Styles/Components/Sales.css";
import product_image from "../Assets/Images/MyWishList/Image.svg";
function MySaleProduct() {
  return (
    <div className="sale-product-container">
      <div>
        <img src={product_image} alt="product image" />
      </div>
      <div>
        <p>From</p>
        <p>LOOP SCANO 1100 HAND HELD METAL DETECTOR</p>
      </div>
      <div>RS.5,000</div>
    </div>
  );
}

export default MySaleProduct;
