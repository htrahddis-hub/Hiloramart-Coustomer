import { useContext, useState } from "react";
import "react-notifications-component/dist/theme.css";

import AuthContextComponent, { AuthContext } from "./Context/AuthContext";

import "./App.css";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Otp from "./Pages/Otp";
import Home from "./Pages/Home";
import HomeProductDetail from "./Pages/HomeProductDetail";
import MyWishList from "./Pages/MyWishList";
import Affiliate from "./Pages/Affiliate";
import AffiliateProgram from "./Pages/AffiliateProgram";
import MyWishList2 from "./Pages/MyWishList2";
import Cart from "./Pages/Cart";
import Tracking from "./Pages/Tracking";
import MyWallet from "./Pages/MyWallet";
import Cart2 from "./Pages/Cart2";
import VNavBar from "./VendorsComponents/VNavBar";
import VHome from "./VendorsPages/NavPages/VHome";
import AddProduct from "./VendorsComponents/AddProduct";
import VmyProduct from "./VendorsPages/NavPages/VmyProduct";
import VmyRevenue from "./VendorsPages/NavPages/VmyRevenue";
import VaffiliateRequest from "./VendorsPages/NavPages/VaffiliateRequest";
import VmyWallet from "./VendorsPages/NavPages/VmyWallet";
import VLogin from "./VendorsPages/NavPages/VLogin";
import VSignup from "./VendorsPages/NavPages/VSignup";
import VBank from "./VendorsPages/NavPages/VBank";
import VHome2 from "./VendorsPages/NavPages/VHome2";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "../src/Main.css";
import VReturn from "./VendorsPages/NavPages/VReturn";
import Validation from "./VendorsPages/NavPages/Validation";
import VProfile from "./VendorsPages/NavPages/VProfile";
import VEditProfile from "./VendorsPages/NavPages/VEditProfile";
import VForgot from "./VendorsPages/NavPages/VForgot";
import Votp from "./VendorsPages/NavPages/Votp";
import ProtectedRoutes from "./Context/ProtectedRoutes";
import UnprotectedRoutes from "./Context/UnprotectedRoutes";
import RoleLogin from "./Pages/RoleLogin";
import NavBar from "./Components/NavBar";
import CompletedOrders from "./VendorsPages/CompletedOrders";
import Sales from "./Components/Sales";
import Advertisement from "./Components/Advertisement";
import MyOrders from "./Pages/MyOrders";
import ProductSuccess from "./Pages/ProductSuccess";
import Checkout from "./Pages/Checkout";
import MyPlans from "./Pages/MyPlans";
import ProductUpdated from "./Pages/ProductUpdated";
import MyProductsForAds from "./VendorsPages/NavPages/MyProductsForAds";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Router>
          <Routes>
            {/* public routes */}
            <Route element={<UnprotectedRoutes />}>
              <Route exact path="/welcome" element={<Welcome />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route
                exact
                path="/choose-role-login"
                element={<RoleLogin />}
              ></Route>
              <Route exact path="/signup" element={<SignUp />}></Route>
              <Route exact path="/otp" element={<Otp />}></Route>
              <Route
                exact
                path="/forgotpassword"
                element={<ForgotPassword />}
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
              <Route
                exact
                path="/select-product-for-ads"
                element={<MyProductsForAds />}
              ></Route>
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
              <Route exact path="/my-products" element={<VmyProduct />}></Route>
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
              <Route exact path="/my-revenue" element={<VmyRevenue />}></Route>
              <Route
                exact
                path="/affiliate-request"
                element={<VaffiliateRequest />}
              ></Route>
              <Route exact path="/VBank" element={<VBank />}></Route>
              <Route exact path="/my-orders" element={<MyOrders />}></Route>
              <Route exact path="/orders-current" element={<VHome2 />}></Route>
              <Route exact path="/orders-return" element={<VReturn />}></Route>
              <Route
                exact
                path="/orders-completed"
                element={<CompletedOrders />}
              ></Route>
              <Route exact path="/profile" element={<VProfile />}></Route>
              <Route exact path="/edit-profile" element={<VEditProfile />}></Route>
              <Route exact path="/my-wallet" element={<VmyWallet />}></Route>
              <Route exact path="/my-plans" element={<MyPlans />}></Route>
            </Route>
          </Routes>
        </Router>
      </AuthContextComponent>
    </>
  );
}

export default App;
