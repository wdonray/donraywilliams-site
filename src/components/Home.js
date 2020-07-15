import React from "react";
import { Button, Typography } from "@material-ui/core";
import CenterContainer from "./CenterContainer";
import useStyles, { ColorButton, EmailLink } from "../style/HomeStyle";
import config from "../data/config";

const Home = () => {
  const classes = useStyles();
  return (
    <CenterContainer>
      <div className={classes.root}>
        <Typography variant="body2">
          <span role="img" aria-label="wave" className={classes.intro}>
            Hello, my name is 👋🏾
          </span>
        </Typography>
        <Typography variant="h1" className={classes.name}>
          {config.name}.
        </Typography>
        <Typography variant="h2" className={classes.subName}>
          I am a passionate developer.
        </Typography>
        <Typography variant="body1" className={classes.body}>
          {config.siteDescription}
        </Typography>
        <EmailLink underline="none" href={`mailto:${config.email}`}>
          <ColorButton variant="outlined">Let's Chat</ColorButton>
        </EmailLink>
      </div>
    </CenterContainer>
  );
};
export default Home;
