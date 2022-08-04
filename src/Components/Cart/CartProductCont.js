import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "../../Assets/Images/MyWishList/Image.svg";
import Delete from "../../Assets/Images/cart/Delete.png";
import "../../Styles/pages/Cart2.css";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../../Context/AuthContext";
import { DELETE_ITEM_FROM_CART } from "../../Context/Types";

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
  totalCost,
  setTotalCost,
  cartProducts,
  TotalCartCost,
  getCartItems,
}) => {
  const { dispatch } = useContext(AuthContext);
  const [itemCost, setItemCost] = useState(item.productId.price);
  const [counter, setCounter] = useState(item.quantity);
  const [deletFormCartLoading, setDeletFromCartLoading] = useState(false);
  const deleteFromCart = async (id, cartProdId) => {
    dispatch({
      type: DELETE_ITEM_FROM_CART,
      payload: { productId: [id] },
      cb: getCartItems,
      setIsLoading: setDeletFromCartLoading,
      cartProducts,
      cartProdId,
    });
  };
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
        {deletFormCartLoading ? (
          <CircularProgress sx={{ color: "black" }} size={25} />
        ) : (
          <img
            onClick={() => deleteFromCart(item.productId._id, item._id)}
            src={Delete}
            alt="cart_item"
          />
        )}
      </div>
    </div>
  );
};

export default CartProductCont;
