import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  hero:{
      height: '80vh',
      [theme.breakpoints.down("md")]: {
        height: '50vh',
      },
  },
}));
