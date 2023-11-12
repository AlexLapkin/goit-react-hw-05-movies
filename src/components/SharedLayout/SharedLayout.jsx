import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';
import Loader from 'components/Loader/Loader';

let activeClassName = {
  color: 'red',
};

const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink
            className={css.header_link}
            to="/"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            className={css.header_link}
            to="/movies"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
