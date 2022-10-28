import React,{useState} from 'react'
import Nav from './Nav'

function Onboarding() {
//Handle the form submission
function handleSubmit(){
console.log('form handling')
}
//to handle changes in the form
  function handleChange(){
    console.log(handleChange)
  }
  return (
    <>
    <Nav setShowModal={()=>{}}
    showModal={false}  />
    <div className="onboarding">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="first_name">First Name</label>
          <input type="text"
           placeholder='First Name'
          requried={true}
          id="First_name"
          name="First_name"
          onChange={handleChange}
          />
           <div className="multiple-input-container">
             <label>Birthday</label>
          <input type="number"
           placeholder='DD'
          requried={true}
          name="dob_day"
          id="dob_day"
          onChange={handleChange}
          />
          <input type="number"
           placeholder="MM"
          requried={true}
          name="dob_month"
          id="dob_month"
          onChange={handleChange}
          />
          <input type="number"
           placeholder='YYYY'
          requried={true}
          name="dob_year"
          id="dob_year"
          onChange={handleChange}
          />
          </div>
          
            <label> Gender</label>
            <div className="multiple-input-container">
            <input type="radio"
          id="man-gender-identity"
          name="gender-identity"
          value="man"
          onChange={handleChange}
          />
          <label htmlFor="man-gender-identity">Man</label>
            <input type="radio"
          id="woman-gender-identity"
          name="gender-identity"
          value="woman"
          onChange={handleChange}
          />
          <label htmlFor="woman-gender-identity">Woman</label>
            </div>
            <label htmlFor="show-gender">Show Gender om my profile</label>
            <input type="checkbox" 
            id='show-gender'
            name='show-gender'
            checked='false'
            onChange={false}
            />


        <label >Show Me</label>
        <div className="multiple-input-container">
        <input type="radio"
          id="man-gender-interest"
          name="gender-interest"
          value="man"
          onChange={handleChange}
          />
          <label htmlFor="man-gender-interest">Man</label>
            <input type="radio"
          id="woman-gender-interest"
          name="gender-identity"
          value="woman"
          onChange={handleChange}
          />
          <label htmlFor="woman-gender-interest">Woman</label>
        </div>
    <label htmlFor="about">About Me</label>
    <input type="text"
    id='about'
    name='about'
    value={''}
    placeholder="Describe yourself"
    onChange={handleChange}

    />
    <input type="submit" />
        </section>

<section>
  <label htmlFor="url">Profile picture</label>
  <input type="url"
  id='url'
  name='url'
  placeholder='Url'
  onChange={handleChange}
  required={true} />
</section>


      </form>
    </div>
    
    </>
  )
}

export default Onboarding