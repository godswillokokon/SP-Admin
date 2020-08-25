import React, { Suspense, lazy } from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import LoadingPage from "views/components/LoadingPage";

const Promo = lazy(() => import("./pages/allPromo"));
const AddPromo = lazy(() => import("./pages/addPromo"));
const UpdatePromo = lazy(() => import("./pages/updatePromo"));

const Routes = () => {
  const match = useRouteMatch();
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route path={`${match.path}/new`} component={AddPromo} exact />
        <Route path={`${match.path}/update`} component={UpdatePromo} exact />
        <Route path={`${match.path}`} component={Promo} exact />
        <Route component={() => <Redirect to="/404" />} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
