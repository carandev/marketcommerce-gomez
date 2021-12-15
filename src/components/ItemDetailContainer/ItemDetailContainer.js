import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import {Link, useParams} from "react-router-dom";
import styled from "./ItemDetailContainer.module.css";



const ItemDetailContainer = () => {

  let { itemId } = useParams()

  let [item, setItem] = useState({})

  useEffect(() => {
    setTimeout(() => {
      fetch('/items.json')
        .then(res => res.json())
        .then(res => res.forEach(itemIn => itemIn.id === parseInt(itemId) && setItem(itemIn)))
    }, 2000)
  }, [itemId])

  return (
    <main className={styled.main}>
      <Link to={'/'}>
        Volver al listado
      </Link>
      <ItemDetail item={item}/>
    </main>
  );
};

export default ItemDetailContainer;
