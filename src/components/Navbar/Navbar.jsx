


// import React, { useState } from 'react';
// import Signup from "../../pages/Signup/Signup.jsx";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSignupToggle = () => {
//     setShowSignup(!showSignup);
//   };

//   return (
//     <div>
//       <nav className="relative bg-[#256BFE] flex items-center justify-between sm:h-10 md:justify-center py-6 px-4">
//         <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
//           <div className="flex items-center justify-between w-full md:w-auto">
//             <a href="/" aria-label="Home">
//               <span className="font-medium text-white hover:text-gray-900 transition duration-150 ease-in-out ml-5 text-2xl">Infonexus</span>
//             </a>
//             <div className="-mr-2 flex items-center md:hidden">
//               <button
//                 type="button"
//                 id="main-menu"
//                 aria-label="Main menu"
//                 aria-haspopup="true"
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
//               >
//                 <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>


//         <div className="hidden md:flex md:space-x-10">
//           <a href="/" className="font-tight text-white transition duration-150 ease-in-out">Home</a>
//           <a href="/" className="font-tight text-white transition duration-150 ease-in-out">Our Providers</a>
//           <a href="/blogs" className="font-tight text-white transition duration-150 ease-in-out">Blog</a>
//           <a href="/patients" className="font-tight text-white transition duration-150 ease-in-out">Patients Portal</a>
//           <a href="/teens" className="font-tight text-white transition duration-150 ease-in-out">Teens</a>
//         </div>


//         <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
//           <span className="inline-flex rounded-full shadow mr-4">
//             <button
//               onClick={handleSignupToggle}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
//             >
//               Login/Signup
//             </button>
//           </span>
//         </div>
//       </nav>


//       {isOpen && (
//         <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Home</a>
//           <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Our Providers</a>
//           <a href="/blogs" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Blog</a>
//           <a href="/patients" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Patients Portal</a>
//           <a href="/teens" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Teens</a>
//           <button
//             onClick={handleSignupToggle}
//             className="block px-3 py-2 mt-2 rounded-full text-base font-medium text-black bg-blue-600 hover:bg-blue-500"
//           >
//             Login/Signup
//           </button>
//         </div>
//       )}


//       {showSignup && <Signup onClose={handleSignupToggle} />}
//     </div>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Signup from "../../pages/Signup/Signup.jsx";
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleSignupToggle = () => setShowSignup(!showSignup);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const navigate = useNavigate();
  const handleDashboardClick = () => {
    if (user?.role === "1") {
      navigate("/settings"); // user or role 1
    } else if (user?.role === "2") {
      navigate("/dashboard"); // Doctor or role 2
    }
    setDropdownOpen(false); 
  };
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) return;

      try {
        const response = await axios.get('http://localhost:8000/api/v1/users/getcurrent', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.status) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-white mr-5 focus:outline-none"
              >
                <FaUserCircle size={28} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <button
                    onClick={handleDashboardClick}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("accessToken");
                      localStorage.removeItem("id");
                      window.location.reload('/');
                    }}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <span className="inline-flex rounded-full shadow mr-4">
              <button
                onClick={handleSignupToggle}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
              >
                Login/Signup
              </button>
            </span>
          )}


        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Home</a>
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Our Providers</a>
          <a href="/blogs" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Blog</a>
          <a href="/patients" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Patients Portal</a>
          <a href="/teens" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white">Teens</a>
          {!user && (
            <button
              onClick={handleSignupToggle}
              className="block px-3 py-2 mt-2 rounded-full text-base font-medium text-black bg-blue-600 hover:bg-blue-500"
            >
              Login/Signup
            </button>
          )}
        </div>
      )}

      {showSignup && <Signup onClose={handleSignupToggle} />}
    </div>
  );
};

export default Navbar;
