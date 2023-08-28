import { useLoaderData } from 'react-router-dom';
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';

import MainContentBanner from './MainContentBanner';

import classes from './ProductListMain.module.css'

const ProductListMain = () => {
  const data = useLoaderData();
  const selectedType = useSelector(state => state.type)
  let dataFiltered;
  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "VND",
  });

  if (selectedType !== 'All') {
    dataFiltered = data
      .filter(curr => curr.category === selectedType.toLowerCase());
  } else {
    dataFiltered = data;
  }

  return (
    <div className={classes['main-content']}>
      <MainContentBanner />

      {/* Product lists */}
      <ul className={classes.shopListItem}>
        {dataFiltered
          .map((prod, index) => (
            <li key={prod._id.$oid}>
              <img
                src={prod['img1']}
                alt={`products-${index}`}
              />
              <span className={classes.itemName}>{prod['name']}</span>
              <span className={classes.itemPrice}>
                {formatter.format(prod['price'])}
              </span>
            </li>
          ))}
      </ul>
    </div>)

}

export default ProductListMain;