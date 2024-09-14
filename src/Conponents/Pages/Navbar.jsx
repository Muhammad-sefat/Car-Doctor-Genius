import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const userEmail = user?.email;
  const loggeduser = { userEmail };
  const navigate = useNavigate();
  const logOutBtn = () => {
    logOut().then(() => {
      toast("Log Out SuccessFull");
      navigate("/login");

      // data call
      axios
        .patch(
          "http://localhost:5000/logout",
          { loggeduser },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
        });
    });
  };

  const newLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/mybooking"}>MyBooking</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200 p-4 rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {newLink}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img className="w-[70%]" src={logo} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1 font-semibold space-x-2">
            {newLink}
          </ul>
        </div>

        <div className="navbar-end space-x-2">
          <div className="flex-none">
            <div className="dropdown dropdown-end mr-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-md indicator-item">00</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              ></div>
            </div>
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-9 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user
                          ? user?.photoURL
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a onClick={logOut}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <button className="btn">
                <Link to={"/login"}>Login</Link>
              </button>
            )}
          </div>
          <a className="btn bg-red-600 text-white">Appoinment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
