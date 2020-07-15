import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Layout from "./components/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import config from "../src/data/config";

import { BrowserRouter as Router } from "react-router-dom";
let theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "2rem",
      "@media (min-device-width: 1224px)": {
        fontSize: "5rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      "@media (min-device-width: 1224px)": {
        fontSize: "4rem",
      },
    },
    h6: {
      fontSize: ".8rem",
      "@media (min-device-width: 1224px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: ".9rem",
      "@media (min-device-width: 1224px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontSize: ".7rem",
      "@media (min-device-width: 1224px)": {
        fontSize: "1rem",
      },
    },
    button: {
      fontSize: ".7rem",
      "@media (min-device-width: 1224px)": {
        fontSize: "1rem",
      },
    },
  },
  palette: {
    background: {
      default: config.colors.black,
    },
  },
});

// theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
