import React, { Suspense, lazy } from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import LoadingPage from "views/components/LoadingPage";

const Career = lazy(() => import("./pages/allCareer"));
const AddCareer = lazy(() => import("./pages/addCareer"));

const Routes = () => {
  const match = useRouteMatch();
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route path={`${match.path}/new`} component={AddCareer} exact />
        <Route path={`${match.path}`} component={Career} exact />
        <Route component={() => <Redirect to="/404" />} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
