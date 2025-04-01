 // yeah bs dummy code h page me show krne ke liye use kiya h maine 

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import profile from "../../assets/profile.png";
import ProfileSetting from "../Settings/ProfileSetting";
import NotificationSettings from "../Settings/NotificationSettings";
import Description from "../Settings/Description";
import Language from "../Settings/Language";

function Sidebar() {
    const [activeComponent, setActiveComponent] = useState("profile"); 
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("accessToken"); 
            await axios.post("https://doctormanagement.onrender.com/api/v1/patients/logout", {}, {
                headers: { Authorization: `Bearer ${token}` }
            });

            localStorage.clear(); 
            navigate("/"); 
        } catch (error) {
            console.error("Logout failed:", error.response?.data || error.message);
        }
    };
    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg">
                {/* <div className="p-6 flex items-center">
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
                </div> */}

                <nav className="mt-6">
                    <ul>
                        <li
                            onClick={() => setActiveComponent("profile")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg mb-2 ${
                                activeComponent === "profile"
                                    ? "bg-gray-200 text-black"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.121 5.121A9 9 0 1118.879 18.88 9 9 0 015.121 5.121z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 7v5l3 3"
                                />
                            </svg>
                            Profile Settings
                        </li>
                        <li
                                onClick={() => navigate("/privacy")}
                                className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${
                                    activeComponent === "privacy"
                                        ? "bg-gray-200 text-black"
                                        : "text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12h12M6 6h12M6 18h12"
                                    />
                                </svg>
                               Patients List
                            </li>
                        <li
                            onClick={() => setActiveComponent("notification")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${
                                activeComponent === "notification"
                                    ? "bg-gray-200 text-black"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h6m-3 3v6m-3-6V6m9 6h6"
                                />
                            </svg>
                            Notification Settings
                        </li>
                        <li
                            onClick={() => setActiveComponent("language")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${
                                activeComponent === "language"
                                    ? "bg-gray-200 text-black"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 4v16m4-16v16M16 4v16m4-16v16"
                                />
                            </svg>
                           Language
                        </li>
                        <li
                            onClick={() => navigate("/termandcondition")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${
                                activeComponent === "terms"
                                    ? "bg-gray-200 text-black"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 18h6m-3-6V6"
                                />
                            </svg>
                            Terms & Conditions
                        </li>
                        <li
                            onClick={() => setActiveComponent("description")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${
                                activeComponent === "description"
                                    ? "bg-gray-200 text-black"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 4v16m4-16v16M16 4v16m4-16v16"
                                />
                            </svg>
                           Description
                        </li>
                        <li
                             onClick={() => navigate("/accessibility")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${
                                activeComponent === "accessibility"
                                    ? "bg-gray-200 text-black"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12h12M6 6h12M6 18h12"
                                />
                            </svg>
                            Accessibility Statement
                        </li>
                        <li
                            onClick={() => setActiveComponent("help")}
                            className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${
                                activeComponent === "help"
                                    ? "bg-gray-200 text-black"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 18h6m-3-6V6"
                                />
                            </svg>
                            Help & Support
                        </li>
                        <li
                            onClick={handleLogout}
                            className="flex items-center px-6 py-3 cursor-pointer rounded-lg text-gray-600 hover:bg-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7"
                                />
                            </svg>
                            Logout
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {activeComponent === "profile" && (
                    <>
                        <h1 className="text-2xl font-semibold">Profile Settings</h1>
                        {/* <ProfileSetting /> */}
                        <ProfileSetting/>
                        
                    </>
                )}
                {activeComponent === "notification" && (
                    <>
                        <h1 className="text-2xl font-semibold"></h1>
                        {/* <NotificationSettings /> */}
                        <NotificationSettings/>
                    </>
                )}
                {activeComponent === "language" && (
                    <>
                        <h1 className="text-2xl font-semibold"></h1>
                        {/* <Language/> */}
                        <Language/>
                    </>
                )}
               
                {activeComponent === "description" && (
                    <>
                        <h1 className="text-2xl font-semibold">Edit Description</h1>
                        {/* <Description/> */}
                        <Description/>
                    </>
                )}
                {activeComponent === "help" && (
                    <h1 className="text-2xl font-semibold">Help & Support</h1>
                )}
            </div>
        </div>
    );
}

export default Sidebar; 