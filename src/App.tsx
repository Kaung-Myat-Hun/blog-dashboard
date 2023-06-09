import React, { Suspense } from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import CoOpLayout from "./layout/CoOpLayout";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading</div>
  </div>
);
function App() {
  return (
    <Suspense fallback={loading}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/coop" element={<CoOpLayout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
