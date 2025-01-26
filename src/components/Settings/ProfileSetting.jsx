// import React from 'react'

// const ProfileSetting = () => {
//   return (
//     <div>
//           <form className="mt-6 bg-white shadow-md rounded-lg p-6">
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-gray-700">First Name*</label>
//                             <input
//                                 type="text"
//                                 className="mt-1 block w-full border border-gray-300 bg-[#D9D9D9] rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700">Last Name</label>
//                             <input
//                                 type="text"
//                                 className="mt-1 block w-full bg-[#D9D9D9] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 className="mt-1 block w-full bg-[#D9D9D9] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700">Mobile Number</label>
//                             <input
//                                 type="text"
//                                 className="mt-1 block w-full  bg-[#D9D9D9] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//                             />
//                         </div>
//                         <div className="col-span-2">
//                             <label className="block text-gray-700">Gender</label>
//                             <div className="mt-2">
//                                 <label className="inline-flex items-center">
//                                     <input
//                                         type="radio"
//                                         name="gender"
//                                         value="male"
//                                         className="form-radio text-blue-500 bg-[#D9D9D9]"
//                                     />
//                                     <span className="ml-2">Male</span>
//                                 </label>
//                                 <label className="inline-flex items-center ml-6">
//                                     <input
//                                         type="radio"
//                                         name="gender"
//                                         value="female"
//                                         className="form-radio text-blue-500 bg-[#D9D9D9]"
//                                     />
//                                     <span className="ml-2">Female</span>
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="col-span-2">
//                             <label className="block text-gray-700">Address</label>
//                             <textarea
//                                 rows="4"
//                                 className="mt-1 block bg-[#D9D9D9] w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//                             ></textarea>
//                         </div>
//                     </div>
//                     <div className="mt-6 text-right">
//                         <button
//                             type="submit"
//                             className="px-6 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//     </div>
//   )
// }

// export default ProfileSetting

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetting = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mock API call
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Redirect to /myprofile with formData
      navigate("/myprofile", { state: formData });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-white shadow-md rounded-lg p-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 bg-[#D9D9D9] rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full bg-[#D9D9D9] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full bg-[#D9D9D9] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full bg-[#D9D9D9] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Gender</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  className="form-radio text-blue-500 bg-[#D9D9D9]"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  className="form-radio text-blue-500 bg-[#D9D9D9]"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Address</label>
            <textarea
              rows="4"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block bg-[#D9D9D9] w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
        <div className="mt-6 text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetting;
