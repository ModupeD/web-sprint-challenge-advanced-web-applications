import React from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import View from "./View";
import Logout from "./Logout";
export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={() => {
          <Route exact path="/view">
            <View />
          </Route>;
          <Route exact path="/logout">
            <Logout />
          </Route>;
        }}
      ></Route>
    </div>
  );
}

//Task List:
//1. Complete PrivateRoute
