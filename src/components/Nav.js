import React from 'react'
import logo from '../Images/logo.jpeg'

function Nav({isLoggedIn}) {
  return (
    <nav>
       <div className="logo-container">
        <img src={logo} className="logo" alt="Logo of the website" />
       </div>
       {!isLoggedIn && <button className='nav-btn'>Login</button> }
    </nav>
  )
}

export default Nav