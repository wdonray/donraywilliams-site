import { makeStyles, withStyles } from "@material-ui/core/styles";
import config from "../data/config";
import { Button, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
    textAlign: "left",
    padding: "5vh 5vw 0 5vw",
    "@media (min-device-width: 1224px)": {
      padding: "15vh 15vw 0 15vw",
      // backgroundColor: "blue",
    },
  },
  intro: {
    color: config.colors.red,
    letterSpacing: "0.1em",
  },
  name: {
    color: config.colors.white,
    letterSpacing: "0.1em",
  },
  subName: {
    color: config.colors.white,
    opacity: "0.8",
    marginBottom: "10px",
    letterSpacing: "0.1em",
  },
  body: {
    color: config.colors.white,
    opacity: "0.8",
    marginBottom: "30px",
    letterSpacing: "0.1em",
    "@media (min-device-width: 1224px)": {
      paddingRight: "30vw",
      letterSpacing: "0.1em",
    },
  },
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
