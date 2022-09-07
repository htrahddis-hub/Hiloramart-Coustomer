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
  ACCEPT_REQUEST,
  ADD_ITEM_CART,
  ADD_ITEM_TO_WISHLIST,
  ADD_PRODUCT,
  CHECK_ITEM_IN_CART,
  CHECK_WISHLIST_STATUS,
  DELETE_ITEM_FROM_CART,
  DELETE_PRODUCT,
  DENY_REQUEST,
  GET_AFFILIATE_REQUEST,
  GET_ALL_CATEGORY,
  GET_ALL_PRODUCTS,
  GET_CART_ITEMS,
  GET_COMPLETED_ORDERS,
  GET_CURRENT_ORDERS,
  GET_MY_ORDERS,
  GET_PRODUCT_DETAILS,
  GET_RETURN_ORDERS,
  GET_USER_PROFILE,
  GET_VENDOR_PRODUCTS,
  GET_VENDOR_PROFILE,
  GET_WISHLIST_ITEMS,
  JOIN_AFFILIATE,
  ONLINE_PAYMENT,
  REMOVE_ITEM_TO_WISHLIST,
  RETURN_ITEM,
  USER_ACCOUNT_ACTIVATE,
  USER_LOGIN,
  USER_RESEND_OTP,
  USER_SIGNUP,
  VENDOR_ACCOUNT_ACTIVATE,
  VENDOR_LOGIN,
  VENDOR_RESEND_OTP,
  VENDOR_SIGNUP,
  UPDATE_PRODUCT,
  GET_ADS,
  PAID_TO_AFFILIATE,
  AMOUNT_TO_AFFILIATE,
  GET_VENDOR_ADDRESS,
  SHIPROCKET_CREATE_ORDER_VENDOR,
  ADD_SHIPROCKET_PICKUP_LOCATION,
  GET_SHIPROCKET_ADDRESS,
  GET_SHIPROCKET_COUNTRY,
  GET_SHIPROCKET_LOCALITY,
  ADD_VENDOR_ADDRESS,
  CHANGE_CURRENT_ADDRESS,
  DELETE_SAVED_ADDRESS,
  UPDATE_PROFILE,
  ADD_SHIPROCKET_PICKUP_LOCATION2,
  GET_VENDOR_PROFILE2,
  GET_SHIPROCKET_COURIER_SERVICE,
  GENERATE_SHIPROCKET_AWB,
  UPDATE_VENDOR_ORDER
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
  updateProduct,
  getALlCategory,
  getALLproducts,
  getCartItems,
  getProductDetails,
  getVendorProducts,
  getWishlistItems,
  removeItemFromWishlist,
  getAllAds,
} from "./Reducer/ProductReducer";
import jwtDecode from "jwt-decode";
import { addVendorAddressData, changeCurrentAdd, deleteSavedAdd, getVendorAddress, updateProfileFun, userProfile, vendorProfile, vendorProfile2 } from "./Reducer/ProfileReducer";
import {
  getCompletedOrders,
  getCurrentOrders,
  getMyOrder,
  getReturnOrders,
  returnITem,
} from "./Reducer/OrderReducer";
import {
  acceptAffiliate,
  denytAffiliate,
  getAffiliate,
  getAmountToAffiliates,
  getPaidTOAffiliates,
  joinAffliate,
} from "./Reducer/AffiliateReducer";
import { denyAffiliateRequest, getAmountToAffiliate, updateOrderRequest } from "./API";
import { onlinePayment } from "./Reducer/PaymentReducer";
import { createShiprocketLocation, createShiprocketLocation2, createShiprocketVendorOrder, generateAWBNow, getAllShiprocketAddress, getCourierServices, getShipRocketCountry, getShipRocketLocality } from "./Reducer/ShiprocketReducer";
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
    // eslint-disable-next-line default-case
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
      case GET_VENDOR_ADDRESS: 
        getVendorAddress(action.setVendorAddress);
        break;
      case GET_ALL_CATEGORY:
        getALlCategory(action.upDateState);
        break;
      case ADD_PRODUCT:
        addProduct(
          action.payload,
          action.urls,
          action.videoUrlResponse,
          action.catId,
          action.setIsLoading,
          action.resetform,
          action.navigate
        );
        break;
        case UPDATE_PRODUCT: 
        updateProduct(
          action.payload,
          action.setIsLoading,
          action.navigate,
          action.id,
          action.setIsLoading,
          action.navigate,
          action.urls,
          action.videoUrlResponse,
        );
        break;
      case GET_VENDOR_PRODUCTS:
        getVendorProducts(currentUser.id, action.upDateState, action.setIsLoading);
        break;
      case ADD_VENDOR_ADDRESS:
        addVendorAddressData(action.address, action.setIsLoading2, action.handleClose, action.setVendorAddress, action.profileData)
        break;

      case CHANGE_CURRENT_ADDRESS:
        changeCurrentAdd(action.id);
        break;

      case DELETE_SAVED_ADDRESS: 
        deleteSavedAdd(action.id, action.setVendorAddress);
        break;

      case UPDATE_PROFILE: 
        updateProfileFun(action.data, action.id, action.setIsLoading, action.navigate);
        break;
      case GET_ADS:
        getAllAds(action.setAds);
        break;
      case DELETE_PRODUCT:
        deleteProduct(
          action.payload,
          action.setIsLoading,
          action.cb,
          action.productImage,
          action.productVideos
        );
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
        vendorProfile(action.payload, action.upDateState, action.setUpdatedProfileData, action.setBankDetails, action.setShiprocketAddressResponse);
        break;
      case GET_VENDOR_PROFILE2: 
        vendorProfile2(action.payload, action.upDateState);
        break;
      case PAID_TO_AFFILIATE: 
        getPaidTOAffiliates(action.setPaidToAffiliates, action.setIsLoading)
        break;
      case AMOUNT_TO_AFFILIATE:
        getAmountToAffiliates(action.setAmountToAffiliates, action.setIsLoading);
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
        addItemToCart(
          action.payload,
          action.upDateState,
          action.setIsLoading,
          action.cb
        );
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
        deleteItemFromCart(
          action.payload,
          action.cb,
          action.setIsLoading,
          action.cartProducts,
          action.cartProdId
        );
        break;
      case GET_MY_ORDERS:
        getMyOrder(action.setIsLoading, action.upDateState);
        break;
      case JOIN_AFFILIATE:
        joinAffliate(action.payload, action.upDateState, action.setIsLoading);
        break;
      case GET_AFFILIATE_REQUEST:
        getAffiliate(action.upDateState, action.setIsLoading);
        break;
      case ACCEPT_REQUEST:
        acceptAffiliate(action.payload, action.setIsLoading, action.cb);
        break;
      case DENY_REQUEST:
        denytAffiliate(action.payload, action.setIsLoading, action.cb);
        break;
      case ONLINE_PAYMENT:
        onlinePayment(
          action.product,
          action.payload,
          action.quantity,
          action.setIsLoading,
          action.navigate
        );
        break;
      case GET_CURRENT_ORDERS:
        getCurrentOrders(action.upDateState, action.setIsLoading);
        break;
      case GET_RETURN_ORDERS:
        getReturnOrders(action.upDateState, action.setIsLoading);
        break;
      case GET_COMPLETED_ORDERS:
        getCompletedOrders(action.upDateState, action.setIsLoading);
        break;
      case RETURN_ITEM:
        returnITem(action.payload, action.upDateState, action.setIsLoading);
        break;


      //shiprocket
      case SHIPROCKET_CREATE_ORDER_VENDOR: 
        createShiprocketVendorOrder(action.orderData, action.item, action.pickupAddressToCreateOrder, action.setShiprocketCreatedOrder, action.setCourierServiceAvail, action.pickupCode, action.setIsLoading2, action.setIsOrderCreated)
        break;

      case ADD_SHIPROCKET_PICKUP_LOCATION:
        createShiprocketLocation(action.profileData, action.data, action.setShiprocketAddress, action.pickupAddress);
        break;
      case ADD_SHIPROCKET_PICKUP_LOCATION2:
        createShiprocketLocation2(action.pickupAddress, action.profileData);
        break;

      case GET_SHIPROCKET_ADDRESS:
        getAllShiprocketAddress(action.setAllShiprocketAddress);
        break;

      case GET_SHIPROCKET_COUNTRY:
        getShipRocketCountry(action.setAllCountries);
        break;      

      case GET_SHIPROCKET_LOCALITY:
        getShipRocketLocality(action.setAllLocalities, action.id)
        break;
      
      // case GET_SHIPROCKET_COURIER_SERVICE:
      //   getCourierServices(action.pickupCode, action.deliveryCode, action.setCourierServiceAvail);
      //   break;
      case GENERATE_SHIPROCKET_AWB: 
        generateAWBNow(action.shipmentId, action.setIsLoading3 ,action.courierId, action.handleClose, action.orderId, action.orderId2, action.setAllOrders);
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
