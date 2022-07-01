import React, {useState} from 'react';
import {Rating} from 'react-simple-star-rating';
import ProductImage from '../../Assets/Images/Home/ProductImage.png';
import '../../Styles/Components/ProductContainer.css';
import '../../Styles/Components/YourWishlistCont.css';

const YourWishlistCont = () => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <div className='ProductMainContainer'>
      <div className='ProCont1'>
        {/* <div className='ProHead'>Arihant ERP</div> */}
        <div
          className='Stars'
          style={{height: '5px', padding: '2%', paddingBottom: '3%'}}
        >
          <Rating onClick={handleRating} ratingValue={rating} />
        </div>
      </div>

      <div className='Images'>
        <img
          src={ProductImage}
          alt=''
          style={{height: '8rem', width: '8rem'}}
        />
      </div>
      <div className='discription'>
        LOOP SCANO 1100 HAND HELD METAL DETECTOR
      </div>
      <div className='price'>RS. 4000</div>
      <div id='WishListButtonCont'>
        <div>
          <button id='BUYbutton1'>BUY NOW</button>
        </div>
        <div>
          <button id='BUYbutton2'>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default YourWishlistCont;
