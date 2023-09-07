import React from 'react';

import BannerNavigation from '../../components/BannerNavigation';

import classes from './CheckoutDetail.module.css';

const CheckoutDetail = () => {
  return (
    <div className={classes.checkout}>
      <BannerNavigation title='CHECKOUT' navigation='HOME / CART / CHECKOUT' />
    </div>
  )
}

export default CheckoutDetail