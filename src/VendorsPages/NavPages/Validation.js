import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import VNavBar from "../../VendorsComponents/VNavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Validation = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(null);

  const id = localStorage.getItem("id");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({ code });

    const sendData = JSON.stringify({ id, code });
    console.log(sendData);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      console.log("in response");
      const res = await axios.post(
        "https://hiloramart0.herokuapp.com/api/vendor/activate",
        sendData,
        config
      );
      console.log(res.data);
      navigate("/Vlogin");
      window.alert("Successfully Activated");
    } catch (err) {
      window.alert("error");
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    var iD = JSON.stringify({ id });
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "https://hiloramart0.herokuapp.com/api/vendor/resendotp",
        iD,
        config
      );
      window.alert("OTP Sent");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <VNavBar />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          onChange={(e) => setCode(Number(e.target.value))}
          required
          placeholder="Enter OTP from mail"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={(e) => handleClick(e)}>Resend OTP</button>
      <Footer />
    </>
  );
};

export default Validation;
