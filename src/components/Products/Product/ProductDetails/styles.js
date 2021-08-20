import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    width: "max-content",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  media: {
    height: "100%",
    width: 260,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 260,
    },
  },
  cardContent: {
    flexDirection: "column",
  },
  cardDescription: {
    width: 500,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },  grow: {
    flexGrow: 1,
  },
  formControl: {
    marginBottom: theme.spacing(1),
    width: "55%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
  cardActions: {
    justifyContent: "flex-start",
    
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  //   select: {
  // height: 10,
  // }
}));
