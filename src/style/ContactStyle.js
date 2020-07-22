import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Button, Link } from "@material-ui/core";
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
  messageText: {
    color: config.colors.white,
    width: "90vw",
    borderColor: 'transparent',
    backgroundColor: "#2D3748",
    height: "45vh",
    borderRadius: "4px",
    fontFamily: "Gotham SSm A, Gotham SSm B, sans-serif",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "normal",
    outline: "none",
    boxShadow: "transparent",
    transition:
      "0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out",
    "&:hover": {
      borderColor: config.colors.blue,
    },
    "&:focus": {
      borderColor: config.colors.blue,   
    },
    "& input": {
      backgroundColor: 'white'
    },
    "@media (min-device-width: 1224px)": {
      width: "30vw",
      height: "30vh",
    },
  },
  messageInput: {
    width: "100vw",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (min-device-width: 1224px)": {
      height: "85vh",
      width: "95vw",
    },
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
    marginTop: "1vh",
    alignSelf: "center",
  },
}))(Button);

export const SocialLink = withStyles((theme) => ({
  root: {
    padding: "10px",
    letterSpacing: "0.1em",
    color: config.colors.white,
    transition: "color 0.3s ease",
    "&:hover": {
      color: config.colors.blue,
    },
  },
}))(Link);

export default useStyles;
