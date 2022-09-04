import React from 'react'
import { useState } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';
import { VENDOR_FORGOTPASSWORD, VENDOR_VERIFYCODE } from '../Context/Types';
const VerifyOtp = () => {   
    const { dispatch } = useContext(AuthContext);

    const { state } = useLocation();

    const navigate = useNavigate();
    const [otpD, setOtpD] = useState();
    const [email, setEmail] = useState(state);

    const onChangeHandler = (e)=>{
        setOtpD(e.target.value);
    }

    const resendOtpHandler = () => {
      dispatch({
        type: VENDOR_FORGOTPASSWORD,
        email,
      })
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault(); 
        dispatch({
            type: VENDOR_VERIFYCODE,/// type.js se function
            values: {
              email: email,
              code: Number(otpD)
            },
            navigate
          })
    }

  return (
    <>
          <div className='LoginMainContainer'>
        <div className='LoginContainer1'>
          <div id='loginDiv1'>Verify Otp</div>
          <div id='loginDiv2'>
            Please Enter the Code for verification.
          </div>
          <div>
            <form id='loginDiv3'  onSubmit={onSubmitHandler}>
            <input
                name='email'
                className='inputBox'
                value={state}
                placeholder='Email or Phone'
                onChange={(e) => setEmail(e.target.value)}
                disabled={state.length === 0 ? false : true}
                
              />{' '}
              <input
                name='code'
                className='inputBox'
                onChange={onChangeHandler}              
                placeholder='OTPs'
              />{' '}
              <span onClick={resendOtpHandler} style={{marginLeft: 'auto', marginTop: '-14px', color: '#fd7e14', cursor: 'pointer'}}>Resend OTP</span>
              {/* <Link
                to='/otp'
                style={{color: 'inherit', textDecoration: 'none'}}
              > */}
              <button className='SignUpButton' type='submit'>
                Verify Code
              </button>
              {/* </Link> */}
            </form>
          </div>
          <div id='loginDiv4'></div>
        </div>
      </div>
      
    </>
  )
}

export default VerifyOtp
