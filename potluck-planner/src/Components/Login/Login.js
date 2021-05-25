import React from "react";
import './Login.css';
import {Link} from 'react-router-dom';

export default function Login() {
  return (
    <div className='formContainer'>
      <form className='loginForm'>
        <label className='loginLabel'>
          Username
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className='loginInput'
          ></input>
        </label>
        <label className='loginLabel'>
          Password
          <input
            type="text"
            name="password"
            placeholder="Enter Password"
            className='loginInput'
          ></input>
        </label>
        <button className='loginButton'>Login</button>
        <div className='linkContainerLogin'>
          <Link to='/signup' className='loginLink'>
            Create New Account
          </Link>
        </div>
      </form>
    </div>
  );
}
