import { Link } from "react-router-dom";
import Axios from "axios";
import React, { useEffect, useCallback, useState } from "react";
import { useStatesHeader } from "../hooks/Hooks";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // Hamburger & Close Icon
import { useToast } from "@chakra-ui/react";
import { toast_info_logout } from "../toast/Toast";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useStatesHeader();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const response = await Axios.post(
          "http://localhost:7000/check",
          {},
          { withCredentials: true }
        );
        if (response.data.valid) setIsLoggedIn(true);
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error("Token validity check failed:", error);
        }
      }
    };

    checkTokenValidity();
  }, [setIsLoggedIn]);

  const handleLogout = useCallback(async () => {
    try {
      const response = await Axios.post(
        "http://localhost:7000/logout",
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
      setIsMenuOpen(false);
      toast_info_logout(toast);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Logout failed:", error);
      }
    }
  }, [setIsLoggedIn]);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          <Link to="/">Hotel Book</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/info"
                className="text-white hover:bg-blue-700 px-4 py-2 rounded-md transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/my-hotels"
                className="text-white hover:bg-blue-700 px-4 py-2 rounded-md transition duration-300"
              >
                My Hotels
              </Link>
              <Link
                to="/"
                onClick={handleLogout}
                className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md transition duration-300"
              >
                Log Out
              </Link>
            </>
          ) : (
            <Link
              to="/users/register"
              className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md transition duration-300"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white flex flex-col space-y-2 py-4 px-6">
          {isLoggedIn ? (
            <>
              <Link
                to="/info"
                className="hover:bg-blue-700 py-2 px-4 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/my-hotels"
                className="hover:bg-blue-700 py-2 px-4 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                My Hotels
              </Link>
              <Link
                to="/"
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md text-center"
              >
                Log Out
              </Link>
            </>
          ) : (
            <Link
              to="/users/register"
              className="bg-white text-blue-700 hover:bg-blue-50 py-2 px-4 rounded-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
