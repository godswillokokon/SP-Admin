import Dashboard from "views/dashboard";
import Property from "views/property";
import ProfilePage from "views/profile";
import UserPage from "views/users";
import AgentPage from "views/agents";
import CareerPage from "views/careers";
import OnlineInspectionPage from "views/online_inspection";
import ExpertPage from "views/experts";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/properties",
    name: "Property",
    icon: "nc-icon nc-bell-55",
    component: Property,
    layout: "/admin",
    subMenu: [
      {
        path: "/reserve-house",
        name: "Reserved Houses",
        icon: "nc-icon nc-bell-55",
        component: Property,
        layout: "/admin",
      },
      {
        path: "/reserve-land",
        name: "Reserved Land",
        icon: "nc-icon nc-bell-55",
        component: Property,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/online-inspection",
    name: "Online Inspection",
    icon: "nc-icon nc-bell-55",
    component: OnlineInspectionPage,
    layout: "/admin",
  },
  {
    path: "/agent",
    name: "Agents",
    icon: "nc-icon nc-user-run",
    component: AgentPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "All User",
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

  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];
export default routes;
