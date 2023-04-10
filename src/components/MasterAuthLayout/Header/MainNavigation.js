import { NavLink, useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { useContext } from 'react';
import AuthContext from "../../../store/AuthProvider";

function MainNavigation() {

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
      setAuth({});
      navigate('/login');
  }

  return (
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
              Products
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
        <li>
            <NavLink
              to="orders"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
              Order
            </NavLink>
          </li>
          <div className={classes.logout}>
                <li onClick={logout}>Sign Out</li>
        </div>
          </ul>

      </nav>
  );
}

export default MainNavigation;
