import React from 'react'
import Footer from '../../Components/Footer'
import AssignedAndStausFormVhome2 from '../../VendorsComponents/AssignedAndStausFormVhome2'
import BuyersDetailCont from '../../VendorsComponents/BuyersDetailCont'
import VNavBar from '../../VendorsComponents/VNavBar'

const VHome2 = () => {
  return (
    <>

   <VNavBar/>
    <div>
      <div style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>ACTIVE ORDERS</div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <BuyersDetailCont />
        <BuyersDetailCont />
      </div>
      <AssignedAndStausFormVhome2 />
    </div>
    <Footer/>
    </>
  )
}

export default VHome2 