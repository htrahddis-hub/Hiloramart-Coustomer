import { createContext, useReducer, useState } from "react";
import {
  userLogin,
  userSignup,
  vendorLogin,
  vendorSignup,
} from "./Reducer/AuthReducer";
import {
  ADD_PRODUCT,
  GET_ALL_CATEGORY,
  USER_LOGIN,
  USER_SIGNUP,
  VENDOR_LOGIN,
  VENDOR_SIGNUP,
} from "./Types";
import { ReactNotifications } from "react-notifications-component";
import Cookies from "js-cookie";
import { addProduct, getALlCategory } from "./Reducer/ProductReducer";
import jwtDecode from "jwt-decode";
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
