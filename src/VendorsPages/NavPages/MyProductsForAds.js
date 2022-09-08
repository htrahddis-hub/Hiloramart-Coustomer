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
import MyProductItem from '../../VendorsComponents/MyProductItem';

const MyProductsForAds = () => {

  const { dispatch } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = () => {
    dispatch({ type: GET_VENDOR_PRODUCTS, upDateState: setAllProducts, setIsLoading });
  };

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
                <MyProductItem item={item}/>
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