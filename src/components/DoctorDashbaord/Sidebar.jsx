// yeah bs dummy code h page me show krne ke liye use kiya h maine 

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import profile from "../../assets/profile.png";
import ProfileSetting from "../Settings/ProfileSetting";
import DashboardBox from "./DashboardBox";
import PatientList from "./PatientList";
import UpcomingList from "./UpcomingList";


function Sidebar() {
    const [activeComponent, setActiveComponent] = useState("dashboard");
    const navigate = useNavigate();


    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg">
                <div className="p-6 flex items-center">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-16 h-16 rounded-full mx-5 cursor-pointer"
                        onClick={() => navigate("/myprofile")} //yhàpe editprofile page me code add kr ke ushka link dena h yaad rhe 
                    />
                    <div className="flex items-center space-x-2">
                        <h2 className="text-xl font-bold">Settings</h2>
                        <button className="flex items-center p-2 text-gray-500 hover:text-gray-700 focus:outline-none">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                                id="search"
                            >
                                <g>
                                    <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>

                <nav className="mt-6">
                    <ul>
                        <li
                            onClick={() => setActiveComponent("dashboard")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg mb-2 ${activeComponent === "dashboard"
                                ? "bg-gray-200 text-black "
                                : "text-gray-600 hover:bg-gray-100 "
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 3h8v8H3V3zm10 0h8v5h-8V3zM3 13h8v8H3v-8zm10 5h8v3h-8v-3zm0-5h8v3h-8v-3z"
                                />
                            </svg>

                            Dashboard
                        </li>
                        <li
                            onClick={() => setActiveComponent("patient")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${activeComponent === "patient"
                                ? "bg-gray-200 text-black"
                                : "text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16 12h4M16 16h4M16 8h4M4 8a4 4 0 118 0 4 4 0 01-8 0zM6 20h4a2 2 0 002-2v-1a4 4 0 00-8 0v1a2 2 0 002 2z"
                                />
                            </svg>

                            Patients List
                        </li>
                        <li
                            onClick={() => setActiveComponent("upcomingappointment")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${activeComponent === "upcomingappointment"
                                ? "bg-gray-200 text-black"
                                : "text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8 2v4M16 2v4M3 8h18M21 8v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8m15 10a4 4 0 10-4-4m0 0v2m0 0h2"
                                />
                            </svg>

                            Upcoming Appointment
                        </li>
                        <li
                            onClick={() => setActiveComponent("review")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${activeComponent === "review"
                                ? "bg-gray-200 text-black"
                                : "text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 2l3.09 6.26 6.91 1-5 4.87L18.18 22 12 18.26 5.82 22l1.18-7.87-5-4.87 6.91-1L12 2zM8 14H4m16 0h-4"
                                />
                            </svg>

                            Review
                        </li>


                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {activeComponent === "dashboard" && (
                    <>
                        <h1 className="text-2xl font-semibold">Dashboard</h1>

                        <DashboardBox />

                    </>
                )}
                {activeComponent === "patient" && (
                    <>
                        <h1 className="text-2xl font-semibold">Patient List</h1>
                        <PatientList />
                    </>
                )}
                {activeComponent === "upcomingappointment" && (
                    <>
                        <h1 className="text-2xl font-semibold">Upcoming Appointment</h1>
<UpcomingList/>
                    </>
                )}

                {activeComponent === "review" && (
                    <>
                        <h1 className="text-2xl font-semibold">Review</h1>

                    </>
                )}

            </div>
        </div>
    );
}

export default Sidebar; 