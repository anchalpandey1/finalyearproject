import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetting = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    address: "",
  });
  const [profileFile, setProfileFile] = useState(null);
  
  const handleRedirect = () => {
    navigate("/myprofile");
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("Unauthorized: Please log in first.");
        navigate("/login");
        return;
      }
  
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      if (profileFile) {
        formDataToSend.append("profileUrl", profileFile);
      }
  
      const response = await fetch("https://doctormanagement.onrender.com/api/v1/patients/createprofile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // Don't set Content-Type here, let browser set it for FormData
        },
        body: formDataToSend,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to create profile");
      }
  
      alert("Profile created successfully");
      navigate("/myprofile", { state: data });
  
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-6 bg-white shadow-md rounded-lg p-6">
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
              name="phoneNumber"
              value={formData.phoneNumber}
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
                  value="Male"
                  onChange={handleChange}
                  checked={formData.gender === "Male"}
                  className="form-radio text-blue-500 bg-[#D9D9D9]"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  checked={formData.gender === "Female"}
                  className="form-radio text-blue-500 bg-[#D9D9D9]"
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChange}
                  checked={formData.gender === "Other"}
                  className="form-radio text-blue-500 bg-[#D9D9D9]"
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>

          <div className="col-span-2">
  <label className="block text-gray-700">Profile Image</label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => setProfileFile(e.target.files[0])}
    className="mt-1 block w-full border bg-[#D9D9D9] border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
  />
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
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <button
            type="button"
            onClick={handleRedirect}
            className={`px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            My Profile
          </button>
        </div>

      </form>
    </div>
  );
};

export default ProfileSetting;
