import React from "react";
import { Button, Typography, Grid } from "@material-ui/core";
import CenterContainer from "./CenterContainer";
import useStyles, { NormalButton, LightButton } from "../style/HomeStyle";
import config from "../data/config";
import homeIll from "../data/home_ill.svg";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";

const Home = () => {
  const classes = useStyles();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  let history = useHistory();
  let direction = isDesktopOrLaptop ? "row" : "column";
  return (
    <CenterContainer>
      <Grid
        className={classes.root}
        container
        direction={direction}
        justify={direction === "row" ? "flex-start" : "center"}
        alignItems={direction === "row" ? "flex-start" : "center"}
      >
        <Grid item xs={direction === "row" ? 6 : false}>
          <div className={classes.content}>
            <Typography variant="h1" className={classes.name}>
              {config.name}
            </Typography>
            <Typography variant="h2" className={classes.subName}>
              Passionate Web Developer
            </Typography>
            <Typography variant="body1" className={classes.body}>
              {config.siteDescription}
            </Typography>
            <div className={classes.buttonContainer}>
              <NormalButton
                size={"large"}
                className={classes.button}
                variant="contained"
                onClick={() => history.push(config.navLinks[3].url)}
              >
                <Typography variant="body2">See my work</Typography>
              </NormalButton>
              <LightButton
                className={classes.button}
                variant="contained"
                onClick={() => history.push(config.navLinks[1].url)}
              >
                <Typography variant="body2">Look at my skills</Typography>
              </LightButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={direction === "row" ? 6 : false}>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={homeIll} alt={"Logo"} />
          </div>
        </Grid>
      </Grid>
    </CenterContainer>
  );
};
export default Home;
