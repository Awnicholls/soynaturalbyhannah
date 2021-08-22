import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
        textDecoration: 'none',

  },
  list: {
    width: 250,
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
height: '100%',
  },
  paperAnchorLeft: {
  },

  fullList: {
    width: 'auto',
  },

  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

}));
