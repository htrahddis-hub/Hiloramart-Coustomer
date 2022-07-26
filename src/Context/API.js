import axios from "axios";
import Cookies from "js-cookie";

// for live server
const API = axios.create({
  baseURL: "https://hiloramart0.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (Cookies.get("auth_token")) {
    req.headers["authorization"] = `${Cookies.get("auth_token")}`;
  }
  return req;
});

export const userSignUpRequest = (values) => {
  return API.post("/auth/register", values);
};
export const userLoginRequest = (values) => {
  return API.post("/auth/login", values);
};
export const vendorLoginRequest = (values) => {
  return API.post("/api/vendor/login", values);
};
export const vendorSignupRequest = (values) => {
  return API.post("/api/vendor/signup", values);
};

//products
export const getAllCategoryRequest = () => {
  return API.get("/product/getProductCategory");
};

export const addProductRequest = (values) => {
  return API.post("/product/addProduct", values);
};

export const getVendorProductsRequest = (id) => {
  return API.get(`/product/allproducts/${id}`);
};

export const deleteProductRequest = (id) => {
  return API.post(`/product/deleteProduct?id=${id}`);
};
