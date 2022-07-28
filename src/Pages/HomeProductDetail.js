import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import ProductDetail from "../Components/HomeProductDetail/ProductDetail";
import BroughtTogetherCont from "../Components/HomeProductDetail/BroughtTogetherCont";
import RelatedProducts from "../Components/HomeProductDetail/RelatedProducts";
import MiddleComp from "../Components/HomeProductDetail/MiddleComp";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const HomeProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  // console.log(item);
  return (
    <div>
      <ProductDetail id={id} item={item} />
      <MiddleComp />
      <BroughtTogetherCont />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default HomeProductDetail;
