import React, { Suspense } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as _ from "lodash";
import config from "../data/config";

const Layout = () => {
  return (
    <Router>
      <Header />
      <div style={{ marginTop: config.navHeight }} />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {_.map(config.navLinks, (x) => (
            <Route
              exact={x.url === "/"}
              path={x.url}
              key={x.url}
              component={x.component}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
};
export default Layout;
