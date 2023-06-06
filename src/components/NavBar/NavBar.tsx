import React, { useEffect, useState } from "react";
import { LogoutHandler } from "../../services/LogoutHandler";

function NavBar({ setOpen, open }) {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const role = localStorage.getItem(btoa("role"));
    if (atob(role) === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, []);

  const openHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-between ">
      <div style={{ display: "flex" }}>
        {admin ? <p>admin</p> : <p>co-op</p>}
        <button onClick={openHandler} className={`px-4`}>
          Drawer
        </button>
      </div>
      <button onClick={LogoutHandler}>Logout</button>
    </div>
  );
}

export default NavBar;
