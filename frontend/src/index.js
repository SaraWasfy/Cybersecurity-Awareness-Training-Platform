import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import SignUp from "./components/SignUp";


const root = ReactDOM.createRoot(document.getElementById("root"));
// root will not render AddAdmin component remove when everyone gets the idea
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  </BrowserRouter>
);
