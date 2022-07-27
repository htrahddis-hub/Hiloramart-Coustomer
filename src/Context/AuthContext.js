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
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_CATEGORY,
  GET_ALL_PRODUCTS,
  GET_USER_PROFILE,
  GET_VENDOR_PRODUCTS,
  GET_VENDOR_PROFILE,
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
  addProduct,
  deleteProduct,
  getALlCategory,
  getALLproducts,
  getVendorProducts,
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
    id: Cookies.get("auth_token") && jwtDecode(Cookies.get("auth_token")),
  });

  // useEffect(() => {
  //   console.log(Cookies.get("auth_token"));
  // }, []);

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
