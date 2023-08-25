import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = () => {
  return (<header className={classes['main-header']}>
    <nav>
      <ul className={classes.navbar}>
        <li>
          <ul className={classes.navbarLeft}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/shop'>Shop</NavLink>
            </li>
          </ul>
        </li>
        <li className={classes.navbarMid}>
          <h4>BOUTIQUE</h4>
        </li>
        <li>
          <ul className={classes.navbarRight}>
            <li>
              <NavLink to='/cart'>
                <i className="fa fa-shopping-cart"></i>
                {' '}Cart</NavLink>
            </li>
            <li>
              <NavLink to='/login'>
                <i className="fa fa-user"></i>
                {' '}Login</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav >
  </header >)
}

export default NavBar;
