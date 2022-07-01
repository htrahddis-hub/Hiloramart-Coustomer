import React from 'react';
import Footer from '../Components/Footer';
import YourWishlistCont from '../Components/MyWishList/YourWishlistCont';
import NavBar from '../Components/NavBar';
import '../Styles/pages/MyWishList.css';

const MyWishList2 = () => {
  return (
    <>
      <NavBar />
      <div id='OHcont1'>
        <div id='OHhead'>YOUR WISHLIST</div>
        {/* <div id='OHtime'>LAST 6 MONTHS</div> */}
      </div>
      <div className='OHCont2'>
        <YourWishlistCont />
        <YourWishlistCont />
        <YourWishlistCont />
      </div>
      <div className='OHCont2'>
        <YourWishlistCont />
        <YourWishlistCont />
        <YourWishlistCont />
      </div>

      <Footer />
    </>
  );
};

export default MyWishList2;
