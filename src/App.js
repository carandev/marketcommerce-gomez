import React from 'react';
import CartProvider from "./context/CartContext"
import Router from "./routes/Router";

const App = () => {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Market Commerce | <span id="name">Carlos Gomez</span>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <>
      <CartProvider>
        <Router />
      </CartProvider>
    </>
>>>>>>> order
  );
};

export default App;


