import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
        textDecoration: 'none',

  },

  list: {
    width: 250,
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
  // title: {
  //   flexGrow: 1,
  //   alignItems: 'center',
  //   display: 'flex',
  //   textDecoration: 'none',
  // },

  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'none',
  //   },
  // },
  // grow: {
  //   flexGrow: 1,
  // },
}));
