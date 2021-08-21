import React, { useState, useEffect } from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Products, Cart, Checkout, Details, Homepage} from "./components";
import { commerce } from "./lib/commerce";
import { purple } from "@material-ui/core/colors";
const theme = createTheme({
  palette: {
    primary: purple,
  },
});
const App = () => {
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

 

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity, variantInfo) => {
    const item = await commerce.cart.add(productId, quantity, variantInfo);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <CssBaseline />
          <Navbar
            totalItems={cart.total_items}
          />
          <Switch>
          <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/details/:id">
              <Details
                onAddToCart={handleAddToCart}
                handleUpdateCartQty
              />
            </Route>
            <Route exact path="/cart">
              <Cart
                cart={cart}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                onEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route path="/checkout" exact>
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};


export default App;
