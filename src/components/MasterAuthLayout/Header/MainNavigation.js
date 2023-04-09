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
        <div className={classes.logout}>
                <button onClick={logout}>Sign Out</button>
        </div>
      </nav>
  );
}

export default MainNavigation;
