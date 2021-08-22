import React from "react";
import useStyles from "./styles";
import handmadeIcon from "../../../assets/handmade.png";
import ukIcon from "../../../assets/ukicon.png";
import giftBox from "../../../assets/giftbox.png";
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
      <div  className={classes.title}>
        <Typography component="h1" variant="h5">
          About Us{" "}
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
            <Typography component="h2" variant="h6">
              <EcoTwoTone style={{ color: green[500], fontSize: 50 }} />
            </Typography>
            <Typography  component="h2" variant="subtitle1">
              Eco-Friendly
            </Typography>
            <Typography component="h3" variant="body1">
              All our packaging is entirely eco-friendly<br/>  and designed to protect
              the planet
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
            <img src={handmadeIcon} alt="handmade icon" width="50px" />
            <Typography component="h2" variant="subtitle1">
              Handmade
            </Typography>
            <Typography component="h3" variant="body1">
All our candles and melts are hand-poured <br/> using 100% natural soy wax, <br/>  which is vegan and biodegradable            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
            <img src={ukIcon} alt="uk icon" width="50px" />
            <Typography component="h2" variant="subtitle1">
              Made In the U.K.
            </Typography>
            <Typography component="h3" variant="body1">
All of our products and materials <br/> are locally sourced and packed locally            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
            <img src={giftBox} alt="gift box icon" width="50px" />
            <Typography component="h2" variant="subtitle1">
              Gift options avaiable
            </Typography>
            <Typography component="h3" variant="body1">
Orders are packed on demand, <br/> so gift options and notes are avaible! <br/> Just add them to the note section on checkout            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
