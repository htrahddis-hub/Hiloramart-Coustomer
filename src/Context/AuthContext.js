import { createContext, useEffect, useReducer, useState } from "react";
import {
  userAccActivate,
  userLogin,
  userResendOtp,
  userSignup,
  userForgotPass,
  userVerifyOtp,
  resetUserPassword,
} from "./Reducer/AuthReducer";
import {
  ACCEPT_REQUEST,
  ADD_ITEM_CART,
  ADD_ITEM_TO_WISHLIST,
  CHECK_ITEM_IN_CART,
  CHECK_WISHLIST_STATUS,
  DELETE_ITEM_FROM_CART,
  DENY_REQUEST,
  GET_AFFILIATE_REQUEST,
  GET_ALL_CATEGORY,
  GET_ALL_PRODUCTS,
  GET_CART_ITEMS,
  GET_MY_ORDERS,
  GET_PRODUCT_DETAILS,
  GET_USER_PROFILE,
  GET_WISHLIST_ITEMS,
  GET_TOP_PRODUCTS,
  JOIN_AFFILIATE,
  ONLINE_PAYMENT,
  REMOVE_ITEM_TO_WISHLIST,
  RETURN_ITEM,
  USER_ACCOUNT_ACTIVATE,
  USER_LOGIN,
  USER_RESEND_OTP,
  USER_SIGNUP,
  GET_ADS,
  PAID_TO_AFFILIATE,
  AMOUNT_TO_AFFILIATE,
  GET_SHIPROCKET_COUNTRY,
  GET_SHIPROCKET_LOCALITY,
  UPDATE_PROFILE,
  PRODUCT_ADD_FOR_ADS,
  PRODUCT_REMOVE_FOR_ADS,
  GET_PRODUCT_BY_CATEGORY,
  USER_FORGOTPASSWORD,
  USER_VERIFYCODE,
  RESET_USER_PASSWORD,
  SEARCG_PRODUCT,
  ADD_USER_ADDRESS,
  GET_USER_ADDRESS,
  CHANGE_USER_CURRENT_ADDRESS,
  UPDATE_USER_PROFILE,
  GET_PRODUCT_BY_CATEGORY2,
  REVIEW,
  LOGOUT,
} from "./Types";
import { ReactNotifications } from "react-notifications-component";
import Cookies from "js-cookie";
import {
  addItemToCart,
  addItemToWishlist,
  checkItemInCart,
  checkProductWishlistStatus,
  deleteItemFromCart,
  getALlCategory,
  getALLproducts,
  getTopProducts,
  getCartItems,
  getProductDetails,
  getWishlistItems,
  removeItemFromWishlist,
  getAllAds,
  addProductForAds,
  removeProductForAds,
  getProductByCatId,
  searchProducts,
  getProductByCatId2,
  reviews,
} from "./Reducer/ProductReducer";
import jwtDecode from "jwt-decode";
import {
  addUserAddressData,
  getUserAddress,
  changeCurrentUserAdd,
  updateProfileFun,
  userProfile,
  updateUserProfiles,
  userLogout,
} from "./Reducer/ProfileReducer";
import { getMyOrder, returnITem } from "./Reducer/OrderReducer";
import {
  acceptAffiliate,
  denytAffiliate,
  getAffiliate,
  getAmountToAffiliates,
  getPaidTOAffiliates,
  joinAffliate,
} from "./Reducer/AffiliateReducer";
import { onlinePayment } from "./Reducer/PaymentReducer";
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
      case USER_FORGOTPASSWORD:
        userForgotPass(action.email, action.navigate);
        break;
      case USER_VERIFYCODE:
        userVerifyOtp(action.values, action.navigate);
        break;
      case RESET_USER_PASSWORD:
        resetUserPassword(action.data, action.navigate);
        break;
      case GET_ALL_CATEGORY:
        getALlCategory(action.upDateState, action.setIsLoading);
        break;
      case SEARCG_PRODUCT:
        searchProducts(
          action.name,
          action.catId,
          action.upDateState,
          action.setIsLoading
        );
        break;
      case GET_USER_ADDRESS:
        getUserAddress(action.setUserAddress);
        break;
      case CHANGE_USER_CURRENT_ADDRESS:
        changeCurrentUserAdd(action.id);
        break;
      case ADD_USER_ADDRESS:
        addUserAddressData(
          action.address,
          action.setIsLoading2,
          action.handleClose,
          action.setVendorAddress
        );
        break;
      case UPDATE_USER_PROFILE:
        updateUserProfiles(action.data);
        break;
      case UPDATE_PROFILE:
        updateProfileFun(
          action.data,
          action.id,
          action.setIsLoading,
          action.navigate
        );
        break;
      case GET_ADS:
        getAllAds(action.setAds);
        break;
      case USER_ACCOUNT_ACTIVATE:
        userAccActivate(
          action.payload,
          action.id,
          action.setIsLoading,
          action.navigate
        );
        break;
      case USER_RESEND_OTP:
        userResendOtp(action.payload, action.setIsLoading);
        break;
      case GET_USER_PROFILE:
        userProfile(action.upDateState, action.setImage, action.setUpdatePf);
        break;
      case PAID_TO_AFFILIATE:
        getPaidTOAffiliates(
          action.setPaidToAffiliates,
          action.setIsLoading,
          action.page2,
          action.limit,
          action.category
        );
        break;
      case AMOUNT_TO_AFFILIATE:
        getAmountToAffiliates(
          action.setAmountToAffiliates,
          action.setIsLoading
        );
        break;
      case GET_ALL_PRODUCTS:
        getALLproducts(action.upDateState);
        break;
      case GET_TOP_PRODUCTS:
        getTopProducts(action.upDateState);
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
          action.productIds,
          action.cost,
          action.setIsLoading,
          action.navigate,
          action.handleClose
        );
        break;
      case RETURN_ITEM:
        returnITem(action.payload, action.upDateState, action.setIsLoading);
        break;
      case PRODUCT_ADD_FOR_ADS:
        addProductForAds(
          action.item,
          action.setSelectedProducts,
          action.setTotalPrice,
          action.totalPrice,
          action.setProductIds
        );
        break;
      case PRODUCT_REMOVE_FOR_ADS:
        removeProductForAds(
          action.item,
          action.setSelectedProducts,
          action.setTotalPrice,
          action.totalPrice,
          action.setProductIds
        );
        break;

      case GET_PRODUCT_BY_CATEGORY:
        getProductByCatId(
          action.catId,
          action.setAllProducts,
          action.setIsLoading
        );
        break;
      case GET_PRODUCT_BY_CATEGORY2:
        getProductByCatId2(
          action.catId,
          action.setAllProducts,
          action.setIsLoading,
          action.approvalType
        );
        break;
      case REVIEW:
        reviews(action.data);
        break;
      case LOGOUT:
        userLogout(action.navigate,setAuth);
        break;
    }
  };
  const initialValues = {};
  const [state, dispatch] = useReducer(reducer, initialValues);

  const values = {
    auth,
    dispatch,
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
