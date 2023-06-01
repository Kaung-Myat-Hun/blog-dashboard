import React, { useEffect, useState } from "react";
import { LogoutHandler } from "../../services/LogoutHandler";

function NavBar() {
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
    <div className="flex justify-between ">
      {admin ? <p>admin</p> : <p>co-op</p>}
      <button onClick={LogoutHandler}>Logout</button>
    </div>
  );
}

export default NavBar;
