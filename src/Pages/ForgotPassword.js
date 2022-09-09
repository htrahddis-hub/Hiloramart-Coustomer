import React, { useState, useEffect } from "react";
import "../Styles/pages/ForgotPass.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { USER_FORGOTPASSWORD, VENDOR_FORGOTPASSWORD } from "../Context/Types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";

const initialValues = {
  email: "",
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch, AuthRole, setAuthRole } = useContext(AuthContext);

  console.log(location.state?.role);
  useEffect(() => {
    setAuthRole(location.state?.role);
  }, []);

  const validate = Yup.object().shape({
    email: Yup.string()
      .email("This is invalid email")
      .required("This is required"),
  });

  const onSubmitHandler = (email) => {
    if (AuthRole === "user") {
      dispatch({
        type: USER_FORGOTPASSWORD,
        email,
        navigate,
      });
    } else {
      dispatch({
        type: VENDOR_FORGOTPASSWORD,
        email,
        navigate,
      });
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
            <Formik
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={(values) => {
                onSubmitHandler(values.email);
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
                    <div>
                      <button className="loginButton my-3" type="submit">
                        Continue
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div id="loginDiv4"></div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
