import { makeStyles, withStyles } from "@material-ui/core/styles";
import config from "../data/config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    bottom: "0px",
    width: "100vw",
  },
  leftPanel: {
    float: "left",
    height: "35px",
    textAlign: "left",
    color: config.colors.white,
    transform: "rotate(-90deg)",
    display: "flex",
    alignItems: "center",
  },
  rightPanel: {
    float: "right",
    height: "35px",
    textAlign: "right",
    color: config.colors.white,
    transform: "rotate(90deg) translate(-20%)",
    display: "flex",
    alignItems: "center",
  },
  line: {
    backgroundColor: config.colors.gray,
    height: "3px",
    width: "150px",
    margin: "10px",
  },
}));

export default useStyles;
