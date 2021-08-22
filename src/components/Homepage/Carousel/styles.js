import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        },
      root: {
        flexGrow: 1,
      },
// }));
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
  header: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },

//   imageList: {
//     flexWrap: "nowrap",
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: "translateZ(0)",

//   },
//   image:{
//     // [theme.breakpoints.down("sm")]: {
//     //     width: '100%',
//     //   },
//   },

//   title: {
//     color: theme.palette.secondary.light,
//   },

//   titleBar: {
//     background:
//       "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)",
//   },
}));
