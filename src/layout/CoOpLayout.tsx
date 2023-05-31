import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import CoOpRoute from "./auth_routes/CoOpRoutes";

function CoOpLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const role = localStorage.getItem(btoa("role"));
    if (atob(role) !== "coop") {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <CoOpRoute></CoOpRoute>
      <Footer></Footer>
    </>
  );
}

export default CoOpLayout;
