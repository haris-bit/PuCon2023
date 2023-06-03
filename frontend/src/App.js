import "./App.css";
import NavbarBootstrap from "./components/NavbarBootstrap";
import Sample from "./components/Sample";
import React, { useState } from "react";

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
      <NavbarBootstrap
        title="EventSceduler"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Sample />
    </>
  );
}

export default App;
