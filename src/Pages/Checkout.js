import React, { useContext, useEffect, useMemo, useState } from "react";
import "../Styles/pages/Cart2.css";
import MasterCard from "../Assets/Images/cart/MasterCard.png";
import upi from "../Assets/Images/cart/upi.png";
import cod from "../Assets/Images/cart/cod.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

import { AuthContext } from "../Context/AuthContext";
import CheckoutProductCard from "../Components/CheckoutProductCard";
import { ONLINE_PAYMENT } from "../Context/Types";
import { CircularProgress } from "@mui/material";

const Checkout = () => {
  const { dispatch } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [totalCost, setTotalCost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(location.state?.productDetails[0]);
  const [counter, setCounter] = useState(location.state?.quantity);

  const handlePay = () => {
    let finalProduct = [];
    finalProduct.push({
      productId: product._id,
      price: totalCost,
      quanity: counter,
    });
    dispatch({
      type: ONLINE_PAYMENT,
      product: finalProduct,
      payload: totalCost,
      quantity: counter,
      setIsLoading,
      navigate,
    });
  };
  if (!product) return <Navigate to={-1} />;
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
                <CheckoutProductCard
                  product={product}
                  quanity={counter}
                  setTotalCost={setTotalCost}
                  counter={counter}
                  setCounter={setCounter}
                />
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
                        <div className="PayTEXT">Online Payment</div>
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
                <button id="PAyNOw" onClick={handlePay}>
                  {isLoading ? (
                    <CircularProgress sx={{ color: "white" }} size={25} />
                  ) : (
                    "Pay now"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
