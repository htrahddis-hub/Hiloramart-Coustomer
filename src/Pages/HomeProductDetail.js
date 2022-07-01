import React from 'react';
import NavBar from '../Components/NavBar';
import ProductDetail from '../Components/HomeProductDetail/ProductDetail';
import BroughtTogetherCont from '../Components/HomeProductDetail/BroughtTogetherCont';
import RelatedProducts from '../Components/HomeProductDetail/RelatedProducts';
import MiddleComp from '../Components/HomeProductDetail/MiddleComp';
import Footer from '../Components/Footer';
const HomeProductDetail = () => {
  return (
    <div>
      <NavBar />
      <ProductDetail />
      <MiddleComp />
      <BroughtTogetherCont />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default HomeProductDetail;
