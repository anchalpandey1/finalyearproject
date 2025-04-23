import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const [doctor, setDoctor] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("accessToken");
console.log("Fetched token:", token);
console.log("Doctor ID:", id);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(
          `https://doctormanagement.onrender.com/api/v1/doctors/get/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status) {
          setDoctor(response.data.doctor);
          setForm(response.data.doctor); // initialize form
        }
      } catch (error) {
        console.error('Error fetching doctor profile:', error);
      }
    };

    if (id && token) {
      fetchDoctor();
    } else {
      console.warn("Doctor ID or Token not found in localStorage");
    }
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `https://doctormanagement.onrender.com/api/v1/doctors/update`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status) {
        setDoctor(form);
        setEditMode(false);
        alert('Profile updated successfully');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  if (!doctor) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-blue-100 shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Doctor Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: 'Full Name', key: 'fullName' },
          { label: 'Email', key: 'email' },
          { label: 'Phone Number', key: 'phoneNumber' },
          { label: 'Qualification', key: 'qualification' },
          { label: 'Specialty', key: 'specialty' },
          { label: 'Hospital', key: 'hospital' },
          { label: 'Types of Surgeon', key: 'typesOfSurgeon' },
          { label: 'Experience', key: 'experience' },
          { label: 'Gender', key: 'gender' },
          { label: 'Languages', key: 'languages' },
          { label: 'Bio', key: 'bio' },
        ].map((field) => (
          <div key={field.key}>
            <label className="block text-gray-700">{field.label}</label>
            {editMode ? (
              <input
                type="text"
                name={field.key}
                value={form[field.key] || ''}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            ) : (
              <p className="mt-1 text-gray-800">{doctor[field.key]}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {editMode ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
