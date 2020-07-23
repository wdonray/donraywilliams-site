import { makeStyles } from "@material-ui/core/styles";
import config from "../data/config";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "1vh 5vw 30vh 5vw",
    display: "flex",
  },
  item: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  expContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  selectableCard: {
    color: config.colors.white,
    width: "75vw",
    height: "auto",
    marginBottom: "5vh",
    paddingLeft: "1vw",
    "@media (min-device-width: 1224px)": {
      width: "30vw",
      height: "auto",
    },
    "&:hover": {
      cursor: "pointer",
      color: config.colors.blue,
      backgroundColor: config.colors.lightNavy,
    },
  },
  selectedCard: {
    borderLeft: "2px solid",
    backgroundColor: config.colors.lightNavy,
    color: config.colors.blue,
    width: "75vw",
    height: "auto",
    marginBottom: "5vh",
    paddingLeft: "1vw",
    "@media (min-device-width: 1224px)": {
      width: "30vw",
      height: "auto",
    },
    "&:hover": {
      cursor: "default",
    },
  },
  cardText: { letterSpacing: "0.1em" },
  jobDescContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    overflow: "auto",
    color: config.colors.blue,
    height: "50vh",
    width: "100vw",
    "@media (min-device-width: 1224px)": {
      height: "auto",
      width: "45vw",
      overflow: "hidden",
    },
  },
  descHeader: {},
  descHeaderPos: { letterSpacing: "0.1em", fontWeight: "bold" },
  descHeaderTime: {
    color: config.colors.white,
    opacity: 0.8,
    letterSpacing: "0.1em",
    marginBottom: "3vh",
  },
  descText: {
    color: config.colors.white,
    opacity: 0.8,
    letterSpacing: "0.1em",
  },
  descLi: {
    marginBottom: "3vh",
  },
}));

export default useStyles;
