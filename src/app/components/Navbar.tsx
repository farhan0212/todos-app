"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "white" : "black";
    document.body.style.color = darkMode ? "black" : "white";
  };

  return (
    <nav className="flex justify-center px-2 items-center">
      <button onClick={handleToggle}>click</button>
    </nav>
  );
};

export default Navbar;
