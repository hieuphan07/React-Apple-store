import React from 'react';
import { useSelector } from 'react-redux';

import BannerNavigation from '../../components/BannerNavigation';
import Thead from './ItemTable/Thead';
import Tfoot from './ItemTable/Tfoot';
import Item from './Item';
import CartTotal from './CartTotal';

import classes from './ShoppingCart.module.css';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cartItems);

  const itemsList = cartItems.map(item =>
    <Item
      key={item._id.$oid}
      image={item.img1}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      amount={item.amount}
    />
  )
  return (
    <div className={classes.cart}>
      <BannerNavigation title='Cart' navigation='Cart' />
      <h3>SHOPPING CART</h3>
      <div className={classes.wrapper}>
        <table>
          <thead>
            <Thead />
          </thead>
          <tbody>
            {itemsList}
          </tbody>
          <tfoot>
            <Tfoot />
          </tfoot>
        </table>
        <CartTotal />
      </div>
    </div>
  )
}

export default ShoppingCart