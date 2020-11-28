import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Auth } from "../../Components/App/Modules/Auth/Auth";
//import { PrivateRoute } from "./modules/shared/containers/PrivateRoute";
import { Dashboard } from "../../Components/App/Modules/Dashboard/Dashboard"
import { PageNotFound } from "../../Components/App/Modules/Shared/Presentations/PageNotFound/PageNotFound";
import { Admin } from '../../Components/App/Modules/Admin/Presentations/Admin/Admin';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/admin" component={Admin} />
      <Redirect path={'/'} exact={true} to={'/auth'} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
