import React from "react";
import useStyles from "../style/SideComponentStyle";

const SideComponent = ({ children, orientation }) => {
  const classes = useStyles();
  return (
    <div className={orientation === "right" ? classes.right : classes.left}>
      {children}
    </div>
  );
};

export default SideComponent;
