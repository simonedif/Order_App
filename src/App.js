import React, { useState } from "react";

//ContexProvider
import CartProvider from "../src/store/CartProvider";

import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import ProductType from './components/Layout/ProductType'

function App() {
  //Managing The Cart Component Dynamic with use State
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
  <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
    <main>
      <ProductType />
      <Meals />
    </main>
  </CartProvider>
  );
};

export default App;
