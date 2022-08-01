import axios from "axios";
import Cookies from "js-cookie";

// for live server
const API = axios.create({
  baseURL: "https://hiloramart0.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (Cookies.get("auth_token")) {
    req.headers["authorization"] = `${Cookies.get("auth_token")}`;
    req.headers["token"] = `${Cookies.get("auth_token")}`;
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

export const userAccActivateRequest = (values) => {
  return API.post("auth/activate", values);
};
export const vendorAccActivateRequest = (values) => {
  return API.post("api/vendor/activate", values);
};

export const userResendOtpRequest = (values) => {
  return API.post("auth/resendOtp", values);
};

export const vendorResendOtpRequest = (values) => {
  return API.post("api/vendor/resendOtp", values);
};

export const userProfileRequest = () => {
  return API.get("profile");
};
export const vendorProfileRequest = (id) => {
  return API.get(`/vendor/getVendorProfile/${id}`);
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

export const getAllProductsRequest = () => {
  return API.get("product/getProducts");
};

export const getProductDetailsRequest = (id) => {
  return API.get(`product/getProductsbyId/${id}`);
};

export const addItemToWishlistRequest = (id) => {
  return API.post(`/wishlist/add`, {
    product_id: id,
  });
};
export const removeItemFromWishlistRequest = (id) => {
  return API.delete(`/wishlist/remove?product_id=${id}`);
};

export const checkItemWishlistStatus = (id) => {
  return API.get(`wishlist/checkItem?product_id=${id}`);
};

export const getWishlistItemsRequest = async (id) => {
  return API.get(`/wishlist`);
};

export const addItemToCartRequest = (values) => {
  return API.post("cart/add", values);
};

export const checkItemInCartRequest = (id) => {
  return API.get(`cart/checkItem?productId=${id}`);
};

export const getCartItemsRequest = () => {
  return API.get("/cart");
};

export const deleteItemFromCartRequest = (values) => {
  return API.delete("/cart/remove", {
    data: values,
  });
};
