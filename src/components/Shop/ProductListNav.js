import { useState } from 'react';

import DUMMY_CATEGORIES from '../../dummyData/dummyCategories.json'

import classes from './ProductListNav.module.css'

const ProductListNav = () => {
  const [activeType, setActiveType] = useState('All');
  const setActiveTypeHandler = (string) => {
    setActiveType(string)
  }
  return (
    <nav className={classes.navbar}>
      <h4 className={classes.title}>CATEGORIES</h4>
      <ul>
        {/* Main type */}
        {DUMMY_CATEGORIES.map(curr => <li key={curr.category}>
          <span className={classes.category}>{curr.category}</span>
          <ul>

            {/* Sub type */}
            {curr.type.map((type) => <li key={type}>
              <p
                className={activeType === type ? classes.active : undefined}
                onClick={() => setActiveTypeHandler(type)}>{type}</p>
            </li>)}

          </ul>
        </li>)}

      </ul>
    </nav>
  )
}

export default ProductListNav;