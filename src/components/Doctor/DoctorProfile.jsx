// import React, { useState } from 'react';
// import { IoArrowBack } from 'react-icons/io5'; // Importing the back arrow icon from react-icons
// import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook
// import { FaStar, FaRegStar } from 'react-icons/fa'; // Importing star icons from react-icons
// import doc1 from "../../assets/doc1.png"; // Assuming this is the doctor image

// const DoctorProfile = () => {
//     const navigate = useNavigate();
//     const handleBackClick = () => {
//         navigate(-1);
//     };

//     // Initialize selectedRating with a default value
//     const [selectedRating, setSelectedRating] = useState(4.3); // default 4.3 rating

//     // Function to render filled and empty stars based on the selectedRating
//     const renderStars = () => {
//         const stars = [];
//         const fullStars = Math.floor(selectedRating); // Full stars
//         const halfStar = selectedRating % 1 >= 0.5; // Half star if the rating has a decimal part >= 0.5

//         // Create full stars
//         for (let i = 0; i < fullStars; i++) {
//             stars.push(
//                 <FaStar
//                     key={i}
//                     className="text-yellow-500 cursor-pointer"
//                     onClick={() => handleStarClick(i + 1)} // Update rating on click
//                 />
//             );
//         }

//         // Add a half star if needed
//         if (halfStar) {
//             stars.push(
//                 <FaStar
//                     key={fullStars}
//                     className="text-yellow-500 cursor-pointer"
//                     onClick={() => handleStarClick(fullStars + 0.5)} // Update rating on click
//                 />
//             );
//         }

//         // Fill remaining stars with empty stars
//         for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
//             stars.push(
//                 <FaRegStar
//                     key={i}
//                     className="text-yellow-500 cursor-pointer"
//                     onClick={() => handleStarClick(i + 1)} // Update rating on click
//                 />
//             );
//         }

//         return stars;
//     };

//     // Function to handle clicking on a star
//     const handleStarClick = (ratingValue) => {
//         // Update the selected rating value when a star is clicked
//         setSelectedRating(ratingValue);
//     };

//     return (
//         <div>
//             <div className="mb-20 ">
//                 <div className="relative md:space-x-10 space-y-3 mx-auto">
//                     <div className="flex  space-x-10 gap-20">
//                         <div className="w-1/3 ">
//                             <img
//                                 src={doc1}
//                                 alt="Doctor"
//                                 className="w-full "
//                             />
//                             <div className="bottom-0 left-0 w-full bg-blue-600 text-white p-4">
//                                 <div className="p-2 flex items-center">
//                                     <h2 className="text-3xl font-bold">Dr. John Doe</h2>
//                                 </div>
//                                 <div className="p-2 flex space-x-3 items-center">
//                                     <div>
//                                         <p className="text-3xl font-semibold">Cardiologist</p>
//                                     </div>
//                                     <div className="flex items-center text-3xl">
//                                         <div className="flex space-x-1">{renderStars()}</div>
//                                         <p className="ml-2 text-lg font-semibold">{selectedRating}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="w-2/3 text-[#263238] mt-10">
//                             <h1 className="text-6xl font-bold text-[#256BFE]">PROFILE</h1>
//                             <p className="text-2xl mt-3 font-bold text-gray-500">
//                                 Paediatric Surgeon
//                             </p>
//                             <p className="text-2xl font-bold text-gray-500">
//                                 M.S, M.Ch(Paediatric Surgeon)
//                             </p>
//                             <p className="text-2xl font-bold text-gray-500">
//                                 Medic General Hospital
//                             </p>

//                             {/* New section for Experience */}
//                             <div className="mt-5 flex items-center ">
//                                 <p className="text-4xl  text-black w-1/3">EXPERIENCE</p>
//                                 <p className="text-4xl  text-black">10+ YEAR</p>
//                             </div>

//                             {/* New section for Languages */}
//                             <div className="mt-5 flex items-center ">
//                                 <p className="text-4xl  text-black w-1/3">LANGUAGES</p>
//                                 <p className="text-4xl  text-black">HINDI,ENGLISH</p>
//                             </div>

//                             {/* New section for Type of Surgeon */}
//                             <div className="mt-5 flex items-center ">
//                                 <p className="text-4xl  text-black w-1/3">TYPES OF</p>
//                                 <p className="text-4xl  text-black">SURGEON</p>
//                             </div>

//                             <h1 className="text-5xl mt-5 font-bold text-[#256BFE]">SPECIALITY</h1>

//                             <div className="flex space-x-10 mt-5">
//                                 <button className="px-10 py-3 text-lg border-2 border-blue-500 text-blue-500 rounded-md   transition-all duration-300">
//                                 Dentistry
//                                 </button>
//                                 <button className="px-10 py-3 text-lg border-2 border-blue-500 text-blue-500 rounded-md   transition-all duration-300">
//                                 Dentistry
//                                 </button>
//                             </div>

//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DoctorProfile;



import React, { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import doc1 from "../../assets/doc1.png";
import Appointment from './Appointment';

const DoctorProfile = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };
    const [doctorData, setDoctorData] = useState(null);
    const [selectedRating, setSelectedRating] = useState(4.3);
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(selectedRating);
        const halfStar = selectedRating % 1 >= 0.5;
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className="text-yellow-500 cursor-pointer"
                    onClick={() => handleStarClick(i + 1)}
                />
            );
        }
        if (halfStar) {
            stars.push(
                <FaStar
                    key={fullStars}
                    className="text-yellow-500 cursor-pointer"
                    onClick={() => handleStarClick(fullStars + 0.5)}
                />
            );
        }

        for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
            stars.push(
                <FaRegStar
                    key={i}
                    className="text-yellow-500 cursor-pointer"
                    onClick={() => handleStarClick(i + 1)}
                />
            );
        }

        return stars;
    };
    const handleStarClick = (ratingValue) => {
        setSelectedRating(ratingValue);
    };

    // Fetch doctor data from mock API
    useEffect(() => {
        // Mock API call
        const fetchDoctorData = async () => {
            // Simulate API call with mock data
            const mockData = {
                name: 'Dr. John Doe',
                specialty: 'Cardiologist',
                bio: 'Experienced Cardiologist with over 20 years of practice.',
                rating: 4.3,
                experience: '10+ years',
                languages: 'Hindi, English',
                hospital: 'Medic General Hospital',
                image: doc1, // or dynamic image URL
                typesOfSurgeon: ['Dentistry', 'Paediatric Surgery']
            };

            setDoctorData(mockData);
        };

        fetchDoctorData();
    }, []);

    // Show loading message until data is fetched
    if (!doctorData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="mb-20 ">
                <div className="relative md:space-x-10 space-y-3 mx-auto">
                    <div className="flex  space-x-10 gap-20">
                        <div className="w-1/3 ">
                            <img
                                src={doctorData.image}
                                alt="Doctor"
                                className="w-full "
                            />
                            <div className="bottom-0 left-0 w-full bg-blue-600 text-white p-4">
                                <div className="p-2 flex items-center">
                                    <h2 className="text-3xl font-bold">{doctorData.name}</h2>
                                </div>
                                <div className="p-2 flex space-x-3 items-center">
                                    <div>
                                        <p className="text-3xl font-semibold">{doctorData.specialty}</p>
                                    </div>
                                    <div className="flex items-center text-3xl">
                                        <div className="flex space-x-1">{renderStars()}</div>
                                        <p className="ml-2 text-lg font-semibold">{selectedRating}</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-5xl font-semibold text-[#256BFE] p-6">BIOGRAPHY</h1>
                            <div>
                                <p className="text-xl ml-6 text-gray-600">{doctorData.bio}</p>
                            </div>
                        </div>

                        <div className="w-2/3 text-[#263238] mt-10">
                            <h1 className="text-6xl font-bold text-[#256BFE]">PROFILE</h1>
                            <p className="text-2xl mt-3 font-bold text-gray-500">
                                Paediatric Surgeon
                            </p>
                            <p className="text-2xl font-bold text-gray-500">
                                M.S, M.Ch(Paediatric Surgeon)
                            </p>
                            <p className="text-2xl font-bold text-gray-500">
                                {doctorData.hospital}
                            </p>

                            {/* Experience Section */}
                            <div className="mt-5 flex items-center">
                                <p className="text-4xl text-black w-1/3">EXPERIENCE</p>
                                <p className="text-4xl text-black">{doctorData.experience}</p>
                            </div>

                            {/* Languages Section */}
                            <div className="mt-5 flex items-center">
                                <p className="text-4xl text-black w-1/3">LANGUAGES</p>
                                <p className="text-4xl text-black">{doctorData.languages}</p>
                            </div>

                            {/* Types of Surgeon Section */}
                            <div className="mt-5 flex items-center">
                                <p className="text-4xl text-black w-1/3">TYPES OF</p>
                                <p className="text-4xl text-black">SURGEON</p>
                            </div>

                            <h1 className="text-5xl mt-5 font-bold text-[#256BFE]">SPECIALITY</h1>

                            <div className="flex space-x-10 mt-5">
                                {doctorData.typesOfSurgeon.map((specialty, index) => (
                                    <button key={index} className="px-10 py-3 text-lg border-2 border-blue-500 text-blue-500 rounded-md transition-all duration-300">
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
