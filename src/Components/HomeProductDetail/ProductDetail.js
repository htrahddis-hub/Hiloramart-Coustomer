import React, { useState } from 'react';
import ProductSmall from '../../Assets/Images/ProductDetail/ProductSmall.png';
import Image from '../../Assets/Images/ProductDetail/Image.png';
import { Rating } from 'react-simple-star-rating';
import Cart from '../../Assets/Images/ProductDetail/Cart.png';
import '../../Styles/Components/ProductDetail.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = ({ item, id }) => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => {
    if (counter >= 2) setCounter(counter - 1);
  };

  const addToCart = async (e) => {
    e.preventDefault();
    const body = {
      product_id: id,
      quantity: counter,
    };
    try {
      const { data } = await axios.post(
        'https://hiloramart-user.herokuapp.com/cart/add',
        body
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async (e) => {
    try {
      const { data } = await axios.post(
        'https://hiloramart-user.herokuapp.com/wishlist/add',
        { product_id: id }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='productDMainCont'>
      <div className='imageAndVideo'>
        <div className='videoContainer'>
          <img style={{ height: '25rem', width: '27rem' }} src={Image} alt='' />
        </div>
        <div className='SmallImageCont'>
          <img src={ProductSmall} alt='' />
          <img src={ProductSmall} alt='' />
          <img src={ProductSmall} alt='' />
          <img src={ProductSmall} alt='' />
          {/* <img src={ProductSmall} alt='' /> */}
        </div>
      </div>
      <hr />
      <Link
        to='/AffiliateProgram'
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <span style={{ fontSize: '20px' }} className='ProHead'>
          Arihant ERP
        </span>
      </Link>
      <div className='ProdInfo'>
        <div className='ProCont1'>
          <div id='ProHead'>LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER</div>
          <div className='Stars'>
            <Rating onClick={handleRating} ratingValue={rating} />
          </div>
        </div>
        <div>
          <div id='PriceCont'>
            <div id='ProdPrice'>RS 95,000</div>

            <div id='counter'>
              <ButtonIncrement onClickFunc={incrementCounter} />
              <Display message={counter} />
              <ButtonDecrement onClickFunc={decrementCounter} />
            </div>
          </div>

          <div id='buttonContainer'>
            <div>
              <button id='AddToCart' onClick={addToCart}>
                <img src={Cart} alt='' />
                Add to cart
              </button>
            </div>
            <div>
              <button id='AddToCart' onClick={addToWishlist}>
                <img src={Cart} alt='' />
                Add to Wishlist
              </button>
            </div>
            <div>
              <Link
                to='/Cart2'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <button id='BuyNow'>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ButtonIncrement(props) {
  return (
    <button
      className='counter'
      style={{ marginLeft: '.5rem' }}
      onClick={props.onClickFunc}
    >
      <div className='value'>+</div>
    </button>
  );
}
function ButtonDecrement(props) {
  return (
    <button
      className='counter'
      style={{ marginLeft: '.5rem' }}
      onClick={props.onClickFunc}
    >
      <div className='value'>-</div>
    </button>
  );
}
function Display(props) {
  return (
    <label className='value' id='counter' style={{ marginLeft: '.5rem' }}>
      {props.message}
    </label>
  );
}

export default ProductDetail;
