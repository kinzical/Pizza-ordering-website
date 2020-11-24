import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Auth } from "../src/Components/Modules/Auth/Auth";
//import { PrivateRoute } from "./modules/shared/containers/PrivateRoute";
import { Dashboard } from "./Components/Modules/Dashboard/Dashboard"
import { PageNotFound } from "./Components/Modules/Shared/Presentations/PageNotFound/PageNotFound";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      <Route path="/dashboard" component={Dashboard} />
      <Redirect path={'/'} exact={true} to={'/auth'} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
