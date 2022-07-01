import React from 'react';
import Logo from '../Assets/Images/Logo.png';
import '../Styles/pages/Welcome.css';
import {Link} from 'react-router-dom';
const Welcome = () => {
  return (
    <>
      <div className='WelMainContainer'>
        <div className='welContainer1'>
          <div id='welcomeDiv'>Welcome</div>
          <div id='LogoImageContainer'>
            <img src={Logo} alt='Logo' />
          </div>
          <div id='WelContainer2'>Are You</div>
          <div id='WelContainer3'>
            <Link to='/'>
              <button type='button' className='button1'>
                User
              </button>
            </Link>
            <div style={{fontSize: '14px', opacity: '50%', padding: '5%'}}>
              -----OR-----
            </div>

            <Link to='/VHome'>
              <button type='button' className='button2'>
                Vendor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
