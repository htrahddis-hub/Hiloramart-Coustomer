import React from "react";
import "../Styles/Components/Sales.css";

function MySaleProduct({ data }) {
  console.log(data, "data")
  return (
    <>
      { data?.detail?.length !== 0 ? (
        data?.detail?.map((e) => {
        return (
          <div className="sale-product-container">
            <div>
              <img src={e?.productId?.productImage} alt="product image" />
            </div>
            <div>
              <p className="h6" >From</p>
              <p className="mb-0 h6" >{e?.productId?.name}</p>
              <p className="mb-0 h6" >{e?.productId?.description}</p>
            </div>
            <div>Rs. {e?.productId?.price}</div>
          </div>
        );
      })) : (
        <h4>No Sales found</h4>
      )}
    </>
  );
}

export default MySaleProduct;
