import React, { useState, useEffect } from "react";
import {
  Toolbar,
  Typography,
  SvgIcon,
  Drawer,
  IconButton,
  ClickAwayListener,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import useStyles, {
  ColorButton,
  ColorAppBar,
  ColorLink,
  ColorDivider,
} from "../style/HeaderStyle";
import Resume from "../data/Resume.pdf";
import * as _ from "lodash";
import config from "../data/config";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { useMediaQuery } from "react-responsive";
import CloseIcon from "@material-ui/icons/Close";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../data/logo.png";

const Header = () => {
  const classes = useStyles();
  let history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
                  <div className={classes.titleContainer}>
                    <img
                      className={classes.logo}
                      onClick={() => history.push("/")}
                      src={logo}
                      alt={"Logo"}
                    />
                  </div>
                  {/* <SvgIcon component={Logo} fontSize="large" /> */}
                  {/* <img className={classes.logo} src={Logo} alt={'Logo'}/> */}
                  {!isDesktopOrLaptop ? (
                    <React.Fragment>
                      <ClickAwayListener onClickAway={handleDrawerClose}>
                        <div>
                          <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(
                              classes.menuButton,
                              open && classes.hide
                            )}
                          >
                            <MenuIcon />
                          </IconButton>
                          <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="right"
                            open={open}
                            classes={{
                              paper: classes.drawerPaper,
                            }}
                          >
                            <div className={classes.drawerHeader}>
                              <IconButton onClick={handleDrawerClose}>
                                <CloseIcon
                                  style={{ color: config.colors.white }}
                                />
                              </IconButton>
                            </div>
                            <List>
                              {_.map(_.slice(config.navLinks, 1), (x, id) => (
                                <ListItem className={classes.links} key={x.url}>
                                  <ColorLink underline="none" href={x.url}>
                                    <ListItemText>
                                      <Typography variant="body2">
                                        {x.name}
                                      </Typography>
                                    </ListItemText>
                                  </ColorLink>
                                </ListItem>
                              ))}
                            </List>
                            <ColorDivider />
                            <ColorButton onClick={() => window.open(Resume)}>
                              <Typography variant="button">Resume</Typography>
                            </ColorButton>
                          </Drawer>
                        </div>
                      </ClickAwayListener>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {_.map(_.slice(config.navLinks, 1), (x, id) => (
                        <div className={classes.links} key={x.url}>
                          <ColorLink underline="none" href={x.url}>
                            <Typography variant="body2">{x.name}</Typography>
                          </ColorLink>
                        </div>
                      ))}
                      <ColorButton
                        onClick={() => window.open(Resume)}
                        variant="contained"
                      >
                        Resume
                      </ColorButton>
                    </React.Fragment>
                  )}
                </Toolbar>
              </animated.div>
            )
        )}
      </ColorAppBar>
    </div>
  );
};
export default Header;
