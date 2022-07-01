import React from 'react'
import Image from '../../Assets/Images/MyWishList/Image.png'
import Delete from '../../Assets/Images/cart/Delete.png'
import  '../../Styles/pages/Cart2.css'

const CartProductCont = () => {
  return (
    <div className='CPCmain'>
        <div className="CPC1">
            <img src={Image} alt="" />
        </div>
        <div className="CPC1">
            <div className="CPCin1">LOOP SCANO 1100 HAND HELD 
METAL DETECTOR</div>
            <div className="CPCin2">RS. 4000</div>
            <div className="CPCin1">
                counter
            </div>
        </div>
        <div >
            <img src={Delete} alt="" className="CPC2" />
        </div>
    </div>
  )
}

export default CartProductCont