import { makeStyles, withStyles } from "@material-ui/core/styles";
import config from "../data/config";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  socialLinksList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    margin: 0,
    listStyle: "none",
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
}));

export const EmailLink = withStyles((theme) => ({
  root: {
    letterSpacing: "0.1em",
    writingMode: "vertical-rl",
    color: config.colors.white,
    transition: "color 0.3s ease",
    "&:hover": {
      color: config.colors.blue,
    },
    "&:hover, &:focus": {
      transform: "translateY(-3px)",
    },
  },
}))(Link);

export const SocialLink = withStyles((theme) => ({
  root: {
    padding: "10px",
    letterSpacing: "0.1em",
    color: config.colors.white,
    transition: "color 0.3s ease",
    "&:hover": {
      color: config.colors.blue,
    },
    "&:hover, &:focus": {
      transform: "translateY(-3px)",
    },
  },
}))(Link);

export default useStyles;
