import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import Landing from "../features/landing/Landing";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import BuildsList from "../features/buildsList/BuildsList";
import UserSettings from "../features/userSettings/UserSettings";
import UserTagsSetup from "../features/userTagsSetup/UserTagsSetup";
import OrderComplete from "../features/orderComplete/OrderComplete";
import GenerateBuild from "../features/generateBuild/GenerateBuild";
import { useAppSelector } from "../core/store/hooks";

const SwitchRoute: React.FC = () => {
  const user = useAppSelector((x) => x.authSlice.user);

  return (
    <Switch>
      <Route path={routes.login}>
        <Login />
      </Route>
      <Route path={routes.register}>
        <Register />
      </Route>
      <Route path={routes.list}>
        <BuildsList />
      </Route>
      <Route path={routes.userSettings}>
        <UserSettings />
      </Route>
      <Route path={routes.userTags}>
        <UserTagsSetup />
      </Route>
      <Route path={routes.orderComplete}>
        <OrderComplete />
      </Route>
      <Route path={routes.generateBuild}>
        <GenerateBuild />
      </Route>
      <Route path={routes.home}>{user ? <BuildsList /> : <Landing />}</Route>
    </Switch>
  );
};

export default SwitchRoute;
