import { vendorLoginRequest, vendorSignupRequest } from "../API";
import { Store } from "react-notifications-component";
import { notification } from "../AuthContext";
export const userLogin = (values, resetForm) => {
  try {
  } catch (err) {}
};

export const vendorLogin = async (values, resetForm) => {
  try {
    const res = await vendorLoginRequest(values);
    if (!res.data.success) {
      Store.addNotification({
        ...notification,
        message: res.data.console.error,
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const vendorSignup = async (values, resetForm, setIsLoading) => {
  console.log("called");
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
