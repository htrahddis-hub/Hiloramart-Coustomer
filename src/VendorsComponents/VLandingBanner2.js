import React from 'react';
// import machine from '../Assets/Images/Home/machine.png'
import machine from '../Assets/Images/Home/scannerImg.png';

const VLandingBanner2 = () => {
  return (
    <>
      <div
        id='LPmainCont'
        style={{background: '#B0E7F1', borderRadius: '30px', margin: '2%'}}
      >
        <div id='LPtextCont'>
          <div id='LPtext1'>LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER</div>
          <div id='LPtext2'>
            Installation. Service. Engineering. Global Support
          </div>
          <div id='LPtext3'>From RS 95,000</div>
        </div>
        <div>
          <img src={machine} alt='img' style={{height: '16rem'}} />
        </div>
      </div>
    </>
  );
};

export default VLandingBanner2;
