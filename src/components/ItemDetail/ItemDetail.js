import React from 'react';

const ItemDetail = ({item}) => {
  return (
    <>
      <img src={item.img} alt="Imagen del producto"/>
      <div className="description">
        <h1>{item.name}</h1>
      </div>
    </>
  );
};

export default ItemDetail;
