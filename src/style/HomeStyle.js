import { makeStyles, withStyles } from "@material-ui/core/styles";
import config from "../data/config";
import { Button, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto%",
    height: "auto",
    margin: "200px",
    // backgroundColor: "red",
    "@media (min-device-width: 1224px)": {
      //   backgroundColor: "blue",
    },
  },
  intro: {
    color: config.colors.red,
  },
  name: {
    color: config.colors.red,
  },
  subName: {},
  body: {},
}));

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

export const EmailLink = withStyles((theme) => ({
  root: {
    letterSpacing: "0.1em",
  },
}))(Link);

export default useStyles;
