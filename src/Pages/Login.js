import React, { useContext, useEffect, useRef, useState } from "react";
import "../Styles/pages/Login.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../Context/AuthContext";
import { USER_LOGIN, VENDOR_LOGIN } from "../Context/Types";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const { dispatch, AuthRole, setAuthRole } = useContext(AuthContext);
  const passRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  console.log(location.state?.role);
  useEffect(() => {
    setAuthRole(location.state?.role);
  }, []);


  const handleSubmit = (values, resetForm) => {
    if (AuthRole === "user") {
      dispatch({
        type: USER_LOGIN,
        payload: values,
        resetForm,
        setIsLoading,
        navigate,
      });
    } else {
      dispatch({
        type: VENDOR_LOGIN,
        payload: values,
        resetForm,
        setIsLoading,
        navigate,
      });
    }
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

  if (location.state == null) return <Navigate to={-1} />; // to have role defined is user or vendor

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
                    <div className="error-container">
                      <div className="error">
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="/forgotpassword"
                      state={{ role: AuthRole }}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <div id="forgotPas">Forgot Password?</div>
                    </Link>
                  </div>
                  <div>
                    <button className="loginButton" type="submit">
                      {isLoading ? (
                        <CircularProgress sx={{ color: "white" }} size={25} />
                      ) : (
                        "Log in"
                      )}
                    </button>
                  </div>
                  <div>
                    <Link to="/signup" state={{ role: AuthRole }}>
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
