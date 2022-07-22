import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Votp = () => {
  const { VEmail } = useContext(AuthContext);
  const [code, setCode] = useState(null);

  const onChangeHandler = (e) => {
    setCode(Number(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({ code });
    //try catch and take input for mail through contextApi
  };
  return (
    <>
      <div className="LoginMainContainer">
        <div className="LoginContainer1">
          <div id="OtpDiv1">Enter the code to Verify your phone</div>
          <div id="loginDiv2">
            Please type the verification code sent to {VEmail}
          </div>
          <div>
            <form onSubmit={(e) => handleSubmit(e)} id="loginDiv3">
              <div id="OtpDiv4">
                <div></div>
                <input
                  style={{ width: "100px" }}
                  name="otp1"
                  type="number"
                  className="OtpinputBox"
                  onChange={(e) => onChangeHandler(e)}
                  placeholder="OTP"
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
};

export default Votp;
