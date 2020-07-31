import { makeStyles } from "@material-ui/core/styles";
import config from "../data/config";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    textAlign: "left",
    padding: "1vh 5vw 30vh 5vw",
    display: "flex",
  },
  content: {
    letterSpacing: "0.1em",
    color: config.colors.white,
    whiteSpace: "pre-wrap",
  },
  skillsContent: {
    letterSpacing: "0.1em",
    color: config.colors.white,
    whiteSpace: "pre-wrap",
    width: "25vw",
    "@media (min-device-width: 1224px)": {
      width: "15vw",
    },
  },
  item: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  skillsList: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    height: "10vh",
    width: "25vw",
  },
  selfPhoto: {
    position: "absolute",
    width: "75vw",
    height: "auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    objectFit: "fill",
  },
}));

export default useStyles;
