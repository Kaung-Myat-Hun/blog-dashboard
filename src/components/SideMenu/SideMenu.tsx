import React, { useEffect, useState } from "react";

function SideMenu({ open }) {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const role = localStorage.getItem(btoa("role"));
    if (atob(role) === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, []);
  return (
    <div
      style={{
        width: `${open ? "18rem" : "0px"}`,
        background: "aqua",
        display: `${open ? "block" : "none"}`,
      }}
    >
      {admin ? <div>Admin Side Menu</div> : <div>CoOp Side Menu</div>}
    </div>
  );
}

export default SideMenu;
