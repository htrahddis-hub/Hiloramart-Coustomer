import React, { memo, useContext, useEffect, useState } from "react";
import "../Styles/pages/SignUp.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../Context/AuthContext";
import { USER_SIGNUP, VENDOR_SIGNUP } from "../Context/Types";
const SignUp = () => {
  const { dispatch, AuthRole, setAuthRole } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setAuthRole(location.state?.role);
  }, []);

  const initialValues = {
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  };
  console.log(initialValues);
  const validate = Yup.object().shape({
    name: Yup.string().required("This Field is required"),
    number: Yup.number()
      .typeError("Please enter valid mobile number")
      .required("This is required")
      .test("len", "Must be 10 digits", (val) => val?.toString().length === 10),

    email: Yup.string()
      .email("This is invalid email")
      .required("This is required"),
    password: Yup.string().required("Please Enter your password"),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  const handleSubmit = (values, resetForm) => {
    if (AuthRole === "user") {
      dispatch({
        type: USER_SIGNUP,
        payload: values,
        resetForm,
        setIsLoading,
        navigate,
      });
    } else {
      dispatch({
        type: VENDOR_SIGNUP,
        payload: values,
        resetForm,
        setIsLoading: setIsLoading,
        navigate,
      });
    }
  };
  if (location.state == null) return <Navigate to={-1} />; // to have role defined is user or vendor
  return (
    <>
      <div style={{height: '100vh'}} className="LoginMainContainer">
        <div className="LoginContainer1" >
          <div id="loginDiv1" style={{ fontSize: "22px", margin: 0 }}>
            Create Account
          </div>
          <div id="loginDiv2">Sign up to Your Account</div>
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
                      name="name"
                      className="inputBox"
                      placeholder="Name"
                    />
                    <div className="error-container">
                      <div className="error">
                        {errors.name && touched.name && errors.name}
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="number"
                      className="inputBox"
                      placeholder="Phone"
                      // type="password"
                      // value={this.state.password}
                      // onChange={this.handleInputChange}
                    />
                    <div className="error-container">
                      <div className="error">
                        {errors.number && touched.number && errors.number}
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      className="inputBox"
                      placeholder="Email"
                      // type="password"
                      // value={this.state.password}
                      // onChange={this.handleInputChange}
                    />
                    <div className="error-container">
                      <div className="error">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      className="inputBox"
                      placeholder="Password"
                      type="password"
                      // value={this.state.password}
                      // onChange={this.handleInputChange}
                    />
                    <div className="error-container">
                      <div className="error">
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="confirmPassword"
                      className="inputBox"
                      placeholder="Confirm Password"
                      // type="password"
                      // value={this.state.password}
                      // onChange={this.handleInputChange}
                    />
                    <div className="error-container">
                      <div className="error">
                        {errors.confirmPassword &&
                          touched.confirmPassword &&
                          errors.confirmPassword}
                      </div>
                    </div>
                  </div>

                  <button
                    className="SignUpButton"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <CircularProgress
                        sx={{ color: "white", fontSize: "1rem" }}
                        size={25}
                      />
                    ) : (
                      "Sign up"
                    )}
                  </button>
                  <div>
                    Already have an account?{" "}
                    <Link to="/login">
                      <button
                        style={{
                          cursor: "pointer",
                          border: "none",
                          backgroundColor: "white",
                          color: "#FF8D22",
                          fontWeight: "bold",
                        }}
                      >
                        Login
                      </button>
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

export default memo(SignUp);
