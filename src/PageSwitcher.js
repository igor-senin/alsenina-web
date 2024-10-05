import React from "react";
import { Routes, Route } from "react-router-dom";

// Place for pages imports...
import Home from "./pages/Home";

const PageSwitcher = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default PageSwitcher;
