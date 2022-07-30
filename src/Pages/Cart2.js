import React, { useContext, useEffect, useMemo, useState } from "react";
import CartProductCont from "../Components/Cart/CartProductCont";
import "../Styles/pages/Cart2.css";
import MasterCard from "../Assets/Images/cart/MasterCard.png";
import NavBar from "../Components/NavBar";
import upi from "../Assets/Images/cart/upi.png";
import cod from "../Assets/Images/cart/cod.png";
import Ppay from "../Assets/Images/cart/Ppay.png";
import gPay from "../Assets/Images/cart/gPay.png";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { DELETE_ITEM_FROM_CART, GET_CART_ITEMS } from "../Context/Types";

const Cart2 = () => {
  const { dispatch } = useContext(AuthContext);
  const [cartItems, setCartitems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [cartProducts, setCartProducts] = useState(new Map());
  //todo -> GET ALL ITEMS IN THE CART
  const getCartItems = async () => {
    dispatch({
      type: GET_CART_ITEMS,
      setIsLoading: setIsLoading,
      upDateState: setCartitems,
    });
  };

  //todo -> DELTE FROM CART function will be passed with each item as a prop
  const deleteFromCart = async (id) => {
    console.log(id);
    dispatch({
      type: DELETE_ITEM_FROM_CART,
      payload: { productId: [id] },
      setIsLoading,
    });
  };
  const cost = () => {
    let price = 0;
    cartItems.map((item) => {
      price += Number(item.productId.price);
      cartProducts.set(item._id, item.productId.price);
    });
    setTotalCost(price);
  };

  const TotalCartCost = () => {
    let price = 0;
    let priceArr = Array.from(cartProducts.values());
    priceArr.map((item) => {
      price += Number(item);
    });
    setTotalCost(price);
  };
  useEffect(() => {
    getCartItems();
  }, []);

  useEffect(() => {
    cost();
    console.log(cartProducts);
  }, [cartItems]);

  return (
    <>
      <div id="CartMainDiv">
        <div id="cartDiv1">
          <div id="cart1">SHIPPING ADDRESS</div>
          <div id="cart2">
            <div id="add">
              98, B-1, Apos;s Residency, Residency Road, Next To Konark Hotel
              Residency Road
            </div>
            <div id="button">
              <button id="Change">Change</button>
            </div>
          </div>
        </div>
        <div id="CartDiv2main">
          <div id="cartDiv2">
            <div className="ColCart1">
              <div id="CartIn1">
                <div>Your Orders</div>
              </div>
              <div id="CartIn2">
                {cartItems.map((item, idx, originalArr) => {
                  return (
                    <CartProductCont
                      key={item._id}
                      deleteFromCart={deleteFromCart}
                      item={item}
                      totalCost={totalCost}
                      setTotalCost={setTotalCost}
                      cartProducts={cartProducts}
                      TotalCartCost={TotalCartCost}
                    />
                  );
                })}
              </div>
              <div id="CartIn3">
                <div className="CartRow">
                  <div>Subtotal</div>
                  <div>RS. {totalCost}</div>
                </div>
                <div className="CartRow">
                  <div>Taxes & Fees</div>
                  <div>+RS. 500</div>
                </div>
                <div className="CartRow">
                  <div>Discount</div>
                  <div>-RS. 1500</div>
                </div>
                <div className="CartRow">
                  <div className="DarkcartText">Total</div>
                  <div className="DarkcartText">RS. {totalCost}</div>
                </div>
              </div>
            </div>
          </div>

          <div id="cartDiv3">
            <div className="masterCard">
              <img src={MasterCard} alt="" />
            </div>
            <div className="PaymentOp">
              <div id="OtherPayment">Other Payment Option</div>
              <div>
                <form>
                  <div className="radio">
                    <label className="rowCenter">
                      <div className="PayBox">
                        <div className="paymentImg">
                          <img src={upi} alt="" className="paymentImg" />
                        </div>
                        <div className="PayTEXT">UPI</div>
                      </div>

                      <div className="radioButton">
                        <input type="radio" value="option3" />
                      </div>
                    </label>
                  </div>
                  <div className="radio">
                    <label className="rowCenter">
                      <div className="PayBox">
                        <div className="paymentImg">
                          <img src={Ppay} alt="" className="paymentImg" />
                        </div>
                        <div className="PayTEXT">Phonepe</div>
                      </div>

                      <div className="radioButton">
                        <input type="radio" value="option3" />
                      </div>
                    </label>
                  </div>
                  <div className="radio">
                    <label className="rowCenter">
                      <div className="PayBox">
                        <div>
                          <img src={gPay} alt="" className="paymentImg" />
                        </div>
                        <div className="PayTEXT">Google Pay</div>
                      </div>

                      <div className="radioButton">
                        <input type="radio" value="option3" />
                      </div>
                    </label>
                  </div>
                  <div className="radio">
                    <label className="rowCenter">
                      <div className="PayBox">
                        <div className="paymentImg">
                          <img src={cod} alt="" className="paymentImg" />
                        </div>
                        <div className="PayTEXT">Cash On Delivery</div>
                      </div>

                      <div className="radioButton">
                        <input type="radio" value="option3" />
                      </div>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <hr />
            <div className="PayNow">
              <div id="row_spaceBTW">
                <div>Total Pay</div>
                <div>RS. {totalCost}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Link
                  to="/cart"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <button id="PAyNOw">Pay now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart2;
