import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import CenterContainer from "./CenterContainer";
import useStyles from "../style/ExperienceStyle";
import * as _ from "lodash";

const Experience = ({ direction, config }) => {
  const classes = useStyles();
  const [selected, updateSelected] = useState(0);

  return (
    <CenterContainer>
      <div
        className={classes.root}
        style={{
          flexDirection: direction,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className={classes.expContainer}>
          {_.map(config.experience, (item, id) => (
            <div
              key={id + item}
              className={
                selected === id ? classes.selectedCard : classes.selectableCard
              }
              onClick={() => updateSelected(id)}
            >
              <Typography className={classes.cardText} variant={"h6"}>
                {item.name}
              </Typography>
            </div>
          ))}
        </div>
        <div className={classes.item}>
          <ul className={classes.jobDescContainer}>
            <div className={classes.descHeader}>
              <Typography className={classes.descHeaderPos} variant={"h6"}>
                {config.experience[selected].position}
              </Typography>
              <Typography className={classes.descHeaderTime} variant={"body1"}>
                {config.experience[selected].timeWorked}
              </Typography>
            </div>
            {_.map(config.experience[selected].description, (item, id) => (
              <li key={id + item} className={classes.descLi}>
                <Typography className={classes.descText} variant={"body1"}>
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CenterContainer>
  );
};
export default Experience;
