import React from "react";
import { Typography } from "@material-ui/core";
import CenterContainer from "./CenterContainer";
import useStyles from "../style/AboutStyle";
import TempPhoto from "../data/TempPhoto.svg";
import * as _ from "lodash";

const About = ({ history, direction, isDesktopOrLaptop, config }) => {
  const classes = useStyles();
  // let keyWords = ["AIE", "Stuller"];

  let colorKeywords = (data) => {
    var parts = data.split(/(\Stuller+\b)/gi);
    for (var i = 1; i < parts.length; i += 2) {
      parts[i] = (
        <span
          key={i}
          style={{
            color:
              parts[i] === "Stuller" ? config.colors.blue : config.colors.white,
          }}
        >
          {parts[i]}
        </span>
      );
    }
    return <span>{parts}</span>;
  };

  return (
    <CenterContainer>
      <div
        className={classes.root}
        style={{
          flexDirection: direction,
          alignItems: direction === "row" ? "flex-start" : "center",
          justifyContent: direction === "row" ? "center" : "space-evenly",
        }}
      >
        <div className={classes.item}>
          <Typography variant="body1" className={classes.content}>
            {_.map(_.split(config.aboutMe, "\n"), (item, key) => (
              <span key={key}>
                {colorKeywords(item)}
                <br />
                <br />
              </span>
            ))}
          </Typography>
          <ul className={classes.skillsList}>
            {_.map(config.skills, (skill) => (
              <li key={skill} className={classes.skillsContent}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            className={classes.selfPhoto}
            src={TempPhoto}
            alt={"selfPhoto"}
          />
        </div>
      </div>
    </CenterContainer>
  );
};
export default About;
