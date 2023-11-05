import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const showSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Log out",
    text: "Successfully logged out",
  });
};

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const displayName = user?.displayName || "Person";
  const displayPhotoURL =
    user?.photoURL ||
    "https://i.ibb.co/cbLWFkM/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png";

  const handleSignOut = async () => {
    try {
      await logOut();
      showSuccessAlert();
    } catch (error) {
     
      console.error(error);
    }
  };

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
          {user ? (
            <>
              <ul className="menu menu-horizontal px-1   items-center justify-center">
                <li tabIndex={0}>
                  <details>
                    <summary>
                      <label
                        tabIndex={0}
                        className="btn btn-ghost  btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img src={displayPhotoURL} alt={displayName} />
                        </div>
                      </label>
                      <p className="hidden md:grid">{displayName}</p>
                    </summary>
                    <ul className="p-2 w-48 bg-gray-950">
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
                  <button onClick={handleSignOut}>Log Out</button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to="/login">Login</Link>
                </li>{" "}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
