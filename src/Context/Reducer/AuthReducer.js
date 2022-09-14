import {
  userAccActivateRequest,
  userLoginRequest,
  userResendOtpRequest,
  userSignUpRequest,
  userForgotpasswordRequest,
  userVerifyCode,
  resetUserPasswordRequest,
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

export const userForgotPass = async (email, navigate) => {
  try {
    /// api .js function
    const res = await userForgotpasswordRequest(email);
    console.log(res);
    if (res.data.message==="Email Sent") {
      alert("Otp sent Successfully");
      navigate("/verifyotp", { state: { email: email, role: "user" } });
    } else {
      alert("Something Went Wrong");
    }
  } catch (err) {
    console.log(err);
  }
};

export const userVerifyOtp = async (values, navigate) => {
  try {
    const res = await userVerifyCode(values);
    console.log(res);
    if (res.data.message === "Verification Successful") {
      alert("Verified Successfully");
      navigate("/passwordchange", {
        state: { email: values.email, role: "user" },
      });
    } else {
      alert("Verification Failed");
    }
  } catch (err) {
    console.log(err);
  }
};

export const resetUserPassword = async (data, navigate) => {
  try {
    const res = await resetUserPasswordRequest(data);
    console.log(res);
    if (res.data.message === "Password Reset Successful") {
      navigate("/login", { state: { role: "user" } });
    }
  } catch (error) {
    alert("Something went wrong");
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

    // const headers = {
    //   "Access-Control-Allow-Methods": "*",
    //   "Access-Control-Allow-Credentials": 'true',
    //   "Access-Control-Expose-Headers": "*",
    //   "Accept": "*/*",
    //   "Accept-Encoding": "gzip, deflate, br",
    //   "Accept-Language": "en-US,en;q=0.9,no;q=0.8",
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Headers": "*",
    //   "Access-Control-Max-Age": "1728000",
    //   "Content-Length": "0",
    //   "Origin": "https://hiloramart-2.vercel.app",
    //   "Referer": "https://hiloramart-2.vercel.app/"
    // }

    // fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
    //   method: 'POST',
    //   body:  JSON.stringify({
    //     email: "iamaditityagi@gmail.com",
    //     password: "Qwerty@199938"
    //   }),
    //   headers: headers
    // }).then((res) => {
    //   const resp = res.json()
    //   localStorage.setItem("shiprocketToken", resp?.data?.token);
    // });


    // https://cors-fix-kylo.herokuapp.com/
    const res2 = await axios.post(
      "https://cors-fix-kylo.herokuapp.com/https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: "iamaditityagi@gmail.com",
        password: "Qwerty@199938"
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "https://hiloramart-2.vercel.app",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
          // "Origin": "https://hiloramart-2.vercel.app"
        }
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
        message: "Failed to login",
      });
    }
  } catch (err) {
    console.log(err.message);
    Store.addNotification({
      ...notification,
      type: "danger",
      message: "Failed to login",
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
      navigate("/verifyotp", { state: { email: email, role: "vendor" } });
    } else {
      alert("Something Went Wrong");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getVSale = async (
  // startDate, endDate,
   upDateState, category) => {
  try {
    const res = await getVendorSale(
      // startDate, endDate,
       category);
    upDateState(res.data.data);
    console.log("res,", res);
  } catch (err) {}
};

export const getVAllSale = async (
  // startDate,
  // endDate,
  page,
  limit,
  upDateState,
  setIsLoading,
  category
) => {
  try {
    console.log(page, limit, category)
    setIsLoading(true);
    const res = await getVendorAllSale(page, limit, category);
    console.log(res, "all sales");
    upDateState(res.data.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

export const vendorVerifyOtp = async (values, navigate) => {
  try {
    const res = await vendorVerifyCode(values);
    console.log(res);
    if (res.data.message === "Verification Successful") {
      alert("Verified Successfully");
      navigate("/passwordchange", {
        state: { email: values.email, role: "vendor" },
      });
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
