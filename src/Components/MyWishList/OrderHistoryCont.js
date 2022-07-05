import React from 'react';
import Image from '../../Assets/Images/MyWishList/Image.png';
import '../../Styles/Components/OrderHistoryCont.css';

const OrderHistoryCont = ({ item }) => {
  return (
    <div className='OHCmainCont'>
      <div id='OHCcont1'>
        <div id='OHCimage'>
          <img src={Image} alt='' style={{ width: '65px' }} />
        </div>
        <div id='OhcDetails'>
          <div id='ProdName'>LOOP SCANO 1100 HAND HELD METAL DETECTOR</div>
          <div id='DeliveryDate'>Delivered 12-Mar-2022</div>
        </div>
      </div>
      <div id='OHCcont2'>
        <div className='OHCitem'>
          <div className='OHcHead'>Order Date</div>
          <div className='OHcAns'>22-Mar-2022</div>
        </div>
        <div className='OHCitem'>
          <div className='OHcHead'>Order ID</div>
          <div className='OHcAns'>1548-5265854-569652</div>
        </div>
        <div className='OHCitem'>
          <div className='OHcHead'>Total Pay</div>
          <div className='OHcAns'>RS 4000</div>
        </div>
        <div className='OHCitem'>
          <div className='OHcHead'>Shipping Address</div>
          <div className='OHcAns'>India , New Delhi Pitampura</div>
        </div>
      </div>
      <div id='OHcCont3'>
        <div>
          <button id='BuyItAgain'>Buy it again</button>
        </div>
        <div>
          <button id='Return'>Return</button>
        </div>
      </div>
      <div id='OHcCount4'>
        <button id='invoice'>Download Invoice</button>
      </div>
    </div>
  );
};

export default OrderHistoryCont;
