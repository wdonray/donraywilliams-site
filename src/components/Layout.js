import React, { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import * as _ from "lodash";
import config from "../data/config";
import { animated, useTransition } from "react-spring";
import { useLocation } from "react-router-dom";
import SidePanels from "./SidePanels";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -50%, 0)" },
  });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  let history = useHistory();
  let direction = isDesktopOrLaptop ? "row" : "column";

  return (
    <React.Fragment>
      <Header
        isDesktopOrLaptop={isDesktopOrLaptop}
        direction={direction}
        config={config}
      />
      <div
        style={{ marginTop: isDesktopOrLaptop ? config.navHeight : "8vh" }}
      />
      <SidePanels
        isDesktopOrLaptop={isDesktopOrLaptop}
        direction={direction}
        config={config}
      />
      <Footer />
      {_.map(
        transitions,
        ({ item, props, key }) =>
          item && (
            <animated.div key={key} style={props}>
              <Switch>
                {_.map(config.navLinks, (x) => (
                  <Route
                    exact={x.url === "/"}
                    path={x.url}
                    key={x.url}
                    render={() => (
                      <x.component
                        histroy={history}
                        isDesktopOrLaptop={isDesktopOrLaptop}
                        direction={direction}
                        config={config}
                      />
                    )}
                  />
                ))}
              </Switch>
            </animated.div>
          )
      )}
    </React.Fragment>
  );
};
export default Layout;
