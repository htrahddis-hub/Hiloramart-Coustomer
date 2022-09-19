// src/reusable/image-gallery.component.js
import React, { useContext, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner from "../../Assets/Images/Home/Banner.png";
import machine from "../../Assets/Images/Home/machine.png";
import "../../Styles/Components/LandingPageBanner.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useEffect } from "react";

import {GET_VENDOR_PRODUCTS, GET_ALL_PRODUCTS} from '../../Context/Types';
import { useLocation } from "react-router-dom";
import nodata from '../../VendorsAssets/nodata.svg';
import { CircularProgress } from "@mui/material";

const ImageGallaryComponent = () => {
  const { AuthRole, dispatch } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  let lastProduct;
  let secondLastProduct;

  if(allProducts?.length > 0) {
    lastProduct = allProducts[0]
    secondLastProduct = allProducts[1]

  }

  console.log(lastProduct, secondLastProduct)
  console.log(allProducts)

  useEffect(() => {
    if(AuthRole === "user") {

    }else {
      dispatch({
        type: GET_VENDOR_PRODUCTS, 
        upDateState: setAllProducts,
        setIsLoading
      })
    }
  }, [setAllProducts])

  console.log(lastProduct, secondLastProduct)



  if (AuthRole === "user")
    return (
      <div className="landing-top-section">
        <Link
          to="/HomeProductDetail"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            dynamicHeight={true}
            className="carousel-banner"
          >
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
          </Carousel>
        </Link>
      </div>
    );
  else
    return (
      isLoading ? (
        <div style={{minHeight: '100vh', display: 'grid', placeItems: 'center'}}>          
        <CircularProgress style={{color: '#FF8D22'}} />
        </div>
      ) : (
        allProducts?.data?.length === 0 ? (
          <>
            <div style={{height: '90vh'}} className="empty-container">
              <div className="left">
                <div style={{width: '400px', height: '400px'}} className="imgContainer">
                  <img style={{width: '100%', height: '100%'}} src={nodata} alt="nothing" />
                </div>
              </div>
              <div className="right">
                <h5>No data found!!</h5>
              </div>
            </div>
          </>
        ) : (
            allProducts?.data?.length === 1 ? (
              <div
              id="LPmainCont"
              style={{ background: "#FFC577", borderRadius: "30px", margin: "2%" }}
            >
              <div id="LPtextCont">
                <div id="LPtext1">
                  {lastProduct?.name}
                </div>
                <div id="LPtext2">
                  {lastProduct?.description}
                </div>
                <div id="LPtext3" style={{ paddingTop: "0%", marginTop: "0px" }}>
                  From RS {lastProduct?.price}
                </div>
              </div>
              <div>
                <img src={lastProduct?.productImage[0]} alt="img" style={{ height: "16rem" }} />
              </div>
            </div>
            ) : (
              <>
                <div
                  id="LPmainCont"
                  style={{ background: "#FFC577", borderRadius: "30px", margin: "2%" }}
                >
                  <div id="LPtextCont">
                    <div id="LPtext1">
                      {lastProduct?.name}
                    </div>
                    <div id="LPtext2">
                      {lastProduct?.description}
                    </div>
                    <div id="LPtext3" style={{ paddingTop: "0%", marginTop: "0px" }}>
                      From RS {lastProduct?.price}
                    </div>
                  </div>
                  <div>
                    <img src={lastProduct?.productImage[0]} alt="img" style={{ height: "16rem" }} />
                  </div>
                </div>
                <div
                  id="LPmainCont"
                  style={{ background: "#B0E7F1", borderRadius: "30px", margin: "2%" }}
                >
                  <div id="LPtextCont">
                    <div id="LPtext1">
                      {secondLastProduct?.name}
                    </div>
                    <div id="LPtext2">
                      {secondLastProduct?.description}
                    </div>
                    <div id="LPtext3">From RS {secondLastProduct?.price}</div>
                  </div>
                  <div>
                    <img src={secondLastProduct?.productImage[0]} alt="img" style={{ height: "16rem" }} />
                  </div>
                </div>
              </>
            )
        )
      )
    );
};

export default ImageGallaryComponent;
