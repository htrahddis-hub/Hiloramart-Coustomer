import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import ProductSmall from "../../Assets/Images/ProductDetail/ProductSmall.png";
import Image from "../../Assets/Images/ProductDetail/Image.png";
import { Rating } from "react-simple-star-rating";
import Cart from "../../Assets/Images/ProductDetail/Cart.png";
import "../../Styles/Components/ProductDetail.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import {
  ADD_ITEM_CART,
  ADD_ITEM_TO_WISHLIST,
  CHECK_ITEM_IN_CART,
  CHECK_WISHLIST_STATUS,
  GET_PRODUCT_DETAILS,
  REMOVE_ITEM_TO_WISHLIST,
} from "../../Context/Types";
import wishlist_icon from "../../Assets/Images/wishlist.svg";
import active_wishlist_icon from "../../Assets/Images/active-wishlist.svg";
import { CircularProgress } from "@mui/material";
const ProductDetail = ({ item, id }) => {
  const { dispatch } = useContext(AuthContext);
  const [rating, setRating] = useState(0); // initial rating value
  const [productDetails, setProductDEtails] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToCartLoading, setIsAddedToCartLoading] = useState(false);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter((prev) => prev + 1);
  const decrementCounter = () => {
    if (counter >= 2) setCounter((prev) => prev - 1);
  };

  const addToCart = async (e) => {
    const values = [
      {
        productId: id,
        quantity: counter,
      },
    ];
    dispatch({
      type: ADD_ITEM_CART,
      payload: values,
      upDateState: setIsAddedToCart,
      setIsLoading: setIsAddedToCartLoading,
    });
  };

  const addToWishlist = async (e) => {
    dispatch({
      type: ADD_ITEM_TO_WISHLIST,
      payload: id,
      upDateState: setIsWishlist,
      setIsLoading: setIsWishlistLoading,
    });
  };
  const removeFromWishlist = () => {
    dispatch({
      type: REMOVE_ITEM_TO_WISHLIST,
      payload: id,
      upDateState: setIsWishlist,
      setIsLoading: setIsWishlistLoading,
    });
  };
  useEffect(() => {
    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: id,
      upDateState: setProductDEtails,
    });
    dispatch({
      type: CHECK_WISHLIST_STATUS,
      payload: id,
      upDateState: setIsWishlist,
    });
    dispatch({
      type: CHECK_ITEM_IN_CART,
      payload: id,
      upDateState: setIsAddedToCart,
      setIsLoading: setIsAddedToCartLoading,
    });
  }, []);
  return productDetails ? (
    <div className="productDMainCont">
      <div className="imageAndVideo">
        <div className="videoContainer">
          <div
            className="wishlist-cont"
            onClick={!isWishlist ? addToWishlist : removeFromWishlist}
          >
            {isWishlistLoading ? (
              <CircularProgress sx={{ color: "black" }} size={25} />
            ) : (
              <img src={isWishlist ? active_wishlist_icon : wishlist_icon} />
            )}
          </div>
          {selectedImage ? (
            <img src={selectedImage} alt="" className="active-preview" />
          ) : (
            <ReactPlayer
              url={productDetails[0].productVideos[0]}
              light
              playsinline
              controls
              className="active-preview"
            />
          )}
        </div>
        <div className="SmallImageCont">
          {productDetails[0].productImage.map((item, index) => {
            return (
              <img
                src={item}
                alt=""
                className="product-preview-image"
                onClick={() => {
                  setSelectedImage(item);
                }}
              />
            );
          })}
          <ReactPlayer
            url={productDetails[0].productVideos[0]}
            className="product-preview-image"
            style={{ width: "60px", height: "60px" }}
            onClick={() => {
              setSelectedImage(item);
            }}
          />
        </div>
      </div>
      <div className="ProdInfo">
        <div className="ProCont1 prodc-cont">
          <div id="ProHead">{productDetails[0].name}</div>
          <div className="Stars">
            <Rating onClick={handleRating} ratingValue={rating} />
          </div>
        </div>
        <div id="PriceCont">
          <div id="ProdPrice">RS {productDetails[0].price}</div>

          <div id="counter">
            <ButtonIncrement onClickFunc={incrementCounter} />
            <Display message={counter} />
            <ButtonDecrement onClickFunc={decrementCounter} />
          </div>
        </div>
        <div id="buttonContainer">
          <div>
            <button id="AddToCart" onClick={addToCart}>
              {isAddedToCartLoading ? (
                <CircularProgress sx={{ color: "black" }} size={25} />
              ) : (
                <>
                  <img src={Cart} alt="" />
                  {isAddedToCart ? "Added to cart" : "Add to cart"}
                </>
              )}
            </button>
          </div>
          {/* <div>
            <button id="AddToCart" onClick={addToWishlist}>
              <img src={Cart} alt="" />
              Add to Wishlist
            </button>
          </div> */}
          <div>
            <Link
              to="/Cart2"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button id="BuyNow">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

function ButtonIncrement(props) {
  return (
    <button
      className="counter"
      style={{ marginLeft: ".5rem" }}
      onClick={props.onClickFunc}
    >
      <div className="value">+</div>
    </button>
  );
}
function ButtonDecrement(props) {
  return (
    <button
      className="counter"
      style={{ marginLeft: ".5rem" }}
      onClick={props.onClickFunc}
    >
      <div className="value">-</div>
    </button>
  );
}
function Display(props) {
  return (
    <label className="value" id="counter" style={{ marginLeft: ".5rem" }}>
      {props.message}
    </label>
  );
}

export default ProductDetail;
