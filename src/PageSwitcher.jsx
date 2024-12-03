import React from "react";
import { Routes, Route } from "react-router-dom";

// Place for pages imports...
import Home from "./pages/Home";
import Animation from "./pages/animation/Animation";
import Experience from "./pages/experience/Experience";

const PageSwitcher = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Animation />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};

export default PageSwitcher;
