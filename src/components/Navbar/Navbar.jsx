


import React, { useState } from 'react';
import Signup from "../../pages/Signup/Signup.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignupToggle = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      <nav className="relative bg-[#256BFE] flex items-center justify-between sm:h-10 md:justify-center py-6 px-4">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/" aria-label="Home">
              <span className="font-medium text-white hover:text-gray-900 transition duration-150 ease-in-out ml-5 text-2xl">Infonexus</span>
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>


        <div className="hidden md:flex md:space-x-10">
          <a href="/" className="font-tight text-white transition duration-150 ease-in-out">Home</a>
          <a href="/" className="font-tight text-white transition duration-150 ease-in-out">Our Providers</a>
          <a href="/blogs" className="font-tight text-white transition duration-150 ease-in-out">Blog</a>
          <a href="/patients" className="font-tight text-white transition duration-150 ease-in-out">Patients Portal</a>
          <a href="/teens" className="font-tight text-white transition duration-150 ease-in-out">Teens</a>
        </div>


        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex rounded-full shadow mr-4">
            <button
              onClick={handleSignupToggle}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
            >
              Login/Signup
            </button>
          </span>
        </div>
      </nav>


      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Home</a>
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Our Providers</a>
          <a href="/blogs" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Blog</a>
          <a href="/patients" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Patients Portal</a>
          <a href="/teens" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Teens</a>
          <button
            onClick={handleSignupToggle}
            className="block px-3 py-2 mt-2 rounded-full text-base font-medium text-black bg-blue-600 hover:bg-blue-500"
          >
            Login/Signup
          </button>
        </div>
      )}


      {showSignup && <Signup onClose={handleSignupToggle} />}
    </div>
  );
};

export default Navbar;
