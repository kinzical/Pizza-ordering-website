import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { PageNotFound } from "../Shared/Presentations/PageNotFound/PageNotFound"
import { ForgotPassword } from "../Auth/Presentations/ForgotPassword/ForgotPassword";
import { Login } from "../Auth/Presentations/Login/Login";

export const Auth = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.url + "/login"} component={Login} />
      <Route path={match.url + "/forgot-password"} component={ForgotPassword} />
      <Redirect path={match.url + '/'} exact={true} to={match.url + '/login'}/>
      <Route component={PageNotFound} />
    </Switch>
  );
};
