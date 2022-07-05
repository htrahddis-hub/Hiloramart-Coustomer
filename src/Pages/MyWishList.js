import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderHistoryCont from '../Components/MyWishList/OrderHistoryCont';
import NavBar from '../Components/NavBar';
import '../Styles/pages/MyWishList.css';

const MyWishList = () => {
  const [wishListItems, setWishListItems] = useState([]);
  const getWishlist = async () => {
    try {
      const { data } = await axios.get(
        'https://hiloramart-user.herokuapp.com/wishlist'
      );
      setWishListItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      const { data } = await axios.delete(
        'https://hiloramart-user.herokuapp.com/wishlist/remove',
        { product_id: id }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <>
      <NavBar />
      <div id='OHcont1'>
        <div id='OHhead'>ORDERS HISTORY</div>
        {/* <div id='OHtime'>LAST 6 MONTHS</div> */}
      </div>
      <div className='OHCont2'>
        {wishListItems.map((i, idx) => (
          <OrderHistoryCont key={idx} item={i} />
        ))}
      </div>
    </>
  );
};

export default MyWishList;
