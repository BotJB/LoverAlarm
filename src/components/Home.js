import React from 'react'
import Nav from './Nav'
import {useState} from 'react'
import AuthModal from '../components/AuthModal'

function Home() {
  //Variable to check if user is logged in
  const isLoggedIn=false

//curently showmodal value is false and if we want to change the value we need to set it through setShowmodal
  const [showModal, setShowModal] = useState(false)
  const [isSignUp, setIsSignUp] = useState(true)

  //function to handle the click 
  function  handleClick(){
    console.log('clicked')

    //if we click, the showModal value is set to true
    setShowModal(true)
    setIsSignUp(true)
  }
  return (
    //Div to cover all other elements in the page
   <div className="overlay">
   <Nav isLoggedIn={isLoggedIn}  setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp}/>
    <div className="home">
      <h1>Lover Alarm</h1>
      <button onClick={handleClick} className='primary-btn'>
        {isLoggedIn?'Signout':'Create Account'}
      </button>
      {
        showModal &&
          (<AuthModal setShowModal={setShowModal} setIsSignup={setIsSignUp} isSignUp={isSignUp}/>
        
      )}
    </div>
    </div>
    
  )
}

export default Home