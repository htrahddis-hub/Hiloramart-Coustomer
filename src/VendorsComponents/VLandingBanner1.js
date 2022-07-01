import React from 'react';
import machine from '../Assets/Images/Home/machine.png';

const VLandingBanner1 = () => {
  return (
    <>
      <div
        id='LPmainCont'
        style={{background: '#FFC577', borderRadius: '30px', margin: '2%'}}
      >
        <div id='LPtextCont'>
          <div id='LPtext1'>LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER</div>
          <div id='LPtext2'>
            Installation. Service. Engineering. Global Support
          </div>
          <div id='LPtext3' style={{paddingTop: '0%', marginTop: '0px'}}>
            From RS 95,000
          </div>
        </div>
        <div>
          <img src={machine} alt='img' style={{height: '16rem'}} />
        </div>
      </div>
    </>
  );
};

export default VLandingBanner1;
