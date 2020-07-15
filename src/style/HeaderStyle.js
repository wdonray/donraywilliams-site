import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, AppBar, Link } from "@material-ui/core";
import config from "../data/config";
// import {isDesktopOrLaptop} from "../util/sizeMatters"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleContainer: {
    flexGrow: 1,
    "@media (min-device-width: 1224px)": {
      marginRight: 10,
    },
  },
  title: {
    width: '50%',
    color: config.colors.red,
    cursor: "pointer",
    letterSpacing: "0.1em",
  },
  logo: {
    cursor: "pointer",
    "@media (min-device-width: 1224px)": {
      marginRight: 10,
    },
  },
  links: {
    marginRight: 10,
    "@media (min-device-width: 1224px)": {
      marginRight: 20,
    },
    color: config.colors.white,
  },
  drawer: {
    
  },
  drawerPaper: {
    width: '50vw',
    backgroundColor: config.colors.black
  }
}));

export const ColorLink = withStyles((theme) => ({
  root: {
    letterSpacing: "0.1em",
    color: config.colors.white,
    "&:hover": {
      color: config.colors.red,
    },
  },
}))(Link);

export const ColorAppBar = withStyles((theme) => ({
  root: {
    backgroundColor: config.colors.black,
    height: config.navHeight,
  },
}))(AppBar);

export const ColorButton = withStyles((theme) => ({
  root: {
    color: config.colors.white,
    borderColor: config.colors.orange,
    "&:hover": {
      backgroundColor: config.colors.gray,
      color: config.colors.red,
    },
  },
}))(Button);

export default useStyles;
