import React from "react";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import logo from "../../../../assets/logo.png";
const TitleCard = () => {
  const classes = useStyles();
  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="Soy Natural by Hannah logo" />

        <Typography component="h1" variant="h5">
          Soy Natural By Hannah
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/products"}
          className={classes.button}
        >
          Products
        </Button>
      </div>
    </Container>
  );
};

export default TitleCard;
