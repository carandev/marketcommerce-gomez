import React from 'react';
import {Link} from "react-router-dom";

import styled  from "./item.module.css";


const Item = ({item, cart}) => {
  return (
    <div className={styled.card}>
      {cart && <span>Cantidad: {item.quantity}</span>}
      <h2>{item.name}</h2>
      <img src={item.img} alt={'test'} />
      <p>$ {item.price}</p>
      <Link to={`/item/${item.id}`} className={styled.button}>Ver producto</Link>
      <p>Stock disponible: {item.stock}</p>
    </div>
  );
};

export default Item;
