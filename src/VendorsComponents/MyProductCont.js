import React from 'react'
import Image from '../Assets/Images/MyWishList/Image.png'
import Delete from '../Assets/Images/cart/Delete.png'
import  '../Styles/pages/Cart2.css'

const MyProductCont = () => {
  return (
    <div className='CPCmain' style={{background: '#FCFCFC', width:'45%'}}>
        <div className="CPC1">
            <img src={Image} alt="" />
        </div>
        <div className="CPC1" style={{display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}} >
            <div className="CPCin1">LOOP SCANO 1100 HAND HELD <br/>
METAL DETECTOR</div>
            <div className="CPCin2">RS. 4000</div>
        </div>
        <div style={{display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}}>
            <img src={Delete} alt="" className="CPC2" />
            <div style={{color:'#FF8D22' , fontWeight:'bold'}}>Edit</div>
        </div>
    </div>
  )
}

export default MyProductCont