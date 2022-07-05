import React, { useState } from 'react';
import '../Styles/pages/SignUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  // const alert = useAlert();
  const [formData, setformData] = useState({
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ' ',
    name: ' ',
  });
  const { mobile, email, password, confirmPassword, name } = formData;
  const onChangeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      window.alert('Password dosent match');
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ name, email, mobile, password });
    console.log(body);
    try {
      const res = await axios.post(
        'https://hiloramart-user.herokuapp.com/auth/register',
        body,
        config
      );
      // console.log(res);
      window.alert('Mail Sent');
      navigate('/');
      // alert.success(res);
    } catch (err) {
      // alert.error('Request Failed');
      // console.log(err);
    }
  };
  return (
    <>
      <div className='LoginMainContainer'>
        <div className='LoginContainer1' style={{ padding: '2% 10%' }}>
          <div id='loginDiv1' style={{ fontSize: '22px' }}>
            Create Account
          </div>
          <div id='loginDiv2'>Sign up to Your Account</div>
          <div>
            <form id='loginDiv3' onSubmit={(e) => onSubmitHandler(e)}>
              <input
                onChange={(e) => onChangeHandler(e)}
                name='name'
                className='inputBox'
                placeholder='Name'
                required
              />

              <input
                onChange={(e) => onChangeHandler(e)}
                name='mobile'
                className='inputBox'
                placeholder='Phone'
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              />
              <input
                onChange={(e) => onChangeHandler(e)}
                name='email'
                className='inputBox'
                placeholder='Email'
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              />
              <input
                onChange={(e) => onChangeHandler(e)}
                name='password'
                className='inputBox'
                placeholder='Password'
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              />
              <input
                onChange={(e) => onChangeHandler(e)}
                name='confirmPassword'
                className='inputBox'
                placeholder='Confirm Password'
                required
                // type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
              />

              <button className='SignUpButton' type='submit'>
                Sign up
              </button>
              <div>
                Already have an account?{' '}
                <Link to='/login'>
                  <button
                    style={{
                      cursor: 'pointer',
                      border: 'none',
                      backgroundColor: 'white',
                      color: '#FF8D22',
                      fontWeight: 'bold',
                    }}
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div id='loginDiv4'></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
