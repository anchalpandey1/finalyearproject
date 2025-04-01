import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import d1 from "../../assets/d1.png";

const DoctorCard = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://doctormanagement.onrender.com/api/v1/doctors/getall")
            .then((response) => response.json())
            .then((data) => {
                console.log("API Response:", data);
                setDoctors(data.doctor || []); 
            })
            .catch((error) => console.error("Error fetching doctors:", error));
    }, []);

   
    const handleViewProfile = (doctor) => {
        localStorage.setItem("selectedDoctorId", doctor._id); 
        localStorage.setItem("token", doctor.token || "");
    
        navigate(`/doctorprofile/${doctor._id}`); 
    };
    const handleBookNow = (doctor) => {
        localStorage.setItem("doctorId", doctor._id);  // Store Doctor ID for Appointment
        navigate("/appointment"); // Redirect to Appointment page
    };
    return (
        <div>
            <div className="text-center mt-12">
                <h1 className="text-7xl font-bold text-black mb-4">Meet our Providers</h1>
                <p className="text-black font-inter font-medium text-xl max-w-4xl mx-auto">
                    Our providers are here to support your health and wellness journey.
                </p>
            </div>

            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {doctors.length > 0 ? (
                        doctors.map((doctor) => (
                            <div key={doctor._id} className="bg-white shadow-lg">
                                <img src={doctor.image || d1} className="w-full h-[70%]" alt="Doctor" />
                                <h3 className="m-2 font-bold text-3xl">{doctor.fullName}</h3>
                                <p className="m-2 font-semibold text-xl">{doctor.qualification}</p>
                                <p className="m-2 text-lg">{doctor.experience}+ Years Experience</p>
                                <div className="flex justify-between space-x-4 m-4">
                                    <button 
                                        className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600"
                                        onClick={() => handleViewProfile(doctor)}
                                    >
                                        View Profile
                                    </button>
                                    <button 
                                        className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600"
                                        onClick={() => handleBookNow(doctor)}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-3 text-xl font-semibold">No doctors found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
