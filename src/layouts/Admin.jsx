import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbars/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes.js";
import useAuth from "hooks/useAuth";

const Dashboard = (props) => {
  const isAuthenticated = useAuth();
  return (
    <>
      {!isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <div className="wrapper">
          <Sidebar {...props} routes={routes} />
          <div className="main-panel">
            <Navbar {...props} />
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
      )}
    </>
  );
};

export default Dashboard;
