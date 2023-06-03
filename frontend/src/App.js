import "./App.css";
import NavbarBootstrap from "./components/NavbarBootstrap";
import Sample from "./components/Sample";

import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import EventForm from "./components/EventRegistration/EventForm";
import Calendar from "./components/EventRegistration/Calendar";

function App() {
  // hook for state management
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "dark";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sample />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eventregform" element={<EventForm />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
