// src/reusable/image-gallery.component.js
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import Banner from '../../Assets/Images/Home/Banner.png';
import machine from '../../Assets/Images/Home/machine.png';
import '../../Styles/Components/LandingPageBanner.css';
import {Link} from 'react-router-dom';

const ImageGallaryComponent = () => {
  return (
    <div
      style={{
        margin: '1.5%',
        background: '#FFC577',
        borderRadius: '30px',
      }}
    >
      <Link
        to='/HomeProductDetail'
        style={{textDecoration: 'none', color: 'inherit'}}
      >
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          dynamicHeight={true}
          className='carousel-banner'
        >
          <div id='banner-container'>
            {/* <img src={Banner} alt="LandingImage" /> */}
            <div id='LPmainCont'>
              <div id='LPtextCont'>
                <h1 id='LPtext1'>
                  LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER
                </h1>
                <div id='LPtext2'>
                  Installation. Service. Engineering. Global Support
                </div>
                <h2 id='LPtext3'>From RS 95,000</h2>
              </div>
              <div>
                <img src={machine} alt='img' style={{height: '28rem'}} />
              </div>
            </div>
          </div>
          <div id='banner-container'>
            <div id='LPmainCont'>
              <div id='LPtextCont'>
                <h1 id='LPtext1'>
                  LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER
                </h1>
                <div id='LPtext2'>
                  Installation. Service. Engineering. Global Supporta
                </div>
                <h2 id='LPtext3'>From RS 95,000</h2>
              </div>
              <div>
                <img src={machine} alt='img' style={{height: '28rem'}} />
              </div>
            </div>
          </div>
          <div id='banner-container'>
            <div id='LPmainCont'>
              <div id='LPtextCont'>
                <h1 id='LPtext1'>
                  LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER
                </h1>
                <div id='LPtext2'>
                  Installation. Service. Engineering. Global Supportas
                </div>
                <h2 id='LPtext3'>From RS 95,000</h2>
              </div>
              <div>
                <img src={machine} alt='img' style={{height: '28rem'}} />
              </div>
            </div>
          </div>
        </Carousel>
      </Link>
    </div>
  );
};

export default ImageGallaryComponent;
