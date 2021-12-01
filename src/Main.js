import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const Main = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Me está gustando React"}/>

    </>
  );
};

export default Main;
