import React from 'react';

import prod1 from '../../images/product_1.png';
import prod5 from '../../images/product_5.png';
import BannerNavigation from '../../components/BannerNavigation';
import Thead from './ItemTable/Thead';
import Tfoot from './ItemTable/Tfoot';
import Item from './Item';

import classes from './ShoppingCart.module.css';

const DUMMY_ITEMS = [
  {
    id: "p1",
    image: prod1,
    name: "Apple iPhone 11 64 GB",
    price: "10999000",
    quantity: 1
  },
  {
    id: 'p2',
    image: prod5,
    name: "Apple AirPods 3rd gen",
    price: "4390000",
    quantity: 2
  }
]

const items = DUMMY_ITEMS.map(item =>
  <Item
    key={item.id}
    image={item.image}
    name={item.name}
    price={item.price}
    quantity={item.quantity} />
)

const ShoppingCart = () => {

  return (
    <div className={classes.cart}>
      <BannerNavigation title='Cart' navigation='Cart' />
      <h3>SHOPPING CART</h3>
      <table>
        <thead>
          <Thead />
        </thead>
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <Tfoot />
        </tfoot>
      </table>
    </div>
  )
}

export default ShoppingCart