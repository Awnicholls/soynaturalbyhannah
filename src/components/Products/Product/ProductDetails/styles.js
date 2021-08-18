import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    },
  root: {
    display: 'flex',
  
  },
  media: {
    height: 260,
    width: 260,
  },
  formControl:{
margin: theme.spacing(1),
width: 'auto',
  },
  //   select: {
  // height: 10,
  // }

}));
