import React, { useEffect, useState } from "react";
import {
  adminSideMenuData,
  coopSideMenuData,
} from "./SideMenuData/SideMenuData";

function SideMenu({ open }) {
  const [admin, setAdmin] = useState(false);
  const role = localStorage.getItem(btoa("role"));
  useEffect(() => {
    if (atob(role) === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, []);

  const [expand, setExpand] = useState(false);

  const expandHandler = (e: any) => {
    e.preventDefault();
    setExpand(!expand);
  };

  return (
    <div
      style={{
        width: `${open ? "18rem" : "0rem"}`,
        height: "93vh",
        overFlowY: "scroll",
        backgroundColor: "#7f7f7f",
      }}
    >
      {admin ? (
        <ul style={{ display: `${open ? "block" : "none"}`, color: "#000" }}>
          {adminSideMenuData.map((item, index) => (
            <li key={index}>
              <p
                onClick={
                  item.child.length > 0
                    ? expandHandler
                    : () => {
                        window.location.assign(item.route);
                      }
                }
                // onClick={item.child.length > 0 ? expandHandler : routeHandler}
              >
                {item.name}
              </p>
              {item.child.length > 0 ? (
                <li style={{ display: `${expand ? "block" : "none"}` }}>
                  {item.child.map((cItem, index) => (
                    <p
                      key={index}
                      onClick={() => {
                        window.location.assign(cItem.route);
                      }}
                    >
                      {cItem.name}
                    </p>
                  ))}
                </li>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {coopSideMenuData.map((item, index) => (
            <li key={index}>
              <p
                onClick={
                  item.child.length > 0
                    ? expandHandler
                    : () => {
                        window.location.assign(item.route);
                      }
                }
              >
                {item.name}
              </p>
              {item.child.length > 0 ? (
                <li>
                  {item.child.map((cItem, index) => (
                    <p
                      key={index}
                      onClick={() => {
                        window.location.assign(cItem.route);
                      }}
                    >
                      {cItem.name}
                    </p>
                  ))}
                </li>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SideMenu;
