import React from "react";
import { Button, Typography } from "@material-ui/core";
import CenterContainer from "./CenterContainer";
import useStyles, { NormalButton, LightButton } from "../style/HomeStyle";
import config from "../data/config";
import homeIll from "../data/home_ill.svg";

const Home = () => {
  const classes = useStyles();
  return (
    <CenterContainer>
      <div className={classes.root}>
        <div class={classes.content}>
          {/* <Typography variant="body2">
            <span role="img" aria-label="wave" className={classes.intro}>
              Hello, my name is 👋🏾
            </span>
          </Typography> */}
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
            >
              <Typography variant="body2">See my work</Typography>
            </NormalButton>
            <LightButton className={classes.button} variant="contained">
              <Typography variant="body2">Look at my skills</Typography>
            </LightButton>
          </div>
        </div>
        <div className={classes.logoContainer} >
          <img className={classes.logo} src={homeIll} alt={"Logo"} />
        </div>
      </div>
    </CenterContainer>
  );
};
export default Home;
