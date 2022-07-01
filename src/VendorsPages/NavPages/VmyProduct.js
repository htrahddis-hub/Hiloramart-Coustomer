import React from 'react'
import MyProductCont from '../../VendorsComponents/MyProductCont'
import '../../VendorsStyle/VmyProduct.css'
import VNavBar from '../../VendorsComponents/VNavBar'
import Footer from '../../Components/Footer'

const VmyProduct = () => {

    return (
        <>
            <VNavBar />
            <div style={{ margin: "3%" }}>
                <div className='RowContainer'>
                    <MyProductCont />
                    <MyProductCont />
                </div>
                <div className='RowContainer'>
                    <MyProductCont />
                    <MyProductCont />
                </div>
                <div className='RowContainer'>
                    <MyProductCont />
                    <MyProductCont />
                </div>
                <div className='RowContainer'>
                    <MyProductCont />
                    <MyProductCont />
                </div>

            </div>
            <Footer />
        </>

    )
}

export default VmyProduct