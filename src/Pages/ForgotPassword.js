import React, { useState } from 'react';
import '../Styles/pages/ForgotPass.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: '',
  });
  const { email } = formData;
  const onChangeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ email });
    console.log(body);
    try {
      const res = await axios.post(
        'https://hiloramart-user.herokuapp.com/auth/forgotPassword',
        body,
        config
      );
      console.log(res);
      window.alert('forgot password api sucessfull');
      navigate('/otp');
      // alert.success(res);
    } catch (err) {
      // alert.error('Request Failed');

      console.log(err);
    }
  };
  return (
    <>
      <div className='LoginMainContainer'>
        <div className='LoginContainer1'>
          <div id='loginDiv1'>Forget Password?</div>
          <div id='loginDiv2'>
            Please type the your email or Phone number to verification.
          </div>
          <div>
            <form id='loginDiv3' onSubmit={(e) => onSubmitHandler(e)}>
              <input
                name='email'
                className='inputBox'
                onChange={(e) => onChangeHandler(e)}
                placeholder='Email or Phone'
              />{' '}
              {/* <Link
                to='/otp'
                style={{color: 'inherit', textDecoration: 'none'}}
              > */}
              <button className='SignUpButton' type='submit'>
                Continue
              </button>
              {/* </Link> */}
            </form>
          </div>
          <div id='loginDiv4'></div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
