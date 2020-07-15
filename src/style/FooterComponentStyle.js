import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    width: "100vw",
    position: "fixed",
    bottom: 0,
    zIndex: 10,
    marginBottom: '2vh'
  },
}));

export default useStyles;
