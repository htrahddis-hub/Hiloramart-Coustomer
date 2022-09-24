import React, { useContext, useRef, useState } from "react";
import "../Styles/pages/Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAlert } from "react-alert";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../Context/AuthContext";
import { USER_LOGIN } from "../Context/Types";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { provider, auth } from "../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { Google } from "@mui/icons-material";

const Login = () => {
  const { dispatch, setAuth } = useContext(AuthContext);
  const passRef = useRef();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values, resetForm) => {
    dispatch({
      type: USER_LOGIN,
      payload: values,
      resetForm,
      setIsLoading,
      navigate,
    });
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

  // const handleView = () => {
  //   passRef.current.type =
  //     passRef.current.type === "text" ? "password" : "text";
  // };

  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        axios
          .post("https://hiloramart0.herokuapp.com/auth/socialLogin", {
            firebaseId: user.accessToken,
          })
          .then((res) => {
            Cookies.set("auth_token", res.data.token);
            setAuth((prev) => true);
          })
          .catch((err) => console.log(err));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
                      {isLoading ? (
                        <CircularProgress sx={{ color: "white" }} size={25} />
                      ) : (
                        "Log in"
                      )}
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
          <button
            onClick={handleGoogleAuth}
            className="google align-items-center"
          >
            Login With Google
            <Google />
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
