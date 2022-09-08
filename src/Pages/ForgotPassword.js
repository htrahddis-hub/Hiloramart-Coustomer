import React, { useState } from 'react';
import '../Styles/pages/ForgotPass.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { VENDOR_FORGOTPASSWORD } from '../Context/Types';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");




  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };



  const onSubmitHandler =  (e) => {
    e.preventDefault();

    
    const body={

      email
    }
    console.log(body)

    dispatch({
      type: VENDOR_FORGOTPASSWORD,/// type.js se function
      values:body.email,
      navigate
    })

    
   

     /////  Ayush 
    // try {
    //   const res = await axios.post(
    //     'https://hiloramart0.herokuapp.com/api/vendor/forgot-password',
    //     body , 
    //     config,
    //   );
    //   console.log(res);
    //   window.alert('Otp Sent sucessfull');
    //   navigate('/verifyotp',{ state: { email: JSON.parse(body)} });
    //   // alert.success(res);
    // } catch (err) {
    //   // alert.error('Request Failed');
    //   console.log("Error hai bhai")
    //   console.log(err);
    // }

    


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
