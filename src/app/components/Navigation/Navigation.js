import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.activeLink}
            to="/"
            exact
          >
            Enigma
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.activeLink}
            to="/about"
            exact
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
