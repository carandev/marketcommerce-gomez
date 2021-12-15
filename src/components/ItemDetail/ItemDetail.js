import React, {useContext, useState} from 'react';
import styled from './itemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext";

const ItemDetail = ({item}) => {
  let [showCount, setShowCount] = useState(true)
  let [number, setNumber] = useState(1)

  return (
    <section className={styled.item_detail__main}>
      <img src={item.img} alt="Imagen del producto"/>
      <div className={styled.details}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <div>
          <h2>$ {item.price}</h2>
          {showCount ?
            <ItemCount
              item={item}
              stock={item.stock}
              setShowCount={setShowCount}
              number={number}
              setNumber={setNumber}
            />: <div className={styled.notCounter}>
            <span>Añadidos {number} producto(s) al carrito</span>
            <Link
              className={styled.button}
              to="/cart"
            >Terminar mi compra</Link>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
