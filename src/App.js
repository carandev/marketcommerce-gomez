import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


