import axios from "axios";
import Cookies from "js-cookie";

// for live server
const API = axios.create({
  baseURL: "https://hiloramart-user.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (Cookies.get("token")) {
    req.headers["token"] = `${Cookies.get("token")}`;
  }
  return req;
});

// const userLoginRequest = (values) => {
//   return API.post();
// };
export const vendorLoginRequest = (values) => {
  return API.post("https://hiloramart0.herokuapp.com/api/vendor/login", values);
};
export const vendorSignupRequest = (values) => {
  return API.post(
    "https://hiloramart0.herokuapp.com/api/vendor/signup",
    values
  );
};
