// src/Routes/index.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/index";
import { About } from "../pages/About";

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<About />} />
    </Routes>
  );
}
