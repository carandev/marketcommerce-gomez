import React from 'react';
import './Item.css'
import {Link} from "react-router-dom";

const Item = ({item}) => {
  return (
    <div className={'card'}>
      <h2>{item.name}</h2>
      <img src={item.img} alt={'test'} />
      <p>$ {item.price}</p>
      <Link to={`/item/${item.id}`} className="button">Ver producto</Link>
      <p>Stock disponible: {item.stock}</p>
    </div>
  );
};

export default Item;
