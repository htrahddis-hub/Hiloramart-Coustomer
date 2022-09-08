import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import imga from '../../Assets/Images/cart/Rectangle 2843.png';
import Delete from "../../Assets/Images/remove.svg";
import Footer from '../../Components/Footer';
import ProductsLoading from '../../Components/Skeleton-loading/Products-loading';
import { AuthContext } from '../../Context/AuthContext';
import { GET_VENDOR_PRODUCTS } from '../../Context/Types';
import "../../Styles/pages/Cart2.css";

const MyProductsForAds = () => {

  const { dispatch } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);


  const getProducts = () => {
    dispatch({ type: GET_VENDOR_PRODUCTS, upDateState: setAllProducts, setIsLoading });
  };


  const itemSelectorHandler = (e) => {
    setIsChecked(!isChecked);
    if(!isChecked) {
      const item = JSON.parse(e.target.value);
      console.log(item);
    }else {
      console.log("Failed");
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  console.log(allProducts);

  return (
    <>
    <div style={{textAlign: 'center'}} className="adver-title">Product for ADS</div>
    <div style={{display: 'flex', flex: '1 1', flexWrap: 'wrap', justifyContent: 'space-between', padding: '0 30px', height: '100vh', overflow: 'auto'}}>
          {allProducts?.length !== 0 ? (
            allProducts?.map((item, index) => {
              return (
                <div className="CPCmain" style={{ background: "rgba(112,112,112,0.05)", cursor: 'pointer' }}>
                  <div className="CPCmain">
                  <div className="CPC1">
                    <img style={{borderRadius: '8px'}} src={item?.productImage[0]} alt="" />
                  </div>
                  <div className="product-detail">
                    <div className="CPCin1">{item?.name}</div>
                    <div className="CPCin2">RS. {item?.price}</div>
                    <p style={!item?.stock ? {color: 'red'} : {color: 'green'}}>Stock: {item?.stock ? item?.stock : '0'}</p>
                    {/* <p style={!stock ? {color: 'red'} : {color: 'green'}}>Stock: 10</p> */}
                  </div>
                  </div>
                  <div className="product-options">
                    <div className="remove-icon">
                        <input onChange={itemSelectorHandler} value={JSON.stringify(item)} checked={isChecked} type="checkbox" name="check" id="check" />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <ProductsLoading />
              <ProductsLoading />
              <ProductsLoading />
              <ProductsLoading />
            </>
          )}
    </div>

    <div style={{display: 'grid', placeItems: 'center', margin: '20px 0 40px 0'}}>
      <Button variant='contained' style={{width: '200px', backgroundColor: "#ff8d22"}}>Continue</Button>
    </div>
    <Footer />
    </>
  )
}

export default MyProductsForAds;