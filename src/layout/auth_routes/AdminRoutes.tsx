import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";

function AdminRoutes() {
  return (
    <Routes>
      <Route
        exact
        index
        path="/admin/dashboard/home"
        element={<HomePage />}
      ></Route>
    </Routes>
  );
}

export default AdminRoutes;
