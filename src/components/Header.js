import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import useStyles, {
  ColorButton,
  ColorAppBar,
  ColorLink,
} from "../style/HeaderStyle";
import Resume from "../data/Resume.pdf";
import * as _ from "lodash";
import config from "../data/config";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ColorAppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Donray Williams
          </Typography>
          {_.map(config.navLinks, (x, id) => (
            <div className={classes.links}>
              <ColorLink underline="none">
                <span style={{color: config.colors.red}}>{`0${id + 1}. `}</span>
                {`${x.name}`}
              </ColorLink>
            </div>
          ))}
          <ColorButton onClick={() => window.open(Resume)} variant="outlined">
            Resume
          </ColorButton>
        </Toolbar>
      </ColorAppBar>
    </div>
  );
};
export default Header;
