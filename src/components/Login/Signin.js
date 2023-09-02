import React, { useState } from 'react';
import useInput from '../../hooks/useInput';
import { Link } from 'react-router-dom';

import classes from './Signin.module.css';

const isNotEmpty = (value) => value.trim() !== "";

const Signin = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isNotEmpty);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword
  } = useInput(isNotEmpty);

  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUsername] = useState('');

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const loginHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    const registeredUsers = JSON.parse(localStorage.getItem('USERS'));
    const user = registeredUsers.find(user => user.email === emailValue);

    if (user && user.password === passwordValue) {
      setLoginStatus(true);
      setUsername(user.name)
      const loginedUser = {
        name: user.name,
        email: user.email
      }
      localStorage.setItem('LOGINED_USER', JSON.stringify(loginedUser))
    } else {
      setLoginStatus(false);
    }

    resetEmail();
    resetPassword();
  }

  const logoutHandler = () => {
    localStorage.removeItem('LOGINED_USER');
    setLoginStatus(false);
    setUsername('')
  }
  return (
    <div className={classes.signin}>
      <div className={classes.wrapper}>
        {!loginStatus && <form onSubmit={loginHandler}>
          <h3>Sign In</h3>
          <input
            type='email'
            placeholder='Email'
            id='email'
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler} />
          <input
            type='password'
            placeholder='Password'
            id='password'
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler} />
          {emailHasError && <p className={classes['error-text']}>Please enter a email</p>}
          {passwordHasError && <p className={classes['error-text']}>Please enter a password</p>}
          <button>SIGN IN</button>
        </form>}
        {!loginStatus && <p>Create an account? <Link to='/register'>Sign up</Link></p>}
        {loginStatus && <h1>{`Welcome ${username}!`}</h1>}
        {loginStatus && <button className={classes.logout} onClick={logoutHandler}>Log out</button>}
      </div>
    </div>
  )
}

export default Signin