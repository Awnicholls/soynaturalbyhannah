import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();
  const [price, setPrice] = useState();

  useEffect(() => {
    let priceObject = product.variant_groups[1].options.map((option) => {
      let priceInfo = [option.price.formatted];
      return priceInfo;
    });

    const priceArray = priceObject.flat(1);
    const priceSortedArray = priceArray.map((i) => Number(i));
    priceSortedArray.sort(compareDecimals);
    const lowestPrice = priceSortedArray[0].toFixed(2);
    
    function compareDecimals(a, b) {
        if (a === b) 
             return 0;
    
        return a < b ? -1 : 1;
    }
    setPrice(lowestPrice);
  }, [product]);

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/details/${product.id}`}>
        <CardMedia
          component="img"
          alt={product.name}
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={`/details/${product.id}`}
          aria-label="Show product details"
          size="small"
          color="primary"
        >
          View Details
        </Button>
        <div className={classes.grow} />
        <Button className={classes.price} size="small" color="secondary">
          £{price}+
        </Button>
      </CardActions>
    </Card>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(Product);
