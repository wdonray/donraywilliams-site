import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, AppBar, Link } from "@material-ui/core";
import config from "../data/config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: config.colors.red,
    flexGrow: 1,
  },
  links: {
      marginRight: 20,
      color: config.colors.white
  }
}));

export const ColorLink = withStyles((theme) => ({
    root: {
        color: config.colors.white,
        "&:hover": {
            color: config.colors.red,
          },
    }
}))(Link)

export const ColorAppBar = withStyles((theme) => ({
    root: {
        backgroundColor: config.colors.black
    }
}))(AppBar)

export const ColorButton = withStyles((theme) => ({
  root: {
    color: config.colors.white,
    borderColor: config.colors.orange,
    "&:hover": {
      backgroundColor: config.colors.gray,
      color: config.colors.red
    },
  },
}))(Button);

export default useStyles;