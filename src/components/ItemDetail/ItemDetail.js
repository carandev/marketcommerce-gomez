import React, {useState} from 'react';
import styled from './itemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import formatNumberToCurrency from "../../changeCurrency"

const ItemDetail = ({item, id}) => {
  let [showCount, setShowCount] = useState(true)
  let [number, setNumber] = useState(1)

  return (
    <section className={styled.item_detail__main}>
      <img 
        src={item.img}
        alt="Imagen del producto"
        className={styled.img}
      />
      <div className={styled.details}>
        <h1 className={styled.itemName}>{item.name}</h1>
        <p className={styled.description}>{item.description}</p>
        <div>
          <h2>{formatNumberToCurrency(item.price)}</h2>
          {showCount ?
            <ItemCount
              item={item}
              id={id}
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
