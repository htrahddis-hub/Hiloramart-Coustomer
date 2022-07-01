import React from 'react';
import ProductContainer2 from './ProductContainer2';
import '../../Styles/Components/MostSellingProductContainer.css';
import {Link} from 'react-router-dom';
const Detectors = () => {
  return (
    <>
      <div className='MSPmainContainer'>
        <div className='MSPcontiner1'>Detectors</div>
        <div className='MSPCont2'>
          <Link
            to='/HomeProductDetail'
            style={{color: 'inherit', textDecoration: 'none'}}
          >
            <ProductContainer2 />
          </Link>
          <Link
            to='/HomeProductDetail'
            style={{color: 'inherit', textDecoration: 'none'}}
          >
            <ProductContainer2 />
          </Link>
          <Link
            to='/HomeProductDetail'
            style={{color: 'inherit', textDecoration: 'none'}}
          >
            <ProductContainer2 />
          </Link>
          <Link
            to='/HomeProductDetail'
            style={{color: 'inherit', textDecoration: 'none'}}
          >
            <ProductContainer2 />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Detectors;
