
import React, { useEffect, useState } from 'react';
import { FaCalendarCheck } from "react-icons/fa";
const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    useEffect(() => {
        const fetchAppointments = async () => {
            const userId = localStorage.getItem("userId");
            if (!userId) {
                setError("User not logged in.");
                return;
            }

            try {
                const response = await fetch(`https://doctormanagement.onrender.com/api/v1/appointments/user/${userId}`);
                const data = await response.json();
                if (response.ok && data.success) {
                    setAppointments(data.appointments);
                } else {
                    setError(data.message || "Failed to fetch appointments.");
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Error fetching data.");
            }
        };

        fetchAppointments();
    }, []);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedAppointments = [...appointments].sort((a, b) => {
        const valA = sortConfig.key === 'doctorName' ? a.doctorId?.fullName : a[sortConfig.key];
        const valB = sortConfig.key === 'doctorName' ? b.doctorId?.fullName : b[sortConfig.key];

        if (!valA || !valB) return 0;

        if (sortConfig.direction === 'asc') {
            return valA > valB ? 1 : -1;
        } else {
            return valA < valB ? 1 : -1;
        }
    });

    const renderSortArrow = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'asc' ? '▲' : '▼';
        }
        return '↕'; // default neutral sort icon
    };


    return (
        <div className="min-h-screen  bg-gray-50 p-4">

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {appointments.length > 0 ? (
                <div className="w-full overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-x-auto border rounded-lg">
                    <table className="min-w-[600px] divide-y divide-gray-200">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Package</th>
                                <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('doctorName')}>
                                    <div className="flex items-center gap-1">
                                        <span>Doctor</span>
                                        <button className="text-sm">{renderSortArrow('doctorName')}</button>
                                    </div>
                                </th>
                                <th className="py-3 px-4 text-left">Specialty</th>
                                <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('appointmentDate')}>
                                    <div className="flex items-center gap-1">
                                        <span>Date</span>
                                        <button className="text-sm">{renderSortArrow('appointmentDate')}</button>
                                    </div>
                                </th>
                                <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('appointmentTime')}>
                                    <div className="flex items-center gap-1">
                                        <span>Time</span>
                                        <button className="text-sm">{renderSortArrow('appointmentTime')}</button>
                                    </div>
                                </th>
                                <th className="py-3 px-4 text-left">Problem</th>
                                <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('status')}>
                                    <div className="flex items-center gap-1">
                                        <span>Status</span>
                                        <button className="text-sm">{renderSortArrow('status')}</button>
                                    </div>
                                </th>
                                <th className="py-3 px-4 text-left">Payment Mode</th>
                                <th className="py-3 px-4 text-left">Price</th>
                                <th className="py-3 px-4 text-left">Join</th>

                            </tr>
                        </thead>

                        <tbody>
                            {sortedAppointments.map((appointment) => (
                                <tr key={appointment._id} className="border-t hover:bg-gray-100">
                                    <td className="py-3 px-4">{appointment.pkgname}</td>
                                    <td className="py-3 px-4">{appointment.doctorId?.fullName}</td>
                                    <td className="py-3 px-4">{appointment.doctorId?.specialty}</td>
                                    <td className="py-3 px-4">{appointment.appointmentDate}</td>
                                    <td className="py-3 px-4">{appointment.appointmentTime}</td>
                                    <td className="py-3 px-4">{appointment.problem}</td>
                                    <td className="py-3 px-4">{appointment.status}</td>
                                    <td className="py-3 px-4">{appointment.paymentMode}</td>
                                    <td className="py-3 px-4">₹{appointment.pkgprice}</td>
                                    <td className="py-3 px-4">
                                        <button
                                            className={`px-3 py-1 rounded-md text-white flex items-center gap-1
            ${appointment.status.toLowerCase() === 'upcoming' ? 'bg-green-500 cursor-pointer' : 'bg-red-500 cursor-default'}
        `}
                                        >
                                            <FaCalendarCheck />
                                            Join
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
            ) : (
                <p className="text-gray-600">No appointments found.</p>
            )}
        </div>
    );
};

export default AppointmentList;
