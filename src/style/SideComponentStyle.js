import { makeStyles, withStyles } from "@material-ui/core/styles";
import config from "../data/config";

const useStyles = makeStyles((orientation) => ({
  left: {
    width: "40px",
    position: "fixed",
    bottom: 0,
    left: "40px",
    right: "auto",
    zIndex: 10,
    marginBottom: '50px'
  },
  right: {
    width: "40px",
    position: "fixed",
    bottom: 0,
    right: "40px",
    left: "auto",
    zIndex: 10,
    marginBottom: '50px'
  },
}));

export default useStyles;
