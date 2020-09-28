import { makeStyles } from "@material-ui/core/styles";
import config from "../data/config";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "1vh 5vw 30vh 5vw",
    display: "flex",
  },
  divider: {
    content: "",
    width: "100%",
    height: "2px",
    position: "absolute",
    bottom: "0",
    right: '5%',
    left: '5%',
    backgroundImage:
      "linear-gradient(to right, transparent, rgb(48,49,51), transparent)",
  },
  logo: {
    width: "80vw",
    height: "auto",
    "@media (min-device-width: 1224px)": {
      width: "60vw",
    },
  },
  header: {
    color: config.colors.white,
    marginBottom: "5vh",
  },
  projectContainer: {
    width: "100vw",
    height: "auto",
    "@media (min-device-width: 1224px)": {},
  },
  projectListContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
  },
  projectList: {
    width: "50vw",
    marginBottom: "5vh",
    position: "relative",
  },
  projectImage: {
    width: "90vw",
    height: "auto",

    marginBottom: "5vh",
    borderRadius: "5px",
    "@media (min-device-width: 1224px)": {
      width: "45vw",
      marginRight: "5vw",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  projectHeader: {
    color: config.colors.blue,
    textDecoration: "underline",
    cursor: "pointer",
  },
  projectText: {
    color: config.colors.white,
  },
  projectTechContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: "10vh",
    width: "100vw",
    "@media (min-device-width: 1224px)": {
      width: "25vw",
    },
  },
  projectTech: {
    color: config.colors.gray,
  },
  projectInfo: {
    color: config.colors.white,
    width: "90vw",
    "@media (min-device-width: 1224px)": {
      width: "25vw",
    },
  },
  researchListContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
  },
  researchProjectContainer: {
    width: "85vw",
    height: "25vh",
    margin: "2vh 2vw 2vh 2vw",
    backgroundColor: config.colors.lightNavy,
    "@media (min-device-width: 1224px)": {
      margin: "0 2vw 0 2vw",
      width: "20vw",
      height: "25vh",
    },
  },
}));

export default useStyles;
