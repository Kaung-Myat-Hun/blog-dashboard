import React from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import CoOpLayout from "./layout/CoOpLayout";

function View() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/admin" element={<AdminLayout />} />
      <Route path="/coop" element={<CoOpLayout />} />
    </Routes>
  );
}

export default View;
