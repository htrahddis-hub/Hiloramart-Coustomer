import React, { useState, useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
const VForgot = () => {
  const { vEmail, setVEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
  });
  const { email } = formData;
  const onChangeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email });
    console.log(body);
    try {
      const res = await axios.post(
        "https://hiloramart0.herokuapp.com/api/vendor/forgot-password",
        body,
        config
      );
      console.log(res);
      window.alert("forgot password api sucessfull");
      navigate("/Votp");
      // alert.success(res);
    } catch (err) {
      // alert.error('Request Failed');

      console.log(err);
    }
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
            <form id="loginDiv3" onSubmit={(e) => onSubmitHandler(e)}>
              <input
                name="email"
                className="inputBox"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Email or Phone"
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
