import React from 'react'
import OrderHistoryCont from '../Components/MyWishList/OrderHistoryCont'
import NavBar from '../Components/NavBar'
import '../Styles/pages/MyWishList.css'

const MyWishList = () => {
  return (
    <>
      <NavBar />
      <div id='OHcont1' >
        <div id='OHhead'>ORDERS HISTORY</div>
        {/* <div id='OHtime'>LAST 6 MONTHS</div> */}
      </div>
      <div className='OHCont2'>
        <OrderHistoryCont />
        <OrderHistoryCont />
        <OrderHistoryCont />
      </div>
      <div className='OHCont2'>
        <OrderHistoryCont />
        <OrderHistoryCont />
        <OrderHistoryCont />
      </div>
    </>
  )
}

export default MyWishList