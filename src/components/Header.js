import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
        <nav>
          <NavLink to='/characters'>Characters</NavLink>
          <NavLink to='/locations'>Locations</NavLink>
          <NavLink to='/episodes'>Episodes</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
