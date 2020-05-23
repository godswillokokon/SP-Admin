import Dashboard from "views/dashboard";
import Property from "views/property";
import ProfilePage from "views/profile";
import UserPage from "views/users";
// import UpgradeToPro from "views/Upgrade.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/property",
    name: "Property",
    icon: "nc-icon nc-bell-55",
    component: Property,
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
    path: "/user-page",
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
