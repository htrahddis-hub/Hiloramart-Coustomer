import { Store } from "react-notifications-component";
import {
  acceptAffiliateRequest,
  denyAffiliateRequest,
  getAffiliateRequest,
  getAffiliateReuest,
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
