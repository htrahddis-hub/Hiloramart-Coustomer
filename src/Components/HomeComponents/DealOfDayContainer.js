import React from 'react';
import ProductContainer from './ProductContainer';
import '../../Styles/Components/DealOfDayContainer.css';
import {Link} from 'react-router-dom';

const DealOfDayContainer = () => {
  return (
    <div className='DoDmainContainer'>
      <div className='DodContainer1'>
        <div className='DodHead'>Deal of the Day</div>
        <div className='DoDTime'>09:50:34</div>
      </div>
      <div className='ProductCarousal'>
        <Link
          to='/HomeProductDetail'
          style={{color: 'inherit', textDecoration: 'none'}}
        >
          <ProductContainer />
        </Link>
        <Link
          to='/HomeProductDetail'
          style={{color: 'inherit', textDecoration: 'none'}}
        >
          <ProductContainer />
        </Link>
        <Link
          to='/HomeProductDetail'
          style={{color: 'inherit', textDecoration: 'none'}}
        >
          <ProductContainer />
        </Link>
      </div>
    </div>
  );
};

export default DealOfDayContainer;
