import React, { useEffect } from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import NeedToLogin from "./pages/NeedToLogin";

function View() {
  const role = localStorage.getItem("role");
  console.log(role);
  return (
    <Routes>
      <Route path="/" exact index element={<Login />}></Route>
      {role === "admin" ? (
        <Route path="/admin" exact index element={<AdminLayout />}></Route>
      ) : (
        <Route path="/admin" element={<NeedToLogin />}></Route>
      )}
    </Routes>
  );
}

export default View;
