import React, { useState } from "react";
import "../../Styles/pages/VLogin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
const VBank = () => {
  const navigate = useNavigate();

  const [bankDetails, setBankDetails] = useState({
    account_no: "",
    ifsc_code: "", 
    bank_name: "",
    branch_name: "",
    account_holder_name: ""
  })

  const onChangeHandler = (e) => {
    setBankDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const onSubmitHandler = () => {
    
  }

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
                name="account_no"
                className="inputBox"
                placeholder="Account Number"
                type="number"
                required
              />

              <input
                onChange={(e) => onChangeHandler(e)}
                name="account_holder_name"
                className="inputBox"
                placeholder="Account Holder Name"
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              />
              <input
                onChange={(e) => onChangeHandler(e)}
                name="ifsc_code"
                className="inputBox"
                placeholder="IFSC code"
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              />
              <input
                onChange={(e) => onChangeHandler(e)}
                name="bank_name"
                className="inputBox"
                placeholder="Bank Name"
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              />
              <input
                onChange={(e) => onChangeHandler(e)}
                name="branch_name"
                className="inputBox"
                placeholder="Branch Name"
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

export default VBank;
