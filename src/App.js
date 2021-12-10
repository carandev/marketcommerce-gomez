import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartContext"
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path={'/'} element={<ItemListContainer/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'/category/:categoryId'} element={<ItemListContainer/>}/>
            <Route path={'/item/:itemId'} element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;


