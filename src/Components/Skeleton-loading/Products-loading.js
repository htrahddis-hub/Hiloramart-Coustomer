import React from "react";
import "../../Styles/pages/Cart2.css";
import "../../Styles/Components/skeleton.css";

function ProductsLoading() {
  return (
    <div className="CPCmain" style={{ background: "rgba(112,112,112,0.05)" }}>
      <div className="CPC1 skeleton skeleton-body skeleton-image"></div>
      <div className="product-detail  ">
        <div className="CPCin1 skeleton skeleton-body line"></div>
        <div className="CPCin2 skeleton skeleton-body line"></div>
      </div>
      <div className="product-options " style={{ marginLeft: "10px" }}>
        <div className="remove-icon skeleton skelete-delete"></div>
        <div
          style={{ marginBottom: "10px" }}
          className="skeleton skeleton-body skelete-delete"
        ></div>
      </div>
    </div>
  );
}

export default ProductsLoading;
