import React from "react";

function SideMenu({ open }) {
  return (
    <div
      style={{
        width: `${open ? "18rem" : "0px"}`,
        background: "aqua",
        display: `${open ? "block" : "none"}`,
      }}
    >
      SideMenu
    </div>
  );
}

export default SideMenu;
