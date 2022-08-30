import React, { useState } from "react";

import "../../Styles/pages/VLogin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const Forgot = () => {
    navigate("/Vforgot");
  };

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
    const body = { email, password };
    // console.log(body);
    try {
      const res = await axios.post(
        "https://hiloramart0.herokuapp.com/api/vendor/login",
        body,
        config
      );
      const res2 = await axios.post("https://apiv2.shiprocket.in/v1/external/auth/login", 
        {
          email: "amitsharma199938@gmail.com",
          password: "Qwerty@199938"
        },
        config
      )
      console.log(res2, "shiprocket auth")
      console.log(body);
      window.alert("Logged in sucessfully");

      localStorage.setItem("token", res.data.data.token);
      navigate("/VHome");
      // alert.success(res);
    } catch (err) {
      // alert.error('Request Failed');
      window.alert("error");
      console.log(err);
    }
  };
  return (
    <>
      <div className="LoginMainContainer">
        <div className="LoginContainer1">
          <div id="loginDiv1">Welcome</div>
          <div id="loginDiv2">Log In to Your Account</div>
          <div>
            <form id="loginDiv3" onSubmit={(e) => onSubmitHandler(e)}>
              <input
                onChange={(e) => onChangeHandler(e)}
                name="email"
                className="inputBox"
                placeholder="Email"
              />

              <input
                onChange={(e) => onChangeHandler(e)}
                name="password"
                className="inputBox"
                type="password"
                placeholder="Password"
              />
              <Link
                to="/forgotpassword"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div onClick={(e) => Forgot(e)} id="forgotPas">
                  Forgot Password?
                </div>
              </Link>
              <button className="loginButton" type="submit">
                Log in
              </button>
              <Link to="/VSignup">
                <button className="SignUpButton">Sign up</button>
              </Link>
            </form>
          </div>
          <div id="loginDiv4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
