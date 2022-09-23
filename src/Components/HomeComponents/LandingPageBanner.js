import React, { useState } from "react";
import machine from "../../Assets/Images/Home/machine.png";
import "../../Styles/Components/LandingPageBanner.css";
import banner from "../../Assets/Images/Home/newbanner.svg";
import { Link } from "react-router-dom";

const ImageGallaryComponent = () => {
  return (
    <div className="py-2">
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active new-banner-1">
            <div id="banner-container" className="white-border-new">
              <div id="LPmainCont">
                <div id="LPtextCont" style={{color:"white"}}>
                  <h1 id="LPtext1">
                    LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER
                  </h1>
                  <div id="LPtext2">
                    FASHION
                  </div>
                  <h2 id="LPtext3">From RS 95,000</h2>
                </div>
                <div>
                  <img src={banner} alt="img" style={{ height: "20rem" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item landing-top-section">
            <div id="banner-container ">
              <div id="LPmainCont">
                <div id="LPtextCont">
                  <h1 id="LPtext1">
                    LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER
                  </h1>
                  <div id="LPtext2">
                    Installation. Service. Engineering. Global Support
                  </div>
                  <h2 id="LPtext3">From RS 95,000</h2>
                </div>
                <div>
                  <img src={machine} alt="img" style={{ height: "20rem" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div id="banner-container">
              {/* <img src={Banner} alt="LandingImage" /> */}
              <div id="LPmainCont">
                <div id="LPtextCont">
                  <h1 id="LPtext1">
                    LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER
                  </h1>
                  <div id="LPtext2">
                    Installation. Service. Engineering. Global Support
                  </div>
                  <h2 id="LPtext3">From RS 95,000</h2>
                </div>
                <div>
                  <img src={machine} alt="img" style={{ height: "20rem" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Carousel
        // autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        dynamicHeight={true}
        className="carousel-banner"
      >
       
        <div id="banner-container">
          <div id="LPmainCont">
            <div id="LPtextCont">
              <h1 id="LPtext1">
                LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER
              </h1>
              <div id="LPtext2">
                Installation. Service. Engineering. Global Supporta
              </div>
              <h2 id="LPtext3">From RS 95,000</h2>
            </div>
            <div>
              <img src={machine} alt="img" style={{ height: "28rem" }} />
            </div>
          </div>
        </div>
        <div id="banner-container">
          <div id="LPmainCont">
            <div id="LPtextCont">
              <h1 id="LPtext1">
                LOOP SCANO -200 ( 6550 ) X-RAY BAGGAGE SCANNER
              </h1>
              <div id="LPtext2">
                Installation. Service. Engineering. Global Supportas
              </div>
              <h2 id="LPtext3">From RS 95,000</h2>
            </div>
            <div>
              <img src={machine} alt="img" style={{ height: "28rem" }} />
            </div>
          </div>
        </div>
      </Carousel> */}
      {/* </Link> */}
    </div>
  );
};

export default ImageGallaryComponent;
