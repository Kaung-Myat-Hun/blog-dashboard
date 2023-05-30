import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const role = localStorage.getItem(btoa("role"));

    if (atob(role) !== "admin") {
      navigate("/", { replace: true });
    }
  }, []);

  console.log(React);
  return (
    <>
      <NavBar></NavBar>
      <div>AdminLayout</div>
      <Footer></Footer>
    </>
  );
}

export default AdminLayout;
