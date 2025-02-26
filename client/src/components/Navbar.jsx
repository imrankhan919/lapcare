import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="py-2 px-8 md:px-16 border border-b-1 border-gray-200 shadow-sm flex items-center justify-between">
      <Link to={"/"} className="text-xl font-bold uppercase">
        Lapcare
      </Link>
      <div>
        {!user ? (
          <>
            <Link
              to={"/login"}
              className="py-1 px-4 bg-sky-500 text-white font-semibold mx-1"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="py-1 px-4 bg-sky-500 text-white font-semibold mx-1"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogOut}
            className="py-1 px-4 bg-red-500 text-white font-semibold mx-1 hover:cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
