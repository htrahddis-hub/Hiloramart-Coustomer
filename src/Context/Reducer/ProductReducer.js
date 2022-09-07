import {
  addItemToCartRequest,
  addItemToWishlistRequest,
  addProductRequest,
  checkItemInCartRequest,
  checkItemWishlistStatus,
  deleteItemFromCartRequest,
  deleteProductRequest,
  getAllCategoryRequest,
  getAllProductsRequest,
  getCartItemsRequest,
  getProductDetailsRequest,
  getVendorProductsRequest,
  getWishlistItemsRequest,
  removeItemFromWishlistRequest,
  updateVendorProduct,
  getAds
} from "../API";
import { Store } from "react-notifications-component";
import { notification } from "../AuthContext";
import { Navigate } from "react-router-dom";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../utils/firebase";
export const getALlCategory = async (upDateState) => {
  try {
    const res = await getAllCategoryRequest();
    upDateState(res.data.data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (
  id,
  setIsLoading,
  cb,
  productImage,
  productVideos
) => {
  setIsLoading(true);

  try {
    const res = await deleteProductRequest(id);
    if (res.data.success) {
      Store.addNotification({
        ...notification,
        type: "success",
        message: res.data.message,
      });
      console.log(productImage, productVideos);
      if (productImage.length > 0) {
        productImage.forEach(async (item) => {
          const desertRef = ref(storage, item);
          try {
            await deleteObject(desertRef);
            console.log("file deleted successfully");
          } catch (err) {
            console.log(err);
          }
        });
      }
      if (productVideos.length > 0) {
        productVideos.forEach(async (item) => {
          const desertRef = ref(storage, item);
          try {
            await deleteObject(desertRef);
            console.log("file deleted successfully");
          } catch (err) {
            console.log(err);
          }
        });
      }
      cb();
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

export const addProduct = async (
  inputData,
  urlResponse,
  videoUrlResponse,
  catId,
  setIsLoading,
  resetform,
  navigate
) => {
  try {
    const values = {
      name: inputData.productName,
      description: inputData.prodcutDescription,
      stock: inputData.stock,
      size: inputData.size,
      price: inputData.price,
      productImage: urlResponse,
      productVideos: videoUrlResponse,
      owner: inputData.id,
      category: catId,
    };
    const res = await addProductRequest(values);
    if (res.data.success) {
      resetform();
      navigate("/product-success", {
        state: {
          id: res.data.data._id,
        },
        replace: true,
      });
    }
  } catch (err) {
    console.log(err);
    Store.addNotification({
      ...notification,
      type: "danger",
      message: "somee error occured",
    });
  } finally {
    setIsLoading(false);
  }
};


export const updateProduct = async(inputData, setIsLoading, navigate, id, urls, videoUrlResponse) => {
  try {
    const values = {
      name: inputData.name,
      description: inputData.description,
      price: inputData.price,
      stock: inputData.stock,
      productImage: urls,
      productVideos: videoUrlResponse,
    };
    console.log(values, 'hi there')
    const res = await updateVendorProduct(values, id);
    if(res.data.success) {
      navigate("/product-updated", {
        state: {
          id: res.data.data._id,
        },
        replace: true,
      })
    }
    console.log(res, "product updated");
  } catch (error) {
    console.log(error);
    Store.addNotification({
      ...notification,
      type: "danger",
      message: "somee error occured",
    });
  } finally {
    setIsLoading(false);
  }
}

export const getVendorProducts = async (id, upDateState, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await getVendorProductsRequest(id);
    upDateState(res.data.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

export const getAllAds = async(setAds) => {
  try {
    const res = await getAds();
    // console.log(res, "datadata");
    setAds(res.data.data);
  } catch (error) {
    console.log(error);
  }
}

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
    if (res.data === "Item removed") {
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
