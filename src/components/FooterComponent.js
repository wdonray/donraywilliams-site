import React from "react";
import useStyles from "../style/FooterComponentStyle";

const FooterComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      {children}
    </div>
  );
};

export default FooterComponent;
