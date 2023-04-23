import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
