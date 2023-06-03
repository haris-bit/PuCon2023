/* eslint-disable no-unused-vars */
import "./App.css";
import NavbarBootstrap from "./components/NavbarBootstrap";
import Sample from "./components/Sample";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import EventForm from "./components/EventRegistration/EventForm";


function App() {
  

  return (
    <>
      {/* <NavbarBootstrap /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sample />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eventregform" element={<EventForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
