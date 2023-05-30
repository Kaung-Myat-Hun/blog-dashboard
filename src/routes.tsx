import React from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import CoOpLayout from "./layout/CoOpLayout";

function View() {
  return (
    <Routes>
      <Route path="/" exact index element={<Login />}></Route>
      <Route path="/admin" exact element={<AdminLayout />} />
      <Route path="/coop" exact element={<CoOpLayout />} />
    </Routes>
  );
}

export default View;
