import React, { useContext } from 'react'
import { useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { RESET_VENDOR_PASSWORD } from '../Context/Types';

const ForgotForm = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate()

    const { state } = useLocation();

    const [email, setEmail] = useState(state);
    const[pass, setPass]=useState("")
    const[confirmpass, setConfirmPass]=useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(pass === confirmpass) {
            dispatch({
                type: RESET_VENDOR_PASSWORD,
                data: {
                    email,
                    password: pass,
                },
                navigate
            })
        }else {
            alert("Password mismatch");
        }
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
                        <form id='loginDiv3'onSubmit={onSubmitHandler} >
                            <input
                                name='email'
                                className='inputBox'
                                value={state}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder='Email or Phone'
                                disabled={state.length === 0 ? false : true}
                            />{' '}
                            <input
                                name='password'
                                className='inputBox'
                                onChange={(e) => setPass(e.target.value)}
                                placeholder='Password'
                            />{' '}
                            <input
                                name='confirmpassword'
                                className='inputBox'
                                onChange={(e) => setConfirmPass(e.target.value)}
                                placeholder='Confirm Password'

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
