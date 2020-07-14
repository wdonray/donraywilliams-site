import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, AppBar, Link } from "@material-ui/core";
import config from "../data/config";
// import {isDesktopOrLaptop} from "../util/sizeMatters"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: config.colors.red,
    flexGrow: 1,
    cursor: "pointer",
    letterSpacing: "0.1em",
    fontSize: '1.5vw',
  },
  links: {
    marginRight: 20,
    color: config.colors.white,
    fontSize: '1vw',
  },
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
    minHeight: 'auto',
    minWidth: '2vw',
    fontSize: '1vw',
    color: config.colors.white,
    borderColor: config.colors.orange,
    "&:hover": {
      backgroundColor: config.colors.gray,
      color: config.colors.red,
    },
  },
}))(Button);

export default useStyles;
