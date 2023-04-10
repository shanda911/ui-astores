import { NavLink, useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { useContext } from 'react';
import AuthContext from "../../../store/AuthProvider";

function MainNavigation() {

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
      setAuth({});
      navigate('/login');
  }

  // const isAdmin = auth?.roles.include('ADMIN');
  const isAdmin = auth?.roles.includes('ADMIN');


  return (
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
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
          {isAdmin &&
          <li>
            <NavLink
              to="admin"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
              Admin
            </NavLink>
          </li>}
          <div className={classes.logout}>
                <li onClick={logout}>Sign Out</li>
        </div>
          </ul>

      </nav>
  );
}

export default MainNavigation;
