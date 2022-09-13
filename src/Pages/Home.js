import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import LandingPageBanner from "../Components/HomeComponents/LandingPageBanner";
import DealOfDayContainer from "../Components/HomeComponents/DealOfDayContainer";
import MostSellingProductContainer from "../Components/HomeComponents/MostSellingProductContainer";
import Detectors from "../Components/HomeComponents/Detectors";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";
import AddProduct from "../VendorsComponents/AddProduct";
import CategorySection from "../Components/CategorySection";
import SearchInput from "../Components/SearchInput";
import { GET_MY_ORDERS } from "../Context/Types";
import Carousel from 'react-material-ui-carousel'
import './Home.css';
import logo from '../Assets/Images/wallet.png'

const Home = () => {
  const { AuthRole } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const getCurrentOrderNow = () => {
    dispatch({ type: GET_MY_ORDERS, setIsLoading, upDateState: setAllOrders });
  }


  useEffect(() => {
    if(AuthRole !== "user") {
      getCurrentOrderNow();
    }
  }, [])

  console.log(allOrders)

  return (
    <>
      <div className="">
        {/* <div className="search-cont">
          <SearchInput />
        </div> */}
        <LandingPageBanner />
        {AuthRole === "user" ? (
          <>
            <CategorySection />
            <DealOfDayContainer />
            {/* <MostSellingProductContainer /> */}
            <Detectors />
            <Detectors />
          </>
        ) : (
          <>
          <AddProduct />            
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Home;










// {
//   allOrders.length !== 0 ? <AddProduct /> : (
//     <div>
//       <div>
//       <h5 style={{textAlign: 'center', margin: '90px 0'}}>Current Orders</h5>
//       <Carousel className="carousel">
//           {/* { */}
//               {/* allOrders.map( (item, i) => ( */}
//                 <div style={{display: 'flex', justifyContent: 'space-between'}}>
//                   <div style={{width: '48%', height: '400px', backgroundColor: 'lightgray', borderRadius: '8px', padding: '30px'}}>
//                     <div style={{display: 'flex', justifyContent: 'space-between'}}>
//                       <div style={{width: '70px', height: '70px', margin: '0 10px 0 0'}}><img style={{width: '100%', height: '100%'}} src={logo} alt="" /></div>
//                       <div>
//                         <h5 style={{marginBottom: '20px'}}>Buyer Details</h5>
//                         <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
//                           <span style={{color: 'gray', marginRight: '10px'}}>Name</span>
//                           <span>Rohit</span>
//                         </div>
//                         <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
//                           <span style={{color: 'gray', marginRight: '10px'}}>Phone No.</span>
//                           <span>9999999999</span>
//                         </div>
//                         <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
//                           <span style={{color: 'gray', marginRight: '10px'}}>Delivery Address</span>
//                           <span>New Delhi, Delhi, India</span>
//                         </div>
//                         <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
//                           <span style={{color: 'gray', marginRight: '10px'}}>Product Name</span>
//                           <span>Lorem ipsum dolor sit amet..</span>
//                         </div>
//                         <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
//                           <span style={{color: 'gray', marginRight: '10px'}}>Product ID</span>
//                           <span>#0000000000000000</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div>

//                     </div>
//                   </div>
//                   <div style={{width: '45%', height: '400px', backgroundColor: 'gray'}}>
//                     hi
//                   </div>
//                 </div>
//               {/* ) ) */}
//           {/* } */}
//       </Carousel>

//       </div>
//     </div>
//   )
// }