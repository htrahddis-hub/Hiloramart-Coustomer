import { CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import ProductImage from "../../Assets/Images/Home/ProductImage.png";
import "../../Styles/Components/ProductContainer.css";
import "../../Styles/Components/YourWishlistCont.css";
import wishlist_icon from "../../Assets/Images/wishlist.svg";
import active_wishlist_icon from "../../Assets/Images/active-wishlist.svg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import ReviewModal from "../ReviewModal";
import { AuthContext } from "../../Context/AuthContext";
import {
  REMOVE_ITEM_TO_WISHLIST,
  CHECK_WISHLIST_STATUS,
  ADD_ITEM_TO_WISHLIST,
  ADD_ITEM_CART,
} from "../../Context/Types";

const YourWishlistCont = ({ data, cb }) => {
  const { dispatch } = useContext(AuthContext);
  // const [rating, setRating] = useState(data?.rating); // initial rating value
  const [isWishlist, setIsWishlist] = useState(true);
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);
  const [counter, setCounter] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToCartLoading, setIsAddedToCartLoading] = useState(false);

  // Catch Rating value
  // const handleRating = (rate) => {
  //   setRating(rate);
  //   handleOpen();
  //   // other logic
  // };

  useEffect(() => {
    dispatch({
      type: CHECK_WISHLIST_STATUS,
      payload: data._id,
      upDateState: setIsWishlist,
    });
  }, []);

  const toggleWishlist = async (id) => {
    console.log("hello");
    if (isWishlist) {
      dispatch({
        type: REMOVE_ITEM_TO_WISHLIST,
        payload: id,
        upDateState: setIsWishlist,
        setIsLoading: setIsWishlistLoading,
        cb: cb,
      });
    } else {
      dispatch({
        type: ADD_ITEM_TO_WISHLIST,
        payload: id,
        upDateState: setIsWishlist,
        setIsLoading: setIsWishlistLoading,
      });
    }
  };

  const addItemToCart = (id) => {
    dispatch({
      type: ADD_ITEM_CART,
      payload: [{ productId: id, quantity: counter }],
      upDateState: setIsAddedToCart,
      setIsLoading: setIsAddedToCartLoading,
    });
  };

  const handleIncreaseCounter = () => {
    setCounter((prev) => {
      if (prev + 1 <= data.stock) return prev + 1;
      else {
        alert(`Only ${prev} in Stocks`);
        return prev;
      }
    });
  };

  return (
    <div className="ProductMainContainer mx-4 my-4 py-2 px-3">
      <div className="ProCont1">
        <div className="ProHead">{data?.owner?.name}</div>
        <div className="Stars">
          <Rating ratingValue={data?.rating} size={20} readonly/>
        </div>
      </div>

      <div className="Images">
        <Link to={`/HomeProductDetail/${data._id}`}>
          <img
            src={data?.productImage[0]}
            alt=""
            style={{ height: "8rem", width: "8rem" }}
          />
        </Link>
      </div>
      <div className="product-title-cont">
        <div className="discription">{data.name}</div>
        <div
          onClick={() => toggleWishlist(data._id)}
          style={{ cursor: "pointer" }}
        >
          {isWishlistLoading ? (
            <CircularProgress sx={{ color: "black" }} size={25} />
          ) : (
            <img src={isWishlist ? active_wishlist_icon : wishlist_icon} />
          )}
        </div>
      </div>
      <div className="price">RS. {data?.price}</div>
      <div id="WishListButtonCont1">
        <div className="mb-2">
          <button id="BUYbutton11">BUY NOW</button>
        </div>
        <div className="d-flex justify-content-between">
          <div
            className="d-flex align-items-center justify-content-between border p-0 h4 me-3 mb-0 height"
            style={{ width: "140px" }}
          >
            <div
              className="border-end p-2 taller"
              onClick={() => {
                setCounter((prev) => (prev > 1 ? prev - 1 : 1));
              }}
            >
              -
            </div>
            <div className="px-4 py-2 h5 tall mb-0">{counter}</div>
            <div
              className="border-start p-2 taller"
              onClick={handleIncreaseCounter}
            >
              +
            </div>
          </div>
          <button id="BUYbutton21" onClick={() => addItemToCart(data?._id)}>
            <AddShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourWishlistCont;
