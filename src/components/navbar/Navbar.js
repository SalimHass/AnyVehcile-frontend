import React from 'react'
import logo from '../../img/logo.PNG'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='nav-container'>
      <img className='logo-img ' src={logo} alt='logo'/>
      <div className='nav-elements'>
        <div className='nav-elem selected-nav'>Home</div>
        <div className='nav-elem '>About Us</div>
        <div className='nav-elem'>Services</div>
        <div className='nav-elem'>Blog</div>
        <div className='nav-elem'>Shop</div>
        <div className='nav-elem'>Contact us</div>
      </div>
      <button className='nav-btn'>Call us Now</button>
    </div>
  )
}

export default Navbar