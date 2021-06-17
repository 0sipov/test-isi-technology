import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CreateUserPage from "../pages/CreateUserPage/CreateUserPage";
import UpdateUserPage from "../pages/UpdateUserPage/UpdateUserPage";
import NoMatch from "../pages/NoMatch";
import { HOME_PAGE, CREATE_USER_PAGE, UPDATE_USER_PAGE } from "./routes";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME_PAGE} component={HomePage} exact></Route>
        <Route path={CREATE_USER_PAGE} component={CreateUserPage} exact></Route>
        <Route path={UPDATE_USER_PAGE} component={UpdateUserPage} exact></Route>
        <Route path={UPDATE_USER_PAGE} component={HomePage} exact></Route>
        <Route component={NoMatch} exact></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
