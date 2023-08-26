import MainContentBanner from './MainContentBanner';

import classes from './ProductListMain.module.css'

const ProductListMain = () => {
  return (
    <div className={classes['main-content']}>
      <MainContentBanner />
    </div>)

}

export default ProductListMain;