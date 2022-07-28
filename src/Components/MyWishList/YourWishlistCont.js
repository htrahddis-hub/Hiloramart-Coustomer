import { CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import ProductImage from "../../Assets/Images/Home/ProductImage.png";
import "../../Styles/Components/ProductContainer.css";
import "../../Styles/Components/YourWishlistCont.css";
import wishlist_icon from "../../Assets/Images/wishlist.svg";
import active_wishlist_icon from "../../Assets/Images/active-wishlist.svg";
import { AuthContext } from "../../Context/AuthContext";
import { REMOVE_ITEM_TO_WISHLIST } from "../../Context/Types";

const YourWishlistCont = ({ item, cb }) => {
  const { dispatch } = useContext(AuthContext);
  const [rating, setRating] = useState(0); // initial rating value
  const [isWishlist, setIsWishlist] = useState(true);
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  const removeFromWishlist = async (id) => {
    dispatch({
      type: REMOVE_ITEM_TO_WISHLIST,
      payload: id,
      upDateState: setIsWishlist,
      setIsLoading: setIsWishlistLoading,
      cb: cb,
    });
  };

  return (
    <div className="ProductMainContainer">
      <div className="ProCont1">
        <div className="ProHead">Arihant ERP</div>
        <div className="Stars">
          <Rating onClick={handleRating} ratingValue={rating} size={20} />
        </div>
      </div>

      <div className="Images">
        <img
          src={item.productImage[0]}
          alt=""
          style={{ height: "8rem", width: "8rem" }}
        />
      </div>
      <div className="product-title-cont">
        <div className="discription">{item.name}</div>
        <div onClick={() => removeFromWishlist(item._id)}>
          {isWishlistLoading ? (
            <CircularProgress sx={{ color: "black" }} size={25} />
          ) : (
            <img src={isWishlist ? active_wishlist_icon : wishlist_icon} />
          )}
        </div>
      </div>
      <div className="price">RS. {item.price}</div>
      <div id="WishListButtonCont">
        <div>
          <button id="BUYbutton1">BUY NOW</button>
        </div>
        <div>
          <button id="BUYbutton2" onClick={() => removeFromWishlist(item)}>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourWishlistCont;
