/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import Otp from './Pages/Otp';
import Home from './Pages/Home';
import HomeProductDetail from './Pages/HomeProductDetail';
import MyWishList from './Pages/MyWishList';
import Affiliate from './Pages/Affiliate';
import AffiliateProgram from './Pages/AffiliateProgram';
import MyWishList2 from './Pages/MyWishList2';
import Cart from './Pages/Cart';
import Tracking from './Pages/Tracking';
import MyWallet from './Pages/MyWallet';
import Cart2 from './Pages/Cart2';
import VNavBar from './VendorsComponents/VNavBar';
import VHome from './VendorsPages/NavPages/VHome';
import Footer from './Components/Footer';
import AddProduct from './VendorsComponents/AddProduct';
import VmyProduct from './VendorsPages/NavPages/VmyProduct';
import VmyRevenue from './VendorsPages/NavPages/VmyRevenue';
import VaffiliateRequest from './VendorsPages/NavPages/VaffiliateRequest';
import VmyWallet from './VendorsPages/NavPages/VmyWallet';
import VHome2 from './VendorsPages/NavPages/VHome2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/Main.css';

function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <HomeProductDetail/> */}
      {/* <MyWishList/> */}
      {/* <Affiliate/> */}
      {/* <AffiliateProgram/> */}
      {/* <MyWishList2/> */}
      {/* <Cart/> */}
      {/* <Tracking/> */}
      {/* <MyWallet/> */}
      {/* <Cart2/> */}

      {/* Vendors */}

      <Router>
        <Routes>
          {/* nav */}
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/welcome' element={<Welcome />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/otp' element={<Otp />}></Route>
          <Route
            exact
            path='/forgotpassword'
            element={<ForgotPassword />}
          ></Route>
          <Route exact path='/affiliate' element={<Affiliate />}></Route>
          <Route exact path='/MyWishList' element={<MyWishList />}></Route>
          <Route exact path='/mywallet' element={<MyWallet />}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
          <Route
            exact
            path='/HomeProductDetail'
            element={<HomeProductDetail />}
          ></Route>
          <Route
            exact
            path='/AffiliateProgram'
            element={<AffiliateProgram />}
          ></Route>
          <Route exact path='/MyWishList2' element={<MyWishList2 />}></Route>
          <Route exact path='/Tracking' element={<Tracking />}></Route>
          <Route exact path='/Cart2' element={<Cart2 />}></Route>

          <Route exact path='/VHome' element={<VHome />}></Route>
          <Route exact path='/VmyProduct' element={<VmyProduct />}></Route>
          <Route exact path='/VmyRevenue' element={<VmyRevenue />}></Route>
          <Route
            exact
            path='/VaffiliateRequest'
            element={<VaffiliateRequest />}
          ></Route>
          <Route exact path='/VmyWallet' element={<VmyWallet />}></Route>
          <Route exact path=' ' element={<VHome2 />}></Route>
          {/* <Route exact path='/' element={<Home />}></Route> */}
        </Routes>
      </Router>
      {/* <VNavBar />
      <VHome2 />
      <Footer /> */}
    </>
  );
}

export default App;
