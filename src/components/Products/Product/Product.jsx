import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  CircularProgress,
  
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {

  console.log(product);

  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [scents, setScents] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [variant1Info, setVariant1Info] = useState("");
  const [variant2Info, setVariant2Info] = useState("");
  const [variantGroup, setVariantGroup] = useState([]);
  const [variant1GroupId, setVariant1GroupId] = useState("");
  const [variant2GroupId, setVariant2GroupId] = useState("");
const [hasError1, setHasError1] = useState(true)
const [hasError2, setHasError2] = useState(true)  
useEffect(() => {
    let finalScentArray = product.variant_groups[0].options.map((option) => {
      let scentInfo = {};
      scentInfo.key = option.name;
      scentInfo.text = option.name;
      scentInfo.value = option.id;

      return scentInfo;
    });
    setScents(finalScentArray);
  }, [product]);

  useEffect(() => {
    let finalSizeArray = product.variant_groups[1].options.map((option) => {
      let sizeInfo = {};
      sizeInfo.key = option.name;
      sizeInfo.text = option.name;
      sizeInfo.value = option.id;
      sizeInfo.price = option.price.formatted_with_symbol;
      return sizeInfo;
    });
    setSizes(finalSizeArray);
  }, [product]);

  useEffect(() => {
    let finalVariantObject = product.variant_groups.map((variant_group) => {
      let variantGroups = {};
      variantGroups.id = variant_group.id;
      variantGroups.name = variant_group.name;
      return variantGroups;
    });
    setVariant1GroupId(finalVariantObject[0].id);
    setVariant2GroupId(finalVariantObject[1].id);
    setVariantGroup(finalVariantObject);

    setLoading(false);
  }, [product]);

  useEffect(() => {
    if (!isLoading) {
      setVariant2Info(sizes[0].value);
      setVariant1Info(scents[0].value);
    }
  }, [sizes, scents, isLoading]);

  const handleScent = (e) => {
    console.log(e.currentTarget.getAttribute("data-value"));
    console.log(e.currentTarget.getAttribute("name"));

    setVariant1Info(e.currentTarget.getAttribute("data-value"));
   setHasError1(false);
  };

  const handleSize = (e) => {
    console.log(e.currentTarget.getAttribute("data-value"));
    console.log(e.currentTarget.getAttribute("name"));

    setVariant2Info(e.currentTarget.getAttribute("data-value"));
    setHasError2(false);

  };

  const handleAddToCart = () => {
    const variantObject = {
      [variant1GroupId]: variant1Info,
      [variant2GroupId]: variant2Info,
    };
    if (hasError1 || hasError2){
      return
    } else {
    onAddToCart(product.id, 1, variantObject);
  }};

  if (isLoading) {
   return ( <div className={classes.spinner}>
      <CircularProgress />
    </div>)
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {/* {product.price.formatted} */}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
        <div>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="scent">{variantGroup[0].name}</InputLabel>
            <Select
              className={classes.select}
              displayEmpty
              onChange={handleScent}
              value={variant1Info}
              name="scent"
            >
              {scents.map((scent) => {
                return (
                  <MenuItem
                    key={scent.key}
                    name={scent.text}
                    value={scent.value}
                  >
                    {scent.text}
                  </MenuItem>
                );
              })}
            </Select>
           {/* {hasError1 && <FormHelperText>This is required!</FormHelperText>} */}
          </FormControl>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="size">{variantGroup[1].name}</InputLabel>
            <Select
              displayEmpty
              className={classes.select}
              onChange={handleSize}
              value={variant2Info}
              name="size"
            >
              {sizes.map((size) => {
                return (
                  <MenuItem key={size.key} name={size.text} value={size.value}>
                    {size.text} ({size.price})
                  </MenuItem>
                );
              })}
            </Select>
            {/* {hasError2 && <FormHelperText>This is required!</FormHelperText>} */}
          </FormControl>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton 
        aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
