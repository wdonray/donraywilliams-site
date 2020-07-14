import React, { useState, useEffect } from "react";
import { Toolbar, Typography, Container } from "@material-ui/core";
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
    from: {opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  
  useEffect(() => {
    set(true)
  })

  return (
    <div className={classes.root}>
      <ColorAppBar>
        {_.map(
          transitions,
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <Toolbar>
                  <div
                    onClick={() => history.push("/")}
                    className={classes.title}
                  >
                    Donray Williams
                  </div>
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
                  <ColorButton
                    onClick={() => window.open(Resume)}
                    variant="outlined"
                  >
                    Resume
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
