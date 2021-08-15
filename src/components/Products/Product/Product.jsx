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
  CircularProgress
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [scents, setScents] = useState([]);
  const [sizes, setSizes]= useState([]);
  const [variant1Info, setVariant1Info]= useState('');
  const [variant2Info, setVariant2Info]= useState('');
  const [variant1Group, setVariant1Group]= useState('');
  const [variant2Group, setVariant2Group]= useState('');


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
  setSizes(finalSizeArray);

}, [])

useEffect(() => {
  let finalVariantObject = product.variant_groups.map(variant_group =>
    {
      let variantGroups = {}
      variantGroups.id = variant_group.id
      return variantGroups
  
  
    })
    setVariant1Group(finalVariantObject[0].id)
    setVariant2Group(finalVariantObject[1].id)


  setLoading(false)
  }, [])

  useEffect(()=> {
    if (!isLoading){
      setVariant2Info(sizes[0].value)
      setVariant1Info(scents[0].value)
    }
  }, [])

const handleScent = e => {
  console.log(e.currentTarget.getAttribute('data-value'))
  console.log(e.currentTarget.getAttribute('name'))

  setVariant1Info(e.currentTarget.getAttribute('data-value'))
}

const handleSize = e => {
  console.log(e.currentTarget.getAttribute('data-value'))
  console.log(e.currentTarget.getAttribute('name'))



  setVariant2Info(e.currentTarget.getAttribute('data-value'))
 }





  const handleAddToCart = () => {

    const variantObject = {
        [variant1Group]: variant1Info,
        [variant2Group]: variant2Info
      }

  onAddToCart(product.id, 1, variantObject);
}


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

if (isLoading){
  return  ( <CircularProgress/> )
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
<FormControl className={classes.formControl}>
        <InputLabel htmlFor="scent">Scent</InputLabel>
        <Select className={classes.select}
        displayEmpty
        onChange={handleScent}
        value={variant1Info}
        name='scent'
         >
{scents.map(scent => {
  return (
    <MenuItem key={scent.key} name={scent.text} value={scent.value}>
      {scent.text}
    </MenuItem>
  );
})}          
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="size">Sizes</InputLabel>
        <Select
        displayEmpty
        className={classes.select}
        onChange={handleSize}
        value={variant2Info}
        name='size'
          >
{sizes.map(size => {
  return (
    <MenuItem key={size.key} name={size.text} value={size.value}>
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
