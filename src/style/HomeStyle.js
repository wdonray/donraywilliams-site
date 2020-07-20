import { makeStyles, withStyles } from "@material-ui/core/styles";
import config from "../data/config";
import { Button, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: '100vh',
    textAlign: "left",
    padding: "1vh 5vw 30vh 5vw",
    display: 'flex',
    "@media (min-device-width: 1224px)": {
      padding: "10vh 5vw 0 5vw",
    },
  },
  content: { },
  logoContainer: { },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "60vw",
    height: "auto",
    "@media (min-device-width: 1224px)": { 
      width: "40vw",
    }
  },
  intro: {
    color: config.colors.red,
    letterSpacing: "0.1em",
  },
  name: {
    color: config.colors.blue,
    letterSpacing: "0.1em",
  },
  subName: {
    color: config.colors.white,
    marginBottom: "10px",
    letterSpacing: "0.1em",
  },
  body: {
    color: config.colors.white,
    opacity: "0.8",
    marginBottom: "30px",
    letterSpacing: "0.1em",
    "@media (min-device-width: 1224px)": {
      paddingRight: "15vw",
      letterSpacing: "0.1em",
    },
  },
  buttonContainer: {
    display: "flex",
  },
  button: {
    marginRight: "10px",
  },
}));

export const NormalButton = withStyles((theme) => ({
  root: {
    color: config.colors.white,
    textTransform: "none",
    backgroundColor: config.colors.blue,
  },
}))(Button);

export const LightButton = withStyles((theme) => ({
  root: {
    color: config.colors.white,
    textTransform: "none",
    backgroundColor: config.colors.gray,
  },
}))(Button);

export const EmailLink = withStyles((theme) => ({
  root: {
    letterSpacing: "0.1em",
  },
}))(Link);

export default useStyles;
