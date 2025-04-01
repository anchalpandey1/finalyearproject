// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// const Appointment = () => {
//     const navigate = useNavigate();
//     const [selectedDate, setSelectedDate] = useState("");
//     const [selectedTime, setSelectedTime] = useState("");
//     const [dates, setDates] = useState([]);
//     const [times, setTimes] = useState([]);
//     const [newTime, setNewTime] = useState("");

//     useEffect(() => {
//         // Simulating fetching dates from a mock API
//         setTimeout(() => {
//             setDates([
//                 { day: "MON", date: "05" },
//                 { day: "TUE", date: "06" },
//                 { day: "WED", date: "07" },
//                 { day: "THU", date: "08" },
//                 { day: "FRI", date: "09" },
//                 { day: "SAT", date: "10" },
//                 { day: "SUN", date: "11" },
//             ]);
//             setSelectedDate("06");
//         }, 1000);

//         // Simulating fetching available time slots from a mock API
//         setTimeout(() => {
//             setTimes(["07:30 pm", "08:30 pm", "06:30 pm", "09:30 pm"]);
//             setSelectedTime("08:30 pm");
//         }, 1000);
//     }, []);

//     const addTimeSlot = () => {
//         if (newTime && !times.includes(newTime)) {
//             setTimes([...times, newTime]);
//             setNewTime("");
//         }
//     };
//     const handleAppointment = () => {
//         navigate("/patientform"); // Navigate to /patientform page
//     };
//     return (
//         <div>
//             <h1 className="text-5xl mt-5 font-bold text-[#256BFE]">Appointment</h1>
//             <div className="flex flex-col mt-4">
//                 <div className="flex space-x-2 mt-4">
//                     {dates.map(({ day, date }) => (
//                         <button
//                             key={date}
//                             className={`px-4 py-2 border rounded-lg text-center ${
//                                 selectedDate === date ? "bg-[#256BFE] text-white" : "bg-white"
//                             }`}
//                             onClick={() => setSelectedDate(date)}
//                         >
//                             <div className="font-bold text-lg mb-2">{day}</div>
//                             <div className="font-bold text-lg mt-2">{date}</div>
//                         </button>
//                     ))}
//                 </div>
//                 <h2 className="text-2xl font-bold text-[#256BFE] mt-6">Schedule</h2>
//                 <div className="flex space-x-2 mt-4">
//                     {times.map((time) => (
//                         <button
//                             key={time}
//                             className={`px-8 py-3 font-bold border rounded-lg text-center ${
//                                 selectedTime === time ? "bg-[#256BFE] text-white" : "bg-white"
//                             }`}
//                             onClick={() => setSelectedTime(time)}
//                         >
//                             {time}
//                         </button>
//                     ))}
//                 </div>
//                 <div className="mt-4 flex space-x-2">
//                     <input 
//                         type="text" 
//                         placeholder="Add new time" 
//                         value={newTime} 
//                         onChange={(e) => setNewTime(e.target.value)} 
//                         className="border p-2 rounded-lg"
//                     />
//                     <button 
//                         onClick={addTimeSlot} 
//                         className="bg-[#256BFE] text-white px-4 py-2 rounded-lg"
//                     >
//                         Add Time
//                     </button>
//                 </div>
//                 <button 
//                     className="mt-6 w-[50%] bg-[#256BFE] text-white px-6 py-3 rounded-lg font-bold"
//                     onClick={handleAppointment} // Navigate on click
//                 >
//                     Make an appointment
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Appointment;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [dates, setDates] = useState([]);
    const [times, setTimes] = useState(["07:30 PM", "08:30 PM", "06:30 PM", "09:30 PM"]);
    const [newTime, setNewTime] = useState("");
    const [newDate, setNewDate] = useState("");
    const [reason, setReason] = useState("");

    useEffect(() => {
        generateNext7Days();
        setSelectedTime("08:30 PM");
    }, []);

    const generateNext7Days = () => {
        let tempDates = [];
        let today = new Date();

        for (let i = 0; i < 7; i++) {
            let yyyy = today.getFullYear();
            let mm = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-based
            let dd = String(today.getDate()).padStart(2, "0");

            let formattedDate = `${dd}-${mm}-${yyyy}`; // Convert to DD-MM-YYYY
            tempDates.push(formattedDate);

            today.setDate(today.getDate() + 1);
        }

        setDates(tempDates);
        setSelectedDate(tempDates[0]);
    };

    const addTimeSlot = () => {
        if (newTime && !times.includes(newTime)) {
            setTimes([...times, newTime]);
            setNewTime("");
        }
    };

    const addDateSlot = () => {
        if (newDate && !dates.includes(newDate)) {
            setDates([...dates, newDate]);
            setNewDate("");
        }
    };

    const saveAppointmentToLocalStorage = (doctorId, userId, selectedDate, selectedTime, reason, status) => {
        const appointmentDetails = {
            doctorId,
            userId,
            selectedDate,
            selectedTime,
            reason,
            status
        };

        // Save the appointment data to localStorage
        localStorage.setItem("appointmentDetails", JSON.stringify(appointmentDetails));
    };

    const handleAppointment = async () => {
        if (!reason) {
            alert("Please enter a reason for the appointment.");
            return;
        }

        const doctorId = localStorage.getItem("selectedDoctorId");
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("accessToken");

        if (!doctorId || !userId || !token) {
            alert("Invalid session. Please log in again.");
            navigate("/login");
            return;
        }

        const appointmentData = {
            doctorId,
            userId,
            appointmentDate: selectedDate,
            appointmentTime: selectedTime,
            reason,
            status: "Pending",
        };

        // Save the user input appointment data to localStorage
        saveAppointmentToLocalStorage(doctorId, userId, selectedDate, selectedTime, reason, "Pending");

        try {
            const response = await fetch("http://localhost:8000/api/v1/appointments/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(appointmentData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to book appointment.");
            }

            // Store the full appointment data returned by the backend
            const appointmentDetails = data.appointment;
            saveAppointmentToLocalStorage(
                appointmentDetails.doctorId,
                appointmentDetails.userId,
                appointmentDetails.appointmentDate,
                appointmentDetails.appointmentTime,
                appointmentDetails.reason,
                appointmentDetails.status
            );
            // console.log("datalocalstorage", appointmentDetails);
            alert("Appointment data save successfully!");
            navigate("/patientform");
        } catch (error) {
            console.error("Error booking appointment:", error);
            alert(error.message);
        }
    };

    return (
        <div>
            <h1 className="text-5xl mt-5 font-bold text-[#256BFE]">Appointment</h1>

            <div className="flex space-x-2 mt-4 overflow-x-auto">
                {dates.map((date) => (
                    <button
                        key={date}
                        className={`px-4 py-2 border rounded-lg text-center ${selectedDate === date ? "bg-[#256BFE] text-white" : "bg-white"
                            }`}
                        onClick={() => setSelectedDate(date)}
                    >
                        {date}
                    </button>
                ))}
            </div>
            <div className="mt-4 flex space-x-2">
                <input
                    type="date"
                    placeholder="Add new Date "
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="border p-2 rounded-lg"
                />
                <button
                    onClick={addDateSlot}
                    className="bg-[#256BFE] text-white px-4 py-2 rounded-lg"
                >
                    Add Date
                </button>
            </div>
            <h2 className="text-2xl font-bold text-[#256BFE] mt-6">Schedule</h2>
            <div className="flex space-x-2 mt-4">
                {times.map((time) => (
                    <button
                        key={time}
                        className={`px-8 py-3 font-bold border rounded-lg text-center ${selectedTime === time ? "bg-[#256BFE] text-white" : "bg-white"
                            }`}
                        onClick={() => setSelectedTime(time)}
                    >
                        {time}
                    </button>
                ))}
            </div>

            <div className="mt-4 flex space-x-2">
                <input
                    type="text"
                    placeholder="Add new time (e.g. 10:30 AM)"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="border p-2 rounded-lg"
                />
                <button
                    onClick={addTimeSlot}
                    className="bg-[#256BFE] text-white px-4 py-2 rounded-lg"
                >
                    Add Time
                </button>
            </div>

            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Enter reason for appointment"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="border p-2 rounded-lg w-full"
                />
            </div>

            <button
                className="mt-6 w-[50%] bg-[#256BFE] text-white px-6 py-3 rounded-lg font-bold"
                onClick={handleAppointment}
            >
                Make an appointment
            </button>
        </div>
    );
};

export default Appointment;
