import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Place for pages imports...
import Home from "./pages/Home";
import Animation from "./pages/animation/Animation";
import Experience from "./pages/experience/Experience";
import Contacts from "./pages/contacts/Contacts";

const PageSwitcher = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Animation />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contacts" element={<Contacts />} />

      </Routes>
    </Router>
  );
};

export default PageSwitcher;
