
import React, { useState } from "react";

const Signup = ({ onClose }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [role, setRole] = useState("1"); // Default role as "1" (User)
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    try {
      const response = await fetch("https://doctormanagement.onrender.com/api/v1/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
          role, // Pass role as "1" for User and "2" for Doctor
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Successfully registered!");
        setErrorMessage("");
        setTimeout(() => {
          setSuccessMessage("");
          onClose();
        }, 3000);
      } else {
        setErrorMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white py-6 px-4 shadow-lg rounded-lg relative w-full max-w-md">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={onClose}>
          ✖
        </button>

        <h2 className="text-center text-2xl font-bold text-black mb-4">Register</h2>

        {successMessage && (
          <div className="bg-green-100 text-green-800 p-3 rounded mb-4 text-center">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-4 text-center">{errorMessage}</div>
        )}

        <form className="space-y-4" onSubmit={handleSignup}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email address:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Create Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">
              Re-Enter Password:
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Role Selection Dropdown */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-black">
              Register as:
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="1">Register as a User</option>
              <option value="2">Register as a Doctor</option>
            </select>
          </div>

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <div className="mt-4 text-center">
          <p className="text-sm text-black">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-800">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
