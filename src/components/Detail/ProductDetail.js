import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './ProductDetail.module.css'

const productColors = ['green', 'white', 'red', 'blue'];

const ProductDetail = () => {
  const params = useParams();
  const id = params.productId;

  const products = useSelector(state => state.products);
  const relatedProducts = products.filter(curr => curr._id.$oid !== id);
  const [productById] = products.filter(curr => curr._id.$oid === id);
  const longDesc = productById['long_desc'].split('•');


  const imageList = [];
  for (let i = 1; i <= 4; i++) {
    imageList.push(productById[`img${i}`]);
  }

  return (
    <div className={classes.container}>
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
          <span className={classes.price}>{productById.price}</span>
          <span className={classes.shortDesc}>{productById['short_desc']}</span>
          <span className={classes.category}>{productById.category}</span>
          <div className={classes.quantity}>
            <input type='number'></input>
            <button>Add to cart</button>
          </div>
        </div>
      </div>

      {/* Long Description */}

      <div className={classes.longDesc}>
        <button>DESCRIPTION</button>
        <h3>PRODUCT DESCRIPTION</h3>
        <ul>
          {longDesc.map(spec => <li>
            {spec}
          </li>)}
        </ul>
      </div>

      {/* Related Products */}

      <div className={classes.relatedProducts}>
        <h3>RELATED PRODUCTS</h3>
        <ul>
          {relatedProducts.map((prods, ind) => <li key={prods._id.$oid}>
            <img src={prods.img1} alt={`prod-${ind + 1}`} />
          </li>)}
        </ul>
      </div>

    </div>
  )
}

export default ProductDetail