import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    },
  root: {
    display: 'flex',
    width: 'max-content',
    [theme.breakpoints.down('md')]:{
flexDirection: 'column',
    }
  
  },
  media: {
    height: '100%',
    width: 260,
    [theme.breakpoints.down('md')]:{
      width: '100%',
      height: 260,
          }
  },
  cardContent: {
    flexDirection: 'column',
  },

  formControl:{
marginBottom: theme.spacing(1),
width: '51%',
[theme.breakpoints.down('md')]:{
  width: '95%',
      }

  },
  //   select: {
  // height: 10,
  // }

}));
