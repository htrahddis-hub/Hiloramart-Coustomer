import React from 'react'
import FaceBook from '../Assets/Images/FaceBook.png'
import InstaGram from '../Assets/Images/InstaGram.png'
import Twitter from '../Assets/Images/Twitter.png'
import '../Styles/Components/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footerMain">
                <div className="fMainCon1">
                    <div className="Fcontainer1">
                        <div className="Fhead">PRODUCTS CATAGORY</div>
                        <div className="item">Home</div>
                        <div className="item">Health And Personal Care</div>
                        <div className="item">Electronics</div>
                        <div className="item">Manufacturer</div>
                        <div className="item">sale on hiloramart.com</div>
                    </div>
                    <div className="Fcontainer1">
                        <div className="Fhead">GET IN TOUCH</div>
                        <div className="item">For any other Enquiry : +91-9311950083 Call only ( 10AM to 6PM )</div>
                        <div className="item">For more query: 011-46026509</div>
                        <div className="item">Query/Complaints: customers@hiloramart.com</div>
                        <div className="item">Vendor Seller Query/: support@hiloramart.com</div>
                        <div className="item">sale on hiloramart.com</div>
                    </div>
                    <div className="Fcontainer1">
                        <div className="Fhead"> NEWSLETTER</div>
                        <div className="item">Promotions, new products and sales.</div>
                        <div>Email box</div>
                    </div>
                </div>
<hr id='horizLine' style={{marginTop:'25px'}}/>


                <div className="iconContainer">
                    <div className="icon">
                        <img src={InstaGram} alt="InstaGram" />

                    </div>
                    <div className="icon">
                        <img src={Twitter} alt="Twitter" />

                    </div>
                    <div className="icon">
                        <img src={FaceBook} alt="FaceBook" />
                    </div>
                </div>
                <hr id='horizLine' style={{marginBottom:'25px'}}/>

                <div className="FlastContainer">
                    <div id='CopyRtext'>© 2022 hiloramart.com</div>
                    <div id='FLasttext'>Powered by Shopify</div>
                    <div> </div>
                </div>

            </div>
        </>
    )
}

export default Footer