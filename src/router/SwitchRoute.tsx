import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import Landing from "../features/landing/Landing";

const SwitchRoute: React.FC = () => {
  return (
    <Switch>
      <Route path={routes.landing}>
        <div>LANDING</div>
      </Route>
      <Route path={routes.login}>
        <div>LOGIN</div>
      </Route>
      <Route path={routes.register}>
        <div>REGISTER</div>
      </Route>
      <Route path={routes.list}>
        <div>LIST</div>
      </Route>
      <Route path={routes.home}>
        <Landing />
      </Route>
    </Switch>
  );
};

export default SwitchRoute;
