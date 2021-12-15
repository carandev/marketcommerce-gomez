import React from 'react';
import CartProvider from "./context/CartContext"
import Router from "./routes/Router";

const App = () => {
  return (
    <>
      <CartProvider>
        <Router />
      </CartProvider>
    </>
  );
};

export default App;


