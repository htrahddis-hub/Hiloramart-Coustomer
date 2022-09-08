import React from "react";
import "../Styles/Components/Sales.css";
import product_image from "../Assets/Images/MyWishList/Image.svg";
function MySaleProduct({ data }) {
  return (
    <>
      {data.map((e) => {
        return (
          <div className="sale-product-container">
            <div>
              <img src={e.productId.productImage} alt="product image" />
            </div>
            <div>
              <p className="h6" >From</p>
              <p className="mb-0 h6" >{e.productId.name}</p>
              <p className="mb-0 h6" >{e.productId.description}</p>
            </div>
            <div>Rs. {e.productId.price}</div>
          </div>
        );
      })}
    </>
  );
}

export default MySaleProduct;
