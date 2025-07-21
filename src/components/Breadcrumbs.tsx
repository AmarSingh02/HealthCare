import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const role = localStorage.getItem('role');

  let homeRoute = '/';
  let homeLabel = 'Home';

  if (role === 'patient') {
    homeRoute = '/patient-dashboard';
    homeLabel = 'Patient Dashboard';
  } else if (role === 'doctor') {
    homeRoute = '/doctor-dashboard';
    homeLabel = 'Doctor Dashboard';
  } else if (role === 'admin') {
    homeRoute = '/admin-dashboard';
    homeLabel = 'Admin Dashboard';
  }

  return (
    <nav className="text-sm breadcrumbs my-4 mt-15">
      <ol className="list-none flex items-center">
        <li className="flex items-center">
          <Link to={homeRoute} className="text-blue-600 hover:underline">
            {homeLabel}
          </Link>
          {pathnames.length > 0 && (
            <span className="mx-2 text-gray-500">
              <FaArrowRight />
            </span>
          )}
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          const formattedName =
            name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');

          return (
            <li key={routeTo} className="flex items-center">
              <Link
                to={routeTo}
                className={
                  isLast
                    ? 'text-gray-500 cursor-default'
                    : 'text-blue-600 hover:underline'
                }
              >
                {formattedName}
              </Link>
              {!isLast && (
                <span className="mx-2 text-gray-500">
                  <FaArrowRight />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
