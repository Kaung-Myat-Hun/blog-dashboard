import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

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
      <div>COOP Layout</div>
      <Footer></Footer>
    </>
  );
}

export default CoOpLayout;
