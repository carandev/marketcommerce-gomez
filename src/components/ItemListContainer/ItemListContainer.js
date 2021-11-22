import React from 'react';
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
  const styles = {
    color: "#0d0630",
    textAlign: "center"
  }

  let numberItem = 0
  let stock = 20

  const onAdd = number => {
    stock >= number ? numberItem = number : numberItem = 0
  }

  return (
    <main>
      <h1 style={styles}>{greeting}</h1>
      <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
    </main>
  )
};

export default ItemListContainer;
