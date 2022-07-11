import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import YourWishlistCont from '../Components/MyWishList/YourWishlistCont';
import NavBar from '../Components/NavBar';
import '../Styles/pages/MyWishList.css';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

const MyWishList2 = () => {
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
        `https://hiloramart-user.herokuapp.com/wishlist/remove?product_id=${id}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishlist();
  }, [removeFromWishlist]);

  // console.log(wishListItems);

  return (
    <>
      <NavBar />
      <div id='OHcont1'>
        <div id='OHhead'>YOUR WISHLIST</div>
      </div>
      <Row>
        {wishListItems.map((i, idx) => (
          <Col key={idx} sm={12} md={6} xl={3}>
            <YourWishlistCont
              removeFromWishlist={removeFromWishlist}
              item={i}
            />
          </Col>
        ))}
      </Row>

      <Footer />
    </>
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
