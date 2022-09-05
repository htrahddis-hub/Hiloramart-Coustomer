import React from 'react';
import wallet from '../Assets/Images/wallet.png';
import '../Styles/pages/MyWallet.css';
import DownIcon from '../Assets/Images/DownIcon.png';
import rightIcon from '../Assets/Images/rightIcon.png';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import DatePicker from "react-datepicker";
import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";
const MyWallet = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <NavBar />
      <div id='WalletCont1'>
        <div>
          <img src={wallet} alt='' />
        </div>
        <div id='walletCont4'>
          <div>Total Profit</div>
          <div>RS. 20,000</div>
        </div>
      </div>
      <div id='WalletCont5'>
        <div>From Your Affiliates</div>
        <div>
          {/* <img src={DownIcon} alt='' />
           April 2022 */}
           <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
      </div>
      <div id='WalletCont3'>
        <div className='WalCont1'>
          <div>VK PVT Affiliates</div>
          <div>Total Profit RS. 1,000</div>
          <div>
            {' '}
            <img src={DownIcon} alt='' />
          </div>
        </div>
        <div className='WalCont2'>
          <div>Arihant ERP</div>
          <div>10-Apr-2022</div>
          <div id='GreenText'>RS. 1000</div>
        </div>
        <div className='WalCont2'>
          <div>Arihant ERP</div>
          <div>10-Apr-2022</div>
          <div id='GreenText'>RS. 1000</div>
        </div>
        <div className='WalCont2'>
          <div>Arihant ERP</div>
          <div>10-Apr-2022</div>
          <div id='GreenText'>RS. 1000</div>
        </div>
        <div className='WalCont2'>
          <div>Arihant ERP</div>
          <div>10-Apr-2022</div>
          <div id='GreenText'>RS. 1000</div>
        </div>
        <div className='WalCont2'>
          <div>Arihant ERP</div>
          <div>10-Apr-2022</div>
          <div id='GreenText'>RS. 1000</div>
        </div>
        <div className='WalCont2'>
          <div>Arihant ERP</div>
          <div>10-Apr-2022</div>
          <div id='GreenText'>RS. 1000</div>
        </div>
        <div className='WalCont2'>
          <div>Arihant ERP</div>
          <div>10-Apr-2022</div>
          <div id='GreenText'>RS. 1000</div>
        </div>
        <div className='WalCont2'>
          <div>Arihant ERP</div>
          <div>10-Apr-2022</div>
          <div id='GreenText'>RS. 1000</div>
        </div>
        <div className='WalCont1'>
          <div>Rohit Enterprise</div>
          <div>Total Profit RS. 1,000</div>
          <div>
            <img src={rightIcon} alt='' />
          </div>
        </div>
        <div className='WalCont1'>
          <div>Rohit Enterprise</div>
          <div>
            <span>Total Profit </span> RS. 1,000
          </div>
          <div>
            <img src={rightIcon} alt='' />
          </div>
        </div>
        <div className='WalCont1'>
          <div>Rohit Enterprise</div>
          <div>Total Profit RS. 1,000</div>
          <div>
            <img src={rightIcon} alt='' />
          </div>
        </div>
        <div className='WalCont1'>
          <div>Rohit Enterprise</div>
          <div>Total Profit RS. 1,000</div>
          <div>
            <img src={rightIcon} alt='' />
          </div>
        </div>
        <div className='WalCont1'>
          <div>Rohit Enterprise</div>
          <div>Total Profit RS. 1,000</div>
          <div>
            <img src={rightIcon} alt='' />
          </div>
        </div>
        <div className='WalCont1'>
          <div>Rohit Enterprise</div>
          <div>Total Profit RS. 1,000</div>
          <div>
            <img src={rightIcon} alt='' />
          </div>
        </div>
        <div className='WalCont1'>
          <div>Rohit Enterprise</div>
          <div>Total Profit RS. 1,000</div>
          <div>
            <img src={rightIcon} alt='' />
          </div>
        </div>
        <div className='WalCont1'>
          <div>Rohit Enterprise</div>
          <div>Total Profit RS. 1,000</div>
          <div>
            <img src={rightIcon} alt='' />
          </div>
        </div>
        <div className='WalCont1'>
          <div>Rohit Enterprise</div>
          <div>Total Profit RS. 1,000</div>
          <div>
            <img src={rightIcon} alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyWallet;
