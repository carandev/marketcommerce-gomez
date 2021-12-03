import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>}/>
          <Route path={'/category/:categoryId'} element={<ItemListContainer/>}/>
          <Route path={'/item/:itemId'} element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


