import React from "react";
import useStyles from "./styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import {

  Container,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import itemData from "./itemData";

const Carousel = () => {
  const classes = useStyles();

  return (
    <Container className={classes.content} component="section" id="image list">
      <CssBaseline />
      <div gutterBottom className={classes.header}>
        <Typography component="h1" variant="h5">
          Product Preview
        </Typography>
      </div>
      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={{xs: 1, md: 6}}>
          {itemData.map((item) => (
            <ImageListItem className={classes.image} component={Link} to={'/products'} key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </Container>
  );
};

export default Carousel;
