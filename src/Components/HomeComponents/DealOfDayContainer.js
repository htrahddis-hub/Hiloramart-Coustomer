import React, { useEffect, useState } from 'react';
import ProductContainer from './ProductContainer';
import '../../Styles/Components/DealOfDayContainer.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DealOfDayContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://hiloramart.herokuapp.com/product/getProducts')
      .then((res) => {
        // console.log(res.data.data);
        setProducts(res.data.data);
      });
  }, []);

  return (
    <div className='DoDmainContainer'>
      <div className='DodContainer1'>
        <div className='DodHead'>Deal of the Day</div>
        <div className='DoDTime'>09:50:34</div>
      </div>
      <div className='ProductCarousal'>
        {products.map((p, idx) => (
          <Link
            to={`/HomeProductDetail/${p._id}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
            key={idx}
          >
            <ProductContainer product={p} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DealOfDayContainer;
