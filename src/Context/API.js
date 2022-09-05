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

export const vendorForgotpasswordRequest = (value)=>{
  return API.post("api/vendor/forgot-password", {email: value});
}
export const vendorVerifyCode = (values)=>{
  /// object of body
  return API.post("api/vendor/verify-code",values)
}

export const resetVendorPassword = (data) => {
  return API.post("/api/vendor/reset-password", data)
}
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
  return API.get('/vendor/getMyaddress');
}

export const getVendorSale=(startDate,endDate)=>{

  return API.get(`/ord/salesCount?startDate=${startDate}&endDate=${endDate}`)
}
export const addVendorAddress = (data) => {
  return API.post("/vendor/addAddress", data);
}

export const changeCurrentAddress = (id) => {
  return API.get(`/vendor/changeCurrentAddress?addressId=${id}`);
}

export const deleteSavedAddress = (id) => {
  return API.get(`/vendor/removeAddress?addressId=${id}`);
}

export const updateProfile = (data,id) => {
  return API.post(`/vendor/updateVendorProfile/${id}`, data)
}
//products
export const getAllCategoryRequest = () => {
  return API.get("/product/getProductCategory");
};

export const addProductRequest = (values) => {
  return API.post("/product/addProduct", values);
};
export const updateVendorProduct = (values, id) => {
  return API.post(`product/updateProduct?id=${id}`, values)
}
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

export const getMyOrderRequest = () => {
  return API.get("/orders/myOrders");
};

//ads
export const getAds = () => {
  return API.get("/ads/getMyAds");
}

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

export const getPaidToAffiliate = () => {
  return API.get('/ord/paidToAffiliate');
}

export const getAmountToAffiliate = () => {
  return API.get('/ord/amountToAffiliate');
}
//payment
export const getOrderID = (cost) => {
  return API.post("orders/createOrderId", {
    price: cost,
  });
};

export const placeOrder = (response, product, amount) => {
  console.log(product);
  console.log(amount);
  const formValues = {
    razorpayPaymentId: response.razorpay_payment_id,
    orderCreationId: response.razorpay_order_id,
    razorpaySignature: response.razorpay_signature,
    products: product,
    totalPrice: amount,
    isCOD: false, //if true, payment id, signature, order id will not come
    address: {
      line1: "Fl no. 203, F wing, Shefalika Heights",
      line2: "Shivtirthnagar, Paud Road, Kothrud",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411038",
      country: "India",
    },
    // "affiliateKey": "dfrgthe56htgar" //optional
  };
  return API.post("orders/placeOrder", formValues);
};

//orders
export const getCurrentOrdersRequest = () => {
  return API.get("/ord/getNewOrders");
};
export const getReturnOrdersRequest = () => {
  return API.get("/ord/myRequests");
};
export const getCompletedOrdersRequest = () => {
  return API.get("/ord/getPreviousOrders");
};
export const returnItemRequest = (values) => {
  return API.post("/orders/return", values);
};



//shiprocket 
