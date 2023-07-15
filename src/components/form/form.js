/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Icon from '../../assets/icon-error.svg'
import './form.css'
import { useState } from 'react'

function form() {
  const [inputs, setInputs] = useState({});

  const handleChange= (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    checkInput()
    alert(JSON.stringify(inputs))
  }
  function checkInput() {
    if (inputs.firstname.length<3) {
      document.getElementById("forFirstname").style.opacity = 1;
    }
    else{
      document.getElementById("forFirstname").style.opacity = 0;  
    }
    if (inputs.lastname.length<3) {
      document.getElementById("forLastname").style.opacity = 1;
    }
    else{
      document.getElementById("forLastname").style.opacity = 0;
    }
    if (inputs.email.length<3) {
      document.getElementById("forEmail").style.opacity = 1;
    }
    else{
      document.getElementById("forEmail").style.opacity = 0;
    }
    if (inputs.password.length<3) {
      document.getElementById("forPassword").style.opacity = 1;
    }
    else{
      document.getElementById("forPassword").style.opacity = 0;
    }
  }
  return (
    <div className="container">
        <div className="form-area">
            <button id='try-btn'> Try it free 7 days  <span>then $20/mo. thereafter</span></button>
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstname">
                <input type="text" name="firstname" id="firstname" placeholder='First Name' value={inputs.firstname || ""} onChange={handleChange} onInput={checkInput} autoFocus required/>
                <div className="input-error" id='forFirstname'><img src={Icon} alt="errorIcon" className='errorIcon'/> First Name cannot be empty</div>
              </label>
              <label htmlFor="lastname">
                <input type="text" name="lastname" id="lastname" placeholder='Last Name' value={inputs.lastname || ""} onChange={handleChange} onInput={checkInput} required/>
                <div className="input-error" id='forLastname'><img src={Icon} alt="errorIcon" className='errorIcon'/>Last Name cannot be empty</div>
              </label>
              <label htmlFor="email">
                <input type="email" name="email" id="email" placeholder='Email Address' value={inputs.email || ""} onChange={handleChange} onInput={checkInput} required/>
                <div className="input-error" id='forEmail'><img src={Icon} alt="errorIcon" className='errorIcon'/>Email cannot be empty</div>
              </label>
              <label htmlFor="password">
                <input type="password" name="password" id="password" placeholder='Password' value={inputs.password || ""} onChange={handleChange} onInput={checkInput} required/>
                <div className="input-error" id='forPassword'><img src={Icon} alt="errorIcon" className='errorIcon'/>Password cannot be empty</div>
              </label>
              <button type="submit" id='submit'>Claim your free trial</button>
              <p className="info">By clicking the button, you are agreeing to our <a href='' className='highlite h-r'>Terms and Services</a></p>
            </form>
        </div>
    </div>
  )
}

export default form