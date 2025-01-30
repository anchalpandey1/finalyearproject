import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faUserPlus, faEllipsisV, faPhoneSlash, faVideo } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";

const VoiceCall = () => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div>
    <Navbar/>
        <div className="h-screen flex flex-col items-center justify-center bg-white">
      {/* Doctor's Image & Info */}
      <div className="text-center">
        <img
          src="https://via.placeholder.com/150"  // Replace with actual doctor's image
          alt="Doctor"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h2 className="text-xl font-semibold mt-4">Dr. Vincent Brinky</h2>
        <p className="text-gray-500">Ringing...</p>
      </div>

      {/* Call Controls */}
      <div className="absolute bottom-0 w-full bg-gray-200 py-4 flex justify-center gap-4">
        <button className="bg-blue-100 p-3 rounded-full">
          <FontAwesomeIcon icon={faUserPlus} className="text-blue-500" />
        </button>
        <button className="bg-blue-100 p-3 rounded-full">
          <FontAwesomeIcon icon={faVideo} className="text-blue-500" />
        </button>
        <button onClick={toggleMute} className="bg-blue-100 p-3 rounded-full">
          <FontAwesomeIcon icon={faMicrophone} className={isMuted ? "text-red-500" : "text-green-500"} />
        </button>
        <button className="bg-blue-100 p-3 rounded-full">
          <FontAwesomeIcon icon={faEllipsisV} className="text-blue-500" />
        </button>
        <button className="bg-red-500 text-white p-3 rounded-full">
          <FontAwesomeIcon icon={faPhoneSlash} />
        </button>
      </div>
    </div>
    </div>
  );
};

export default VoiceCall;



// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMicrophone, faUserPlus, faEllipsisV, faPhoneSlash, faVideo } from "@fortawesome/free-solid-svg-icons";
// import Navbar from "../../components/Navbar/Navbar";
// import axios from "axios";

// const VoiceCall = () => {
//   const [isMuted, setIsMuted] = useState(false);
//   const [doctor, setDoctor] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   // Fetch doctor data from a mock API
//   useEffect(() => {
//     const fetchDoctorData = async () => {
//       try {
//         const response = await axios.get("https://api.example.com/doctor");  // Replace with your mock API URL
//         setDoctor(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching doctor data:", error);
//         setLoading(false);
//       }
//     };

//     fetchDoctorData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="h-screen flex flex-col items-center justify-center bg-white">
//         {/* Doctor's Image & Info */}
//         <div className="text-center">
//           <img
//             src={doctor.imageUrl} // Dynamic image URL from the API
//             alt="Doctor"
//             className="w-32 h-32 rounded-full mx-auto"
//           />
//           <h2 className="text-xl font-semibold mt-4">{doctor.name}</h2>
//           <p className="text-gray-500">{doctor.status}</p> {/* Dynamic status from the API */}
//         </div>

//         {/* Call Controls */}
//         <div className="absolute bottom-0 w-full bg-gray-200 py-4 flex justify-center gap-4">
//           <button className="bg-blue-100 p-3 rounded-full">
//             <FontAwesomeIcon icon={faUserPlus} className="text-blue-500" />
//           </button>
//           <button className="bg-blue-100 p-3 rounded-full">
//             <FontAwesomeIcon icon={faVideo} className="text-blue-500" />
//           </button>
//           <button onClick={toggleMute} className="bg-blue-100 p-3 rounded-full">
//             <FontAwesomeIcon icon={faMicrophone} className={isMuted ? "text-red-500" : "text-green-500"} />
//           </button>
//           <button className="bg-blue-100 p-3 rounded-full">
//             <FontAwesomeIcon icon={faEllipsisV} className="text-blue-500" />
//           </button>
//           <button className="bg-red-500 text-white p-3 rounded-full">
//             <FontAwesomeIcon icon={faPhoneSlash} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VoiceCall;
