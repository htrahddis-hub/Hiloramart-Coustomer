import React from 'react'
import wallet from '../../Assets/Images/wallet.png'
import '../../VendorsStyle/VmyWallet.css'
import DownIcon from '../../Assets/Images/DownIcon.png'
import VNavBar from '../../VendorsComponents/VNavBar'
import Footer from '../../Components/Footer'

const VmyWallet = () => {
    return (
        <>
             <VNavBar/>
             <div>
        <div  id="MWcont4" >
        <img src={DownIcon} alt="" />
        April 2022</div>
            <div id="MWcont1" >
                <div id='WalletCont1'>
                    <div>
                        <img src={wallet} alt="" />
                    </div>
                    <div id='walletCont4'>
                        <div>Total Profit</div>
                        <div>RS. 20,000</div>

                    </div>
                </div>
                <div id='WalletCont1'>
                    <div>

                        <img src={wallet} alt="" />
                    </div>
                    <div id='walletCont4'>
                        <div>Total Sale</div>
                        <div>RS. 20,000</div>

                    </div>


                    {/* <div>
                            <div>
                                Direct sale
                            </div>
                            <div>
                                RS. 10,000
                            </div>
                        </div> */}
                </div>
                <div id='WalletCont1'>
                    <div>
                        <img src={wallet} alt="" />
                    </div>
                    <div id='walletCont4'>
                        <div>Total Profit</div>
                        <div>RS. 20,000</div>
                    </div>
                </div>


            </div>


            <div id="MWcont2" >
                Paid to Affiliates
            </div>
            <div id="MWcont3">
                <div id='AdmainCont'>
                    <div id='LastTcont1' >
                        <div className='ADrow'>
                            <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                        <div className='ADrow'>
                        <div >Arihant ERP</div>
                            <div>Total Profit   RS.  1,000</div>
                            <div>
                                <img src={DownIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
             <Footer/>
        </>
      
    )
}

export default VmyWallet


