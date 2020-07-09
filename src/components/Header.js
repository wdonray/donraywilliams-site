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
import { useHistory } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <ColorAppBar>
        <Toolbar>
          <Typography
            variant="h6"
            onClick={() => history.push("/")}
            className={classes.title}
          >
            Donray Williams
          </Typography>
          {_.map(_.slice(config.navLinks, 1), (x, id) => (
            <div className={classes.links} key={x.url}>
              <ColorLink underline="none" href={x.url}>
                <span style={{ color: config.colors.red }}>{`0${
                  id + 1
                }. `}</span>
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
