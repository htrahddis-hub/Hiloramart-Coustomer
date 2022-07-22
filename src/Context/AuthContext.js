import { createContext, useReducer, useState } from "react";
import { userLogin, vendorLogin } from "./Reducer/AuthReducer";
import { USER_LOGIN, VENDOR_LOGIN } from "./Types";
import { ReactNotifications } from "react-notifications-component";
export const AuthContext = createContext();
export const notification = {
  title: "Wonderful!",
  message: "Configurable",
  type: "success",
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
  const [auth, setAuth] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case USER_LOGIN:
        userLogin();
        break;
      case VENDOR_LOGIN:
        vendorLogin();
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);

  const values = {
    auth,
    dispatch,
  };
  return (
    <AuthContext.Provider value={values}>
      <ReactNotifications />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextComponent;
