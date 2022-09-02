import React from 'react'
import { useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotForm = () => {

    const navigate = useNavigate()

    const {state}=useLocation();
    console.log(state);

    const[pass, setPass]=useState("")
    const[confirmpass, setConfirmPass]=useState("")

    const onChangeHandler = (e)=>{

        setPass(e.target.value)

    }

    const onChangeHandler1 = (e)=>{

        setConfirmPass(e.target.value)


    }

    const onSubmitHandler = async(e)=>{

        // if(pass===confirmpass)
        // {

        //     e.preventDefault();

        //     const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     };
    
        //     const body={
    
        //         email:String(state.email),
        //         password :String(pass)
    
        //     }
        //     try {
        //         const res = await axios.post(
        //         "https://hiloramart0.herokuapp.com/api/vendor/reset-password",
        //           body , 
        //           config,
        //         );
                
        //         window.alert('🥳 Password Change Successfully');
        //         navigate('/login');
        //         // alert.success(res);
        //       } catch (err) {
        //         // alert.error('Request Failed');
        //         console.log("Error hai bhai")
        //         console.log(err);
        //       }



        // }else{


        //     alert("Password not match")
        // }

        


    }


    return (
        <>
            <div className='LoginMainContainer'>
                <div className='LoginContainer1'>
                    <div id='loginDiv1'>Password Change</div>
                    <div id='loginDiv2'>
                        Please type the New Password Carefully.
                    </div>
                    <div>
                        <form id='loginDiv3'onSubmit={(e) => onSubmitHandler(e)} >
                            <input
                                name='email'
                                className='inputBox'
                                value={state.email}
                                placeholder='Email or Phone'
                            />{' '}
                            <input
                                name='password'
                                className='inputBox'
                                onChange={(e) => onChangeHandler(e)}
                                placeholder='password'
                            />{' '}
                            <input
                                name='confirmpassword'
                                className='inputBox'
                                onChange={(e) => onChangeHandler1(e)}
                                placeholder='   Confirm Password'
                            />{' '}
                            {/* <Link
                to='/otp'
                style={{color: 'inherit', textDecoration: 'none'}}
              > */}
                            <button className='SignUpButton' type='submit'>
                                Submit
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

export default ForgotForm
