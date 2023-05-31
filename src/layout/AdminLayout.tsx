import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { dataFetching } from "../services/ApiServices";

function AdminLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const role = localStorage.getItem(btoa("role"));
    // const test = dataFetching("https://picsum.photos/id/237/200");
    dataFetching("https://picsum.photos/v2/list").then((res) => {
      console.log(res.data);
    });
    if (atob(role) !== "admin") {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div>AdminLayout</div>
      <Footer></Footer>
    </>
  );
}

export default AdminLayout;
