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
import { CREATE_VENDOR_ORDER, GET_VENDOR_PRODUCTS, ONLINE_PAYMENT } from '../../Context/Types';
import "../../Styles/pages/Cart2.css";
import MyProductItem from '../../VendorsComponents/MyProductItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import logo from '../../Assets/Images/logo.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: '90vh',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px'
};

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    }
    script.onerror = () => {
      resolve(false);
    }
    document.body.appxendChild(script);
  })
  
}


const MyProductsForAds = () => {

  const { dispatch } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [selectedProducts, setSelectedProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [productIds, setProductIds]  = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const getProducts = () => {
    dispatch({ type: GET_VENDOR_PRODUCTS, upDateState: setAllProducts, setIsLoading });
  };

  useEffect(() => {
    getProducts();
  }, [])

  // async function displayRazorpay() {

  //     const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

  //     if(!res) {
  //       alert("Razorpay SDK failed to load. Are you online?")
  //       return;
  //     }

  //     dispatch({
  //       type: ONLINE_PAYMENT,

  //       cost: totalPrice,

  //     })

  //     var options = {
  //       "key": "rzp_test_SMSarstAElqaKw",
  //       "amount": "5", 
  //       "currency": "INR",
  //       "name": "Hiloramart",
  //       "description": "Hiloramart",
  //       "image": {logo},
  //       "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //       "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  //       "prefill": {
  //           "name": "Gaurav Kumar",
  //           "email": "gaurav.kumar@example.com",
  //           "contact": "9999999999"
  //       },
  //       // "notes": {
  //       //     "address": "Razorpay Corporate Office"
  //       // },
  //       // "theme": {
  //       //     "color": "#3399cc"
  //       // }
  //   };
  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  //   // document.getElementById('rzp-button1').onclick = function(e){
  //   //     rzp1.open();
  //   //     e.preventDefault();
  //   // }
  // }

  const displayRazorpay = () => {
    dispatch({
      type: ONLINE_PAYMENT,
      productIds: productIds,
      setIsLoading,
      cost: totalPrice,
      handleClose
    })
  }

  console.log(allProducts)


  return (
    <>
    <div style={{textAlign: 'center'}} className="adver-title">Product for ADS</div>
    {

      isLoading ? <div style={{height: '400px', display: 'grid', placeItems: 'center'}}><CircularProgress style={{color: "#ff8d22"}}/></div> : (
   <> <div style={{display: 'flex', flex: '1 1', flexWrap: 'wrap', justifyContent: 'space-between', padding: '0 30px', height: '100vh', overflow: 'auto'}}>
          {allProducts?.length !== 0 ? (
            allProducts?.map((item, index) => {
              return (
                <MyProductItem item={item} setSelectedProducts={setSelectedProducts} setTotalPrice={setTotalPrice} totalPrice={totalPrice} setProductIds={setProductIds}/>
              );
            })
          ) : (
            <>
              <CircularProgress />
            </>
          )}
    </div>
    <div style={{display: 'grid', placeItems: 'center', margin: '20px 0 40px 0'}}>
      <Button onClick={handleOpen} variant='contained' style={{width: '200px', backgroundColor: "#ff8d22"}}>Continue</Button>
    </div></>
      )
    }


    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5 style={{textAlign: 'center', marginBottom:'10px'}}>Order Summary</h5>
          <div style={{maxHeight: '70%', overflow: 'auto'}}>
          {
            selectedProducts?.map((product) => (
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.10)', padding: '10px', borderRadius: '8px', marginBottom: '10px'}} key={product._id}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{width: '80px', height: '80px', marginRight: '10px'}}>
                    <img style={{width: '100%', height: '100%'}} src={product.productImage[0]} alt="product" />
                  </div>
                  <span>{product.name}</span>
                </div>
                <span style={{color: '#FF8D22'}}>{`RS. ${product.price}`}</span>
              </div>
              
            ))
          }
          </div>
          <hr />
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
            <h5>Total</h5>
            <span>{`RS. ${selectedProducts.length} x 100 = ${Number(selectedProducts?.length) * 100}`}</span>
            {/* <span>{`RS. ${totalPrice}`}</span> */}
          </div>

          <div>
            <Button onClick={displayRazorpay} variant='contained' style={{marginRight: '10px', backgroundColor: '#FF8D22'}}>Pay</Button>
            <Button variant='outlined' style={{color: '#FF8D22', borderColor: '#FF8D22'}} onClick={handleClose}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    <Footer />
    </>
  )
}

export default MyProductsForAds;