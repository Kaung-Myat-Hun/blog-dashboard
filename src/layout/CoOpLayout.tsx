import React, { useEffect, useState } from "react";
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

  const [open, setOpen] = useState(true);
  return (
    <>
      <NavBar setOpen={setOpen} open={open}></NavBar>
      <div className="flex">
        <SideMenu open={open}></SideMenu>
        <CoOpRoute></CoOpRoute>
      </div>
      <Footer></Footer>
    </>
  );
}

export default CoOpLayout;
