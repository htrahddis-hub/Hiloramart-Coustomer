import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import "../Styles/pages/Otp.css";

const Otp = () => {
  const location = useLocation();

  if (location.state?.isSigned === true)
    return (
      <>
        <div className="LoginMainContainer">
          <div className="LoginContainer1">
            <div id="OtpDiv1">Enter the code to Verify your phone</div>
            <div id="loginDiv2">
              Please type the verification code sent to +91 ******8679
            </div>
            <div>
              <form id="loginDiv3">
                <div id="OtpDiv4">
                  <div></div>
                  <input
                    name="otp1"
                    // type="text"
                    className="OtpinputBox"
                    // value={"email"}
                    // onChange={this.handleInputChange}
                    placeholder=""
                  />
                  <input
                    name="otp1"
                    // type="text"
                    className="OtpinputBox"
                    // value={"email"}
                    // onChange={this.handleInputChange}
                    placeholder=""
                  />
                  <input
                    name="otp1"
                    // type="text"
                    className="OtpinputBox"
                    // value={"email"}
                    // onChange={this.handleInputChange}
                    placeholder=""
                  />
                  <input
                    name="otp1"
                    // type="text"
                    className="OtpinputBox"
                    // value={"email"}
                    // onChange={this.handleInputChange}
                    placeholder=""
                  />
                  <input
                    name="otp1"
                    // type="text"
                    className="OtpinputBox"
                    // value={"email"}
                    // onChange={this.handleInputChange}
                    placeholder=""
                  />
                  <input
                    name="otp1"
                    // type="text"
                    className="OtpinputBox"
                    // value={"email"}
                    // onChange={this.handleInputChange}
                    placeholder=""
                  />
                </div>

                <div id="Resend">Resend OTP</div>
                <button className="SignUpButton" type="submit">
                  Verify Now
                </button>
              </form>
            </div>
            <div id="loginDiv4"></div>
          </div>
        </div>
      </>
    );
  else return <Navigate to="/choose-role-login" />;
};

export default Otp;
