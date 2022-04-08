import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <h1>Header</h1>
    <ul>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}
          to="/">
          MAIN
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}
          to="/users">
          USERS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}
          to="/auth">
          AUTH
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}
          to="/reg">
          REG
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
