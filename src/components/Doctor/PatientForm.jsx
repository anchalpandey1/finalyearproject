import React, { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { ChatBubbleLeftIcon, VideoCameraIcon, PhoneIcon } from "@heroicons/react/24/solid";

const PatientForm = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };

    const [formData, setFormData] = useState({
        package: "Voice call",
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        problem: "",
    });

    useEffect(() => {
        const storedAppointmentDetails = JSON.parse(localStorage.getItem("appointmentDetails"));
        const storedPatientFormData = JSON.parse(localStorage.getItem("patientFormData"));
        if (storedAppointmentDetails) {
            setFormData((prevData) => ({
                ...prevData,
                appointmentDetails: storedAppointmentDetails,
            }));
        }
        if (storedPatientFormData) {
            setFormData((prevData) => ({
                ...prevData,
                ...storedPatientFormData,
            }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newFormData = { ...prevData, [name]: value };
            localStorage.setItem("patientFormData", JSON.stringify(newFormData)); // Save data in localStorage
            return newFormData;
        });
    };

    const handleNext = async () => {
        // Save form data to localStorage before making the API call
        localStorage.setItem("patientFormData", JSON.stringify(formData));
        console.log("Saved Data:", formData); //here print the data sored in local storage
        const { appointmentDetails, pkgname } = formData;
        const doctorId = appointmentDetails?.doctorId;
        const userId = appointmentDetails?.userId;
        const token = localStorage.getItem("accessToken");

        if (!doctorId || !userId || !token) {
            alert("Invalid session. Please log in again.");
            navigate("/login");
            return;
        }

        const patientFormData = {
            appointment: appointmentDetails,
            firstName: formData.firstName,
            lastName: formData.lastName,
            gender: formData.gender,
            age: formData.age,
            problem: formData.problem,
            pkgname,
        };

        try {
            const response = await fetch("http://localhost:8000/api/v1/appointments/addinfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(patientFormData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Patient information saved successfully!");
                navigate("/payment"); // Navigate to payment page
            } else {
                alert(data.message || "Error submitting form.");
            }
        } catch (error) {
            console.error("Error submitting patient form:", error);
            alert(error.message);
        }
    };

    const packages = [
        { name: "Message", price: 20, desc: "Chat message with doctor", icon: <ChatBubbleLeftIcon className="w-6 h-6 text-blue-500" /> },
        { name: "Video call", price: 50, desc: "Video call with doctor", icon: <VideoCameraIcon className="w-6 h-6 text-blue-500" /> },
        { name: "Voice call", price: 40, desc: "Voice call with doctor", icon: <PhoneIcon className="w-6 h-6 text-blue-500" /> },
    ];

    return (
        <div>
            <div className="w-full h-full bg-white">
                <div className="flex items-center pb-4 pt-8">
                    <IoArrowBack
                        className="text-black cursor-pointer text-3xl ml-10"
                        onClick={handleBackClick}
                    />
                    <h1 className="w-full mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold text-black ml-4">
                        Patient details
                    </h1>
                </div>
                <div className="h-screen w-screen pt-5">
                    <div className="max-w-4xl mx-auto bg-[#D9D9D980] py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="flex-col space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-black font-semibold text-2xl mb-6">First Name*</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="mt-2 block w-full bg-white rounded-lg p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-black font-semibold text-2xl mb-6">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="mt-2 block w-full bg-white rounded-lg p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-black font-semibold text-2xl mb-6">Gender</label>
                                    <input
                                        type="text"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="mt-2 w-full bg-white rounded-lg p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-black font-semibold text-2xl mb-6">Age</label>
                                    <input
                                        type="text"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="mt-2 block w-full bg-white rounded-lg p-2"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-black font-semibold text-2xl mb-6">Write your problem</label>
                                    <textarea
                                        rows="4"
                                        name="problem"
                                        value={formData.problem}
                                        onChange={handleChange}
                                        className="mt-2 block bg-white w-full rounded-lg p-2"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="mt-4 py-6 w-full mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold text-black ml-4">
                        Choose your package
                    </h1>

                    <div className="w-screen">
                        <div className="max-w-3xl mx-auto py-10 px-4 sm:rounded-lg sm:px-10">
                            {packages.map((pkg, index) => (
                                <label
                                    key={index}
                                    className="flex justify-between items-center p-4 border rounded-lg cursor-pointer mb-4 bg-white shadow text-4xl"
                                >
                                    <div className="flex items-center space-x-10">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
                                            {pkg.icon}
                                        </div>
                                        <div>
                                            <span className="font-medium">{pkg.name}</span>
                                            <p className="text-sm text-gray-500">{pkg.desc}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <span className="text-blue-500 font-bold">${pkg.price} /30min</span>
                                        <input
                                            type="radio"
                                            name="package"
                                            value={pkg.name}
                                            checked={formData.package === pkg.name}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-blue-600"
                                        />
                                    </div>
                                </label>
                            ))}
                            <button 
                                className="mt-6 w-[50%] bg-[#256BFE] text-white px-6 py-3 rounded-lg font-bold text-2xl"
                                onClick={handleNext} 
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientForm;
