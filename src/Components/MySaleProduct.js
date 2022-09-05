import React from "react";
import "../Styles/Components/Sales.css";
import product_image from "../Assets/Images/MyWishList/Image.svg";
function MySaleProduct({ data }) {
  return (
    <>


      {data.map((e) => {

        return <div className="sale-product-container">
          <div>
            <img src={e.productImage} alt="product image" />
          </div>
          <div>
            <p>From</p>
            <p>{e.name}</p>

            <p>{e.description}</p>
          </div>
          <div>{e.price}</div>
        </div>






      })}


    </>
  );
}

export default MySaleProduct;
