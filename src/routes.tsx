import React from "react";

const HomePage = React.lazy(() => import("./pages/home/HomePage.tsx"));

const routes = [
  { path: "/admin/dashboard/home", name: "Dashboard", element: HomePage },
];

export default routes;
