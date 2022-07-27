import React, { useEffect, useRef, useState } from "react";
import ProductContainer from "./ProductContainer";
import "../../Styles/Components/DealOfDayContainer.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const DealOfDayContainer = () => {
  const [products, setProducts] = useState([]);

  const carousalRef = useRef();
  useEffect(() => {
    axios
      .get("https://hiloramart.herokuapp.com/product/getProducts")
      .then((res) => {
        // console.log(res.data.data);
        setProducts(res.data.data);
      });
  }, []);

  const handleBackward = () => {
    carousalRef.current.scrollLeft -= 200;
  };
  const handleForward = () => {
    carousalRef.current.scrollLeft += 200;
  };
  return (
    <div className="DoDmainContainer">
      <div className="DodContainer1">
        <div className="DodHead">Deal of the Day</div>
        <div className="DoDTime">09:50:34</div>
      </div>
      <div className="carousalParent">
        <div className="ProductCarousal" ref={carousalRef}>
          <div className="backward-arrow arrow" onClick={handleBackward}>
            <ArrowBackIosNewIcon />
          </div>
          <div className="forward-arrow arrow" onClick={handleForward}>
            <ArrowForwardIosIcon />
          </div>
          {[1, 2, 2, 2, 2, 2, 2, 2].map((p, idx) => (
            <div className="product-container">
              <Link
                to={`/HomeProductDetail/${p._id}`}
                style={{ color: "inherit", textDecoration: "none" }}
                key={idx}
              >
                <ProductContainer product={p} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealOfDayContainer;
