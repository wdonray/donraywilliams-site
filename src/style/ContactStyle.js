import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import config from "../data/config";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "80vh",
    padding: "1vh 5vw 30vh 5vw",
    display: "flex",
  },
  headerText: {
    color: config.colors.white,
    fontWeight: "bold",
    letterSpacing: "0.1em",
  },
  bodyText: {
    width: "75vw",
    marginBottom: "3vh",
    textAlign: "center",
    color: config.colors.white,
    letterSpacing: "0.1em",
    opacity: 0.8,
    "@media (min-device-width: 1224px)": {
      width: "50vw",
    },
  },
  button: {
    color: config.colors.white,
    letterSpacing: "0.1em",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "95vw",
    "@media (min-device-width: 1224px)": {
      width: "30vw",
    },
  },
  nameText: {
    color: config.colors.white,
    marginRight: "1vw",
    width: "45vw",
    "@media (min-device-width: 1224px)": {
      width: "12vw",
    },
  },
  emailText: {
    color: config.colors.white,
    width: "45vw",
    "@media (min-device-width: 1224px)": {
      width: "12vw",
    },
  },
  topInputs: {
    marginBottom: "1vh",
    marginTop: "1vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageText: { color: config.colors.white },
  messageInput: {
    width: "100%",
    height: "10vh",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const CustomText = withStyles((theme) => ({
  root: {
    "& .MuiInputLabel-outlined": {
      color: config.colors.white,
      opacity: 0.7,
    },
    "& label.Mui-focused": {
      color: config.colors.white,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: config.colors.blue,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: config.colors.black,
        backgroundColor: "#2D3748",
        zIndex: -10,
      },
      "&:hover fieldset": {
        borderColor: config.colors.blue,
      },
      "&.Mui-focused fieldset": {
        borderColor: config.colors.blue,
      },
    },
  },
}))(TextField);

export const NormalButton = withStyles((theme) => ({
  root: {
    color: config.colors.white,
    textTransform: "none",
    backgroundColor: config.colors.blue,
    marginTop: '1vh',
    alignSelf: 'center'
  },
}))(Button);

export default useStyles;
