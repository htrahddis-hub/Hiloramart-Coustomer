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
    mobile: "",
    email: "",
    password: "",
    confirmPassword: " ",
    name: " ",
  });
  const { mobile, email, password, confirmPassword, name } = formData;
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
    const body = JSON.stringify({ name, email, mobile, password });
    console.log(body);
    try {
      const res = await axios.post(
        "https://hiloramart-user.herokuapp.com/auth/register",
        body,
        config
      );
      // console.log(res);
      window.alert("Mail Sent");
      navigate("/");
      // alert.success(res);
    } catch (err) {
      // alert.error('Request Failed');
      // console.log(err);
    }
  };
  return (
    <>
      <div className="LoginMainContainer">
        <div className="LoginContainer1" style={{ padding: "2% 10%" }}>
          <div id="loginDiv1" style={{ fontSize: "22px" }}>
            Add Your Bank Account
          </div>

          <div>
            <form id="loginDiv3" onSubmit={(e) => onSubmitHandler(e)}>
              <input
                onChange={(e) => onChangeHandler(e)}
                name="name"
                className="inputBox"
                placeholder="Account Number"
                type="number"
                required
              />

              <input
                onChange={(e) => onChangeHandler(e)}
                name="Account Holder Name"
                className="inputBox"
                placeholder="Account Holder Name"
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              />
              <input
                onChange={(e) => onChangeHandler(e)}
                name="IFSC"
                className="inputBox"
                placeholder="IFSC code"
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              />
              <input
                onChange={(e) => onChangeHandler(e)}
                name="Phone"
                className="inputBox"
                placeholder="Phone Number"
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              />

              <button className="SignUpButton" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div id="loginDiv4"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
