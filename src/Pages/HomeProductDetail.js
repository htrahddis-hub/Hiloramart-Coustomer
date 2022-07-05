import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import ProductDetail from '../Components/HomeProductDetail/ProductDetail';
import BroughtTogetherCont from '../Components/HomeProductDetail/BroughtTogetherCont';
import RelatedProducts from '../Components/HomeProductDetail/RelatedProducts';
import MiddleComp from '../Components/HomeProductDetail/MiddleComp';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HomeProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  const getItem = async () => {
    try {
      const res = await axios.get(
        `https://hiloramart.herokuapp.com/product/getProductsById/${id}`
      );
      setItem(res.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItem();
  }, [id]);

  // console.log(item);
  return (
    <div>
      <NavBar />
      <ProductDetail id={id} item={item} />
      <MiddleComp />
      <BroughtTogetherCont />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default HomeProductDetail;
