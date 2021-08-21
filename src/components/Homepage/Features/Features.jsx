import React from "react";
import useStyles from "./styles";
import handmadeIcon from "../../../assets/handmade.png";
import ukIcon from "../../../assets/ukicon.png"
import giftBox from "../../../assets/giftbox.png"
import {
  Paper,
  Grid,
  Container,
  CssBaseline,
  Typography,
  
} from "@material-ui/core";
import { EcoTwoTone } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
const Features = () => {
  const classes = useStyles();

  return (
    <Container className={classes.content} component="section" id="features">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          About Us{" "}
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6} m={3}>
          <Paper className={classes.paper}>
            <Typography component="h2" variant="h6">
              <EcoTwoTone style={{color: green[500], fontSize: 60}}/>
            </Typography>
            <Typography component="h3" variant="h7">
              Eco-Friendly
            </Typography>
            <Typography component="h3" variant="h8">
What we do:
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} m={3}>
          <Paper className={classes.paper}>
          <img src={handmadeIcon} alt="handmade icon" width='50px'/>
            <Typography component="h2" variant="h6">
              Handmade
            </Typography>
            <Typography component="h3" variant="h7">
              Personally made
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} m={3}>
          <Paper className={classes.paper}>
          <img src={ukIcon} alt="uk icon" width='50px'/>
            <Typography component="h2" variant="h6">
Made In the U.K.            </Typography>
            <Typography component="h3" variant="h7">
Locally sourced and made            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} m={3}>
          <Paper className={classes.paper}>
          <img src={giftBox} alt="gift box icon" width='50px'/>
            <Typography component="h2" variant="h6">
              Gift options avaiable
            </Typography>
            <Typography component="h3" variant="h7">
Orders can be customised            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
