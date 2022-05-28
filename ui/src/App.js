import React from "react";

import { Routes, Route } from "react-router-dom";

import Admin from "./pages/admin";
import Home from "./pages/home";
import Stats from "./pages/stats";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </>
  );
};

export default App;
