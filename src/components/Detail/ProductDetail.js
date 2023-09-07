import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import BannerNavigation from '../../components/BannerNavigation';

import classes from './ProductDetail.module.css'

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "VND",
});

const ProductDetail = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const localItem = localStorage.getItem('SELECTED_PRODUCTS');
  const SELECTED_PRODUCTS = JSON.parse(localItem);

  const params = useParams();
  const id = params.productId;

  const relatedProducts = SELECTED_PRODUCTS.filter(curr => curr._id.$oid !== id);
  const [productById] = SELECTED_PRODUCTS.filter(curr => curr._id.$oid === id);

  let longDesc;
  if (productById['long_desc'].includes('•')) {
    longDesc = productById['long_desc'].split('•');
  } else {
    longDesc = productById['long_desc'].split('-');
  }

  const imageList = [];
  for (let i = 1; i <= 4; i++) {
    imageList.push(productById[`img${i}`]);
  }

  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch({ type: 'ADD_CART', cartItem: productById, quantity: inputRef.current.value })
  }
  const selectProductHandler = (byProductId) => {
    const productId = byProductId._id.$oid;
    dispatch({ type: 'PRODUCT_SELECT', selectedProds: SELECTED_PRODUCTS });
    inputRef.current.value = 1;
    navigate(`/shop/${productId}`)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    scrollToTop()
  }, [scrollToTop])

  return (
    <>
      <div className={classes.container}>
        <BannerNavigation title='DETAIL' navigation='SHOP / ProductID' />
        <div className={classes.wrapper}>

          {/* Product images */}

          <div className={classes.images}>
            <div className={classes.colors}>
              <ul>
                {imageList.map((curr, ind) => <li key={curr + ind}>
                  <img src={curr} alt={curr + ind} />
                </li>)}
              </ul>
            </div>
            <div className={classes.mainColor}>
              <img src={productById.img1} alt='img1' />
            </div>
          </div>

          {/* Product text */}

          <div className={classes.text}>
            <span className={classes.name}>{productById.name}</span>
            <span className={classes.price}>{formatter.format(productById.price)}</span>
            <span className={classes.shortDesc}>{productById['short_desc']}</span>
            <span className={classes.category}><strong>CATEGORY: </strong>{productById.category}</span>
            <div className={classes.quantity}>
              <input type='number' min='1' defaultValue='1' placeholder='QUANTITY' ref={inputRef}></input>
              <button onClick={addCartHandler}>Add to cart</button>
            </div>
          </div>
        </div>

        {/* Long Description */}

        <div className={classes.longDesc}>
          <span>DESCRIPTION</span>
          <h3>PRODUCT DESCRIPTION</h3>
          <ul>
            {longDesc.map(spec => <li key={spec}>
              {spec}
            </li>)}
          </ul>
        </div>

        {/* Related Products */}

        <div className={classes.relatedProducts}>
          <h3>RELATED PRODUCTS</h3>
          <ul>
            {relatedProducts.map((prods, ind) => <li key={prods._id.$oid} onClick={() => selectProductHandler(prods)}>
              <img src={prods.img1} alt={`prod-${ind + 1}`} />
              <span>{prods.name}</span>
              <span>{formatter.format(prods.price)}</span>
            </li>)}
          </ul>
        </div>

      </div>
    </>
  )
}

export default ProductDetail