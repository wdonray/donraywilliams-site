import { makeStyles, withStyles } from "@material-ui/core/styles";
import config from "../data/config";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 'auto',
    textAlign: "left",
    padding: "1vh 5vw 30vh 5vw",
    display: 'flex',
    "@media (min-device-width: 1224px)": {
      padding: "10vh 5vw 0 5vw",
    },
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
    width: '25vw',
    "@media (min-device-width: 1224px)": {
      width: '15vw',
    },

  },
  item: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: 'column'
  },
  skillsList: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '10vh',
    width: '25vw'
  },
  selfPhoto: {
    width: "40vw",
    height: "auto",
    "@media (min-device-width: 1224px)": {
      width: "40vw",
    },
  },
}));

export default useStyles;
