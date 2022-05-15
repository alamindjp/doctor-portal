import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = (
      <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contact">Contact Us</Link> </li>
        <li><Link to="/login">Login</Link></li>
      </>
    );
    return (
      <div className="fixed top-0 z-50 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to='/' className="text-xl normal-case btn btn-ghost">Doctor Portal</Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="p-0 menu menu-horizontal">{menuItem}</ul>
        </div>
      </div>
    );
};

export default Navbar;