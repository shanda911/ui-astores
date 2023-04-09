import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

function MainNavigation() {
  return (
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default MainNavigation;
