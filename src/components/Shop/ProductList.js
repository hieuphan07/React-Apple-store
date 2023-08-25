import ProductListBanner from './ProductListBanner';
import ProductListNav from './ProductListNav';
import ProductListMain from './ProductListMain';

import classes from './ProductList.module.css'

const ProductList = () => {
  return <div className={classes.shop}>
    <ProductListBanner />
    <ProductListNav />
    <ProductListMain />
  </div>
}

export default ProductList;