import React , { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  
} from "@material-ui/core";

import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();
  const [price, setPrice] = useState();

  useEffect(() => {
    let priceObject = product.variant_groups[1].options.map((option) => {
      let priceInfo = {};
      priceInfo.price = option.price.formatted;
      return priceInfo;
    });
    
    console.log(priceObject)
  
    // const finalPriceArray = Object.values(priceObject)
    // finalPriceArray.sort();
    // setPrice(finalPriceArray[0]);
    console.log(finalPriceArray)
  }, [product]);

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={e => {console.log(product)}}>
      <CardMedia
      component='img'
      alt={product.name}
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      </CardActionArea>
      <CardActions>
        <Button price='small' color='primary'>
          View Details: from 

        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
