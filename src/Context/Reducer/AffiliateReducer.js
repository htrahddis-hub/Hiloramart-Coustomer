import { Store } from "react-notifications-component";
import {
  acceptAffiliateRequest,
  denyAffiliateRequest,
  getAffiliateRequest,
  getAffiliateReuest,
  getAmountToAffiliate,
  getPaidToAffiliate,
  joinAffliateRequest,
} from "../API";
import { notification } from "../AuthContext";

export const joinAffliate = async (id, upDateState, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await joinAffliateRequest(id);
    if (res.data.message === "Send Successfully") {
      upDateState(true);
    }
  } catch (err) {
    Store.addNotification({
      ...notification,
      type: "danger",
      message: err.response.data.message,
    });
  } finally {
    setIsLoading(false);
  }
};

export const getAffiliate = async (upDateState, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await getAffiliateRequest();
    upDateState(res.data);
  } catch (err) {
    Store.addNotification({
      ...notification,
      type: "danger",
      message: "some error occured",
    });
  } finally {
    setIsLoading(false);
  }
};

export const acceptAffiliate = async (id, setIsLoading, cb) => {
  setIsLoading(true);
  try {
    const res = await acceptAffiliateRequest(id);
    Store.addNotification({
      ...notification,
      type: "success",
      message: "Request Accepted",
    });
    cb();
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
export const denytAffiliate = async (id, setIsLoading, cb) => {
  setIsLoading(true);
  try {
    const res = await denyAffiliateRequest(id);
    Store.addNotification({
      ...notification,
      type: "success",
      message: "Request Rejected",
    });
    cb();
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


export const getPaidTOAffiliates = async(setPaidToAffiliates, setIsLoading) => {
  
  try {
    setIsLoading(true);
    const res = await getPaidToAffiliate();
    setPaidToAffiliates(res.data.data);
    // console.log(res, "paid to affiliates");
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false)
  }
}
export const getAmountToAffiliates = async(setAmountToAffiliates, setIsLoading) => {
  try {
    setIsLoading(true);
    const res = await getAmountToAffiliate();
    setAmountToAffiliates(res.data.data);
    // debugger
    // console.log(res, "amount to affiliates");
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false)
  }
}