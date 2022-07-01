import React, {useState} from 'react';
import '../Styles/pages/Login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useAlert} from 'react-alert';
import {useNavigate} from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });
  const {email, password} = formData;
  const onChangeHandler = (e) => {
    setformData({...formData, [e.target.name]: e.target.value});
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({email, password});
    console.log(body);
    try {
      const res = await axios.post(
        'https://hiloramart-user.herokuapp.com/auth/login',
        body,
        config
      );
      console.log(res);
      window.alert('Logged in sucessfuky');
      localStorage.setItem('token', res.token);
      navigate('/');
      // alert.success(res);
    } catch (err) {
      // alert.error('Request Failed');
      window.alert('error');
      console.log(err);
    }
  };
  return (
    <>
      <div className='LoginMainContainer'>
        <div className='LoginContainer1'>
          <div id='loginDiv1'>Welcome</div>
          <div id='loginDiv2'>Log In to Your Account</div>
          <div>
            <form id='loginDiv3' onSubmit={(e) => onSubmitHandler(e)}>
              <input
                onChange={(e) => onChangeHandler(e)}
                name='email'
                className='inputBox'
                placeholder='email'
              />

              <input
                onChange={(e) => onChangeHandler(e)}
                name='password'
                className='inputBox'
                type='password'
                placeholder='password'
              />
              <Link
                to='/forgotpassword'
                style={{color: 'inherit', textDecoration: 'none'}}
              >
                <div id='forgotPas'>Forgot Password?</div>
              </Link>
              <button className='loginButton' type='submit'>
                Log in
              </button>
            </form>
            <Link to='/signup'>
              <button style={{marginLeft: '8rem'}} className='SignUpButton'>
                Sign up
              </button>
            </Link>
          </div>
          <div id='loginDiv4'></div>
        </div>
      </div>
    </>
  );
};

export default Login;
