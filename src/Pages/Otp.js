import { CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import {
  USER_ACCOUNT_ACTIVATE,
  USER_RESEND_OTP,
  VENDOR_ACCOUNT_ACTIVATE,
  VENDOR_RESEND_OTP,
} from "../Context/Types";
import "../Styles/pages/Otp.css";

const Otp = () => {
  const { dispatch, AuthRole, setAuthRole } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [otpIsLoading, setOtpIsLoading] = useState(false);
  useEffect(() => {
    setAuthRole(location.state?.role);
  }, []);

  if (location.state?.isSigned !== true)
    return <Navigate to="/choose-role-login" />;

  const handleInputChange = (e) => {
    setOtpValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const optSubmit = (e) => {
    e.preventDefault();
    if (AuthRole === "user") {
      dispatch({
        type: USER_ACCOUNT_ACTIVATE,
        payload: otpValue,
        id: location.state?.id,
        setIsLoading,
        navigate,
      });
    } else {
      dispatch({
        type: VENDOR_ACCOUNT_ACTIVATE,
        payload: otpValue,
        id: location.state?.id,
        setIsLoading,
        navigate,
      });
    }
  };
  const resendOtp = () => {
    if (AuthRole === "user")
      dispatch({
        type: USER_RESEND_OTP,
        payload: location.state?.id,
        setIsLoading: setOtpIsLoading,
      });
    else
      dispatch({
        type: VENDOR_RESEND_OTP,
        payload: location.state?.id,
        setIsLoading: setOtpIsLoading,
      });
  };
  return (
    <>
      <div className="LoginMainContainer">
        <div className="LoginContainer1">
          <div id="OtpDiv1">Enter the code to Verify your phone</div>
          <div id="loginDiv2">
            Please type the verification code sent to {location.state?.email}
          </div>
          <div>
            <form id="loginDiv3" onSubmit={optSubmit}>
              <div id="OtpDiv4">
                <div></div>
                <input
                  name="otp1"
                  type="text"
                  className="OtpinputBox"
                  value={otpValue.otp1}
                  onChange={handleInputChange}
                  placeholder=""
                  maxlength="1"
                />
                <input
                  name="otp2"
                  type="text"
                  className="OtpinputBox"
                  value={otpValue.otp2}
                  onChange={handleInputChange}
                  placeholder=""
                  maxlength="1"
                />
                <input
                  name="otp3"
                  type="text"
                  className="OtpinputBox"
                  value={otpValue.otp3}
                  onChange={handleInputChange}
                  placeholder=""
                  maxlength="1"
                />
                <input
                  name="otp4"
                  type="text"
                  className="OtpinputBox"
                  value={otpValue.otp4}
                  onChange={handleInputChange}
                  placeholder=""
                  maxlength="1"
                />
              </div>

              <div id="Resend" onClick={resendOtp}>
                {otpIsLoading ? (
                  <CircularProgress sx={{ color: "black" }} size={25} />
                ) : (
                  "Resend OTP"
                )}
              </div>
              <button className="SignUpButton" type="submit">
                {isLoading ? (
                  <CircularProgress sx={{ color: "white" }} size={25} />
                ) : (
                  "Verify Now"
                )}
              </button>
            </form>
          </div>
          <div id="loginDiv4"></div>
        </div>
      </div>
    </>
  );
};

export default Otp;
