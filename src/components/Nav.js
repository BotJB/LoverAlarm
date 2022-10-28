import React from 'react'
import logo from '../Images/logo.jpeg'

function Nav({ setShowModal, showModal, setIsSignUp}) {
  const isLoggedIn=false
  const handleClick = () => {
    console.log('click us')
    setShowModal(true)
    setIsSignUp(false)
  }
  return (
    <nav>
       <div className="logo-container">
        <img src={logo} className="logo" alt="Logo of the website" />
       </div>
       {!isLoggedIn && <button className='nav-btn' 
       onClick={handleClick} disabled={showModal}
       >Login</button> }
    </nav>
  )
}

export default Nav