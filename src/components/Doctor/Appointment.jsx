import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const Appointment = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [dates, setDates] = useState([]);
    const [times, setTimes] = useState([]);
    const [newTime, setNewTime] = useState("");
    
    useEffect(() => {
        // Simulating fetching dates from a mock API
        setTimeout(() => {
            setDates([
                { day: "MON", date: "05" },
                { day: "TUE", date: "06" },
                { day: "WED", date: "07" },
                { day: "THU", date: "08" },
                { day: "FRI", date: "09" },
                { day: "SAT", date: "10" },
                { day: "SUN", date: "11" },
            ]);
            setSelectedDate("06");
        }, 1000);

        // Simulating fetching available time slots from a mock API
        setTimeout(() => {
            setTimes(["07:30 pm", "08:30 pm", "06:30 pm", "09:30 pm"]);
            setSelectedTime("08:30 pm");
        }, 1000);
    }, []);
  
    const addTimeSlot = () => {
        if (newTime && !times.includes(newTime)) {
            setTimes([...times, newTime]);
            setNewTime("");
        }
    };
    const handleAppointment = () => {
        navigate("/patientform"); // Navigate to /patientform page
    };
    return (
        <div>
            <h1 className="text-5xl mt-5 font-bold text-[#256BFE]">Appointment</h1>
            <div className="flex flex-col mt-4">
                <div className="flex space-x-2 mt-4">
                    {dates.map(({ day, date }) => (
                        <button
                            key={date}
                            className={`px-4 py-2 border rounded-lg text-center ${
                                selectedDate === date ? "bg-[#256BFE] text-white" : "bg-white"
                            }`}
                            onClick={() => setSelectedDate(date)}
                        >
                            <div className="font-bold text-lg mb-2">{day}</div>
                            <div className="font-bold text-lg mt-2">{date}</div>
                        </button>
                    ))}
                </div>
                <h2 className="text-2xl font-bold text-[#256BFE] mt-6">Schedule</h2>
                <div className="flex space-x-2 mt-4">
                    {times.map((time) => (
                        <button
                            key={time}
                            className={`px-8 py-3 font-bold border rounded-lg text-center ${
                                selectedTime === time ? "bg-[#256BFE] text-white" : "bg-white"
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
                        placeholder="Add new time" 
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
                <button 
                    className="mt-6 w-[50%] bg-[#256BFE] text-white px-6 py-3 rounded-lg font-bold"
                    onClick={handleAppointment} // Navigate on click
                >
                    Make an appointment
                </button>
            </div>
        </div>
    );
};

export default Appointment;
