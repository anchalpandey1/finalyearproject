import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import doc1 from "../../assets/doc1.png";
import Appointment from "./Appointment";

const DoctorProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [doctorData, setDoctorData] = useState(null);
    const [selectedRating, setSelectedRating] = useState(4.3);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctorData = async () => {
            const doctorId = localStorage.getItem("selectedDoctorId");
            const token = localStorage.getItem("accessToken");

            if (!doctorId) {
                setError("Doctor ID not found. Please select a doctor again.");
                return;
            }

            if (!token) {
                setError("Session expired. Please log in again.");
                navigate("/login"); 
                return;
            }

            try {
                const response = await fetch(`http://localhost:8000/api/v1/doctors/get/${doctorId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (response.status === 401) {
                    setError("Unauthorized access. Please log in again.");
                    localStorage.removeItem("accessToken"); 
                    navigate("/login");
                    return;
                }

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Doctor Data:", data);
                setDoctorData(data.doctor);
            } catch (error) {
                setError("Failed to fetch doctor data. Please try again later.");
                console.error("Error fetching doctor data:", error);
            }
        };

        fetchDoctorData();
    }, [id, navigate]);

    const handleBackClick = () => {
        navigate(-1);
    };

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(selectedRating);
        const halfStar = selectedRating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-yellow-500 cursor-pointer" />);
        }
        if (halfStar) {
            stars.push(<FaStar key={fullStars} className="text-yellow-500 cursor-pointer" />);
        }

        for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
            stars.push(<FaRegStar key={i} className="text-yellow-500 cursor-pointer" />);
        }

        return stars;
    };

    if (error) {
        return <div className="text-center text-xl text-red-600">{error}</div>;
    }

    if (!doctorData) {
        return <div className="text-center text-xl">Loading...</div>;
    }

    
    const surgeonTypes = Array.isArray(doctorData.typesOfSurgeon)
        ? doctorData.typesOfSurgeon
        : doctorData.typesOfSurgeon
        ? [doctorData.typesOfSurgeon] 
        : []; 

    return (
        <div>
            <div className="mb-20">
                <div className="relative md:space-x-10 space-y-3 mx-auto">
                    <div className="flex space-x-10 gap-20">
                        <div className="w-1/3">
                            <img src={doctorData.image || doc1} alt="Doctor" className="w-full" />
                            <div className="bottom-0 left-0 w-full bg-blue-600 text-white p-4">
                                <div className="p-2 flex items-center">
                                    <h2 className="text-3xl font-bold">{doctorData.fullName}</h2>
                                </div>
                                <div className="p-2 flex space-x-3 items-center">
                                    <p className="text-3xl font-semibold">{doctorData.speciality}</p>
                                    <div className="flex items-center text-3xl">
                                        <div className="flex space-x-1">{renderStars()}</div>
                                        <p className="ml-2 text-lg font-semibold">{selectedRating}</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-5xl font-semibold text-[#256BFE] p-6">BIOGRAPHY</h1>
                            <p className="text-xl ml-6 text-gray-600">{doctorData.bio}</p>
                        </div>

                        <div className="w-2/3 text-[#263238] mt-10">
                            <h1 className="text-6xl font-bold text-[#256BFE]">PROFILE</h1>
                            <p className="text-2xl mt-3 font-bold text-gray-500">
                                {doctorData.speciality}
                            </p>
                            <p className="text-2xl font-bold text-gray-500">
                                {doctorData.qualification}
                            </p>
                            <p className="text-2xl font-bold text-gray-500">
                                {doctorData.hospital}
                            </p>

                            <div className="mt-5 flex items-center">
                                <p className="text-4xl text-black w-1/3">EXPERIENCE</p>
                                <p className="text-4xl text-black">{doctorData.experience}+ years</p>
                            </div>

                            <div className="mt-5 flex items-center">
                                <p className="text-4xl text-black w-1/3">LANGUAGES</p>
                                <p className="text-4xl text-black">{doctorData.languages || "Not specified"}</p>
                            </div>
                            <div className="mt-5 flex items-center">
                                <p className="text-3xl text-black w-1/3">Type of Surgon</p>
                                <p className="text-4xl text-black">{doctorData.typesOfSurgeon || "Not specified"}</p>
                            </div>

                            <h1 className="text-5xl mt-5 font-bold text-[#256BFE]">SPECIALITY</h1>
                            <div className="flex space-x-10 mt-5">
                                {surgeonTypes.map((specialty, index) => (
                                    <button
                                        key={index}
                                        className="px-10 py-3 text-lg border-2 border-blue-500 text-blue-500 rounded-md transition-all duration-300"
                                    >
                                        {specialty}
                                    </button>
                                ))}
                            </div>
                            <div className="flex space-x-10 mt-5">
                                <Appointment />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
