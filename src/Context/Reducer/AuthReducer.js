import { vendorLoginRequest } from "../API";
import { Store } from "react-notifications-component";
import { notification } from "../AuthContext";
export const userLogin = (values, resetForm) => {
  try {
  } catch (err) {}
};

export const vendorLogin = (values, resetForm) => {
  try {
    const res = vendorLoginRequest(values);
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
