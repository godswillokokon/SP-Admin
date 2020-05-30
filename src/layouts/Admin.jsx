import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import routes from "routes.js";
import useAuth from "hooks/useAuth";

const Dashboard = (props) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="wrapper">
      <Sidebar {...props} routes={routes} />
      <div className="main-panel">
        <DemoNavbar {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
