import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import useStyles from "./styles";

const PrimaryAppBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

        {['Products', 'About'].map((text, index) => (
          <ListItem button  component={Link}
          to={`/${text}`} key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <>
      <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">     
           <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer  anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
    {list('left')}
  </Drawer>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={classes.title}
              color="inherit"
            >
              Soy Natural by Hannah
            </Typography>{" "}
            {location.pathname !== "/cart" && (
              <div className={classes.button}>
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
                >
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      {/* <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>    
        <Typography component={Link} to="/products" variant="h6" className={classes.title} color="inherit">
        Products
          </Typography>    
            <div className={classes.grow} />

          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Soy Natural by Hannah
          </Typography>
          <div className={classes.grow} />
          {location.pathname !== '/cart' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar> */}
    </>
  );
};

export default PrimaryAppBar;
