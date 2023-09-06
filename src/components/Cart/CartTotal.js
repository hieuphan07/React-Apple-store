import React from 'react'

import classes from './CartTotal.module.css'

const CartTotal = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>CART TOTAL</h3>
        <div className={classes.subTotal}>
          <span>SUBTOTAL</span>
          <span>19779000</span>
        </div>
        <div className={classes.total}>
          <span>TOTAL</span>
          <span>19779000</span>
        </div>
        <input type='text' placeholder='Enter your coupon' />
        <button>
          <i className='fa fa-gift' /> Apply coupon
        </button>
      </div>
    </div>
  )
}

export default CartTotal