import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';
import { connect } from 'react-redux'

const Products = ({products}) => {
  const classes = useStyles();
  console.log(products);
  useEffect(() => {
    document.title = `Soy Natural by Hannah`;
  });


  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="flex-start" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}  />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps)(Products);

