import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt='' />
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
