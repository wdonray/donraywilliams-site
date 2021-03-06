import React from "react";
import {
  Toolbar,
  Typography,
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
import clsx from "clsx";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../data/Logo.png";

const Header = ({ isDesktopOrLaptop, config, history }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ColorAppBar>
        <Toolbar className={classes.toolBar}>
          <div className={classes.logoContainer}>
            <ColorLink underline="none" href={"/"}>
              <img className={classes.logo} src={logo} alt={"Logo"} />
            </ColorLink>
          </div>
          {!isDesktopOrLaptop ? (
            <div className={classes.rightContainer}>
              <ClickAwayListener onClickAway={handleDrawerClose}>
                <div>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
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
                        <CloseIcon style={{ color: config.colors.white }} />
                      </IconButton>
                    </div>
                    <List>
                      {_.map(_.slice(config.navLinks, 1), (x, id) => (
                        <ListItem className={classes.links} key={x.url}>
                          <ColorLink underline="none" href={x.url}>
                            <ListItemText>
                              <Typography variant="body2">{x.name}</Typography>
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
            </div>
          ) : (
            <div className={classes.rightContainer}>
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
            </div>
          )}
        </Toolbar>
      </ColorAppBar>
    </div>
  );
};
export default Header;
