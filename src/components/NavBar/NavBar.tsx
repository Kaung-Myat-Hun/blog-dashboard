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
      {admin ? <p>admin</p> : <p>co-op</p>}
      <button onClick={openHandler}>Drawer</button>
      <button onClick={LogoutHandler}>Logout</button>
    </div>
  );
}

export default NavBar;
