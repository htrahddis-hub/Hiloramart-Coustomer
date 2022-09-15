import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import ProductSmall from "../../Assets/Images/ProductDetail/ProductSmall.png";
import Image from "../../Assets/Images/ProductDetail/Image.png";
import { Rating } from "react-simple-star-rating";
import Cart from "../../Assets/Images/ProductDetail/Cart.png";
import "../../Styles/Components/ProductDetail.css";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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

  const addToCart = async (e, cb) => {
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
      cb,
    });
  };

  const addToWishlist = (e) => {
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
  const handleBuy = () => {
    navigate("/checkout", {
      state: {
        productDetails,
        quantity: counter,
      },
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
    <div className="productDMainCont row">
      <div className="col-7">
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
            {productDetails[0].productVideos[0] ? (
              selectedImage ? (
                <img src={selectedImage} alt="" className="active-preview" />
              ) : (
                <ReactPlayer
                  url={productDetails[0].productVideos[0]}
                  light
                  playsinline
                  controls
                  className="active-preview"
                />
              )
            ) : (
              <img
                src={productDetails[0].productImage[0]}
                alt=""
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
      </div>
      <div className="col-5">
        <div className="ProdInfo ">
          <div
            className="d-flex flex-column justify-content-between"
            style={{ height: "360px" }}
          >
            <div>
              <div className="ProCont1 prodc-cont">
                <div id="ProHead">{productDetails[0].name}</div>
                <div className="Stars">
                  <Rating
                    onClick={handleRating}
                    ratingValue={rating}
                    size="21px"
                  />
                </div>
              </div>
              <div id="PriceCont" className="mt-5">
                <div id="ProdPrice">Rs {productDetails[0].price * counter} = Rs {productDetails[0].price} X {counter}</div>
                <div className="d-flex flex-column align-items-center">
                  <div className="h4 mb-3">Quantity</div>
                  <div id="counter">
                    <ButtonIncrement onClickFunc={incrementCounter} />
                    <Display message={counter} />
                    <ButtonDecrement onClickFunc={decrementCounter} />
                  </div>
                </div>
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
              <div>
                <button id="BuyNow" onClick={handleBuy}>
                  Buy Now
                </button>
              </div>
            </div>
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
