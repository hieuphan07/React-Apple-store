import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const NavBar = () => {
  return (<header className={classes['main-header']}>
    <nav>
      <ul className={classes.navbar}>
        <li>
          <ul className={classes.navbarLeft}>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? classes.active : undefined}
                end>Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/shop'
                className={({ isActive }) => isActive ? classes.active : undefined}>Shop
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={classes.navbarMid}>
          <h4>BOUTIQUE</h4>
        </li>
        <li>
          <ul className={classes.navbarRight}>
            <li>
              <NavLink
                to='/cart'
                className={({ isActive }) => isActive ? classes.active : undefined}>
                <i className="fa fa-shopping-cart"></i>
                {' '}Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/login'
                className={({ isActive }) => isActive ? classes.active : undefined}>
                <i className="fa fa-user"></i>
                {' '}Login
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav >
  </header >)
}

export default NavBar;
