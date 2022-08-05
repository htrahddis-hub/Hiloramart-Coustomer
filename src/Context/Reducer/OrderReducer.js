import { Store } from "react-notifications-component";
import {
  getCurrentOrdersRequest,
  getMyOrderRequest,
  returnItemRequest,
} from "../API";
import { notification } from "../AuthContext";

export const getMyOrder = async (setIsLoading, upDateState) => {
  // setIsLoading(true)
  try {
    const res = await getMyOrderRequest();
    upDateState(res.data.data);
  } catch (err) {
    console.log(err);
  } finally {
    // setIsLoading(false);
  }
};
export const returnITem = async (values, upDateState, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await returnItemRequest(values);
    upDateState(true);
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
//vendor
export const getCurrentOrders = async (upDateState, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await getCurrentOrdersRequest();
    upDateState(res.data.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};
