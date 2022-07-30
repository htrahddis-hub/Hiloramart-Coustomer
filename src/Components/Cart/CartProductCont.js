import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "../../Assets/Images/MyWishList/Image.svg";
import Delete from "../../Assets/Images/cart/Delete.png";
import "../../Styles/pages/Cart2.css";

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

const CartProductCont = ({
  item,
  deleteFromCart,
  totalCost,
  setTotalCost,
  cartProducts,
  TotalCartCost,
}) => {
  const [itemCost, setItemCost] = useState(item.productId.price);
  const [counter, setCounter] = useState(item.quantity);
  const calculateCost = () => {
    setItemCost((prev) => counter * item.productId.price);
    cartProducts.set(item._id, counter * item.productId.price);
    TotalCartCost();
  };

  useEffect(() => {
    calculateCost();
  }, [counter]);
  return (
    <div className="cart-prod-cont">
      <div className="cart-prod-image">
        <img src={item.productId.productImage[0]} alt="" />
      </div>
      <div className="cart-prod-details">
        <div className="cart-prod-title">{item.productId.name}</div>
        <div className="cart-prod-price" data-price={itemCost}>
          RS. {itemCost}
        </div>
        <div className="cart-prod-counter">
          <Counter counter={counter} setCounter={setCounter} />
        </div>
      </div>
      <div className="cart-prod-delete">
        <img
          onClick={() => deleteFromCart(item._id)}
          src={Delete}
          alt="cart_item"
        />
      </div>
    </div>
  );
};

export default CartProductCont;
