import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
      {user ? (
        <div className="flex items-center">
          <li>
            <NavLink to={"/mybooking"}>MyBooking</NavLink>
          </li>
          <li>
            <a onClick={logOutBtn}>LogOut</a>
          </li>
        </div>
      ) : (
        <li>
          <NavLink to={"/login"}>Login</NavLink>
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold space-x-2">
            {newLink}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-red-600 text-white">Appoinment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
