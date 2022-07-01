import React from 'react'
import '../VendorsStyle/AccountDetail.css'
import Graph from '../VendorsAssets/Graph.png'
import BarChart from '../Components/BarChart'
const AccountDetail = () => {
    return (
        <>

        <div className='TopHead'>Account Details </div> 
        <div id='AdmainCont'>
            <div id='ADcont1'>
                <div className='ADrow'>
                    <div >Account Number</div>
                    <div>1564 8746 **** *376</div>
                </div>
                <div className='ADrow'>
                    <div >Account Holder Name</div>
                    <div>Mr Rohit</div>
                </div>
                <div className='ADrow'>
                    <div>IFSC Code</div>
                    <div>SBI765T8U</div>
                </div>
                <div className='ADrow'>
                    <div>Bank Name</div>
                    <div>State Bank Of India</div>
                </div>
            </div>
            <div id='ADcont2'>
            {/* <BarChart/> */}
                <img src={Graph} alt="" />
            </div>
        </div>
        </>
    )
}

export default AccountDetail