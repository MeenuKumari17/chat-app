import React, { useState } from 'react'
import "./login.css"
import assets from '../../assets/assets'

const Login = () => {

  const [currentState, setCurrentState] = useState("Sign up");

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo" />
      <form className='login-form'>
        <h2>{currentState}</h2>
        {currentState === "Sign up" ? <input type="text" required placeholder='username' className="form-input" /> : null}
        <input type="email" required placeholder='Email address' className="form-input" />
        <input type="password" required placeholder='Password' className="form-input" />
        <button type='submit'>{currentState === "Sign up" ? "Create account" : "Login now"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currentState === "Sign up" ? 
          <p className="login-toggle">Already have an account <span onClick={() => setCurrentState("Login")}>Login here</span></p> 
          : <p className="login-toggle">Create an account <span onClick={() => setCurrentState("Sign up")}>click here</span></p>}
          
          
        </div>
      </form>
    </div>
  )
}

export default Login