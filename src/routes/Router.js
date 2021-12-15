import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path={'/cart'} element={<Cart/>}/>
       <Route path={'/category/:categoryId'} element={<Home/>}/>
       <Route path={'/item/:itemId'} element={<ItemDetailContainer/>}/>
     </Routes>
    </BrowserRouter>
  );
};

export default Router;
