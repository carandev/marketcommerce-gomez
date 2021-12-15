import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import styled  from "./item.module.css";
import {FaTrash} from "react-icons/all";
import {CartContext} from "../../context/CartContext";


const Item = ({item, cart}) => {

  const { onDelete } = useContext(CartContext)

  return (
    <div className={styled.card}>
      {cart && <div className={styled.containerDelete}>
        <span>Cantidad: {item.quantity}</span>
        <button
          className={styled.button}
          onClick={() => onDelete(item.id)}
        >
          <FaTrash color="#223" size={15}/>
        </button>
      </div>
      }
      <h2>{item.name}</h2>
      <img src={item.img} alt={'test'} />
      <p>$ {item.price}</p>
      <Link to={`/item/${item.id}`} className={styled.button}>Ver producto</Link>
      <p>Stock disponible: {item.stock}</p>
    </div>
  );
};

export default Item;
