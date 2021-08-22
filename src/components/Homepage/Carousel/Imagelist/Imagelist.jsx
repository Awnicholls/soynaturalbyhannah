import React from 'react'
import {
    Card,
    CardActionArea,
    CardMedia,
    
  } from "@material-ui/core";
  import { Link } from 'react-router-dom';
  import useStyles from "./styles";


  const Imagelist = (item) => {
      console.log(item.item.img)
    const classes = useStyles();
    return (<Card className={classes.root}>
        <CardActionArea component={Link} to={'/products'}>
        <CardMedia
        component='img'
        alt={item.item.title}
          className={classes.media}
          image={item.item.img}
          title={item.item.title}
        />
        </CardActionArea>
        </Card>
    )
}

export default Imagelist
