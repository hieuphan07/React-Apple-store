import { NavLink } from 'react-router-dom'

import DUMMY_CATEGORIES from '../../dummyData/dummyCategories.json'

import classes from './ProductListNav.module.css'

const ProductListNav = () => {
  return <nav className={classes.navbar}>
    <h4 className={classes.title}>CATEGORIES</h4>
    <ul>
      {DUMMY_CATEGORIES.map(curr => <li key={curr.category}>
        <span className={classes.category}>{curr.category}</span>
        <ul>
          {curr.type.map(type => <li key={type}>
            <NavLink className={({ isActive }) => isActive ? classes.active : undefined}>{type}</NavLink>
          </li>)}
        </ul>
      </li>)}
    </ul>
  </nav>
}

export default ProductListNav;