import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Teen from "./pages/Teen/Teen.jsx";
import Blog from "./pages/Blogs/Blog.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";
import Setting from "./pages/Setting/Setting.jsx";
import MyProfile from "./pages/Setting/MyProfile.jsx";
import PrivacySecurity from "./pages/Setting/PrivacySecurity.jsx";
import Accessibility from "./pages/Setting/Accessibility.jsx";
import Term from "./pages/Setting/Term.jsx";
import PateintPortal from "./pages/Patient/PateintPortal.jsx";
import Profile from "./pages/Doctors/Profile.jsx";
import Patient from "./pages/Doctors/Patient.jsx";
import Payments from "./pages/Doctors/Payments.jsx";
import Video from "./pages/Doctors/Video.jsx";
import VoiceCall from "./pages/Doctors/VoiceCall.jsx";
import ChatInterface from "./pages/Doctors/ChatInterface.jsx";
import Createdoctorprofile from "./pages/Doctors/Createdoctorprofile.jsx";
import Sidebar from "./components/DoctorDashbaord/Sidebar.jsx";
import EditMyProfile from "./pages/Doctors/EditMyProfile.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/" element={<App/>}/> */}

      <Route path="/" element={<Home />} />
      <Route path="/teens" element={<Teen />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/privacy" element={<PrivacySecurity />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="/termandcondition" element={<Term />} />
      <Route path="/patients" element={<PateintPortal />} />
      <Route path="/doctorprofile/:id" element={<Profile />}/>

      <Route path="/createprofile" element={<Createdoctorprofile/>}/>
      <Route path="/patientform" element={<Patient/>}/>
      <Route path="/payment" element={<Payments/>}/>
      <Route path="/videocall" element={<Video/>}/>
      <Route path="/voicecall" element={<VoiceCall/>}/>
      <Route path="/chat" element={<ChatInterface/>}/>
      <Route path="/dashboard" element={<Sidebar/>}/>
      <Route path="/editprofile" element={<EditMyProfile/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
