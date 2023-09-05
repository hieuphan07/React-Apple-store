import React from 'react'

import BannerNavigation from '../../components/BannerNavigation';

import classes from './ShoppingCart.module.css';

const ShoppingCart = () => {

  return (
    <div className={classes.cart}>
      <BannerNavigation title='Cart' navigation='Cart' />
    </div>
  )
}

export default ShoppingCart