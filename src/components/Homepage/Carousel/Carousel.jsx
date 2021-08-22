import React from "react";
import useStyles from "./styles";

import {
Grid,
  Container,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import Imagelist from "./Imagelist/Imagelist";


import itemData from "./itemData";

const Carousel = () => {
  const classes = useStyles();

  return (
    <Container className={classes.content} component="section" id="image list">
      <CssBaseline />
      <div className={classes.header}>
        <Typography component="h1" variant="h5">
          Product Preview
        </Typography>
        <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="flex-start" spacing={4}>
        {itemData.map((item) => (
          <Grid key={item.img} item xs={12} sm={6} md={4} lg={3}>
            <Imagelist item={item}  />
          </Grid>
        ))}
      </Grid>
    </main>
      </div>
    </Container>
  );
};

export default Carousel;
