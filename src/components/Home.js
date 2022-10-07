import React from 'react'
import Nav from './Nav'
function Home() {
  //Variable to check if user is logged in
  const isLoggedIn=false
  //function to handle the click 
  function  handleClick(){
    console.log('clicked')
  }
  return (
    //Div to cover all other elements in the page
   <div className="overlay">
   <Nav isLoggedIn={isLoggedIn} />
    <div className="home" onClick={handleClick}>
      <h1>Lover Alarm</h1>
      <button className='primary-btn'>
        {isLoggedIn?'Signout':'Create Account'}
      </button>
    </div>
    </div>
    
  )
}

export default Home