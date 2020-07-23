import React, { useLayoutEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import * as _ from "lodash";
import config from "../data/config";
import SidePanels from "./SidePanels";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";
import { RunParticleSim} from "./FloatingParticles";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  let history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  let direction = isDesktopOrLaptop ? "row" : "column";
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden",
        minWidth: "95vw",
      }}
    >
      <ToastContainer />
      <Header
        isDesktopOrLaptop={isDesktopOrLaptop}
        direction={direction}
        config={config}
      />
      <SidePanels
        isDesktopOrLaptop={isDesktopOrLaptop}
        direction={direction}
        config={config}
      />
      <div id='ParticleContainer'>
        <RunParticleSim />
      </div>
      <Switch>
        {_.map(config.navLinks, (x) => (
          <Route
            exact={x.url === "/"}
            path={x.url}
            key={x.url}
            component={(props) => (
              <x.component
                {...props}
                histroy={history}
                isDesktopOrLaptop={isDesktopOrLaptop}
                direction={direction}
                config={config}
              />
            )}
          />
        ))}
      </Switch>
      <Footer />
    </div>
  );
};
export default Layout;
