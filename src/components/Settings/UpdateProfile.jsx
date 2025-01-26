// import React, { useState } from 'react';
// import profile from '../../assets/profile.png';

// const UpdateProfile = () => {
//   const [profileImage, setProfileImage] = useState(profile);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-80 bg-white shadow-lg flex flex-col items-center p-6">
//         <img
//           src={profileImage}
//           alt="Profile"
//           className="w-56 h-56 rounded-full object-cover"
//         />
//         <label
//           htmlFor="profile-upload"
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//         >
//           Edit Profile
//         </label>
//         <input
//           id="profile-upload"
//           type="file"
//           accept="image/*"
//           className="hidden"
//           onChange={handleImageChange}
//         />
//       </div>

//       <div className="flex-1 p-8">
//         <h1 className="text-2xl font-semibold">Profile Settings</h1>
//         <form className="mt-6 bg-white shadow-md rounded-lg p-6">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">First Name*</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Last Name</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Mobile Number</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-2">
//               <label className="block text-gray-700">Gender</label>
//               <div className="mt-2">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="male"
//                     className="form-radio text-blue-500"
//                   />
//                   <span className="ml-2">Male</span>
//                 </label>
//                 <label className="inline-flex items-center ml-6">
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="female"
//                     className="form-radio text-blue-500"
//                   />
//                   <span className="ml-2">Female</span>
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Address and Update Button in Flex */}
//           <div className="mt-6 flex gap-4 items-center">
//             <div className="flex-1">
//               <label className="block text-gray-700">Address</label>
//               <textarea
//                 rows="4"
//                 className="mt-1 block w-[70%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//             >
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;
import React, { useState } from 'react';
import profile from '../../assets/profile.png';

const UpdateProfile = () => {
  const [profileImage, setProfileImage] = useState(profile);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    gender: '',
    address: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Mock API logic
    try {
      const response = await fetch('https://mockapi.io/endpoint/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Profile updated successfully!');
      } else {
        throw new Error('Failed to update profile.');
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg flex flex-col items-center p-6">
        <img
          src={profileImage}
          alt="Profile"
          className="w-56 h-56 rounded-full object-cover"
        />
        <label
          htmlFor="profile-upload"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Edit Profile
        </label>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Profile Settings</h1>

        {message && (
          <div
            className={`mt-4 p-4 rounded-lg text-white ${
              message.includes('successfully') ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {message}
          </div>
        )}

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
                required
                className="mt-1 bg-[#D9D9D9] block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block bg-[#D9D9D9] w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block bg-[#D9D9D9] w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block bg-[#D9D9D9] w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
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
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                    className="form-radio bg-[#D9D9D9] text-blue-500"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                    className="form-radio bg-[#D9D9D9] text-blue-500"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
          </div>

          {/* Address and Update Button in Flex */}
          <div className="mt-6 flex gap-4 items-center">
            <div className="flex-1">
              <label className="block  text-gray-700">Address</label>
              <textarea
                name="address"
                rows="4"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 bg-[#D9D9D9] block w-[70%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
