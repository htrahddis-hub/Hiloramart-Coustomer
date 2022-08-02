import React, { useEffect, useState } from "react";
import ProductImage from "../../Assets/Images/Home/ProductImage.png";
import { Rating } from "react-simple-star-rating";
import "../../Styles/Components/ProductContainer.css";
import { Link } from "react-router-dom";
const ProductContainer2 = (props) => {
  const { price, title, description, ratings, productImage, name, owner } =
    props;
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <div className="ProductMainContainer">
      <div className="ProCont1">
        <Link
          to="/affiliate"
          style={{ color: "inherit", textDecoration: "none" }}
          state={owner}
        >
          <div className="ProHead">{owner?.name}</div>
        </Link>
        <div className="Stars">
          <Rating
            onClick={handleRating}
            size={15}
            iconsCount={5}
            allowHalfIcon={true}
            ratingValue={rating}
            initialValue={ratings}
            readonly={true}
          />
        </div>
      </div>

      <div className="Images">
        <img
          src={productImage ? productImage[0] : null}
          alt=""
          style={{ height: "8rem", width: "8rem" }}
        />
      </div>
      <div className="discription">{name}</div>
      <div className="price">RS. {price}</div>
    </div>
  );
};

export default ProductContainer2;
