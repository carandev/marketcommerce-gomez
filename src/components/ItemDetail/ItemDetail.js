import React, {useState} from 'react';
import styled from './itemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";

const ItemDetail = ({item}) => {
  let [addToCart, setAddToCart] = useState(1)
  let [showCount, setShowCount] = useState(true)

  const onAdd = number => {
    setAddToCart(number)
    setShowCount(lastValue => !lastValue)
  }


  return (
    <main className={styled.item_detail__main}>
      <img src={item.img} alt="Imagen del producto"/>
      <div className={styled.details}>
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
        <div>
          <h2>$ {item.price}</h2>
          {showCount ?
            <ItemCount stock={item.stock} onAdd={onAdd}/>: <>
            <span>Añadidos {addToCart} producto(s) al carrito</span>
            <Link to="/cart">
            <button>terminar mi compra</button>
            </Link>
            </>
          }
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
