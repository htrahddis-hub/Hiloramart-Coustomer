import React, { useContext, useRef, useState } from "react";
import "../Styles/pages/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import eye from "../Assets/Images/eye.svg";
import { ref } from "yup";
import { AuthContext } from "../Context/AuthContext";
import { USER_LOGIN, VENDOR_LOGIN } from "../Context/Types";
const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const passRef = useRef();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (values, resetForm) => {
    dispatch({ type: VENDOR_LOGIN, payload: values, resetForm });
    // dispatch({ type: USER_LOGIN, payload: values, resetForm });
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const validate = Yup.object().shape({
    email: Yup.string()
      .email("This is invalid email")
      .required("This is required"),
    password: Yup.string().required("Please Enter your password"),
  });

  const handleView = () => {
    passRef.current.type =
      passRef.current.type === "text" ? "password" : "text";
  };
  return (
    <>
      <div className="LoginMainContainer">
        <div className="LoginContainer1">
          <div id="loginDiv1">Welcome</div>
          <div id="loginDiv2">Log In to Your Account</div>
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values, resetForm);
              // alert("Form is validated! Submitting the form...");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              setFieldValue,
              handleBlur,
            }) => (
              <Form>
                <div className="form-container">
                  <div>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      className="inputBox"
                      placeholder="Email"
                    />
                    <div className="error-container">
                      <div className="error">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                  </div>
                  <div className="password-input">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      className="inputBox"
                      type="password"
                      placeholder="Password"
                      ref={passRef}
                    />
                    <img src={eye} className="eye-icon" onClick={handleView} />
                    <div className="error-container">
                      <div className="error">
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="/forgotpassword"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <div id="forgotPas">Forgot Password?</div>
                    </Link>
                  </div>
                  <div>
                    <button className="loginButton" type="submit">
                      Log in
                    </button>
                  </div>
                  <div>
                    <Link to="/signup">
                      <button className="SignUpButton">Sign up</button>
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
