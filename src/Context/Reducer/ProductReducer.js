import {
  addItemToCartRequest,
  addItemToWishlistRequest,
  checkItemInCartRequest,
  checkItemWishlistStatus,
  deleteItemFromCartRequest,
  getAllCategoryRequest,
  getAllProductsRequest,
  getCartItemsRequest,
  getProductDetailsRequest,
  getWishlistItemsRequest,
  removeItemFromWishlistRequest,
  getAds,
  getProductByCategory,
  getTopSellingProduct,
  searchProduct,
  review,
} from "../API";
import { Store } from "react-notifications-component";
import { notification } from "../AuthContext";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../utils/firebase";
export const getALlCategory = async (upDateState, setIsLoading) => {
  try {
    const res = await getAllCategoryRequest();
    upDateState(res.data.data);
    setIsLoading(false);
  } catch (err) {
    console.log(err);
  }
};

export const searchProducts = async (
  name,
  catId,
  upDateState,
  setIsLoading
) => {
  try {
    const res = await searchProduct(name, catId);
    if (res.data.success) {
      upDateState(res.data.data);
      setIsLoading(false);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

export const getAllAds = async (setAds) => {
  try {
    const res = await getAds();
    // console.log(res, "datadata");
    setAds(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getALLproducts = async (upDateState) => {
  try {
    const res = await getAllProductsRequest();
    if (res.data) {
      upDateState(res.data.data);
    }
  } catch (err) {
    console.log(err);
  }
};

//the API doesn't take page limit although it is shown in decumentation
export const getTopProducts = async (upDateState) => {
  try {
    const res = await getTopSellingProduct();
    if (res.data) {
      upDateState(res.data.data);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getProductDetails = async (id, upDateState) => {
  try {
    const res = await getProductDetailsRequest(id);
    if (res.data) {
      upDateState(res.data.data);
    }
  } catch (err) {
    console.log(err);
  }
};

export const addItemToWishlist = async (id, upDateState, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await addItemToWishlistRequest(id);
    if (res.data === "Item Added!") {
      upDateState(true);
    }
  } catch (e) {
    console.log(e);
  } finally {
    setIsLoading(false);
  }
};

export const removeItemFromWishlist = async (
  id,
  upDateState,
  setIsLoading,
  cb
) => {
  setIsLoading(true);
  try {
    const res = await removeItemFromWishlistRequest(id);
    if (res.data.message === "Removed Successfully") {
      upDateState(false);
      if (cb) cb();
    }
  } catch (e) {
    console.log(e);
  } finally {
    setIsLoading(false);
  }
};

export const checkProductWishlistStatus = async (id, upDateState) => {
  try {
    const res = await checkItemWishlistStatus(id);
    upDateState(res.data.status);
  } catch (e) {
    console.log(e);
  }
};

export const getWishlistItems = async (upDateState) => {
  try {
    const res = await getWishlistItemsRequest();
    upDateState(res.data);
  } catch (e) {
    console.log(e);
  }
};

export const addItemToCart = async (
  values,
  upDateState,
  setIsLoading,
  navigate
) => {
  setIsLoading(true);
  try {
    const res = await addItemToCartRequest({
      products: values,
    });
    if (res.data.message === "Added Successfully") {
      upDateState(true);
      if (navigate) {
        navigate("/my-cart");
      }
    }
  } catch (err) {
    console.log(err);
    Store.addNotification({
      ...notification,
      type: "danger",
      message: err.response.data.message,
    });
  } finally {
    setIsLoading(false);
  }
};

export const checkItemInCart = async (values, upDateState, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await checkItemInCartRequest(values);
    console.log("cart" + res);
    if (res.data) {
      upDateState(true);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

export const getCartItems = async (setIsLoading, upDateState) => {
  setIsLoading(true);
  try {
    const res = await getCartItemsRequest();
    if (res.data) {
      upDateState(res.data.cartItems);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

export const deleteItemFromCart = async (
  values,
  cb,
  setIsLoading,
  cartProducts,
  cartProdId
) => {
  setIsLoading(true);
  // console.log(values);
  try {
    const res = await deleteItemFromCartRequest(values);
    if (res.data.message === "Deleted Successfully") {
      cartProducts.delete(cartProdId);
      cb();
    }
  } catch (err) {
    console.log(err);
    Store.addNotification({
      ...notification,
      type: "danger",
      message: err.response.data,
    });
  } finally {
    setIsLoading(false);
  }
};

export const getProductByCatId = async (
  catId,
  setAllProducts,
  setIsLoading
) => {
  try {
    setIsLoading(true);
    const res = await getProductByCategory(catId);
    setAllProducts(res?.data?.data);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

export const getProductByCatId2 = async (
  catId,
  setAllProducts,
  setIsLoading,
  approvalType
) => {
  try {
    setIsLoading(true);
    const res = await getProductByCategory(catId);
    console.log(approvalType, catId);
    if (approvalType === "approval") {
      setAllProducts(
        res?.data?.data?.filter(
          (item) => item?.isApproved === true && item?.category?._id === catId
        )
      );
    } else {
      setAllProducts(
        res?.data?.data?.filter(
          (item) => item?.isApproved === false && item?.category?._id === catId
        )
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

let products = [];
let productId = [];
export const addProductForAds = (
  item,
  setSelectedProducts,
  setTotalPrice,
  totalPrice,
  setProductIds
) => {
  let total = totalPrice;
  console.log(total);
  setSelectedProducts(products.push(item));
  console.log(products);
  setSelectedProducts(products);
  setTotalPrice(Number(total) + Number(item?.price));
  // debugger
  // setProductIds(productId.push(item?._id));
  setProductIds((prev) => [...prev, item?._id]);
  // debugger
  // console.log(productId)

  // debugger
};
export const removeProductForAds = (
  item,
  setSelectedProducts,
  setTotalPrice,
  totalPrice,
  setProductIds
) => {
  let total = totalPrice;
  console.log(total);
  const filteredData = products.filter((data) => data._id !== item._id);
  setSelectedProducts(filteredData);
  setTotalPrice(Number(total) - Number(item?.price));

  // const filteredProductId = productId.filter((id) => id !== item._id);
  // setProductIds(filteredProductId);
  setProductIds((prev) => prev.filter((item1) => item1 !== item._id));
  console.log(productId);
};

export const reviews = async (data) => {
  try {
    const res = await review(data);
    
  } catch (err) {
    console.log(err);
  }
};
