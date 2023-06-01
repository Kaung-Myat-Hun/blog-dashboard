import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import CoOpRoute from "./auth_routes/CoOpRoutes";
import SideMenu from "../components/SideMenu/SideMenu";

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
      <SideMenu></SideMenu>
      <CoOpRoute></CoOpRoute>
      <Footer></Footer>
    </>
  );
}

export default CoOpLayout;
