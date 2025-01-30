import React, { useState } from 'react'
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
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const packages = [
        { name: "Message", price: 20, desc: "Chat message with doctor", icon: <ChatBubbleLeftIcon className="w-6 h-6 text-blue-500" /> },
        { name: "Video call", price: 50, desc: "Video call with doctor", icon: <VideoCameraIcon className="w-6 h-6 text-blue-500" /> },
        { name: "Voice call", price: 40, desc: "Voice call with doctor", icon: <PhoneIcon className="w-6 h-6 text-blue-500" /> },
    ];
    const handleNext = () => {
        navigate("/payment"); // Navigate to /patientform page
    };
    return (
        <div>
            <div className="w-full h-full bg-white ">
                <div className="flex items-center pb-4 pt-8 ">
                    <IoArrowBack
                        className="text-black cursor-pointer text-3xl ml-10"
                        onClick={handleBackClick}
                    />
                    <h1 className="w-full mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold text-black ml-4">
                        Patient details
                    </h1>

                </div>
                <div class="h-screen w-screen  pt-5">
                    <div class="max-w-4xl mx-auto bg-[#D9D9D980] py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form class="flex-col space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-black font-semibold text-2xl mb-6">First Name*</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value=""
                                        className="mt-2 block w-full  bg-white rounded-lg p-2 "
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-black font-semibold text-2xl mb-6">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value=" "
                                        className="mt-2 block w-full  bg-white rounded-lg p-2 "
                                    />
                                </div>
                                <div>
                                    <label className="block text-black font-semibold text-2xl mb-6">Gender</label>
                                    <input
                                        type="text"
                                        name="gender"
                                        value=" "
                                        className="mt-2  w-full bg-white  rounded-lg p-2 "
                                    />
                                </div>
                                <div>
                                    <label className="block text-black font-semibold text-2xl mb-6">Age</label>
                                    <input
                                        type="text"
                                        name="age"
                                        value=" "
                                        className="mt-2 block w-full bg-white rounded-lg p-2  "
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-black font-semibold text-2xl mb-6">Write your problem</label>
                                    <textarea
                                        rows="4"
                                        name="problem"
                                        value=" "
                                        className="mt-2 block bg-white w-full  rounded-lg p-2"
                                    ></textarea>
                                </div>
                            </div>


                        </form>

                    </div>
                    <h1 className=" mt-4   py-6 w-full mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold text-black ml-4">
                        Patient details
                    </h1>
                    <div className="w-screen ">
                        <div className="max-w-3xl mx-auto py-10 px-4 sm:rounded-lg sm:px-10">
                            {packages.map((pkg, index) => (
                                <label
                                    key={index}
                                    className="flex justify-between items-center p-4 border rounded-lg cursor-pointer mb-4 bg-white shadow text-4xl"
                                >
                                    {/* Left side: Icon + Package name + Description */}
                                    <div className="flex items-center space-x-10 ">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
                                            {pkg.icon}
                                        </div>
                                        <div>
                                            <span className="font-medium">{pkg.name}</span>
                                            <p className="text-sm text-gray-500">{pkg.desc}</p>
                                        </div>
                                    </div>

                                    {/* Right side: Price + Radio button */}
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
    )
}

export default PatientForm