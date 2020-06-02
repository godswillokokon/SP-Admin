import React, { Suspense, lazy } from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import LoadingPage from "views/components/LoadingPage";

const Agents = lazy(() => import("./pages/agents"));
const AddAgent = lazy(() => import("./pages/addAgent"));

const Routes = () => {
  const match = useRouteMatch();
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route path={`${match.path}/new`} component={AddAgent} exact />
        <Route path={`${match.path}`} component={Agents} exact />
        <Route component={() => <Redirect to="/404" />} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
