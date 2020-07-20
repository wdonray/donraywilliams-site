import React, {useEffect, useState} from "react";
import { Button, Typography } from "@material-ui/core";
import CenterContainer from "./CenterContainer";
import useStyles, { NormalButton, LightButton } from "../style/HomeStyle";
import homeIll from "../data/home_ill.svg";
import { useHistory } from "react-router-dom";

const Home = ({ direction, config }) => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <CenterContainer>
      <div
        className={classes.root}
        style={{
          flexDirection: direction,
          alignItems: direction === "row" ? "flex-start" : "center",
          justifyContent: direction === "row" ? "center" : "space-between",
        }}
      >
        <div className={classes.item}>
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
        </div>
        <div className={classes.item}>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={homeIll} alt={"Logo"} />
          </div>
        </div>
      </div>
    </CenterContainer>
  );
};
export default Home;
