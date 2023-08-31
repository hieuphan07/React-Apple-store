import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Signin.module.css'

const Signin = () => {
  return (
    <div className={classes.signin}>
      <div className={classes.wrapper}>
        <form>
          <h3>Sign In</h3>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>SIGN IN</button>
        </form>
        <p>Create an account? <Link to='/register'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default Signin