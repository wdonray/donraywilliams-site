import { makeStyles, withStyles } from "@material-ui/core/styles";
import config from "../data/config";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "1vh 5vw 30vh 5vw",
    display: "flex",
  },
  logo: {
    width: "80vw",
    height: "auto",
    "@media (min-device-width: 1224px)": { 
      width: "60vw",
    }
  },
}));

export default useStyles;
