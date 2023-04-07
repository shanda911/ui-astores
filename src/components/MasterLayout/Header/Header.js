import React from 'react';

import MainNavigation from './MainNavigation';
import classes from './Header.module.css';

const Header = () => {

  return(  <header className={classes.header}><MainNavigation/></header>);
};

export default Header;