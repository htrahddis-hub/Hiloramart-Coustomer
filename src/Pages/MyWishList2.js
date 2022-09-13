import React, { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import YourWishlistCont from "../Components/MyWishList/YourWishlistCont";
import NavBar from "../Components/NavBar";
import "../Styles/pages/MyWishList.css";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { AuthContext } from "../Context/AuthContext";
import {
  GET_WISHLIST_ITEMS,
  GET_WWISHLIST_ITEMS,
  REMOVE_ITEM_TO_WISHLIST,
} from "../Context/Types";
import ProductContainerSkeleton from "../Components/Skeleton-loading/prductConatiner.skeleton";

const MyWishList2 = () => {
  const { dispatch } = useContext(AuthContext);
  const [wishListItems, setWishListItems] = useState();

  const getWishlist = async () => {
    dispatch({ type: GET_WISHLIST_ITEMS, upDateState: setWishListItems });
  };

  useEffect(() => {
    getWishlist();
  }, []);

  // console.log(wishListItems);

  return (
    <div className="wishlist-container">
      <div id="OHcont1">
        <div id="OHhead">YOUR WISHLIST</div>
      </div>
      <div className="wishlist-items-cont">
        {wishListItems ? (
          wishListItems.map((item, idx) => (
            <YourWishlistCont item={item} key={item?._id} cb={getWishlist} />
          ))
        ) : (
          <div className="d-flex gap-5">
            <ProductContainerSkeleton />
            <ProductContainerSkeleton />
            <ProductContainerSkeleton />
            <ProductContainerSkeleton />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyWishList2;

// <div className='OHCont2'>
// // <YourWishlistCont />
// // <YourWishlistCont />
// //{' '}
// </div>
// //{' '}
// <div className='OHCont2'>
// // <YourWishlistCont />
// // <YourWishlistCont />
// // <YourWishlistCont />
// //{' '}
// </div>
