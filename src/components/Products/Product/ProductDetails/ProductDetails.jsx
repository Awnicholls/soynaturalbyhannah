import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  CircularProgress,
  Container,
  Button,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { connect } from "react-redux";
import useStyles from "./styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const ProductDetails = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [scents, setScents] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [variant1Info, setVariant1Info] = useState("");
  const [variant2Info, setVariant2Info] = useState("");
  const [variantGroup, setVariantGroup] = useState([]);
  const [variant1GroupId, setVariant1GroupId] = useState("");
  const [variant2GroupId, setVariant2GroupId] = useState("");
  const [hasError1, setHasError1] = useState(false);
  const [hasError2, setHasError2] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    document.title = `${product.name}`;
  });

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

  if (product === undefined) return "Loading";

  const handleScent = (e) => {
    setVariant1Info(e.currentTarget.getAttribute("data-value"));
  };

  const handleSize = (e) => {
    setVariant2Info(e.currentTarget.getAttribute("data-value"));
  };

  const handleAddToCart = () => {
    setHasError1(false);
    setHasError2(false);

    if (variant1Info === "") {
      setHasError1(true);
    }
    if (variant2Info === "") {
      setHasError2(true);
    }

    const variantObject = {
      [variant1GroupId]: variant1Info,
      [variant2GroupId]: variant2Info,
    };
    if (variant1Info && variant2Info) {
      onAddToCart(product.id, 1, variantObject);
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  if (isLoading) {
    return (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );
  }

  const renderDetails = () => (
    <>
      <main className={classes.content}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
          />
          <CardContent className={classes.cardContent}>
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
            </div>
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.cardDescription}
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
                  error={hasError1}
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
              </FormControl>
              <FormControl required className={classes.formControl}>
                <InputLabel htmlFor="size">{variantGroup[1].name}</InputLabel>
                <Select
                  displayEmpty
                  className={classes.select}
                  onChange={handleSize}
                  value={variant2Info}
                  name="size"
                  error={hasError2}
                >
                  {sizes.map((size) => {
                    return (
                      <MenuItem
                        key={size.key}
                        name={size.text}
                        value={size.value}
                      >
                        {size.text} ({size.price})
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <CardActions disableSpacing className={classes.cardActions}>
              <Button
                variant="contained"
                className={classes.button}
                color="secondary"
                component={Link}
                to={"/products"}
              >
                Back to Products
              </Button>
              <div className={classes.grow} />

              <Button
                color="primary"
                variant="contained"
                startIcon={<AddShoppingCart />}
                onClick={handleAddToCart}
                aria-label="Add to Cart"
                className={classes.button}
              >
                Add to Checkout
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Added to Cart"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </main>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar} />
      {renderDetails()}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(ProductDetails);
