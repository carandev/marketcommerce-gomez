import React from 'react';
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
  const styles = {
    color: "#0d0630",
    textAlign: "center"
  }
  return (
    <>
      <h1 style={styles}>{greeting}</h1>
      <ItemCount/>
    </>
  )
};

export default ItemListContainer;

