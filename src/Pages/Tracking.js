import React from 'react';
import '../Styles/pages/Tracking.css';
import image from '../Assets/Images/tacking/image.png';
import {ProgressBar} from 'react-bootstrap';
import Footer from '../Components/Footer';

const Tracking = () => {
  return (
    <div>
      <div className='track1'>
        <div id='trackingHead'>TRACKING</div>
        <div id='Estdate'>ESTIMATED DATE</div>
        <div id='TrackDate'>30-APR-2022</div>
        <ProgressBar now={60} />
        <div id='TrackButtonCont'>
          <button id='DownloadInvoice'>Download Invoice</button>
        </div>
      </div>
      <div className='track2'>
        <div id='Detail1'>Details of Order #254565754</div>
        <div id='trackCont1'>
          <div className='trackInCont1'>
            <div className='trackHead'>Shipping to:</div>
            <div className='trackAdd'>
              Shop No1 ,2 .1 St Floor, The Jewel Society, Chokshi Chambers,
              Opp:kharakuwa, Zaveri Bazar., Crawford Mumbai, Maharashtra Country
              India
            </div>
          </div>
          <div className='trackInCont1'>
            <div className='trackHead'>Billing to:</div>
            <div className='trackAdd'>
              Shop No1 ,2 .1 St Floor, The Jewel Society, Chokshi Chambers,
              Opp:kharakuwa, Zaveri Bazar., Crawford Mumbai, Maharashtra Country
              India
            </div>
          </div>
        </div>
        <div id='trackCont2'>
          <div>
            <div className='item1'>Item</div>
            <div className='item2' style={{display: 'flex', width: '70%'}}>
              <div>
                <img src={image} alt='' />
              </div>
              <div>LOOP SCANO 1100 HAND HELD METAL DETECTOR</div>
            </div>
          </div>
          <div>
            <div className='item1'>Status</div>
            <div className='item2'>
              <button id='status'>All Done</button>
            </div>
          </div>
          <div>
            <div className='item1'>Quantity</div>
            <div className='item2'>1</div>
          </div>
          <div>
            <div className='item1'>Total</div>
            <div className='item2'>RS. 4000</div>
          </div>
        </div>
        <div className='trackCont3'></div>
      </div>
      <Footer />
    </div>
  );
};

export default Tracking;
