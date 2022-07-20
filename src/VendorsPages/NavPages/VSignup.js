import React, { useState } from "react";
import "../../Styles/pages/VLogin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  // const alert = useAlert();
  const [formData, setformData] = useState({
    email: "",
    password: "",
    name: "",
    number: "",
    confirmPassword: " ",
  });
  const { email, password, name, number, confirmPassword } = formData;
  const onChangeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      window.alert("Password dosent match");
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password, name, number });
    console.log(body);
    try {
      const res = await axios.post(
        "https://hiloramart0.herokuapp.com/api/vendor/signup",
        body,
        config
      );
      console.log(res.data.user._id);
      window.alert("Mail Sent");
      localStorage.clear();

      localStorage.setItem("id", res.data.user._id);
      var id = localStorage.getItem("token");
      navigate("/Validation");
      // alert.success(res);
    } catch (err) {
      console.log(err);
      window.alert("error");
      // alert.error('Request Failed');
      // console.log(err);
    }
  };
  return (
    <>
      <div style={{ marginTop: "100px" }} className="LoginMainContainer">
        <div className="LoginContainer1" style={{ padding: "2% 10%" }}>
          <div id="loginDiv1" style={{ fontSize: "22px" }}>
            Create Account
          </div>
          <div id="loginDiv2">Sign up to Your Account</div>
          <div>
            <form id="loginDiv3" onSubmit={(e) => onSubmitHandler(e)}>
              <input
                onChange={(e) => onChangeHandler(e)}
                name="name"
                className="inputBox"
                placeholder="Name"
                required
              />

              <input
                onChange={(e) => onChangeHandler(e)}
                name="number"
                className="inputBox"
                placeholder="Number"
                required
              />
              <input
                onChange={(e) => onChangeHandler(e)}
                name="email"
                className="inputBox"
                placeholder="Email"
                required
              />
              <input
                onChange={(e) => onChangeHandler(e)}
                name="password"
                className="inputBox"
                placeholder="Password"
                required
                type="password"
              />
              {/* confirm password */}
              <input
                onChange={(e) => onChangeHandler(e)}
                name="confirmPassword"
                className="inputBox"
                placeholder="Confirm Password"
                required
                type="password"
              />
              {/* <input
                onChange={(e) => onChangeHandler(e)}
                name="confirmPassword"
                type="file"
                className="inputBox"
                placeholder="Upload Document"
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              /> */}

              <button className="SignUpButton" type="submit">
                Sign up
              </button>
              <div>
                Already have an account?{" "}
                <Link to="/VLogin">
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
            </form>
          </div>
          <div id="loginDiv4"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
