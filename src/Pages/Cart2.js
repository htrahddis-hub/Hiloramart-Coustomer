import React, { useEffect, useState } from 'react';
import CartProductCont from '../Components/Cart/CartProductCont';
import '../Styles/pages/Cart2.css';
import MasterCard from '../Assets/Images/cart/MasterCard.png';
import NavBar from '../Components/NavBar';
import upi from '../Assets/Images/cart/upi.png';
import cod from '../Assets/Images/cart/cod.png';
import Ppay from '../Assets/Images/cart/Ppay.png';
import gPay from '../Assets/Images/cart/gPay.png';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import axios from 'axios';

const Cart2 = () => {
  const [cartItems, setCartitems] = useState([]);

  //todo -> GET ALL ITEMS IN THE CART
  const getCartItems = async () => {
    try {
      const { data } = await axios.get(
        'https://hiloramart-user.herokuapp.com/cart'
      );
      // console.log(data);
      setCartitems(data);
    } catch (error) {
      console.log(error);
    }
  };

  //todo -> DELTE FROM CART function will be passed with each item as a prop
  const deleteFromCart = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://hiloramart-user.herokuapp.com/cart/remove?product_id=${id}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, [deleteFromCart]);

  // console.log(cartItems);

  return (
    <>
      <NavBar />

      <div id='CartMainDiv'>
        <div id='cartDiv1'>
          <div id='cart1'>SHIPPING ADDRESS</div>
          <div id='cart2'>
            <div id='add'>
              98, B-1, Apos;s Residency, Residency Road, Next To Konark Hotel
              Residency Road
            </div>
            <div id='button'>
              <button id='Change'>Change</button>
            </div>
          </div>
        </div>
        <div id='CartDiv2main'>
          <div id='cartDiv2'>
            <div className='ColCart1'>
              <div id='CartIn1'>
                <div>Your Orders</div>
              </div>
              <div id='CartIn2'>
                {cartItems.map((item, idx) => (
                  <CartProductCont
                    key={idx}
                    deleteFromCart={deleteFromCart}
                    item={item}
                  />
                ))}
              </div>
              <div id='CartIn3'>
                <div className='CartRow'>
                  <div>Subtotal</div>
                  <div>RS. 8000</div>
                </div>
                <div className='CartRow'>
                  <div>Taxes & Fees</div>
                  <div>+RS. 500</div>
                </div>
                <div className='CartRow'>
                  <div>Discount</div>
                  <div>-RS. 1500</div>
                </div>
                <div className='CartRow'>
                  <div className='DarkcartText'>Total</div>
                  <div className='DarkcartText'>RS. 7000</div>
                </div>
              </div>
            </div>
          </div>

          <div id='cartDiv3'>
            <div className='masterCard'>
              <img src={MasterCard} alt='' />
            </div>
            <div className='PaymentOp'>
              <div id='OtherPayment'>Other Payment Option</div>
              <div>
                <form>
                  <div className='radio'>
                    <label className='rowCenter'>
                      <div className='PayBox'>
                        <div className='paymentImg'>
                          <img src={upi} alt='' className='paymentImg' />
                        </div>
                        <div className='PayTEXT'>UPI</div>
                      </div>

                      <div className='radioButton'>
                        <input type='radio' value='option3' />
                      </div>
                    </label>
                  </div>
                  <div className='radio'>
                    <label className='rowCenter'>
                      <div className='PayBox'>
                        <div className='paymentImg'>
                          <img src={Ppay} alt='' className='paymentImg' />
                        </div>
                        <div className='PayTEXT'>Phonepe</div>
                      </div>

                      <div className='radioButton'>
                        <input type='radio' value='option3' />
                      </div>
                    </label>
                  </div>
                  <div className='radio'>
                    <label className='rowCenter'>
                      <div className='PayBox'>
                        <div>
                          <img src={gPay} alt='' className='paymentImg' />
                        </div>
                        <div className='PayTEXT'>Google Pay</div>
                      </div>

                      <div className='radioButton'>
                        <input type='radio' value='option3' />
                      </div>
                    </label>
                  </div>
                  <div className='radio'>
                    <label className='rowCenter'>
                      <div className='PayBox'>
                        <div className='paymentImg'>
                          <img src={cod} alt='' className='paymentImg' />
                        </div>
                        <div className='PayTEXT'>Cash On Delivery</div>
                      </div>

                      <div className='radioButton'>
                        <input type='radio' value='option3' />
                      </div>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <hr />
            <div className='PayNow'>
              <div id='row_spaceBTW'>
                <div>Total Pay</div>
                <div>RS. 7000</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link
                  to='/cart'
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <button id='PAyNOw'>Pay now</button>
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
