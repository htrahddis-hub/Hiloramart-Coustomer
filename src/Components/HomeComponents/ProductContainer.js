import React, { useState } from "react";
import ProductImage from "../../Assets/Images/Home/ProductImage.png";
import { Rating } from "react-simple-star-rating";
import "../../Styles/Components/ProductContainer.css";

const ProductContainer = ({ product }) => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <div className="ProductMainContainer">
      <div className="Stars">
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          size={15}
          iconsCount={5}
          allowHalfIcon={true}
          initialValue={2}
          readonly={true}
        />
      </div>
      <div className="Images">
        <img
          src={ProductImage}
          alt=""
          style={{ height: "8rem", width: "8rem" }}
        />
      </div>
      <div className="discription">
        LOOP SCANO 1100 HAND HELD METAL DETECTOR
      </div>
      <div className="price">RS. 4000</div>
    </div>
  );
};

export default ProductContainer;
