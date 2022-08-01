import { createContext, useEffect, useReducer, useState } from "react";
import {
  userAccActivate,
  userLogin,
  userResendOtp,
  userSignup,
  vendorAccActivate,
  vendorLogin,
  vendorResendOtp,
  vendorSignup,
} from "./Reducer/AuthReducer";
import {
  ADD_ITEM_CART,
  ADD_ITEM_TO_WISHLIST,
  ADD_PRODUCT,
  CHECK_ITEM_IN_CART,
  CHECK_WISHLIST_STATUS,
  DELETE_ITEM_FROM_CART,
  DELETE_PRODUCT,
  GET_ALL_CATEGORY,
  GET_ALL_PRODUCTS,
  GET_CART_ITEMS,
  GET_PRODUCT_DETAILS,
  GET_USER_PROFILE,
  GET_VENDOR_PRODUCTS,
  GET_VENDOR_PROFILE,
  GET_WISHLIST_ITEMS,
  REMOVE_ITEM_TO_WISHLIST,
  USER_ACCOUNT_ACTIVATE,
  USER_LOGIN,
  USER_RESEND_OTP,
  USER_SIGNUP,
  VENDOR_ACCOUNT_ACTIVATE,
  VENDOR_LOGIN,
  VENDOR_RESEND_OTP,
  VENDOR_SIGNUP,
} from "./Types";
import { ReactNotifications } from "react-notifications-component";
import Cookies from "js-cookie";
import {
  addItemToCart,
  addItemToWishlist,
  addProduct,
  checkItemInCart,
  checkProductWishlistStatus,
  deleteItemFromCart,
  deleteProduct,
  getALlCategory,
  getALLproducts,
  getCartItems,
  getProductDetails,
  getVendorProducts,
  getWishlistItems,
  removeItemFromWishlist,
} from "./Reducer/ProductReducer";
import jwtDecode from "jwt-decode";
import { userProfile, vendorProfile } from "./Reducer/ProfileReducer";
export const AuthContext = createContext();
export const notification = {
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
  animationOut: ["animate__animated animate__fadeOut"], // `animate.css v4` classes
  dismiss: {
    duration: 5000,
    showIcon: true,
  },
};
const AuthContextComponent = ({ children }) => {
  const [auth, setAuth] = useState(Cookies.get("auth_token"));
  const [AuthRole, setAuthRole] = useState(Cookies.get("role"));
  const [currentUser, setCurrentUser] = useState({
    id: null,
  });

  useEffect(() => {
    setCurrentUser({
      id: Cookies.get("auth_token") && jwtDecode(Cookies.get("auth_token")),
    });
  }, [auth]);

  const reducer = (state, action) => {
    switch (action.type) {
      case USER_SIGNUP:
        userSignup(
          action.payload,
          action.resetForm,
          action.setIsLoading,
          action.navigate
        );
        break;
      case USER_LOGIN:
        userLogin(
          action.payload,
          action.resetForm,
          action.setIsLoading,
          action.navigate,
          setAuth
        );
        break;
      case VENDOR_LOGIN:
        vendorLogin(
          action.payload,
          action.resetForm,
          action.setIsLoading,
          action.navigate,
          setAuth
        );
        break;
      case VENDOR_SIGNUP:
        vendorSignup(
          action.payload,
          action.resetForm,
          action.setIsLoading,
          action.navigate
        );
        break;
      case GET_ALL_CATEGORY:
        getALlCategory(action.upDateState);
        break;
      case ADD_PRODUCT:
        addProduct(
          action.payload,
          action.urls,
          action.catId,
          action.setIsLoading,
          action.resetform
        );
        break;
      case GET_VENDOR_PRODUCTS:
        getVendorProducts(currentUser.id, action.upDateState);
        break;
      case DELETE_PRODUCT:
        deleteProduct(action.payload, action.setIsLoading, action.cb);
        break;
      case USER_ACCOUNT_ACTIVATE:
        userAccActivate(
          action.payload,
          action.id,
          action.setIsLoading,
          action.navigate
        );
        break;
      case VENDOR_ACCOUNT_ACTIVATE:
        vendorAccActivate(
          action.payload,
          action.id,
          action.setIsLoading,
          action.navigate
        );
        break;
      case USER_RESEND_OTP:
        userResendOtp(action.payload, action.setIsLoading);
        break;
      case VENDOR_RESEND_OTP:
        vendorResendOtp(action.payload, action.setIsLoading);
        break;
      case GET_USER_PROFILE:
        userProfile(action.upDateState);
        break;
      case GET_VENDOR_PROFILE:
        vendorProfile(action.payload, action.upDateState);
        break;
      case GET_ALL_PRODUCTS:
        getALLproducts(action.upDateState);
        break;
      case GET_PRODUCT_DETAILS:
        getProductDetails(
          action.payload,
          action.upDateState,
          action.setIsLoading
        );
        break;
      case ADD_ITEM_TO_WISHLIST:
        addItemToWishlist(
          action.payload,
          action.upDateState,
          action.setIsLoading
        );
        break;
      case REMOVE_ITEM_TO_WISHLIST:
        removeItemFromWishlist(
          action.payload,
          action.upDateState,
          action.setIsLoading,
          action.cb
        );
        break;
      case CHECK_WISHLIST_STATUS:
        checkProductWishlistStatus(action.payload, action.upDateState);
        break;
      case GET_WISHLIST_ITEMS:
        getWishlistItems(action.upDateState);
        break;
      case ADD_ITEM_CART:
        addItemToCart(action.payload, action.upDateState, action.setIsLoading);
        break;
      case CHECK_ITEM_IN_CART:
        checkItemInCart(
          action.payload,
          action.upDateState,
          action.setIsLoading
        );
        break;
      case GET_CART_ITEMS:
        getCartItems(action.setIsLoading, action.upDateState);
        break;
      case DELETE_ITEM_FROM_CART:
        deleteItemFromCart(action.payload, action.cb, action.setIsLoading);
        break;
    }
  };
  const initialValues = {};
  const [state, dispatch] = useReducer(reducer, initialValues);

  const values = {
    auth,
    dispatch,
    auth,
    setAuth,
    AuthRole,
    setAuthRole,
    currentUser,
  };
  return (
    <AuthContext.Provider value={values}>
      <ReactNotifications />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextComponent;
