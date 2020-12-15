import React from "react";
import { Router } from "react-router";

import App from "../containers/app";

import HomeRoute from "./home";

function Routes(props) {
  const { history } = props;
  return (
    <App {...props}>
      <Router history={history}>
        <HomeRoute />
      </Router>
    </App>
  );
}

export default Routes;
