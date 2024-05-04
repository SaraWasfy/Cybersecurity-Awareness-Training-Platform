import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import SignUp from "./components/SignUp";
import Login from "./components/login";
import AboutUs from "./components/AboutUs";
import SpotPhishing from "./components/SpotPhishing";
import Badges from "./components/Badges";
import LandingPage from "./components/LandingPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
// root will not render AddAdmin component remove when everyone gets the idea
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/SpotPhishing" element={<SpotPhishing/>} />
      <Route path="/Badges" element={<Badges/>} />
      <Route path="/LandingPage" element={<LandingPage/>} />
    </Routes>
  </BrowserRouter>
);
