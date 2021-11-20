import React from 'react';

const ItemListContainer = ({greeting}) => {
  const styles = {
    color: "#0d0630",
    textAlign: "center"
  }
  return <h1 style={styles}>{greeting}</h1>
};

export default ItemListContainer;

