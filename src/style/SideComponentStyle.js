import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  left: {
    width: "40px",
    position: "fixed",
    bottom: 0,
    left: "20px",
    "@media (min-device-width: 1224px)": {
      left: "40px",
    },
    right: "auto",
    zIndex: 10,
    marginBottom: '50px'
  },
  right: {
    width: "40px",
    position: "fixed",
    bottom: 0,
    right: "20px",
    "@media (min-device-width: 1224px)": {
      right: "40px",
    },
    left: "auto",
    zIndex: 10,
    marginBottom: '50px'
  },
}));

export default useStyles;
