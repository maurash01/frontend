import React from 'react'
import classes from './login.module.css';

const login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <button className='my-btn'>Login Button</button>

      <button className={ classes.btn}>Another button </button>
      
    </div>
  )
}

export default login;