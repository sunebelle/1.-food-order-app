import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
import Cart from "../src/components/Cart/Cart";
import React, { useState } from "react";
import CartProvider from "./UseContext/CartContext";
import { Switch, Route, Redirect } from "react-router-dom";
import Checkout from "./components/Cart/Checkout";
function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const handleCartShow = () => {
    setIsCartShown(true);
  };
  const handleCartHide = () => {
    setIsCartShown(false);
  };

  return (
    <Switch>
      <CartProvider>
        <Route path="/" exact>
          {isCartShown && <Cart onCloseCart={handleCartHide} />}
          <Header onShowCart={handleCartShow} />
          <main>
            <Meals />
          </main>
        </Route>
        <Route path="/checkout">
          <Header onShowCart={handleCartShow} />
          <main>
            <Checkout />
          </main>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </CartProvider>
    </Switch>
  );
}

export default App;
