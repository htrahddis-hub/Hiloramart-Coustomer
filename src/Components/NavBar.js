import React from 'react';
import Bell from '../Assets/Images/Navbar/Bell.png';
import Profile from '../Assets/Images/Navbar/Profile.png';
import Hiloramart from '../Assets/Images/Navbar/Hiloramart.png';
import '../Styles/Components/Navbar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className='NavMain'>
        <div className='Nav1'>
          <Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>
            <div id='logo'>
              <img style={{height: '3rem'}} src={Hiloramart} alt='' />
            </div>
          </Link>
        </div>

        <div className='Nav2'>
          <Link to='/' className='linkT'>
            <div className='NavLink' style={{height: '2rem'}}>
              Home
            </div>
          </Link>
          <Link to='/mywallet' className='linkT'>
            <div className='NavLink' style={{height: '2rem'}}>
              My Wallet
            </div>
          </Link>
          <Link to='/MyWishList' className='linkT'>
            <div className='NavLink' style={{height: '2rem'}}>
              My Wishlist
            </div>
          </Link>
          <Link to='/Cart2' className='linkT'>
            <div className='NavLink' style={{height: '2rem'}}>
              My Cart
            </div>
          </Link>
          {/* <Link to='/Cart2' style={{color: 'inherit', textDecoration: 'none'}}> */}
          <div className='NavICon' style={{height: '1rem'}}>
            <img src={Bell} alt='Bell' />
          </div>
          {/* </Link> */}
          <Link to='/login' style={{color: 'inherit', textDecoration: 'none'}}>
            <div className='NavICon' style={{height: '1rem'}}>
              <img src={Profile} alt='Profile' />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
