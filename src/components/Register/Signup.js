import React from 'react'
import useInput from '../../hooks/useInput';
import { Link } from 'react-router-dom';

import classes from './Signup.module.css';

const phonePattern = /^\d{2}[-]\d{3}[-]\d{3}[-]\d{3}$/;

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.length >= 8 && /\d/.test(value) && /[a-zA-Z]/.test(value);
const isPhone = (value) => phonePattern.test(value);

const Signup = () => {
  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword
  } = useInput(isPassword);
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone
  } = useInput(isPhone);

  let formIsValid = false;

  if (fullNameIsValid && emailIsValid && passwordIsValid && phoneIsValid) {
    formIsValid = true;
  }

  const submitHanlder = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      console.log('Something went wrong!')
      console.log(fullNameIsValid, emailIsValid, passwordIsValid, phoneIsValid);
      return;
    };

    console.log('Submitted!');
    console.log(fullNameValue, emailValue, passwordValue, phoneValue);

    resetFullName();
    resetEmail();
    resetPassword();
    resetPhone();
  }

  return (
    <div className={classes.signup}>
      <div className={classes.wrapper}>
        <form onSubmit={submitHanlder}>
          <h3>Sign Up</h3>
          <input
            type='text'
            placeholder='Full Name'
            id='full-name'
            value={fullNameValue}
            onChange={fullNameChangeHandler}
            onBlur={fullNameBlurHandler} />
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
          <input
            type='tel'
            placeholder='Phone'
            pattern='[0-9]{2}[-][0-9]{3}[-][0-9]{3}[-][0-9]{3}'
            id='phone'
            value={phoneValue}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler} />
          <button>SIGN UP</button>
        </form>
        <p>Login? <Link to='/login'>Click</Link></p>
      </div>
    </div>
  )
}

export default Signup