import {
  userAccActivateRequest,
  userLoginRequest,
  userResendOtpRequest,
  userSignUpRequest,
  vendorAccActivateRequest,
  vendorLoginRequest,
  vendorResendOtpRequest,
  vendorSignupRequest,
  vendorForgotpasswordRequest,
  vendorVerifyCode,
  resetVendorPassword,
  getVendorSale,
  getVendorAllSale,
} from "../API";
import { Store } from "react-notifications-component";
import { notification } from "../AuthContext";
import Cookies from "js-cookie";
import axios from "axios";

export const userSignup = async (values, resetForm, setIsLoading, navigate) => {
  setIsLoading(true);
  let formValues = new Object({
    name: values.name,
    email: values.email,
    mobile: values.number,
    password: values.password,
  });
  try {
    const res = await userSignUpRequest(formValues);
    if (res.data.message === "Account Activation Mail Sent!") {
      resetForm({ values: "" });
      navigate("/otp", {
        state: {
          isSigned: true,
          id: res.data.user._id,
          email: res.data.user.email,
          role: "user",
        },
      });
    }
  } catch (err) {
    console.log(err);
    console.log(formValues, values);
    Store.addNotification({
      ...notification,
      type: "danger",
      message: err.response.data,
    });
  } finally {
    setIsLoading(false);
  }
};

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
    Store.addNotification({
      ...notification,
      type: "danger",
      message: err.response.data,
    });
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
    const res2 = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: "amitsharma199938@gmail.com",
        password: "Qwerty@199938",
      }
    );
    localStorage.setItem("shiprocketToken", res2?.data?.token);
    if (res.data.success) {
      localStorage.setItem("vendorUserId", res?.data?.data?.user_id);
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
    Store.addNotification({
      ...notification,
      type: "danger",
      message: err.response.data.error,
    });
  } finally {
    setIsLoading(false);
  }
};

export const vendorForgotPass = async (email, navigate) => {
  try {
    /// api .js function
    const res = await vendorForgotpasswordRequest(email);
    console.log(res);
    if (res.data.success) {
      alert("Otp sent Successfully");
      navigate("/verifyotp", { state: email });
    } else {
      alert("Something Went Wrong");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getVSale = async (startDate, endDate, upDateState) => {
  try {
    const res = await getVendorSale(startDate, endDate);
    upDateState(res.data.data);
    console.log("res,", res);
  } catch (err) {}
};

export const getVAllSale = async (
  startDate,
  endDate,
  page,
  limit,
  upDateState
) => {
  try {
    const res = await getVendorAllSale(startDate, endDate, page, limit);
    upDateState(res.data.data);
  } catch (err) {}
};

export const vendorVerifyOtp = async (values, navigate) => {
  try {
    const res = await vendorVerifyCode(values);
    console.log(res);
    if (res.data.message === "Verification Successful") {
      alert("Verified Successfully");
      navigate("/passwordchange", { state: values.email });
    } else {
      alert("Verification Failed");
    }
  } catch (err) {
    console.log(err);
  }
};

export const resetPassword = async (data, navigate) => {
  try {
    const res = await resetVendorPassword(data);
    console.log(res);
    if (res.data.message === "Password Reset Successful") {
      navigate("/login", { state: { role: "vendor" } });
    }
  } catch (error) {
    alert("Something went wrong");
  }
};
export const vendorSignup = async (
  values,
  resetForm,
  setIsLoading,
  navigate
) => {
  setIsLoading(true);
  try {
    const res = await vendorSignupRequest(values);
    if (res.data) {
      Store.addNotification({
        ...notification,
        type: "success",
        message: res.data.message,
      });
      resetForm({ values: "" });
      navigate("/otp", {
        state: {
          isSigned: true,
          id: res.data.user._id,
          email: res.data.user.email,
          role: "vendor",
        },
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

export const userAccActivate = async (values, id, setIsLoading, navigate) => {
  setIsLoading(true);
  const otp = Number(values.otp1 + values.otp2 + values.otp3 + values.otp4);
  const formvalues = {
    id: id,
    code: otp,
  };
  console.log(values, otp);
  try {
    const res = await userAccActivateRequest(formvalues);
    if (res.data) {
      navigate("/login", {
        state: {
          role: "user",
        },
        replace: true,
      });
    }
  } catch (err) {
    Store.addNotification({
      ...notification,
      type: "danger",
      message: err.response.data,
    });
  } finally {
    setIsLoading(false);
  }
};
export const vendorAccActivate = async (values, id, setIsLoading, navigate) => {
  setIsLoading(true);
  const otp = Number(values.otp1 + values.otp2 + values.otp3 + values.otp4);
  const formvalues = {
    id: id,
    code: otp,
  };
  try {
    const res = await vendorAccActivateRequest(formvalues);
    if (res.data) {
      navigate("/login", {
        state: {
          role: "vendor",
        },
        replace: true,
      });
    }
  } catch (err) {
    Store.addNotification({
      ...notification,
      type: "danger",
      message: err.response.data,
    });
  } finally {
    setIsLoading(false);
  }
};

export const userResendOtp = async (id, setIsLoading) => {
  setIsLoading(true);
  const values = {
    id: id,
  };
  try {
    const res = await userResendOtpRequest(values);
    if (res.data) {
      Store.addNotification({
        ...notification,
        type: "success",
        message: "OTP sent to you registered email",
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
export const vendorResendOtp = async (id, setIsLoading) => {
  setIsLoading(true);
  const values = {
    id: id,
  };
  try {
    const res = await vendorResendOtpRequest(values);
    if (res.data) {
      Store.addNotification({
        ...notification,
        type: "success",
        message: "OTP sent to you registered email",
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
