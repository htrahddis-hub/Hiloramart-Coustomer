import React, { useContext, useEffect, useState } from "react";

import "../Styles/pages/Cart2.css";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../Context/AuthContext";

const Counter = ({ counter, setCounter }) => {
  return (
    <div className="counter-cont">
      <div
        className="counter-minus"
        onClick={() => {
          setCounter((prev) => (prev > 1 ? prev - 1 : 1));
        }}
      >
        -
      </div>
      <div className="counter-value">{counter}</div>
      <div
        className="counter-plus"
        onClick={() => {
          setCounter((prev) => (prev >= 1 ? prev + 1 : 1));
        }}
      >
        +
      </div>
    </div>
  );
};

const CheckoutProductCard = ({
  product,
  quanity,
  setTotalCost,
  counter,
  setCounter,
}) => {
  const { dispatch } = useContext(AuthContext);
  const [itemCost, setItemCost] = useState();

  const calculateCost = () => {
    setItemCost((prev) => product.price * counter);
    setTotalCost(product.price * counter);
  };

  useEffect(() => {
    setCounter(quanity);
    calculateCost();
  }, [counter]);
  return (
    <div className="cart-prod-cont">
      <div className="cart-prod-image">
        <img src={product.productImage[0]} alt="" />
      </div>
      <div className="cart-prod-details">
        <div className="cart-prod-title">{product.name}</div>
        <div className="cart-prod-price" data-price={itemCost}>
          RS. {itemCost}
        </div>
        <div className="cart-prod-counter">
          <Counter counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
