import React, { useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    qualification: "",
    specialty: "",
    bio: "",
    languages: "",
    hospital: "",
    typesOfSurgeon: "",
    phoneNumber: "",
    gender: "",
    experience: "",
  });

  return (
    <div>
      <form className="mt-6 bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Qualification*</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Specialty*</label>
            <input
              type="text"
              name="specialty"
              value={formData.specialty}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Bio*</label>
            <textarea
              name="bio"
              value={formData.bio}
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Languages*</label>
            <input
              type="text"
              name="languages"
              value={formData.languages}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Hospital*</label>
            <input
              type="text"
              name="hospital"
              value={formData.hospital}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Experience (Years)*</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Type of Surgeon*</label>
            <input
              type="text"
              name="typesOfSurgeon"
              value={formData.typesOfSurgeon}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number*</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Gender*</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;