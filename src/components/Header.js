import React, { useState, useEffect } from "react";
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
import { animated, useTransition } from "react-spring";

const Header = () => {
  const classes = useStyles();
  let history = useHistory();
  const [show, set] = useState(false);
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    set(true);
  });

  return (
    <div className={classes.root}>
      <ColorAppBar>
        {_.map(
          transitions,
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
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
                        <Typography variant="body2">
                          <span style={{ color: config.colors.red }}>{`0${
                            id + 1
                          }. `}</span>
                          {`${x.name}`}
                        </Typography>
                      </ColorLink>
                    </div>
                  ))}
                  <ColorButton
                    onClick={() => window.open(Resume)}
                    variant="outlined"
                  >
                    <Typography variant="button">Resume</Typography>
                  </ColorButton>
                </Toolbar>
              </animated.div>
            )
        )}
      </ColorAppBar>
    </div>
  );
};
export default Header;
