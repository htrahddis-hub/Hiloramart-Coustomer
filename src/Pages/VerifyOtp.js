import React from 'react'
import { useState } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';
import { VENDOR_VERIFYCODE } from '../Context/Types';
const VerifyOtp = () => {



   
    const { dispatch } = useContext(AuthContext);

    const {state} = useLocation();

    console.log(state)
    const email1  = state.email;
    

    const navigate = useNavigate();
    const[email,setEmail] = useState(state.email)
    const [otpD,setOtpD] = useState();

    


    const onChangeHandler = (e)=>{

        setOtpD(e.target.value);
    }

    const body = String(email)

    const onSubmitHandler = async(e)=>{
        e.preventDefault();

  
        console.log(body.email)
        console.log(body.code)
        try {
            const res = await axios.post(
             "https://hiloramart0.herokuapp.com/api/vendor/verify-code",
              body , 
              
            );
            
            window.alert('Otp verify sucessfull');
            navigate('/passwordchange',{state:{email:JSON.parse(email)}});
            // alert.success(res);
          } catch (err) {
            // alert.error('Request Failed');
            console.log("Error hai bhai")
            console.log(err);
          }


        // const body={
        //     email: state.email,
        //     code:otpD,
        // }

        
    // dispatch({
    //     type: VENDOR_VERIFYCODE,/// type.js se function
    //     values:body,
    //     navigate
    //   })


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
            <form id='loginDiv3'  onSubmit={(e) => onSubmitHandler(e)}>
            <input
                name='email'
                className='inputBox'
                value={email}
                placeholder='Email or Phone'
                
              />{' '}
              <input
                name='code'
                className='inputBox'
                onChange={(e) => onChangeHandler(e)}
              
                placeholder='Code'
              />{' '}
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
