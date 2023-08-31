import React from 'react'
import { Link } from 'react-router-dom';

import classes from './Signup.module.css';

const Signup = () => {
  return (
    <div className={classes.signup}>
      <div className={classes.wrapper}>
        <form>
          <h3>Sign Up</h3>
          <input type='text' placeholder='Full Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='tel' pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder='Phone' />
          <button>SIGN UP</button>
        </form>
        <p>Login? <Link to='/login'>Click</Link></p>
      </div>
    </div>
  )
}

export default Signup