import React, { useState, useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { VENDOR_FORGOTPASSWORD } from "../../Context/Types";
const VForgot = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onChangeHandler = (e) => {
    setEmail(e.target.value)
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: VENDOR_FORGOTPASSWORD,
      email,
      navigate
    })
  };
  return (
    <>
      <div className="LoginMainContainer">
        <div className="LoginContainer1">
          <div id="loginDiv1">Forget Password?</div>
          <div id="loginDiv2">
            Please type the your email or Phone number to verification.
          </div>
          <div>
            <form id="loginDiv3" onSubmit={onSubmitHandler}>
              <input
                name="email"
                className="inputBox"
                onChange={onChangeHandler}
                placeholder="Email..."
              />{" "}
              <button className="SignUpButton" type="submit">
                Continue
              </button>
              {/* </Link> */}
            </form>
          </div>
          <div id="loginDiv4"></div>
        </div>
      </div>
    </>
  );
};

export default VForgot;
