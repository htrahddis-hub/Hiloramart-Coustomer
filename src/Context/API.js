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

export const userForgotpasswordRequest = (value) => {
  return API.post("/auth/forgotPassword", { email: value });
};

export const userVerifyCode = (values) => {
  return API.post("/auth/verifyCode", values);
};

export const resetUserPasswordRequest = (data) => {
  return API.post("/auth/resetPassword", data);
};

export const vendorForgotpasswordRequest = (value) => {
  return API.post("api/vendor/forgot-password", { email: value });
};

export const vendorVerifyCode = (values) => {
  /// object of body
  return API.post("api/vendor/verify-code", values);
};

export const resetVendorPassword = (data) => {
  return API.post("/api/vendor/reset-password", data);
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
export const getVendorAddresss = () => {
  return API.get("/vendor/getMyaddress");
};

export const getUserAddresss = () => {
  return API.get("/address");
};

export const getVendorSale = (
  // startDate, endDate,
  category
) => {
  if (category.id === "") {
    // return API.get(`/ord/salesCount?startDate=${startDate}&endDate=${endDate}`);
    return API.get(`/ord/salesCount`);
  } else {
    // return API.get(`/ord/salesCount?startDate=${startDate}&endDate=${endDate}&category=${category}`);
    return API.get(`/ord/salesCount?category=${category}`);
  }
};

export const getVendorAllSale = (page, limit, category) => {
  if (category.id === "") {
    return API.get(`/ord/mySales?pageno=${page}&limit=${limit}`);
  } else {
    return API.get(
      `/ord/mySales?pageno=${page}&limit=${limit}&category=${category}`
    );
  }
};

export const addVendorAddress = (data) => {
  return API.post("/vendor/addAddress", data);
};

export const changeCurrentAddress = (id) => {
  return API.get(`/vendor/changeCurrentAddress?addressId=${id}`);
};

export const deleteSavedAddress = (id) => {
  return API.get(`/vendor/removeAddress?addressId=${id}`);
};

export const addUserAddress = (data) => {
  return API.post("/address/add", data);
};

export const changeCurrentUserAddress = (id) => {
  return API.post(`/address/changeCurrentAddress`, { addressId: id });
};

export const updateUserAddress = (id, data) => {
  return API.post(`/address/edit?addressId=${id}`, data);
};

export const deleteSavedUserAddress = (id) => {
  return API.delete(`/address/remove?addressId=${id}`);
};

export const searchProduct = (name, categoryId) => {
  return API.get(`product/searchProducts?name=${name}&category=${categoryId}`);
};

export const updateUserProfile = (data) => {
  return API.post(`profile/updateAll`, data);
};

export const updateUserProfilePic = (data) => {
  return API.post(`profile/updateProfilePic`, data);
};

export const updateProfile = (data, id) => {
  return API.post(`/vendor/updateVendorProfile/${id}`, data);
};
//products
export const getAllCategoryRequest = () => {
  return API.get("/product/getProductCategory");
};

export const getTopSellingProduct = () => {
  return API.get(`/product/getSellingProducts`);
};

export const addProductRequest = (values) => {
  return API.post("/product/addProduct", values);
};
export const updateVendorProduct = (values, id) => {
  return API.post(`product/updateProduct?id=${id}`, values);
};
export const getVendorProductsRequest = (id) => {
  return API.get(`/product/allproducts/${id}`);
};
export const getVendorNonAppProductsRequest = (id) => {
  return API.get(`/product/unapprovedproducts/${id}`);
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
  console.log({ products: [id] });
  const data = { products: [id] };
  return API.delete(`/wishlist/remove`, { data: data });
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

export const getMyOrderRequest = () => {
  return API.get("/orders/myOrders");
};

export const updateOrderRequest = (data) => {
  return API.post("/ord/updateOrder", data);
};

//ads
export const getAds = () => {
  return API.get("/ads/getMyAds");
};

//affliate
export const joinAffliateRequest = (id) => {
  return API.post("/profile/sendAffiliateRequest", {
    vendor_id: id,
  });
};

export const getAffiliateRequest = () => {
  return API.get("affiliate/getMyAffiliateRequests");
};

export const acceptAffiliateRequest = (id) => {
  return API.post("/affiliate/manageRequests", {
    affiliateId: id,
    status: "Accepted",
  });
};
export const denyAffiliateRequest = (id) => {
  return API.post("/affiliate/manageRequests", {
    affiliateId: id,
    status: "Rejected",
  });
};

export const getPaidToAffiliate = (page, limit, category) => {
  // return API.get("/ord/paidToAffiliate");
  if(category.id === "") {
    return API.get(
      `/ord/paidToAffiliate?pg=${page}&lm=${limit}`
    );
  }else {
    return API.get(
      `/ord/paidToAffiliate?pg=${page}&lm=${limit}&category=${category}`
    );
  }
};

export const getAmountToAffiliate = () => {
  return API.get("/ord/amountToAffiliate");
};
//payment
export const getOrderID = (cost) => {
  return API.post("orders/createOrderId", {
    price: cost,
  });
};

export const placeOrder = (response, productIds, amount) => {
  console.log(productIds);
  console.log(amount);
  console.log(response);
  const formValues = {
    razorpayPaymentId: response.razorpay_payment_id,
    orderCreationId: response.razorpay_order_id,
    razorpaySignature: response.razorpay_signature,
    products: productIds,
    price: amount,
    // isCOD: false, //if true, payment id, signature, order id will not come
    // address: {
    //   line1: "Fl no. 203, F wing, Shefalika Heights",
    //   line2: "Shivtirthnagar, Paud Road, Kothrud",
    //   city: "Pune",
    //   state: "Maharashtra",
    //   pincode: "411038",
    //   country: "India",
    // },
    // "affiliateKey": "dfrgthe56htgar" //optional
  };
  return API.post("/ads/payForAd", formValues);
};

//orders
export const getCurrentOrdersRequest = (limit, page, category) => {
  if(category === "") {
    return API.get(
      `/ord/getNewOrders?pageno=${page}&limit=${limit}`
    );
  }else {
    return API.get(
      `/ord/getNewOrders?pageno=${page}&limit=${limit}&category=${category}`
    );
  }
};
export const getReturnOrdersRequest = (limit, page, category) => {
  if(category === "") {
    return API.get(
      `/ord/myRequests?pageno=${page}&limit=${limit}`
    );
  }else {
    return API.get(
      `/ord/myRequests?pageno=${page}&limit=${limit}&category=${category}`
    );
  }
};
export const getCompletedOrdersRequest = (limit, page, category) => {
  // return API.get(`/ord/getPreviousOrders?pageno=${page}&limit=${limit}`);
  if(category === "") {
    return API.get(
      `/ord/getPreviousOrders?pageno=${page}&limit=${limit}`
    );
  }else {
    return API.get(
      `/ord/getPreviousOrders?pageno=${page}&limit=${limit}&category=${category}`
    );
  }
};
export const getOngoingOrdersRequest = (limit, page, category) => {
  // return API.get(`/ord/getOngoingOrders?pageno=${page}&limit=${limit}`);
  if(category === "") {
    return API.get(
      `/ord/getOngoingOrders?pageno=${page}&limit=${limit}`
    );
  }else {
    return API.get(
      `/ord/getOngoingOrders?pageno=${page}&limit=${limit}&category=${category}`
    );
  }
};
export const returnItemRequest = (values) => {
  return API.post("/orders/return", values);
};

export const getProductByCategory = (catId) => {
  return API.post(`/product/getProductsbyCategoryId`, { category: [catId] });
};

export const getVendorAllAds = () => {
  return API.get("/ads/getMyAds");
};

export const createVendorOrderRazor = (totalPrice) => {
  return API.post("/ads/createOrderId", { price: String(totalPrice) });
};


export const getRevenue = (typeOfDate, category) => {
  if(category === "") {
    return API.get(
      `/ord/myRevenue?type=${typeOfDate}`
    );
  }else {
    return API.get(
      `/ord/myRevenue?type=${typeOfDate}&category=${category}`
    );
  }
}
//shiprocket
