import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import {Link, useParams} from "react-router-dom";

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
    <>
      <Link to={'/'}>
        Atrás
      </Link>
      <ItemDetail item={item}/>
    </>
  );
};

export default ItemDetailContainer;
