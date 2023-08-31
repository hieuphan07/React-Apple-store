import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';

import classes from './Signup.module.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const submitHanlder = (e) => {
    e.preventDefault();
  }

  return (
    <div className={classes.signup}>
      <div className={classes.wrapper}>
        <form onSubmit={submitHanlder}>
          <h3>Sign Up</h3>
          <input
            type='text'
            placeholder='Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <input
            type='tel'
            placeholder='Phone'
            pattern='[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{3}'
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
          <button>SIGN UP</button>
        </form>
        <p>Login? <Link to='/login'>Click</Link></p>
      </div>
    </div>
  )
}

export default Signup