import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { dataFetching } from "../services/ApiServices";
import AdminRoute from "./auth_routes/AdminRoutes";
import SideMenu from "../components/SideMenu/SideMenu";

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

  const [open, setOpen] = useState(true);

  return (
    <>
      <NavBar setOpen={setOpen} open={open}></NavBar>
      <div className="flex">
        <SideMenu open={open}></SideMenu>
        <AdminRoute></AdminRoute>
      </div>
      <Footer></Footer>
    </>
  );
}

export default AdminLayout;
