import ProfilePage from "views/profile";
import Property from "views/property";
import UserPage from "views/users";
import AgentPage from "views/agents";
import CareerPage from "views/careers";
// import OnlineInspectionPage from "views/online_inspection";
import ExpertPage from "views/experts";
// import ReservedHouse from "views/reserved_house";

var routes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-bank",
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  {
    path: "/properties",
    name: "Properties",
    icon: "nc-icon nc-bank",
    component: Property,
    layout: "/admin",
  },
  // {
  //   path: "/reserve-house",
  //   name: "Reserved Houses",
  //   icon: "nc-icon nc-bell-55",
  //   component: ReservedHouse,
  //   layout: "/admin",
  // },
  // {
  //   path: "/reserve-land",
  //   name: "Reserved Land",
  //   icon: "nc-icon nc-bell-55",
  //   component: Property,
  //   layout: "/admin",
  // },
  // {
  //   path: "/online-inspection",
  //   name: "Online Inspection",
  //   icon: "nc-icon nc-bell-55",
  //   component: OnlineInspectionPage,
  //   layout: "/admin",
  // },
  {
    path: "/agent",
    name: "Agents",
    icon: "nc-icon nc-user-run",
    component: AgentPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    icon: "nc-icon nc-user-run",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/career",
    name: "Career",
    icon: "nc-icon nc-user-run",
    component: CareerPage,
    layout: "/admin",
  },
  {
    path: "/expert",
    name: "Experts",
    icon: "nc-icon nc-user-run",
    component: ExpertPage,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: ProfilePage,
    layout: "/admin",
  },
];
export default routes;
