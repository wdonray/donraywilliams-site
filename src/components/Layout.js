import React, { Suspense } from "react";
import Header from "./Header";
import Footer from './Footer'
import { Switch, Route } from "react-router-dom";
import * as _ from "lodash";
import config from "../data/config";
import { animated, useTransition } from "react-spring";
import { useLocation } from "react-router-dom";
import SidePanels from "./SidePanels";

const Layout = () => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -50%, 0)" },
  });
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: config.navHeight }} />
      <SidePanels/>
      <Footer/>
      {_.map(transitions, ({ item, props, key }) => (
        <animated.div key={key} style={props}>
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
        </animated.div>
      ))}
    </React.Fragment>
  );
};
export default Layout;
