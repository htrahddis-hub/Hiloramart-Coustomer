import { Store } from "react-notifications-component";
import {
  getCompletedOrdersRequest,
  getCurrentOrdersRequest,
  getMyOrderRequest,
  getOngoingOrdersRequest,
  getReturnOrdersRequest,
  getRevenue,
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

export const getReturnOrders = async (upDateState, setIsLoading, limit, page, category) => {
  setIsLoading(true);
  try {
    const res = await getReturnOrdersRequest(limit, page, category);
    upDateState(res.data.data);
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};


export const getCurrentOrders = async (upDateState, setIsLoading, limit, page, category) => {
  setIsLoading(true);
  try {
    const res = await getCurrentOrdersRequest(limit, page, category);
    upDateState(res.data.data);
    console.log(res, "all order here");
    if(res.status === 200) {
      res?.data?.data?.data?.forEach(async(order) => {
        try {
          const res2 = await getDetailsOfSpecificShipment(order?.SKUshipmentId);
          console.log(res2);
          if(res.status === 200) {
            res2?.data?.data?.forEach(async(item) => {
              if(item.order_id === order.SKUorderId) {
                console.log(res2?.data?.data)
                const res3 = await updateOrderRequest({order_id: order._id, status: item.status});
                console.log(res3);
              }
            })
          }
          try {
            const res4 = await getCurrentOrdersRequest(limit, page, category);
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

export const getCompletedOrders = async (upDateState, setIsLoading, limit, page, category) => {
  setIsLoading(true);
  try {
    const res = await getCompletedOrdersRequest(limit, page, category);
    upDateState(res.data.data);
    console.log(res);
    if(res.status === 200) {
      res?.data?.data?.data?.forEach(async(order) => {
        try {
          const res2 = await getDetailsOfSpecificShipment(order?.SKUshipmentId);
          console.log(res2);
          if(res.status === 200) {
            for(let key in res2?.data?.data) {
              if(key === 'status') {
                const status = res2?.data?.data[key];
                switch (status) {
                  case 4:
                    await updateOrderRequest({order_id: order._id, status: "Pickup Queued"});                    
                    break;
                  case 6:
                    await updateOrderRequest({order_id: order._id, status: "Shipped"});                    
                    break;
                  case 7:
                    await updateOrderRequest({order_id: order._id, status: "Delivered"});                    
                    break;
                  case 8:
                    await updateOrderRequest({order_id: order._id, status: "Cancelled"});                    
                    break;
                  case 11:
                    await updateOrderRequest({order_id: order._id, status: "Pending"});                    
                    break;
                  case 15:
                    await updateOrderRequest({order_id: order._id, status: "Pickup Rescheduled"});                    
                    break;
                  case 16:
                    await updateOrderRequest({order_id: order._id, status: "Cancellation Requested"});                    
                    break;
                  case 17:
                    await updateOrderRequest({order_id: order._id, status: "Out For Delivery"});                    
                    break;
                  case 22:
                    await updateOrderRequest({order_id: order._id, status: "Delayed"});                    
                    break;
                  case 38:
                    await updateOrderRequest({order_id: order._id, status: "Reached at Destination"});                    
                    break;
                  case 59:
                    await updateOrderRequest({order_id: order._id, status: "Box Packing"});                    
                    break;
                
                  default:
                    break;
                }
              }
            }
          }
          try {
            const res4 = await getCompletedOrdersRequest(limit, page, category);
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

export const getOngoingOrders = async (upDateState, setIsLoading, limit, page, category) => {
  setIsLoading(true);
  try {
    const res = await getOngoingOrdersRequest(limit, page, category);
    upDateState(res.data.data);
    console.log(res);
    if(res.status === 200) {
      res?.data?.data?.data?.forEach(async(order) => {
        try {
          const res2 = await getDetailsOfSpecificShipment(order?.SKUshipmentId);
          console.log(res2);
          if(res.status === 200) {
            for(let key in res2?.data?.data) {
              if(key === 'status') {
                const status = res2?.data?.data[key];
                switch (status) {
                  case 4:
                    await updateOrderRequest({order_id: order._id, status: "Pickup Queued"});                    
                    break;
                  case 6:
                    await updateOrderRequest({order_id: order._id, status: "Shipped"});                    
                    break;
                  case 7:
                    await updateOrderRequest({order_id: order._id, status: "Delivered"});                    
                    break;
                  case 8:
                    await updateOrderRequest({order_id: order._id, status: "Cancelled"});                    
                    break;
                  case 11:
                    await updateOrderRequest({order_id: order._id, status: "Pending"});                    
                    break;
                  case 15:
                    await updateOrderRequest({order_id: order._id, status: "Pickup Rescheduled"});                    
                    break;
                  case 16:
                    await updateOrderRequest({order_id: order._id, status: "Cancellation Requested"});                    
                    break;
                  case 17:
                    await updateOrderRequest({order_id: order._id, status: "Out For Delivery"});                    
                    break;
                  case 22:
                    await updateOrderRequest({order_id: order._id, status: "Delayed"});                    
                    break;
                  case 38:
                    await updateOrderRequest({order_id: order._id, status: "Reached at Destination"});                    
                    break;
                  case 59:
                    await updateOrderRequest({order_id: order._id, status: "Box Packing"});                    
                    break;
                
                  default:
                    break;
                }
              }
            }
          }
          try {
            const res4 = await getOngoingOrdersRequest(limit, page, category);
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



export const getRevenueData = async(typeOfDate, setGraphData, category) => {
  try {
    const res = await getRevenue(typeOfDate, category);
    console.log(res);
    setGraphData(res?.data?.data)
  } catch (error) {
    console.log(error);
  } 
}
