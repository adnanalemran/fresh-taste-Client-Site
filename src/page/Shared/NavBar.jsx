import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gray-950">
      <div className="navbar text-white max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all-food">All Food</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case gap-2 text-xl flex items-center justify-center"
          >
            <img
              className="w-16 hidden md:flex"
              src="https://i.ibb.co/sKZFWQJ/logo-back.png"
              alt="FreshTaste"
            />
            <h2 className="text-2xl md:text-3xl font-bold">FreshTaste</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex mx-4">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-food">All Food</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>USER</summary>
                <ul className="p-2 w-48">
                  <li>
                    <Link to="/my-added-product">My Added Product</Link>
                  </li>
                  <li>
                    <Link to="/add-food-item">Add a Food Item</Link>
                  </li>
                  <li>
                    <Link to="/my-order-food-item">My Order Food Item</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
