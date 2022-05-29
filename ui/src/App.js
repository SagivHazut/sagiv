import React from "react";

import { Routes, Route } from "react-router-dom";

import Admin from "./pages/admin";
import Home from "./pages/home";
import Stats from "./pages/stats";
import CardRegister from "./components/CardsRegister";
import ResponsiveAppBar from "./components/Navbar";
const App = () => {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CardRegister" element={<CardRegister />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </>
  );
};

export default App;
