import React from "react";
import { LogoutHandler } from "../../services/LogoutHandler";

function NavBar() {
  return (
    <div>
      <button onClick={LogoutHandler}>Logout</button>
    </div>
  );
}

export default NavBar;
