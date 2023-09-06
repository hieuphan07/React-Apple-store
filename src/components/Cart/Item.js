import React from 'react';

import classes from './Item.module.css';

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "VND",
});

const Item = ({ image, name, price, quantity }) => {
  return (
    <tr className={classes.item}>
      <td
        align='center'
        className={classes.image}>
        <img src={image} />
      </td>
      <td
        align='center'
        className={classes.name}>{name}
      </td>
      <td
        align='center'
        className={classes.price}>{formatter.format(price)}
      </td>
      <td
        align='center'
        className={classes.quantity}>
        <i className='fa fa-caret-left' />
        <span>{quantity}</span>
        <i className='fa fa-caret-right' />
      </td>
      <td
        align='center'
        className={classes.amount}>
        {formatter.format(price)}
      </td>
      <td
        align='center'
        className={classes.remove}>
        <i className='fa fa-trash-o' />
      </td>
    </tr>
  )
}

export default Item