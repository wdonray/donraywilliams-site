import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, AppBar, Link, Divider } from "@material-ui/core";
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
    width: "50%",
    color: config.colors.white,
    cursor: "pointer",
    letterSpacing: "0.1em",
  },
  logo: {
    width: '15vw',
    height: 'auto',
    cursor: "pointer",
    paddingTop: '.8vh',
    "@media (min-device-width: 1224px)": {
      paddingTop: '1vh',
      marginRight: 10,
      width: '7vw',
      height: 'auto',
    },
  },
  links: {
    marginRight: 10,
    "@media (min-device-width: 1224px)": {
      marginRight: 20,
    },
    color: config.colors.white,
  },
  drawer: {},
  drawerPaper: {
    width: "50vw",
    backgroundColor: config.colors.black,
  },
}));

export const ColorLink = withStyles((theme) => ({
  root: {
    letterSpacing: "0.1em",
    color: config.colors.white,
    "&:hover": {
      color: config.colors.redSplitComplementary.teal,
    },
  },
}))(Link);

export const ColorAppBar = withStyles((theme) => ({
  root: {
    backgroundColor: config.colors.red,
    height: '8vh',
    "@media (min-device-width: 1224px)": {
      height: config.navHeight,
    },
  },
}))(AppBar);

export const ColorButton = withStyles((theme) => ({
  root: {
    color: config.colors.white,
    borderColor: config.colors.redSplitComplementary.teal,
    backgroundColor: config.colors.blue,
    textTransform: "none",
    width: "25vw",
    marginLeft: "11vw",
    "@media (min-device-width: 1224px)": {
      width: "auto",
      marginLeft: "0",
      textTransform: "none",
    },
    "&:hover": {
      backgroundColor: config.colors.blue,
    },
  },
}))(Button);

export const ColorDivider = withStyles(() => ({
  root: {
    backgroundColor: config.colors.white,
    marginBottom: "10px",
  },
}))(Divider);

export default useStyles;
