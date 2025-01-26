// import React from 'react';

// const Signup = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 relative w-full max-w-lg">        
//         <button
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//           onClick={onClose} 
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         <div className="">
//             <h2 className="mt-2 text-center text-3xl font-bold text-black mb-4">
//               Register Page
//             </h2>
//           </div>
//           <form className="space-y-6" action="#" method="POST">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-black">
//                 Email address :
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Enter your email address"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-black">
//                 Create New Password :
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Enter your password"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-black mt-6">
//                   Phone Number :
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     autoComplete="tel"
//                     required
//                     className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center items-center">
//               <button
//                 type="submit"
//                 className="group relative flex justify-center py-2 px-10 border border-transparent text-sm font-medium rounded-md text-white bg-[#256BFE] hover:bg-[#256BFE] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Register
//               </button>
//             </div>
//           </form>
//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-black"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-gray-100 text-black font-bold">Or</span>
//               </div>
//             </div>
//             <div className="mt-6 grid grid-cols-1 space-y-2">
//               <div>
//                 <a
//                   href="#"
//                   className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white"
//                   style={{ backgroundColor: "#256BFE" }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     className="h-7 w-7 mr-2 rounded-full"
//                     fill="white"
//                   >
//                     <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.81v-9.294H9.692v-3.622h3.118V8.41c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
//                   </svg>
//                   <span>Continue with Facebook</span>
//                 </a>
//               </div>
//               <div>
//                 <a
//                   href="#"
//                   className="w-full flex items-center justify-center px-8 py-3 border border-[#256BFE] rounded-md shadow-sm text-sm font-medium text-[#256BFE] "
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 48 48"
//                     className="h-7 w-7 mr-2 rounded-full bg-[#256BFE] "
//                     fill="white"
//                   >
//                     <path d="M43.6 20.3H42V20H24v8h11.3C33.3 33.3 29.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l6.4-6.4C34.3 5.5 29.4 3.5 24 3.5 12.4 3.5 3.5 12.4 3.5 24S12.4 44.5 24 44.5c11.5 0 20.5-8.3 20.5-20.5 0-1.3-.1-2.6-.4-3.7z" />
//                   </svg>
//                   <span>Continue with Google</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="mt-4 text-center">
//             <p className="text-sm text-black">
//               Already have an account ? {" "}
//               <a href="/login" className="font-medium text-[#256BFE] hover:text-[#256BFE]">
//                 Login
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";

const Signup = ({ onClose }) => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Simulate a mock API call
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
          phone: e.target.phone.value,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Successfully registered!");
        setTimeout(() => {
          setSuccessMessage(""); 
          onClose(); 
        }, 3000);
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 relative w-full max-w-lg">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="">
          <h2 className="mt-2 text-center text-3xl font-bold text-black mb-4">
            Register Page
          </h2>
        </div>

        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-4 text-center">
            {successMessage}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email address :
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Create New Password :
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-black mt-6">
              Phone Number :
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="group relative flex justify-center py-2 px-10 border border-transparent text-sm font-medium rounded-md text-white bg-[#256BFE] hover:bg-[#256BFE] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-black"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-100 text-black font-bold">Or</span>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 space-y-2">
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white"
                                    style={{ backgroundColor: "#256BFE" }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="h-7 w-7 mr-2 rounded-full"
                                        fill="white"
                                    >
                                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.81v-9.294H9.692v-3.622h3.118V8.41c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                                    </svg>
                                    <span>Continue with Facebook</span>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-[#256BFE] rounded-md shadow-sm text-sm font-medium text-[#256BFE]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        className="h-7 w-7 mr-2 rounded-full bg-[#256BFE]"
                                        fill="white"
                                    >
                                        <path d="M43.6 20.3H42V20H24v8h11.3C33.3 33.3 29.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l6.4-6.4C34.3 5.5 29.4 3.5 24 3.5 12.4 3.5 3.5 12.4 3.5 24S12.4 44.5 24 44.5c11.5 0 20.5-8.3 20.5-20.5 0-1.3-.1-2.6-.4-3.7z" />
                                    </svg>
                                    <span>Continue with Google</span>
                                </a>
                            </div>
                        </div>
                    </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-black">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-[#256BFE] hover:text-[#256BFE]"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
