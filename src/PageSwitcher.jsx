import React from "react";
import { Routes, Route } from "react-router-dom";

// Place for pages imports...
import Home from "./pages/Home";
import Animation from "./pages/Animation";

const PageSwitcher = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/animation" element={<Animation />} />
    </Routes>
  );
};

export default PageSwitcher;
