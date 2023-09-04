import React, { useState } from 'react';
import useInput from '../../hooks/useInput';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Signin.module.css';

const isNotEmpty = (value) => value.trim() !== "";

const Signin = () => {
  const dispatch = useDispatch();
  const loginedUser = useSelector(state => state.user);

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

  const [isCorrect, setIsCorrect] = useState(true);
  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  // LOGIN

  const loginHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    const registeredUsers = JSON.parse(localStorage.getItem('USERS'));
    const user = registeredUsers.find(user => user.email === emailValue);

    if (user && user.password === passwordValue) {
      const loginedUser = {
        name: user.name,
        email: user.email
      }
      dispatch({ type: 'LOGIN', user: loginedUser })
    } else {
      setIsCorrect(false)
    }

    resetEmail();
    resetPassword();
  }

  // LOGOUT

  const logoutHandler = () => {
    dispatch({ type: 'LOGOUT' });
  }

  const focusHandler = () => {
    setIsCorrect(true);
  }

  return (
    <div className={classes.signin}>
      <div className={classes.wrapper}>
        {!loginedUser && <form onSubmit={loginHandler}>
          <h3>Sign In</h3>
          <input
            type='email'
            placeholder='Email'
            id='email'
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            onFocus={focusHandler} />
          <input
            type='password'
            placeholder='Password'
            id='password'
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            onFocus={focusHandler} />
          {emailHasError && <p className={classes['error-text']}>Please enter a email</p>}
          {passwordHasError && <p className={classes['error-text']}>Please enter a password</p>}
          {!isCorrect && <p className={classes['error-text']}>Your email or password was incorrect</p>}
          <button>SIGN IN</button>
        </form>}
        {!loginedUser && <p>Create an account? <Link to='/register'>Sign up</Link></p>}
        {loginedUser && <h1>{`Welcome ${loginedUser.name}!`}</h1>}
        {loginedUser && <button className={classes.logout} onClick={logoutHandler}>Log out</button>}
      </div>
    </div>
  )
}

export default Signin