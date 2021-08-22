import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
  },
  title:{      padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,},
  paper:{
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 250, 
      
      },

}));
