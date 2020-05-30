import React, { Suspense, lazy } from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import LoadingPage from "views/components/LoadingPage";

const Properties = lazy(() => import("./pages/Properties"));
const AddProperty = lazy(() => import("./pages/AddProperty"));
const EditProperty = lazy(() => import("./pages/EditProperty"));

const Routes = () => {
  const match = useRouteMatch();
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route path={`${match.path}/new`} component={AddProperty} exact />
        <Route path={`${match.path}/edit`} component={EditProperty} exact />
        <Route path={`${match.path}`} component={Properties} exact />
        <Route component={() => <Redirect to="/404" />} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
