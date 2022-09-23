import React from "react";
import "react-notifications-component/dist/theme.css";
import AuthContextComponent from "./Context/AuthContext";
import "./App.css";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Otp from "./Pages/Otp";
import Home from "./Pages/Home";
import HomeProductDetail from "./Pages/HomeProductDetail";
import Affiliate from "./Pages/Affiliate";
import AffiliateProgram from "./Pages/AffiliateProgram";
import MyWishList2 from "./Pages/MyWishList2";
import Cart from "./Pages/Cart";
import Tracking from "./Pages/Tracking";
import Cart2 from "./Pages/Cart2";
import VaffiliateRequest from "./VendorsPages/NavPages/VaffiliateRequest";
import VmyWallet from "./VendorsPages/NavPages/VmyWallet";
import CategoryProduct from "./Components/HomeComponents/CategoryProduct";
import SearchProduct from "./Pages/SearchedProduct";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "../src/Main.css";
import ProtectedRoutes from "./Context/ProtectedRoutes";
import UnprotectedRoutes from "./Context/UnprotectedRoutes";
import Sales from "./Components/Sales";
import Advertisement from "./Components/Advertisement";
import ProductSuccess from "./Pages/ProductSuccess";
import Checkout from "./Pages/Checkout";
import MyPlans from "./Pages/MyPlans";
import ProductUpdated from "./Pages/ProductUpdated";
// import MyProductsForAds from "./VendorsPages/NavPages/MyProductsForAds";
import VerifyOtp from "./Pages/VerifyOtp";
import ForgotForm from "./Pages/ForgotForm";
import UserProfile from "./Pages/UserProfile";
import EditUserProfile from "./Pages/EditUserProfile";
import Orders from "./Pages/MyOrders";
function App() {
  return (
    <>
      <AuthContextComponent>
        <Router>
          <Routes>
            {/* public routes */}
            <Route element={<UnprotectedRoutes />}>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<SignUp />}></Route>
              <Route exact path="/otp" element={<Otp />}></Route>
              <Route
                exact
                path="/forgotpassword"
                element={<ForgotPassword />}
              ></Route>
              <Route exact path="/verifyotp" element={<VerifyOtp />}></Route>
              <Route
                exact
                path="/passwordchange"
                element={<ForgotForm />}
              ></Route>
            </Route>
            {/* private routes */}
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/affiliate" element={<Affiliate />}></Route>
              <Route
                exact
                path="/my-wishlist"
                element={<MyWishList2 />}
              ></Route>

              <Route exact path="/checkout" element={<Checkout />}></Route>
              <Route
                exact
                path="/checkout-successfull"
                element={<Cart />}
              ></Route>
              <Route exact path="/my-sales" element={<Sales />}></Route>
              <Route
                exact
                path="/advertisement"
                element={<Advertisement />}
              ></Route>
              {/* <Route
                exact
                path="/select-product-for-ads"
                element={<MyProductsForAds />}
              ></Route> */}
              <Route
                exact
                path="/HomeProductDetail/:id"
                element={<HomeProductDetail />}
              ></Route>
              <Route
                exact
                path="/AffiliateProgram"
                element={<AffiliateProgram />}
              ></Route>

              <Route exact path="/Tracking" element={<Tracking />}></Route>
              <Route exact path="/my-cart" element={<Cart2 />}></Route>
              <Route
                exact
                path="/product-success"
                element={<ProductSuccess />}
              ></Route>
              <Route
                exact
                path="/product-updated"
                element={<ProductUpdated />}
              ></Route>
              <Route
                exact
                path="/affiliate-request"
                element={<VaffiliateRequest />}
              ></Route>
              <Route
                exact
                path="/userprofile"
                element={<UserProfile />}
              ></Route>
              <Route
                exact
                path="/search/:name"
                element={<SearchProduct />}
              ></Route>
              <Route
                exact
                path="/edit-user-profile"
                element={<EditUserProfile />}
              ></Route>
              <Route exact path="/my-wallet" element={<VmyWallet />}></Route>
              <Route exact path="/my-plans" element={<MyPlans />}></Route>
              <Route exact path="/my-plans" element={<MyPlans />}></Route>
              <Route
                exact
                path="/categoryproducts"
                element={<CategoryProduct />}
              ></Route>
            </Route>
          </Routes>
        </Router>
      </AuthContextComponent>
    </>
  );
}

export default App;
