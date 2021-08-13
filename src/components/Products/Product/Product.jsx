import React, { useEffect, useState} from "react";
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
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const [scents, setScents] = useState([]);
  const [sizes, setSizes]= useState([]);
  const [variantInfo, setVariantInfo]= useState();
 console.log(product)

 


useEffect(() => {
  let finalScentArray = product.variant_groups[0].options.map(option => {
    let scentInfo ={}
    scentInfo.key = option.name
    scentInfo.text = option.name
    scentInfo.value= option.id
    return scentInfo
  })
  setScents(finalScentArray)
}, [])


useEffect(() => {
  let finalSizeArray = product.variant_groups[1].options.map(option => {
    let sizeInfo ={}
    sizeInfo.key = option.name
    sizeInfo.text = option.name
    sizeInfo.value=option.id
    sizeInfo.price = option.price.formatted_with_symbol
      return sizeInfo
  })
  setSizes(finalSizeArray)
}, [])

const handleSize = (e, {value}) => {
  setVariantInfo({[product.variant_groups[1].id]: value})
}
const handleScent = (e, {value}) => {
  setVariantInfo({[product.variant_groups[0].id]: value})
}

// const handleChange = (event) => {
//   setScent(event.target.value);
// };


  const handleAddToCart = () => onAddToCart(product.id, 1, variantInfo);


  // const handleVariantInfo = e => {

  //   const variantId = e.target.id
  //   const variantOption = e.target.value

  //   if(!e.target.classList.contains('active')) {
  //     setVariantInfo({[variantId] : variantOption})
  //   }
  //   if (e.target.classList.contains('active')) {
  //     setVariantInfo(null)
  //   }
  //   e.target.classList.toggle('active')
  // }



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
<FormControl className={classes.formControl}>
        <InputLabel htmlFor="scent">Scent</InputLabel>
        <Select className={classes.select}
        autoWidth = {true}
          value={scents.text}
          onChange={handleScent}
         >
{scents.map(scent => {
  return (
    <MenuItem key={scent.key} value={scent.value}>
      {scent.text}
    </MenuItem>
  );
})}          
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="size">Sizes</InputLabel>
        <Select
        className={classes.select}
          value={sizes.text}
          onChange={handleSize}
         >
{sizes.map(size => {
  return (
    <MenuItem key={size.key} value={size.value}>
      {size.text}  ({size.price})
    </MenuItem>
  );
})}          
        </Select>
      </FormControl>
</div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
