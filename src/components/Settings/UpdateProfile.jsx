import React, { useState, useEffect } from "react";
import profile from "../../assets/profile.png";

const UpdateProfile = () => {
  const [profileImage, setProfileImage] = useState(profile);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    address: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch current user data from API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("accessToken"); 
    
        if (!token) {
          throw new Error("No access token found. Please log in.");
        }
    
        const response = await fetch("https://doctormanagement.onrender.com/api/v1/patients/getUser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
    
        if (response.status === 401) {
          throw new Error("Session expired. Please log in again.");
        }
    
        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }
    
        const data = await response.json();
    
        if (data.status) {
          setFormData({
            firstName: data.userInfo.firstName || "",
            lastName: data.userInfo.lastName || "",
            email: data.userInfo.email || "",
           phoneNumber: data.userInfo.phoneNumber || "",
            gender: data.userInfo.gender || "",
            address: data.userInfo.address || "",
          });
        } else {
          throw new Error(data.message || "Something went wrong.");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching user data:", err);
      }
    };
    

    fetchUserData();
  }, []);

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
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("No access token found. Please log in.");
      }

      const response = await fetch("https://doctormanagement.onrender.com/api/v1/patients/updateprofile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber, // Ensure the field matches API
          gender: formData.gender,
          address: formData.address,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Profile updated successfully!");
      } else {
        throw new Error(data.message || "Failed to update profile.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg flex flex-col items-center p-6">
        <img src={profileImage} alt="Profile" className="w-56 h-56 rounded-full object-cover" />
        <label
          htmlFor="profile-upload"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Edit Profile
        </label>
        <input id="profile-upload" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
      </div>

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Profile Settings</h1>

        {error && <div className="mt-4 p-4 rounded-lg bg-red-500 text-white">{error}</div>}
        {message && <div className="mt-4 p-4 rounded-lg bg-green-500 text-white">{message}</div>}

        <form onSubmit={handleSubmit} className="mt-6 bg-white shadow-md rounded-lg p-6">
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
                disabled
              />
            </div>
            <div>
              <label className="block text-gray-700">Mobile Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
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
                    checked={formData.gender === "male"}
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
                    checked={formData.gender === "female"}
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
              <label className="block text-gray-700">Address</label>
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
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
