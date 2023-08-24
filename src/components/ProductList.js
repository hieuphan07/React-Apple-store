import ProductListBanner from './ProductListBanner';
import ProductListNav from './ProductListNav';
import ProductListMain from './ProductListMain';


import classes from './ProductList.module.css'

const ProductList = () => {
  return <>
    <ProductListBanner />
    <ProductListNav />
    <ProductListMain />
  </>
}

export default ProductList;