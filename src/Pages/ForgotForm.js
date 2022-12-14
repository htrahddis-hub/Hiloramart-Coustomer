import React, { useContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { RESET_VENDOR_PASSWORD, RESET_USER_PASSWORD } from "../Context/Types";

const ForgotForm = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [email, setEmail] = useState(state.email);
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirmPass] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (state.role === "user") {
      if (pass === confirmpass) {
        dispatch({
          type: RESET_USER_PASSWORD,
          data: {
            email,
            password: pass,
          },
          navigate,
        });
      } else {
        alert("Password mismatch");
      }
    } else {
      if (pass === confirmpass) {
        dispatch({
          type: RESET_VENDOR_PASSWORD,
          data: {
            email,
            password: pass,
          },
          navigate,
        });
      } else {
        alert("Password mismatch");
      }
    }
  };

  return (
    <>
      <div className="LoginMainContainer">
        <div className="LoginContainer1">
          <div id="loginDiv1">Password Change</div>
          <div id="loginDiv2">Please type the New Password Carefully.</div>
          <div>
            <form id="loginDiv3" onSubmit={onSubmitHandler}>
              <input
                name="email"
                className="inputBox"
                value={state.email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Phone"
                disabled={state.email.length === 0 ? false : true}
              />{" "}
              <input
                type="password"
                name="password"
                className="inputBox"
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
              />{" "}
              <input
                type="password"
                name="confirmpassword"
                className="inputBox"
                onChange={(e) => setConfirmPass(e.target.value)}
                placeholder="Confirm Password"
              />{" "}
              {/* <Link
                to='/otp'
                style={{color: 'inherit', textDecoration: 'none'}}
              > */}
              <button className="SignUpButton" type="submit">
                Submit
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

export default ForgotForm;
