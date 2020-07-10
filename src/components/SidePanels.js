import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "../style/SidePanelsStyle";
import { ColorLink } from "../style/HeaderStyle";
import config from "../data/config";

const SidePanels = () => {
  const classes = useStyles();
  const href = `mailto:${config.email}`;
  return (
    <div className={classes.root}>
      <div className={classes.leftPanel}>
        <div className={classes.line} />
        Left
      </div>
      <div className={classes.rightPanel}>
        <ColorLink underline="none" href={href}>
          {config.email}
        </ColorLink>
        <div className={classes.line} />
      </div>
    </div>
  );
};
export default SidePanels;
