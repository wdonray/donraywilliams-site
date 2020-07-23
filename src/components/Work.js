import React from "react";
import CenterContainer from "./CenterContainer";
import useStyles from "../style/WorkStyle";
import UnderConstruction from  "../data/UnderConstruction.svg";

const Work = ({ direction, config }) => {
  const classes = useStyles();

  return (
    <CenterContainer>
      <div
        className={classes.root}
        style={{
          flexDirection: direction,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      <img className={classes.logo} src={UnderConstruction} alt={"Logo"} />
      </div>
    </CenterContainer>
  );
};
export default Work;
