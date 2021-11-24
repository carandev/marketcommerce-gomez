import React from 'react';
import './Item.css'

const Item = ({item}) => {
  return (
    <div className={'card'}>
      <h2>{item.name}</h2>
      <img src={item.img} alt={'test'} />
      <p>$ {item.price}</p>
      <a href="/item" className="button">Ver producto</a>
      <p>Stock disponible: {item.stock}</p>
    </div>
  );
};

export default Item;
