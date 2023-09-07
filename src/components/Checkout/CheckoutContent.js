import React from 'react';
import useInput from '../../hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';

import classes from './CheckoutContent.module.css';

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "VND",
});

const phonePattern = /^\d{2}[-]\d{3}[-]\d{3}[-]\d{3}$/;
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPhone = (value) => phonePattern.test(value);

const CheckoutContent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems);
  const total = useSelector(state => state.total);

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
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone
  } = useInput(isPhone);
  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress
  } = useInput(isNotEmpty);

  let formValid = false;
  if (fullNameIsValid && emailIsValid && phoneIsValid && addressIsValid) {
    formValid = true;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formValid) return;

    console.log('Submitted!');
    console.log(fullNameValue, emailValue, phoneValue, addressValue);
    dispatch({ type: 'ORDER', orders: cartItems })

    resetFullName();
    resetEmail();
    resetPhone();
    resetAddress();
  };

  return (
    <div className={classes.checkoutContent}>
      <h3>BILLING DETAILS</h3>
      <div className={classes.wrapper}>
        <form onSubmit={submitHandler}>

          {/* Full name */}

          <label htmlFor='fullname'>FULLNAME:</label>
          <input
            type='text'
            id='fullname'
            placeholder='Enter Your Ful Name Here!'
            value={fullNameValue}
            onChange={fullNameChangeHandler}
            onBlur={fullNameBlurHandler} />
          {fullNameHasError && <p className={classes.errorText}>Please enter a full name.</p>}

          {/* Email */}

          <label htmlFor='email'>EMAIL:</label>
          <input
            type='email'
            id='email'
            placeholder='Enter Your Email Here!'
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler} />
          {emailHasError && <p className={classes.errorText}>Please enter a valid email.</p>}

          {/* Phone */}

          <label htmlFor='phone'>PHONE NUMBER:</label>
          <input
            type='tel'
            id='phone'
            placeholder='Enter Your Phone Number Here!'
            pattern='[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{3}'
            value={phoneValue}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler} />
          {phoneHasError && <p className={classes.errorText}>Please enter a valid phone. Pattern: "00-111-222-333"</p>}

          {/* Address */}

          <label htmlFor='address'>ADDRESS:</label>
          <input
            type='text'
            id='address'
            placeholder='Enter Your Address Here!'
            value={addressValue}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler} />
          {addressHasError && <p className={classes.errorText}>Please enter an address.</p>}

          <button>Place order</button>
        </form>

        {/* Your order */}

        <div className={classes.yourOrder}>
          <h3>YOUR ORDER</h3>

          {/* Item list */}
          <ul>{
            cartItems.map(curr => <li key={curr._id.$oid}>
              <div>
                <span className={classes.name}>{curr.name}</span>
                <span className={classes.price}>{formatter.format(curr.price)}</span>
                <span className={classes.quantity}>{` x ${curr.quantity}`}</span>
              </div>
            </li>)
          }</ul>

          <div className={classes.total}>
            <span>TOTAL</span>
            <span>{formatter.format(total)}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CheckoutContent