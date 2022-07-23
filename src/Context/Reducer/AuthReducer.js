import {
  userLoginRequest,
  vendorLoginRequest,
  vendorSignupRequest,
} from "../API";
import { Store } from "react-notifications-component";
import { notification } from "../AuthContext";
import Cookies from "js-cookie";

export const userLogin = async (
  values,
  resetForm,
  setIsLoading,
  navigate,
  setAuth
) => {
  setIsLoading(true);
  try {
    const res = await userLoginRequest(values);
    if (res.data) {
      Cookies.set("auth_token", res.data.token);
      Cookies.set("role", "user");
      setAuth((prev) => true);
      navigate("/", { replace: true });
    }
  } catch (err) {
  } finally {
    setIsLoading(false);
  }
};

export const vendorLogin = async (
  values,
  resetForm,
  setIsLoading,
  navigate,
  setAuth
) => {
  setIsLoading(true);
  try {
    const res = await vendorLoginRequest(values);
    if (res.data.success) {
      Cookies.set("auth_token", res.data.data.token);
      Cookies.set("role", "vendor");
      setAuth((prev) => true);
      navigate("/", { replace: true });
    }
    if (!res.data.success) {
      Store.addNotification({
        ...notification,
        message: res.data.console.error,
      });
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

export const vendorSignup = async (values, resetForm, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await vendorSignupRequest(values);
    if (res.data) {
      Store.addNotification({
        ...notification,
        type: "success",
        message: res.data.message,
      });
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
