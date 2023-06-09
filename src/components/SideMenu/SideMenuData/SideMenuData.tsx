export const adminSideMenuData = [
  {
    name: "Dashboard",
    route: "/dashboard/home",
    child: [],
  },
  {
    name: "Table",
    route: "/dashboard/table",
    child: [
      { name: "Table One", route: "/dashboard/table/one", child: [] },
      { name: "Table Two", route: "/dashboard/table/two", child: [] },
    ],
  },
  {
    name: "Data",
    route: "/dashboard/data",
    child: [],
  },
  {
    name: "Contact",
    route: "/dashboard/contact",
    child: [],
  },
];

export const coopSideMenuData = [
  {
    name: "Dashboard",
    route: "coop/dashboard/home",
    child: [],
  },
  {
    name: "Table",
    route: "coop/dashboard/table",
    child: [
      { name: "Table One", route: "coop/dashboard/table/one", child: [] },
      { name: "Table Two", route: "coop/dashboard/table/two", child: [] },
    ],
  },
  {
    name: "Data",
    route: "coop/dashboard/data",
    child: [],
  },
  {
    name: "Contact",
    route: "coop/dashboard/contact",
    child: [],
  },
];
