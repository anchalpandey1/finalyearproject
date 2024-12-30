import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Teen from "./pages/Teen/Teen.jsx";
import Blog from "./pages/Blogs/Blog.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    {/* <Route path="/" element={<App/>}/> */}

    <Route path="/" element={<Home/>}/>
     <Route path="/teens" element={<Teen/>}/>
     <Route path="/blogs" element={<Blog/>}/>
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
