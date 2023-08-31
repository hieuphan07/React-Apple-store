import BannerNavigation from '../../components/BannerNavigation';
import ProductListNav from './ProductListNav';
import ProductListMain from './ProductListMain';

import classes from './ProductList.module.css'

const ProductList = () => {

  return <div className={classes.shop}>
    <BannerNavigation title='Shop' navigation='Shop' />
    <ProductListNav />
    <ProductListMain />
  </div>
}

export default ProductList;