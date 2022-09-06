import { Store } from "react-notifications-component";
import {
  getCompletedOrdersRequest,
  getCurrentOrdersRequest,
  getMyOrderRequest,
  getReturnOrdersRequest,
  returnItemRequest,
  updateOrderRequest,
} from "../API";
import { notification } from "../AuthContext";
import { getDetailsOfSpecificShipment } from "../shiprocketApi";

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
  let shiprocketData = [];
  try {
    const res = await getCurrentOrdersRequest();
    upDateState(res.data.data);
    console.log(res, "all order here");
    if(res.status === 200) {
      res?.data?.data.forEach(async(order) => {
        try {
          const res2 = await getDetailsOfSpecificShipment(order?.SKUshipmentId);
          console.log(res2);
          if(res.status === 200) {
            res2.data.data.forEach(async(item) => {
              if(item.order_id === order.SKUorderId) {
                const res3 = await updateOrderRequest({order_id: order._id, status: item.status});
                console.log(res3);
              }
            })
          }
          try {
            const res4 = await getCurrentOrdersRequest();
            upDateState(res4.data.data);
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      })
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

export const getReturnOrders = async (upDateState, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await getReturnOrdersRequest();
    upDateState(res.data.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};
export const getCompletedOrders = async (upDateState, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await getCompletedOrdersRequest();
    upDateState(res.data.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};


